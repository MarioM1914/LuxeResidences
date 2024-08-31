import { FaSearch } from "react-icons/fa";
import { Link, useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { useEffect, useState, useRef } from "react";
import { MenuOutlined, Close } from "@mui/icons-material";

export default function Header() {
  const { currentUser } = useSelector((state) => state.user);
  const [searchTerm, setSearchTerm] = useState("");
  const navigate = useNavigate();
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const sidebarRef = useRef();

  const showSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  //const isActive = (path) => location.pathname === path;

  // outside sidebar click and scroll disabling
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (sidebarRef.current && !sidebarRef.current.contains(event.target)) {
        setIsSidebarOpen(false);
      }
    };

    if (isSidebarOpen) {
      // Disable scrolling when sidebar is open
      document.body.style.overflow = "hidden";

      // Add event listener for outside clicks
      document.addEventListener("mousedown", handleClickOutside);
    } else {
      // Restore scrolling when sidebar is closed
      document.body.style.overflow = "auto";

      document.removeEventListener("mousedown", handleClickOutside);
    }

    // Cleanup function to remove event listener and restore scroll
    return () => {
      document.body.style.overflow = "auto";
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isSidebarOpen]);

  const handleSubmit = (e) => {
    e.preventDefault();
    const urlParams = new URLSearchParams(window.location.search);
    urlParams.set("searchTerm", searchTerm);
    const searchQuery = urlParams.toString();
    navigate(`/search?${searchQuery}`);
  };

  useEffect(() => {
    const urlParams = new URLSearchParams(location.search);
    const searchTermFromUrl = urlParams.get("searchTerm");
    if (searchTermFromUrl) {
      setSearchTerm(searchTermFromUrl);
    }
  }, [location.search]);

  return (
    <header className="bg-slate-200 shadow-md">
      <div className="flex justify-between items-center max-w-6xl mx-auto p-3">
        <Link to="/">
          <h1 className="font-bold text-sm sm:text-xl flex flex-wrap">
            <span className="text-slate-500">Luxe</span>
            <span className="text-slate-700">Residences</span>
          </h1>
        </Link>
        <form
          onSubmit={handleSubmit}
          className="bg-slate-100 p-3 rounded-lg flex items-center"
        >
          <input
            type="text"
            placeholder="Search..."
            className="bg-transparent focus:outline-none w-24 sm:w-64"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
          <button>
            <FaSearch className="text-slate-700" />
          </button>
        </form>
        <div className="sm:hidden flex items-center p-2 absolute right-4 fixed-position">
          <MenuOutlined
            onClick={showSidebar}
            className="cursor-pointer text-slate-700 scale-150"
          />
        </div>
        <ul className="flex gap-4">
          <li>
            <Link
              to="/"
              className="hidden sm:inline text-slate-700 hover:underline"
            >
              Home
            </Link>
          </li>
          <li>
            <Link
              to="/search"
              className="hidden sm:inline text-slate-700 hover:underline"
            >
              Listings
            </Link>
          </li>
          <li>
            <Link
              to="/about"
              className="hidden sm:inline text-slate-700 hover:underline"
            >
              About
            </Link>
          </li>
          <li>
            <Link to="/profile" className="hidden sm:inline whitespace-nowrap">
              {currentUser ? (
                <img
                  className="rounded-full h-7 w-7 object-cover"
                  src={currentUser.avatar}
                  alt="profile"
                />
              ) : (
                <span className="text-slate-700 hover:underline">Sign In</span>
              )}
            </Link>
          </li>
        </ul>
        <ul
          ref={sidebarRef}
          className={
            isSidebarOpen
              ? "sm:hidden absolute inset-0 h-screen left-1/3 flex flex-col items-center justify-start gap-10 p-8 bg-black/40 backdrop-blur-lg text-slate-700 z-10"
              : "hidden"
          }
        >
          <Close
            onClick={showSidebar}
            className="cursor-pointer scale-150 text-white mb-8"
          />

          {currentUser && (
            <li>
              <Link to="/profile" onClick={showSidebar}>
                <img
                  className="rounded-full h-16 w-16 object-cover"
                  src={currentUser.avatar}
                  alt="profile"
                />
              </Link>
            </li>
          )}

          <li>
            <Link
              to="/"
              className="text-white hover:underline text-2xl"
              onClick={showSidebar}
            >
              Home
            </Link>
          </li>
          <li>
            <Link
              to="/search"
              className="text-white hover:underline text-2xl"
              onClick={showSidebar}
            >
              Listings
            </Link>
          </li>
          <li>
            <Link
              to="/about"
              className="text-white hover:underline text-2xl"
              onClick={showSidebar}
            >
              About
            </Link>
          </li>
          {!currentUser && (
            <li>
              <Link to="/profile" onClick={showSidebar}>
                <span className="text-white hover:underline text-2xl">
                  Sign In
                </span>
              </Link>
            </li>
          )}
        </ul>
      </div>
    </header>
  );
}