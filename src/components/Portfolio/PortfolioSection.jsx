import PortfolioHeading from "./PortfolioHeading";
import PortfolioSlider from "./PortfolioSlider";

export default function PortfolioSection() {
  return (
    <section className="bg-[#333333] py-20 lg:py-28 overflow-hidden">
    <div className="max-w-[1140px] mx-auto px-5">
      <PortfolioHeading />
      <PortfolioSlider />
    </div>
  </section>
  );
}