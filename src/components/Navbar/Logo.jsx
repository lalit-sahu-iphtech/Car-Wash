import logo from "../../assets/images/logo.png";

export default function Logo() {
  return (
    <a href="/" className="flex items-center">
      <img
        src={logo}
        alt="Car Wash"
        className="w-[120px] h-auto object-contain"
      />
    </a>
  );
}