import { footerData } from "../content/FooterData"
import logo from '../assets/logo-tripit.svg';

const Footer: React.FC = () => {
  return (
    
    <div className="md:flex px-2 py-4 items-center justify-around">

      <div className="flex justify-center py-2">
        <img src={logo} alt="" />
      </div>
      <div className="md:flex justify-center gap-20 px-10">
        {footerData.footer.sections.map((section, index) => (
          <div key={index} className="footer-section">
            <h4 className="font-semibold justify-center">{section.title}</h4>
            <ul className="py-2">
              {section.links.map((link, linkIndex) => (
                <li key={linkIndex} className="pt-[5px]">
                  <a href={link.url}>{link.name}</a>
                </li>
              ))}
            </ul>
          </div>
        ))}

      </div>
    </div>

  )
}

export default Footer