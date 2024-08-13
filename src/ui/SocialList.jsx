import { FaXTwitter } from "react-icons/fa6";
import { IoLogoFacebook, IoLogoInstagram } from "react-icons/io";

export default function SocialList() {
  return (
    <ul className="flex gap-4 items-center justify-center text-4xl">
      <li>
        <IoLogoInstagram />
      </li>
      <li>
        <IoLogoFacebook />
      </li>
      <li>
        <FaXTwitter />
      </li>
    </ul>
  );
}
