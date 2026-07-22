
export default function FeatureCard({
    title,
    desc,
    icon,
    visible,
    delay,
  }) {
    console.log(icon)
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
        visible ? `icon-show delay-${delay}` : "icon-hidden"
      } filter brightness-0`}
    />
      
  
        <h3 className="text-black text-[22px]  leading-1.2">
          {title}
        </h3>
  
        <p className="text-black mt-4 leading-8 mx-auto max-w-[220px] ">
          {desc}
        </p>
      </div>
    );
  }