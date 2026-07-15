import { useEffect, useRef, useState } from "react";
import { FaChevronDown } from "react-icons/fa";
import DropdownMenu from "./DropdownMenu";

export default function NavLinks() {
  const [open, setOpen] = useState(false);
  const dropdownRef = useRef(null);

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setOpen(false);
      }
    };

    document.addEventListener("click", handleClickOutside);

    return () => {
      document.removeEventListener("click", handleClickOutside);
    };
  }, []);

  return (
    <ul className="hidden lg:flex items-center h-full">
      {/* Home */}
      <li className="h-full">
        <a
          href="#"
          className="flex h-full items-center px-6 text-[18px] font-normal text-[#111111]"
        >
          <span className="border-b-2 border-transparent py-1 transition-all duration-200 hover:border-blue-600 hover:bg-gray-100 px-3">
            Home
          </span>
        </a>
      </li>

      {/* Pages */}
      <li ref={dropdownRef} className="relative h-full">
        <button
          onClick={() => setOpen(!open)}
          className="flex h-full items-center px-6 text-[18px] font-normal text-[#111111]"
        >
          <span
             className={`flex items-center gap-2 px-3 py-1 border-b-2 transition-all duration-200 ${
                open
                  ? "bg-[#eeeeee] border-[#4f7cff]"
                  : "border-transparent hover:bg-[#eeeeee] hover:border-[#4f7cff]"
              }`}
          >
            Pages
            <FaChevronDown
              size={12}
              className={`transition-transform duration-300 ${
                open ? "rotate-180" : ""
              }`}
            />
          </span>
        </button>

        {open && <DropdownMenu />}
      </li>

      {/* Contact */}
      <li className="h-full">
        <a
          href="#"
          className="flex h-full items-center px-6 text-[18px] font-normal text-[#111111]"
        >
          <span
            className="
  flex
  items-center
  gap-2
  px-3
  py-1
  border-b-2
  border-transparent
  transition-all
  duration-200
  hover:bg-[#eeeeee]
  hover:border-[#4f7cff]
"
          >
            Contact Us
          </span>
        </a>
      </li>
    </ul>
  );
}
