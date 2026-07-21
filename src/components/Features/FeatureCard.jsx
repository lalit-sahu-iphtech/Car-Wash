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
          className={`w-[72px] h-[72px] mx-auto mb-6 ${
            visible
              ? `icon-show delay-${delay}`
              : "icon-hidden"
          }`}
        />
  
        <h3 className="text-white text-[20px]  leading-1.2">
          {title}
        </h3>
  
        <p className="text-white mt-4 leading-8 mx-auto max-w-[220px] ">
          {desc}
        </p>
      </div>
    );
  }