import pool from '../config/db.js';
import axios from 'axios';
import { generateAccessToken } from '../services/mpesaTokenService.js';

// Function to initiate payment
export const initiateStkPush = async (req, res) => {
  try {
    const { firstName, lastName, telephone, offeringType, offeringAmount } = req.body;
    // Get the access token
    const accessToken = await generateAccessToken();
    console.log('Access Token:', accessToken);
    // Format timestamp to YYYYMMDDHHMMSS
    const now = new Date();
    const timestamp = now.getFullYear().toString() +
                   String(now.getMonth() + 1).padStart(2, '0') +
                   String(now.getDate()).padStart(2, '0') +
                   String(now.getHours()).padStart(2, '0') +
                   String(now.getMinutes()).padStart(2, '0') +
                   String(now.getSeconds()).padStart(2, '0');
    // Concatenate values with '+' and encode in Base64
    const password = Buffer.from(process.env.MPESA_PAYBILL+ process.env.MPESA_PASSKEY + timestamp).toString('base64');
    // Prepare the payload
    const payload = {
      BusinessShortCode: process.env.MPESA_PAYBILL,
      Password: password,
      Timestamp: timestamp,
      TransactionType: 'CustomerPayBillOnline',
      Amount: offeringAmount,
      PartyA: `254${telephone.substring(1)}`,
      PartyB: process.env.MPESA_PAYBILL,
      PhoneNumber: `254${telephone.substring(1)}`,
      CallBackURL: process.env.CALLBACK_URL,
      AccountReference: `${offeringType}_${telephone}_${Date.now()}`,
      TransactionDesc: `Contribution for ${offeringType}`,
    };
    // Log the payload
    console.log('Payload:', JSON.stringify(payload, null, 2));
    // Make M-Pesa API request
    const mpesaResponse = await axios.post(process.env.MPESA_API_URL, payload, {
      headers: {
        Authorization: `Bearer ${accessToken}`,
        'Content-Type': 'application/json',
      },
    });
    // Log the response
    console.log('M-Pesa Response:', mpesaResponse.data);
    // Check if payment was successfully initiated
    if (mpesaResponse.data.ResponseCode === '0') {
      await pool.query(
        'INSERT INTO payments (first_name, last_name, telephone, offering_type, offering_amount, transaction_status, transaction_id) VALUES (?, ?, ?, ?, ?, ?, ?)',
        [firstName, lastName, telephone, offeringType, offeringAmount, 'Pending', mpesaResponse.data.CheckoutRequestID]
      );
      res.json(mpesaResponse.data);
    } else {
      console.error('Error in payment initiation:', mpesaResponse.data);
      res.status(400).json({ message: 'Payment initiation failed', details: mpesaResponse.data });
    }
  } catch (error) {
    console.error('Error initiating payment:', error.response?.data || error.message);
    res.status(500).send('Server Error');
  }
};

// Function to handle the M-Pesa callback
export const handleMpesaCallback = async (req, res) => {
  try {
    const { Body } = req.body;
    const { stkCallback } = Body;
    const { CheckoutRequestID, ResultCode, CallbackMetadata } = stkCallback;

    let transactionStatus = 'Failed';

    if (ResultCode === 0) {
      transactionStatus = 'Completed';

      const callbackData = CallbackMetadata.Item.reduce((acc, item) => {
        acc[item.Name] = item.Value;
        return acc;
      }, {});

      console.log('Callback Data:', callbackData);

      await pool.query(
        'UPDATE payments SET transaction_status = ?, mpesa_receipt_number = ? WHERE transaction_id = ?',
        [transactionStatus, callbackData.MpesaReceiptNumber, CheckoutRequestID]
      );
    } else {
      console.error('M-Pesa Callback Error:', { CheckoutRequestID, ResultCode, ResultDesc: stkCallback.ResultDesc });
      await pool.query(
        'UPDATE payments SET transaction_status = ? WHERE transaction_id = ?',
        [transactionStatus, CheckoutRequestID]
      );
    }

    res.status(200).json({ ResultCode: 0, ResultDesc: 'Success' });
  } catch (error) {
    console.error('Error handling M-Pesa callback:', error.response?.data || error.message);
    res.status(500).json({ ResultCode: 1, ResultDesc: 'Server Error' });
  }
};
