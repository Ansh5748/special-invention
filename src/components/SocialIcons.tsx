import {
  FaGithub,
  FaInstagram,
  FaLinkedinIn,
  FaXTwitter,
} from "react-icons/fa6";
import "./styles/SocialIcons.css";
import { TbNotes } from "react-icons/tb";
import HoverLinks from "./HoverLinks";
import MagneticIcon from "./MagneticIcon";

const socialLinks = [
  { href: "https://github.com/Ansh5748", icon: <FaGithub /> },
  { href: "https://www.linkedin.com/in/divyansh-gupta-0605a3258", icon: <FaLinkedinIn /> },
  { href: "https://x.com/Divyans95107075", icon: <FaXTwitter /> },
  { href: "https://www.instagram.com/d_ansh28/", icon: <FaInstagram /> },
];

const SocialIcons = () => {
  return (
    <div className="icons-section">
      <div className="social-icons" data-cursor="icons">
        {socialLinks.map(({ href, icon }) => (
          <MagneticIcon key={href} href={href}>
            {icon}
          </MagneticIcon>
        ))}
      </div>
      <a className="resume-button" href="#">
        <HoverLinks text="RESUME" />
        <span>
          <TbNotes />
        </span>
      </a>
    </div>
  );
};

export default SocialIcons;
