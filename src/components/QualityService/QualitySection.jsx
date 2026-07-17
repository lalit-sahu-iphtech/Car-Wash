import QualityText from "./QualityText";
import QualityImageStack from "./QualityImageStack";
import QualityChecklist from "./QualityChecklist";

export default function QualitySection() {
  return (
    <section className="bg-white py-16 lg:py-24 overflow-hidden">
      <div className="max-w-[1140px] mx-auto px-5">
        <div className="grid lg:grid-cols-[340px_380px_1fr] gap-10 lg:gap-12 items-start">
          <QualityText />

          {/* Mobile: shared box so image + checklist align perfectly.
              Desktop: display:contents makes this wrapper disappear,
              restoring the 3-column grid. */}
          <div className="w-full max-w-[400px] mx-auto lg:contents">
            <QualityImageStack />
            <QualityChecklist />
          </div>
        </div>
      </div>
    </section>
  );
}