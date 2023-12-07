import Link from 'next/link';
import { FaFacebook, FaTwitter, FaInstagram } from 'react-icons/fa';

const Footer = () => {
  return (
    <div className='bg-blue-500'>
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="py-8 grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-16">
          {/* Column 1 - Logo and Motto */}
          <div className="flex flex-col items-center">
            <Link href="/">
              <p className="text-white font-bold text-lg mb-2">CarInsure</p>
            </Link>
            <p className="text-gray-300">Your Road Safety Partner</p>
          </div>

          {/* Column 2 - Follow Us */}
          <div className="flex flex-col items-center space-y-2">
            <p className="text-white font-bold text-lg">Follow Us</p>
            <div className="flex space-x-4">
              <Link href="#" className="text-gray-300 hover:text-white transition duration-300">
                <FaFacebook size={24} />
              </Link>
              <Link href="#" className="text-gray-300 hover:text-white transition duration-300">
                <FaTwitter size={24} />
              </Link>
              <Link href="#" className="text-gray-300 hover:text-white transition duration-300">
                <FaInstagram size={24} />
              </Link>
            </div>
          </div>

          {/* Column 3 - Contact Information */}
          <div className="flex flex-col items-center">
            <p className="text-white font-bold text-lg">Contact</p>
            <ul className="text-gray-300 space-y-2 text-center">
              <li>456 Safety Blvd, City</li>
              <li>Email: info@carinsure.com</li>
              <li>Phone: 987-654-3210</li>
            </ul>
          </div>
        </div>

        {/* Copyright */}
        <div className="text-center py-4 text-gray-300">
          &copy; {new Date().getFullYear()} CarInsure. Drive Safe, Drive Insured.
        </div>
      </div>
    </div>
  );
};

export default Footer;
