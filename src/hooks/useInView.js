// import { useEffect, useRef, useState } from "react";

// export default function useInView(threshold = 0.55) {
//   const ref = useRef(null);

//   const [visible, setVisible] = useState(false);

//   useEffect(() => {
//     const observer = new IntersectionObserver(
//       ([entry]) => {
//         setVisible(entry.isIntersecting);
//       },
//       {
//         threshold,
//       }
//     );

//     if (ref.current) {
//       observer.observe(ref.current);
//     }

//     return () => observer.disconnect();
//   }, [threshold]);

//   return [ref, visible];
// }

import { useEffect, useRef, useState } from "react";

export default function useInView(
  threshold = 0.55,
  rootMargin = "0px 0px -180px 0px"
) {
  const ref = useRef(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setVisible(entry.isIntersecting);
      },
      {
        threshold,
        rootMargin,
      }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => observer.disconnect();
  }, [threshold, rootMargin]);

  return [ref, visible];
}

