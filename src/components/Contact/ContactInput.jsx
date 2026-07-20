export default function ContactInput({
    label,
    type = "text",
    placeholder,
    textarea = false,
  }) {
    return (
      <div className="flex flex-col">
        <label className="mb-1 text-[13px] font-normal text-[#222]">
          {label}
        </label>
  
        {textarea ? (
          <textarea
            placeholder={placeholder}
            rows={3}
            className="
              w-full
              resize-none
              border-b
              border-[#cfcfcf]
              bg-transparent
              pb-2
              text-[15px]
              sm:text-[16px]
              text-[#222]
              outline-none
              transition-all
              duration-300
              focus:border-[#3d64d8]
              placeholder:text-[#9b9b9b]
            "
          />
        ) : (
          <input
            type={type}
            placeholder={placeholder}
            className="
              w-full
              h-[48px]
              border-b
              border-[#cfcfcf]
              bg-transparent
              text-[13px]
              sm:text-[13px]
              text-[#222]
              outline-none
              transition-all
              duration-300
              focus:border-[#3d64d8]
              placeholder:text-[#9b9b9b]
            "
          />
        )}
      </div>
    );
  }