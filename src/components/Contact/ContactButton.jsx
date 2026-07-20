export default function ContactButton({ children }) {
    return (
      <button
        className="
          mt-8
          w-full
          h-[50px]
          bg-[#3d64d8]
          text-white
          font-bold
          text-[13px]
          uppercase
          rounded-xl
          transition-all
          duration-300
          hover:bg-[#9d9ea3]
         
          active:scale-95
        "
      >
        {children}
      </button>
    );
  }