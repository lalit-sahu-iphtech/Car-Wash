import FooterBrand from "./FooterBrand";
import FooterLinks from "./FooterLinks";
import FooterServices from "./FooterServices";
import FooterBottom from "./FooterBottom";

export default function FooterSection() {
  return (
    <footer
      className="
        bg-[#3f66d6]
        pt-20
        lg:pt-24
        pb-8
      "
    >
      <div
        className="
          max-w-[1180px]
          mx-auto
          px-5
        "
      >
        {/* Top Footer */}

        <div
            className="
                max-w-[1140px]
                mx-auto

                grid
                grid-cols-1
                lg:grid-cols-[1.4fr_1fr_1fr]

                gap-14
                lg:gap-24

                px-8
                sm:px-10
                lg:px-5
            "
            >
          {/* Brand */}

          <FooterBrand />

          {/* Useful Links */}

          <FooterLinks />

          {/* Services */}

          <FooterServices />
        </div>

        {/* Bottom Footer */}

        <FooterBottom />
      </div>
    </footer>
  );
}