import { footerData } from "../../content/FooterData"
import logo from '../../assets/logo-tripit.svg';
import {
  FaFacebookF,
  FaYoutube,
  FaLinkedinIn,
  FaInstagram,
} from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";

const Footer: React.FC = () => {
  return (
    
    <div className="md:flex-row px-2 py-4 items-center justify-around box-border mt-56">
    
      <div className="md:flex justify-center">
        <img className="md:mb-40 md:pr-80 m-auto p-2 md:m-0 md:p-0" src={logo} alt="" />
        {footerData.footer.sections.map((section, index) => (
          <div key={index} className="footer-section px-10">
        <h4 className="font-semibold justify-center">{section.title}</h4>
        <ul className="py-2">
          {section.links.map((link, linkIndex) => (
            <li key={linkIndex} className="pt-[5px]">
          <a className="hover:text-primary" href={link.url}>{link.name}</a>
            </li>
          ))}
        </ul>
          </div>
        ))}
      </div>

      <div className="max-w-screen-xl mx-auto mt-4 px-8 md:px-0 pt-8 text-gray-600">
        {/* Social Icons */}
        <div className="flex justify-center mb-8 space-x-8 text-xl text-gray-600">
          <a
            href="#"
            className="hover:text-primary transition-all duration-300"
          >
            <FaInstagram />
          </a>
          <a
            href="#"
            className="hover:text-primary transition-all duration-300"
          >
            <FaFacebookF />
          </a>
          <a
            href="#"
            className="hover:text-primary transition-all duration-300"
          >
            <FaXTwitter />
          </a>
          <a
            href="#"
            className="hover:text-primary transition-all duration-300"
          >
            <FaLinkedinIn />
          </a>
          <a
            href="#"
            className="hover:text-primary transition-all duration-300"
          >
            <FaYoutube />
          </a>
        </div>

        {/* Footer Note */}
        <p className="text-center w-2/3 mx-auto text-xs tracking-wider lg:px-16 font-light text-[#6F6F6F]">
          &copy; 2006-2024, Concur Technologies, Inc. All rights reserved.
          TripIt&reg; and Concur&reg; are registered trademarks of Concur
          Technologies, Inc. Other trademarks held by their respective owners.
          <a href="#" className="ml-2 text-[#1170B5] hover:underline">
            Cookie Preferences
          </a>
        </p>
        </div>
    </div>

  )
}

export default Footer