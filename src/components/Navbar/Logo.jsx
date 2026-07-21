import logo from "../../assets/images/logo.png";

export default function Logo() {
  return (
    <a href="/" className="flex items-center shrink-0">
      <img
        src={logo}
        alt="Car Wash"
        width={535}
        height={308}
        className="ml-10 w-[114px] h-auto min-[940px]:w-[120px] object-contain"

      />
    </a>
  );
}