import {
  FaFacebookF,
  FaInstagram,
  FaTwitter,
} from "react-icons/fa";

export default function SocialIcons() {
  return (
    <div
    className="
    flex
    gap-5
    mt-8
    "
    >

      <a
        href="#"
        className="
          text-white
          transition-all
          duration-300
          hover:text-white/70
          hover:-translate-y-1
        "
      >
        <FaFacebookF size={18} />
      </a>

      <a
        href="#"
        className="
          text-white
          transition-all
          duration-300
          hover:text-white/70
          hover:-translate-y-1
        "
      >
        <FaTwitter size={18} />
      </a>

      <a
        href="#"
        className="
          text-white
          transition-all
          duration-300
          hover:text-white/70
          hover:-translate-y-1
        "
      >
        <FaInstagram size={18} />
      </a>

    </div>
  );
}