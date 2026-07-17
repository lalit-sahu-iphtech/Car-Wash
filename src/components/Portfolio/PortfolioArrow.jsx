import { ChevronLeft, ChevronRight } from "lucide-react";

export default function PortfolioArrow({
  direction,
  onClick,
  disabled,
}) {
  return (
    <button
      onClick={onClick}
      disabled={disabled}
      className={`
        absolute
        top-1/2
        -translate-y-1/2
        z-20
        w-14
        h-14
        rounded-full
        bg-white
        text-black
        flex
        items-center
        justify-center
        shadow-xl
        transition-all
        duration-300
        hover:bg-black
        hover:text-white
        hover:scale-110
        disabled:opacity-40
        disabled:cursor-not-allowed

        ${
          direction === "left"
            ? "-left-7 lg:-left-10"
            : "-right-7 lg:-right-10"
        }
      `}
    >
      {direction === "left" ? (
        <ChevronLeft size={28} strokeWidth={2.5} />
      ) : (
        <ChevronRight size={28} strokeWidth={2.5} />
      )}
    </button>
  );
}