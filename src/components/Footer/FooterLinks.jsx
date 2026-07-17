import { usefulLinks } from "../../data/footerData";

export default function FooterLinks() {
  return (
    <div
    className="
     w-full
     max-w-[220px]
    "
    >
      {/* Heading */}

      <h3
        className="
          text-white
          text-[25px]
          font-normal
          mb-3
        "
      >
        Useful Links
      </h3>

      {/* Links */}

      <ul className="space-y-4">
        {usefulLinks.map((link, index) => (
          <li key={index}>
            <a
              href={link.href}
              className="
                text-white
                text-[12px]
                font-normal
                uppercase
                tracking-[1.8px]
                transition-all
                duration-300
                hover:text-white/70
                
              "
            >
              {link.title}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
}