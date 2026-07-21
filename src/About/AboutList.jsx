// AboutList.jsx
import { FaCheck } from "react-icons/fa";

export default function AboutList({ title, items }) {
  return (
    <div className="min-w-0">
      <h3 className="text-[17px] sm:text-[18px] font-bold mb-4 sm:mb-5 text-[#1a1a1a]">
        {title}
      </h3>

      <div className="space-y-2">
        {items.map((item) => (
          <div key={item} className="flex gap-1.5 items-start min-w-0">
            <FaCheck className="text-[#ff5b35] text-[10px] shrink-0 mt-[6px]" />
            <p className="text-[13px] sm:text-[14px] text-[#555] leading-5 tracking-tight break-words">
              {item}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}