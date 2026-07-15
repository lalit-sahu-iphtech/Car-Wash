import { FaCheck } from "react-icons/fa";

export default function AboutList({ title, items }) {
  return (
    <div>

      <h3 className="text-[36px] font-bold mb-8">

        {title}

      </h3>

      <div className="space-y-4">

        {items.map((item) => (

          <div
            key={item}
            className="flex gap-4 items-start"
          >

            <FaCheck className="text-[#ff6433] mt-1 text-sm" />

            <p className="text-[20px] leading-8 text-[#444]">

              {item}

            </p>

          </div>

        ))}

      </div>

    </div>
  );
}