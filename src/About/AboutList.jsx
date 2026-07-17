import { FaCheck } from "react-icons/fa";

export default function AboutList({ title, items }) {
  return (
    <div>
      <h3 className="text-[17px] sm:text-[18px] font-bold mb-4 sm:mb-5 text-[#1a1a1a]">
        {title}
      </h3>

      <div className="space-y-3">
        {items.map((item) => (
          <div key={item} className="flex gap-3 items-start">
            <FaCheck className="text-[#ff5b35] mt-[5px] text-[11px] shrink-0" />
            <p className="text-[14px] sm:text-[15px] leading-6 text-[#555]">
              {item}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}