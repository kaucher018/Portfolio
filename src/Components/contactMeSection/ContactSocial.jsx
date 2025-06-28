import SingleContactSocial from "./SingleContactSocial";
import { FaLinkedinIn } from "react-icons/fa";
import { FiGithub } from "react-icons/fi";
import { FaInstagram } from "react-icons/fa";

const ContactSocial = () => {
  return (
    <div className="flex gap-4">
      <SingleContactSocial link="https://www.linkedin.com/in/-kaucher-ahmed/" Icon={FaLinkedinIn} />
      <SingleContactSocial link="https://github.com/kaucher018" Icon={FiGithub} />
      <SingleContactSocial link="https://www.instagram.com/ka_uc_her/" Icon={FaInstagram} />
    </div>
  );
};

export default ContactSocial;
