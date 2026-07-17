export default function FooterBottom() {
    return (
      <div className="mt-16">
        {/* Dotted Line */}
        <div className="w-[84%] sm:w-full mx-auto border-t border-dashed border-white/30" />
  
        {/* Solid Line */}
        <div className="w-[84%] sm:w-[92%] mx-auto border-t border-white/40 mt-3" />
  
        {/* Copyright */}
        <div className="pt-7 text-center">
          <p className="text-white/80 text-[14px] sm:text-[15px] tracking-wide">
            © 2026 Car Wash. All Rights Reserved.
          </p>
        </div>
      </div>
    );
  }