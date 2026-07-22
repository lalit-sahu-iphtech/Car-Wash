import { useState } from "react";
import { FaChevronDown } from "react-icons/fa";
import DropdownMenu from "./DropdownMenu";
import { Link } from "react-router-dom";
export default function NavLinks() {
  const [open, setOpen] = useState(false);

  return (
    <ul className="hidden min-[940px]:flex items-center h-full ">
      {/* Home */}
      <li className="h-full -ml-[30px]">
        <Link
          to="/home"
          className=" h-full flex  items-center px-6 text-[16px] font-normal text-[#111111]"
        >
          <span   className="border-b-2 border-transparent py-[10px] px-[20px] transition-all duration-200 hover:bg-[#eeeeee] hover:border-[#4f7cff]"
>
            Home
          </span>
        </Link>
      </li>

      {/* Pages */}
      <li
        className="relative h-full -ml-[50px]"
        onMouseEnter={() => setOpen(true)}
        onMouseLeave={() => setOpen(false)}
      >
        <button className="  flex h-full items-center px-6 text-[16px] font-normal text-[#111111]">
          <span
            className={`flex items-center gap-2 px-3 py-1 border-b-2 transition-all duration-200 ${
              open
              ? "bg-[#eeeeee] border-[#4f7cff] py-[10px] px-[20px]"
                    : "border-transparent hover:bg-[#eeeeee] hover:border-[#4f7cff] py-[10px] px-[20px]"
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

        <DropdownMenu open={open} />
      </li>

      {/* Contact */}
      <li className="h-full -ml-[50px]">
        <Link 
          to="/contact"
          className=" flex h-full items-center px-6 text-[16px] font-normal text-[#111111]"
        >
          <span className="border-b-2 border-transparent py-[10px] px-[20px] transition-all duration-200 hover:bg-[#eeeeee] hover:border-[#4f7cff]">
            Contact Us
          </span>
        </Link>
      </li>
    </ul>
  );
}
