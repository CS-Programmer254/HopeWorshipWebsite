
import { Link } from 'react-router-dom';
const Header = () => {
  return (
    <header className="flex flex-row justify-between items-center p-6 bg-white shadow-md w-full fixed z-50">
      <div className="flex items-center space-x-4">
        <Link to="/" className="text-2xl font-bold text-blue-600">HOPE WORSHIP CENTRE</Link>
        <nav className="space-x-4">
          <Link to="/home" className="text-gray-600 hover:text-gray-900">Home</Link>
          <Link to="/about" className="text-gray-600 hover:text-gray-900">About</Link>
          <Link to="/contact" className="text-gray-600 hover:text-gray-900">Contact</Link>
          <Link to="/locate" className="text-gray-600 hover:text-gray-900">Locate</Link>
          <Link to="/ministries" className="text-gray-600 hover:text-gray-900">Ministries</Link>
          <Link to="/give" className="text-gray-600 hover:text-gray-900">Give Offering</Link>
          <Link to="/bible" className="text-gray-600 hover:text-gray-900">Bible Study</Link>
        </nav>
      </div>
      <div className="flex items-center space-x-2 sm:flex-row">
        <Link to="/signin" className="text-gray-600 hover:text-gray-900">Sign in</Link>
        <button className="bg-blue-600 text-white py-2 px-2 rounded">Support Us Today</button>
      </div>
    </header>
  );
};

export default Header;
