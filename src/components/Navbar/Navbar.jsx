import Logo from "./Logo";
import NavLinks from "./NavLinks";
import MobileMenu from "./MobileMenu";

export default function Navbar() {
  return (
    <header className="w-full bg-white border-b border-gray-200">
      <div className="max-w-[1185px] mx-auto min-h-24 px-2.5 min-[940px]:px-0 flex items-center justify-between ">
        <Logo />
        <NavLinks />
        <MobileMenu />
      </div>
    </header>
  );
}