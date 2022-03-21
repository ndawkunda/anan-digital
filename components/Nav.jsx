import { useState } from "react";
import { useRouter } from "next/router";
import Link from 'next/link';
import Image from 'next/image';
import { FaStream, FaTimes } from "react-icons/fa";
import navStyles from '../styles/Nav.module.css';

const Nav = () => {
  const navItems = [
    {
      label: 'Accueil',
      url: "/",
    },
    {
      label: 'À propos',
      url: "/a-propos",
    },
   {
      label: 'Contact',
      url: "/contact",
    },
  ];
  const navGenerator = (items) => {
    
  }
  const router = useRouter();
  const [open, setOpen] = useState(false);
  const handleOpenClick = () => setOpen(!open);

  return (
    <div className={ navStyles.navContainer }>
      <nav className={ navStyles.nav }>
        <div className={ navStyles.logoContainer }>
          <Link href='/'>
            <div className={ navStyles.logo }><span>ANAN</span> Digital</div> 
          </Link>
          <button onClick={ handleOpenClick }>
            {!open ? <FaStream className='text-xl' /> : <FaTimes className='text-xl' />}
          </button>
        </div>
        <div className={ navStyles.defaultMenu }>
          <ul className={ navStyles.navLinks }>
            {navItems.map((item, idx) => {
              return (
                <li key={idx} className={ router.asPath === item.url ? navStyles.active : '' }>
                  <Link href={ item.url }>{ item.label }</Link>
                </li>
              )
            })}
          </ul>
        </div>
        {
          open ? (
            <div className={ navStyles.mobileMenu }>
              <ul className={ navStyles.navLinks }>
              {navItems.map((item, idx) => {
                return (
                  <li key={idx} className={ router.asPath === item.url ? navStyles.active : '' }>
                    <Link href={ item.url }>{ item.label }</Link>
                  </li>
                )
              })}
              </ul>
            </div>
          ) : false
        }
      </nav>
    </div>
  )
}

export default Nav