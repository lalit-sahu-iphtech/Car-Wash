export default function PortfolioCard({ image }) {
    return (
      <div
        className="
          overflow-hidden
          rounded-[24px]
          group
          cursor-pointer
          w-full
          h-[430px]
          sm:h-[400px]
          lg:h-[400px]
        "
      >
        <img
          src={image}
          alt=""
          className="
            w-full
            h-full
            object-cover
            transition-transform
            duration-500
           
          "
        />
      </div>
    );
  }