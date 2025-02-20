import { useState } from 'react';
export default function Events(){
  const [content, setContent] = useState('Ask For Prayer Request ,  Apply For Baptism ,  See Upcoming Events , View Event Notifications');

  const handleContentChange = (newContent) => {
    setContent(newContent);
  };

  return (
    <section className="py-4 bg-blue-600  shadow-md">
      <div className="flex flex-wrap justify-center space-x-6 my-5">
        <button
          onClick={() => handleContentChange('This is the content for Prayer Request.')}
          className="text-white hover:underline"
        >
          Prayer Request
        </button>
        <button
          onClick={() => handleContentChange('This is the content for Baptism.')}
          className="text-white hover:underline"
        >
          Baptism
        </button>
        <button
          onClick={() => handleContentChange('This is the content for Event Calendar.')}
          className="text-white hover:underline"
        >
          Event Calendar
        </button>
        <button
          onClick={() => handleContentChange('This is the content for Event Notification.')}
          className="text-white hover:underline"
        >
          Event Notification
        </button>
      </div>
  
      <div className="flex flex-wrap justify-center space-x-6 mt-3 pt-5 bg-white h-36  text-gray-600 shadow-md ">
          <div className="text-center mx-12">
      
            <h3 className="font-bold text-lg">{content}</h3>
           
          </div>
      </div>
    </section>
  );
}
