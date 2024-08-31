import {
  FaFacebookF,
  FaInstagram,
  FaLinkedin,
  FaPhoneAlt,
} from "react-icons/fa";
import { FaXTwitter, FaLocationDot } from "react-icons/fa6";
import EmailIcon from "@mui/icons-material/Email";
import { Link } from "react-router-dom";

export default function Footer() {
  const handleLinkClick = () => {
    window.scrollTo(0, 0);
  };

  return (
    <footer className="bg-slate-200 text-slate-700 py-8">
      <div className="max-w-6xl mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-6 md:mb-0">
            <Link to="/" onClick={handleLinkClick}>
              <h1 className="text-2xl text-slate-500 font-bold">
                Luxe<span className="text-slate-700">Residences</span>
              </h1>
            </Link>
          </div>

          <div className="flex space-x-6">
            <Link
              to="https://www.facebook.com"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:scale-125"
            >
              <FaFacebookF />
            </Link>
            <Link
              to="https://x.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:scale-125"
            >
              <FaXTwitter />
            </Link>
            <Link
              to="https://www.instagram.com"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:scale-125"
            >
              <FaInstagram />
            </Link>
            <Link
              to="https://www.linkedin.com/in/mario-mari%C4%87-472642254/"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:scale-125"
            >
              <FaLinkedin />
            </Link>
          </div>
        </div>

        <div className="mt-6 flex flex-col md:flex-row justify-between">
          <ul className="flex flex-col justify-center text-center md:text-left space-y-4 md:pr-52 mb-8">
            <li>
              <Link
                to="/"
                onClick={handleLinkClick}
                className="hover:underline"
              >
                Home
              </Link>
            </li>
            <li>
              <Link
                to="/search"
                onClick={handleLinkClick}
                className="hover:underline"
              >
                Listings
              </Link>
            </li>
            <li>
              <Link
                to="/about"
                onClick={handleLinkClick}
                className="hover:underline"
              >
                About
              </Link>
            </li>
          </ul>

          <ul className="flex flex-col justify-center space-y-4 text-center mb-8">
            <li>
              <Link to="#" className="hover:underline">
                Privacy & Policy
              </Link>
            </li>
            <li>
              <Link to="#" className="hover:underline">
                Terms & Conditions
              </Link>
            </li>
            <li>
              <Link to="#" className="hover:underline">
                FAQ
              </Link>
            </li>
          </ul>

          <div className="space-y-4 text-center md:text-end mb-8">
            <p className="flex flex-row justify-center md:justify-end">
              <FaLocationDot className="mt-1 mr-1" />
              <Link
                to="https://maps.app.goo.gl/WhBS8sxEuTLgs99b9"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:underline"
              >
                <span className="font-bold mx-1">:</span>
                Ulica Ruđera Boškovića 32, Split, Croatia
              </Link>
            </p>
            <p>
              <EmailIcon />
              <Link
                to="mailto:info@luxeresidences.com"
                className="hover:underline"
              >
                <span className="font-bold mx-1">:</span>info@luxeresidences.com
              </Link>
            </p>
            <p className="flex flex-row justify-center md:justify-end">
              <FaPhoneAlt className="mt-1 mr-1" />
              <Link to="tel:+385123456789" className="hover:underline">
                <span className="font-bold mx-1">:</span>+385 123 456 789
              </Link>
            </p>
          </div>
        </div>

        <div className="mt-6 text-center">
          <p>
            &copy; {new Date().getFullYear()} LuxeResidences. All rights
            reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
