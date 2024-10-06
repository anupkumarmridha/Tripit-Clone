import logo from '../../assets/logo-tripit.svg'
import Dropdown from '../ui/Dropdown'

const Nav = () => {
  const languageOptions = [
    { label: 'English (UK)', href: '/en-uk' },
    { label: 'Français', href: '/fr' },
    { label: 'Deutsch', href: '/de' },
    { label: 'Español (Latinoamérica)', href: '/es-co' },
    { label: 'Español (España)', href: '/es' },
  ];
  return (
    <div className='flex'>
        <img src={logo} alt="" />
        <Dropdown defaultOption={'EN'} options={languageOptions} />
    </div>
  )
}

export default Nav