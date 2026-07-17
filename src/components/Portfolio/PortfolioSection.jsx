import PortfolioHeading from "./PortfolioHeading";
import PortfolioSlider from "./PortfolioSlider";

export default function PortfolioSection() {
  return (
    <section className="bg-[#111] py-20 md:py-28 overflow-hidden">
      <div className="max-w-[1200px] mx-auto px-5">
        <PortfolioHeading />
        <PortfolioSlider />
      </div>
    </section>
  );
}