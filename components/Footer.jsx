import Link from 'next/link';
import footerStyles from '../styles/Footer.module.css';

const Footer = () => {
  const navItems = [
    {
      label: "Accueil",
      url: "/",
    },
    {
      label: "Site web",
      url: "/site",
    },
    {
      label: "Design",
      url: "/design",
    },
    {
      label: "Impression",
      url: "/impression",
    },
    {
      label: "Formations",
      url: "/formations",
    },
    {
      label: "À propos",
      url: "/a-propos",
    },
    {
      label: "Contact",
      url: "/contact",
    },
  ];

  return (
    <footer className={footerStyles.footerContainer}>
      <h1>ANAN Business Holding</h1>
      <p>Tous droits réservés</p>
      <ul className={footerStyles.footerLinks}>
        {navItems.map((item, idx) => {
          return (
            <li key={idx}>
              <Link href={item.url}>{item.label}</Link>
            </li>
          );
        })}
      </ul>
    </footer>
  );
}

export default Footer