export default function ContactInput({
  label,
  type = "text",
  placeholder,
  textarea = false,
  name,
  value,
  onChange,
  error,
}) {
  return (
    <div className="flex flex-col">
      <label className="mb-1 text-[13px] text-[#222]">
        {label}
      </label>

      {textarea ? (
        <textarea
          name={name}
          value={value}
          onChange={onChange}
          placeholder={placeholder}
          rows={3}
          className="
            w-full
            resize-none
            border-b
            bg-transparent
            pb-2
            text-[15px]
            border-[#cfcfcf]
            outline-none
            transition-all
            duration-300
            focus:border-[#3d64d8]
          "
        />
      ) : (
        <input
          type={type}
          name={name}
          value={value}
          onChange={onChange}
          placeholder={placeholder}
          className="
            w-full
            h-[48px]
            border-b
            bg-transparent
            border-[#cfcfcf]
            text-[13px]
            outline-none
            transition-all
            duration-300
            focus:border-[#3d64d8]
          "
        />
      )}

      {error && (
        <span className="text-red-500 text-[12px] mt-1">
          {error}
        </span>
      )}
    </div>
  );
}