import Logo from "./Logo";
import NavLinks from "./NavLinks";
import MobileMenu from "./MobileMenu";

export default function Navbar() {
  return (
    <header className="w-full bg-white border-b border-gray-200">
      <nav className="max-w-[1140px] mx-auto h-20 flex items-center justify-between">
        <Logo />
        <NavLinks />
        <MobileMenu />
      </nav>
    </header>
  );
}