import { useState, useEffect } from "react";

function getDistance() {
  if (typeof window === "undefined") return 60;
  if (window.innerWidth >= 1024) return 400; // desktop - far away
  if (window.innerWidth >= 640) return 180;  // tablet
  return 40; // mobile - very safe, stays inside viewport
}

export default function useSlideDistance() {
  const [distance, setDistance] = useState(getDistance);

  useEffect(() => {
    // set correct value on mount (handles SSR/hydration mismatch too)
    setDistance(getDistance());

    const handleResize = () => setDistance(getDistance());
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return distance;
}