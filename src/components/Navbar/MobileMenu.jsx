import { useEffect, useState } from "react";
import { FaBars, FaTimes, FaChevronDown } from "react-icons/fa";
import { Link } from "react-router-dom";
import { pageLinks } from "../../data/navLinks";

export default function MobileMenu() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);

  // Prevent body scroll when menu is open
  useEffect(() => {
    if (menuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }

    return () => {
      document.body.style.overflow = "auto";
    };
  }, [menuOpen]);

  return (
    <>
      {/* Menu Button */}
      <button
        className="min-[940px]:hidden text-2xl mr-9 text-gray-600"
        onClick={() => setMenuOpen(true)}
      >
        <FaBars />
      </button>

      {/* Overlay */}
      <div
        className={`fixed inset-0 z-50 transition-all duration-300 ${
          menuOpen
            ? "visible opacity-100 bg-black/60"
            : "invisible opacity-0"
        }`}
        onClick={() => setMenuOpen(false)}
      >
        {/* Sidebar */}
        <div
          onClick={(e) => e.stopPropagation()}
          className={`absolute left-0 top-0 h-full w-[250px] bg-black text-white p-8 transition-transform duration-300 ease-in-out ${
            menuOpen ? "translate-x-0" : "-translate-x-full"
          }`}
        >
          {/* Close Button */}
          <div className="flex justify-end">
            <button onClick={() => setMenuOpen(false)}>
              <FaTimes className="text-3xl" />
            </button>
          </div>

          {/* Menu */}
          <ul className="mt-10 space-y-6 text-2xl">

            {/* Home */}
            <li>
              <Link
                to="/home"
                onClick={() => setMenuOpen(false)}
                className="block hover:text-gray-300 transition"
              >
                Home
              </Link>
            </li>

            {/* Pages */}
            <li>
              <button
                onClick={() => setDropdownOpen(!dropdownOpen)}
                className="flex items-center gap-3 hover:text-gray-300 transition"
              >
                Pages

                <FaChevronDown
                  className={`transition-transform duration-300 ${
                    dropdownOpen ? "rotate-180" : ""
                  }`}
                />
              </button>

              <div
                className={`overflow-hidden transition-all duration-300 ${
                  dropdownOpen ? "max-h-80 mt-4" : "max-h-0"
                }`}
              >
                <div className="border border-gray-500">
                  {pageLinks.map((item) => (
                    <Link
                      key={item.name}
                      to={item.link}
                      onClick={() => setMenuOpen(false)}
                      className="block px-5 py-3 text-xl hover:bg-white hover:text-black transition"
                    >
                      {item.name}
                    </Link>
                  ))}
                </div>
              </div>
            </li>

            {/* Contact */}
            <li>
              <Link
                to="/contact"
                onClick={() => setMenuOpen(false)}
                className="block hover:text-gray-300 transition"
              >
                Contact Us
              </Link>
            </li>

          </ul>
        </div>
      </div>
    </>
  );
}