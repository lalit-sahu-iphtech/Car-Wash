import bannerImg from "../../assets/contact/contact-banner.jpg";

export default function ContactBanner() {
  return (
    <section
    className="
    relative
    w-full
    h-[300px]
    sm:h-[360px]
    md:h-[400px]
    lg:h-[440px]
    xl:h-[470px]
    2xl:h-[500px]
    overflow-hidden
  "
    >
      {/* Background Image */}
      <img
        src={bannerImg}
        alt="Contact Banner"
        className="
          absolute
          inset-0
          w-full
          h-full
          object-cover
        "
      />

      {/* Overlay */}
      <div className="absolute inset-0 bg-black/40" />

      {/* Title */}
      <div
        className="
          absolute
          inset-0
          flex
          items-center
          justify-center
        "
      >
        <h1
          className="
            text-white
            font-bold
            text-[34px]
            md:text-[48px]
          "
        >
          Contact Us
        </h1>
      </div>
    </section>
  );
}