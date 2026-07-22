import { AnimatePresence, motion } from "framer-motion";
import { pageLinks } from "../../data/navLinks";
import { Link } from "react-router-dom";

export default function DropdownMenu({ open }) {
  return (
    <AnimatePresence>
      {open && (
        <motion.div
          initial={{
            opacity: 0,
            y: 12,
          }}
          animate={{
            opacity: 1,
            y: 0,
          }}
          exit={{
            opacity: 0,
            y: 12,
          }}
          transition={{
            duration: 0.2,
            ease: "easeOut",
          }}
          className="absolute left-0 top-full mt-[1px] w-[200px] bg-white border border-gray-200 shadow-xl overflow-hidden z-50"

        >
         {pageLinks.map((item) => (
  <Link
    key={item.name}
    to={item.link}
    className="block px-5 py-3 text-[18px] text-[#111111] transition-all duration-200 hover:bg-[#eeeeee]"
  >
    {item.name}
  </Link>
))}
        </motion.div>
      )}
    </AnimatePresence>
  );
}