
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebookSquare, faTwitterSquare, faInstagramSquare, faYoutubeSquare, faWhatsappSquare } from '@fortawesome/free-brands-svg-icons';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="py-6 bg-gray-900 text-white text-center">
      <div className="container mx-auto">
        <p>&copy; {currentYear} Hope Worship Centre. All rights reserved.</p>
        <div className="mt-4">
          <a href="/privacy-policy" className="text-gray-400 hover:text-white mx-2">Privacy Policy</a>
          <a href="/terms-of-service" className="text-gray-400 hover:text-white mx-2">Terms of Service</a>
          {/* Add more links as needed */}
        </div>
        <div className="mt-4">
          <a href="https://facebook.com/hopeworshipcentre" target="_blank" rel="noopener noreferrer" className="mx-2">
            <FontAwesomeIcon icon={faFacebookSquare} size="2x" className="text-gray-400 hover:text-white" />
          </a>
          <a href="https://twitter.com/hopeworshipcentre" target="_blank" rel="noopener noreferrer" className="mx-2">
            <FontAwesomeIcon icon={faTwitterSquare} size="2x" className="text-gray-400 hover:text-white" />
          </a>
          <a href="https://instagram.com/hopeworshipcentre" target="_blank" rel="noopener noreferrer" className="mx-2">
            <FontAwesomeIcon icon={faInstagramSquare} size="2x" className="text-gray-400 hover:text-white" />
          </a>
          <a href="https://youtube.com/hopeworshipcentre" target="_blank" rel="noopener noreferrer" className="mx-2">
            <FontAwesomeIcon icon={faYoutubeSquare} size="2x" className="text-gray-400 hover:text-white" />
          </a>
          <a href="https://wa.me/yourwhatsappnumber" target="_blank" rel="noopener noreferrer" className="mx-2">
            <FontAwesomeIcon icon={faWhatsappSquare} size="2x" className="text-gray-400 hover:text-white" />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
