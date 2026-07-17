import logo from "../../assets/logo/footer-logo.png";
import SocialIcons from "./SocialIcons";

export default function FooterBrand() {
  return (
    <div className="
    max-w-[320px]
    w-full
    ">

      {/* Logo */}

      <img
        src={logo}
        alt="Car Wash Logo"
        className="
        w-[110px]
        object-contain
        "
      />

      {/* Brand Name */}

      <h2
        className="
          mt-5
          text-white
          text-[25px]
          font-normal
          leading-none
        "
      >
        Car Wash
      </h2>

      {/* Description */}

      <p
        className="
          mt-5
          text-white
          text-[13px]
          leading-6
        "
      >
        Full service barber shops &amp; men's grooming in
        Manhattan, New York. Images from{" "}
        <span
          className="
            underline
            cursor-pointer
            transition-all
            duration-300
            hover:text-white/70
          "
        >
          Freepik
        </span>
      </p>

      {/* Social Icons */}

      <SocialIcons />

    </div>
  );
}