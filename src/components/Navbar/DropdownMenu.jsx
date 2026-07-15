import { pageLinks } from "../../data/navLinks";

export default function DropdownMenu() {
  return (
    <div className="absolute left-0 top-full mt-[1px] w-[190px] bg-white shadow-lg border border-gray-200 z-50">
      {pageLinks.map((item) => (
        <a
          key={item}
          href="#"
          className="block px-5 py-3 text-[18px] text-[#111111] hover:bg-[#eeeeee] transition"
        >
          {item}
        </a>
      ))}
    </div>
  );
}