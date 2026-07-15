export default function FeatureCard({
    title,
    desc,
    icon,
    visible,
    delay,
  }) {
    return (
      <div
        className={`text-center ${
          visible
            ? `feature-show delay-${delay}`
            : "feature-hidden"
        }`}
      >
        <img
          src={icon}
          alt={title}
          className={`w-[72px] h-[72px] mx-auto mb-8 ${
            visible
              ? `icon-show delay-${delay}`
              : "icon-hidden"
          }`}
        />
  
        <h3 className="text-white text-[22px] font-bold">
          {title}
        </h3>
  
        <p className="text-white mt-5 leading-8">
          {desc}
        </p>
      </div>
    );
  }