import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";

import { portfolioData } from "../../data/portfolioData";
import PortfolioCard from "./PortfolioCard";
import PortfolioArrow from "./PortfolioArrow";

export default function PortfolioSlider() {
  const [desktopIndex, setDesktopIndex] = useState(0);
  const [mobileIndex, setMobileIndex] = useState(0);

  const [direction, setDirection] = useState(1);
  const [firstLoad, setFirstLoad] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setFirstLoad(false);
    }, 800);

    return () => clearTimeout(timer);
  }, []);

  // ===================== DESKTOP =====================

  const nextDesktop = () => {
    setDirection(1);
    setFirstLoad(false);

    if (desktopIndex >= 2) {
      setDesktopIndex(0);
    } else {
      setDesktopIndex(desktopIndex + 2);
    }
  };

  const prevDesktop = () => {
    setDirection(-1);
    setFirstLoad(false);

    if (desktopIndex === 0) {
      setDesktopIndex(2);
    } else {
      setDesktopIndex(desktopIndex - 2);
    }
  };

  const desktopImages = portfolioData.slice(
    desktopIndex,
    desktopIndex + 4
  );

  // ===================== MOBILE =====================

  const nextMobile = () => {
    setDirection(1);
    setFirstLoad(false);

    setMobileIndex((prev) =>
      prev === portfolioData.length - 1 ? 0 : prev + 1
    );
  };

  const prevMobile = () => {
    setDirection(-1);
    setFirstLoad(false);

    setMobileIndex((prev) =>
      prev === 0 ? portfolioData.length - 1 : prev - 1
    );
  };

  return (
    <div className="relative mt-16">

      {/* ==================== DESKTOP ==================== */}

      <div className="hidden lg:block relative">

        <PortfolioArrow
          direction="left"
          onClick={prevDesktop}
        />

        <PortfolioArrow
          direction="right"
          onClick={nextDesktop}
        />

        <AnimatePresence mode="wait">

          <motion.div
            key={desktopIndex}
            initial={
              firstLoad
                ? {
                    opacity: 0,
                    y: 140,
                  }
                : {
                    opacity: 1,
                    x: direction > 0 ? 220 : -220,
                  }
            }
            animate={{
              opacity: 1,
              x: 0,
              y: 0,
            }}
            exit={{
              opacity: 1,
              x: direction > 0 ? -220 : 220,
            }}
            transition={{
              duration: 0.55,
              ease: "easeInOut",
            }}
            className="
              grid
              grid-cols-4
              gap-6
            "
          >
            {desktopImages.map((item) => (
              <PortfolioCard
                key={item.id}
                image={item.image}
              />
            ))}
          </motion.div>

        </AnimatePresence>

      </div>

      {/* ==================== MOBILE ==================== */}

      <div className="lg:hidden relative max-w-[340px] mx-auto">

        <PortfolioArrow
          direction="left"
          onClick={prevMobile}
        />

        <PortfolioArrow
          direction="right"
          onClick={nextMobile}
        />

        <AnimatePresence mode="wait">

          <motion.div
            key={mobileIndex}
            initial={
              firstLoad
                ? {
                    opacity: 0,
                    y: 140,
                  }
                : {
                    opacity: 1,
                    x: direction > 0 ? 120 : -120,
                  }
            }
            animate={{
              opacity: 1,
              x: 0,
              y: 0,
            }}
            exit={{
              opacity: 1,
              x: direction > 0 ? -120 : 120,
            }}
            transition={{
              duration: 0.45,
              ease: "easeInOut",
            }}
          >
            <PortfolioCard
              image={portfolioData[mobileIndex].image}
            />
          </motion.div>

        </AnimatePresence>

      </div>

    </div>
  );
}