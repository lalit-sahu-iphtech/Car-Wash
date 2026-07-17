import { servicesLinks } from "../../data/footerData";

export default function FooterServices() {
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
        Our Services
      </h3>

      {/* Services */}

      <ul className="space-y-4">
        {servicesLinks.map((service, index) => (
          <li key={index}>
            <a
              href={service.href}
              className="
                text-white
                text-[12px]
                font-normal
                uppercase
                tracking-[1.5px]
                transition-all
                duration-300
                hover:text-white/70
                
              "
            >
              {service.title}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
}