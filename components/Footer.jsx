import Link from 'next/link';
import footerStyles from '../styles/Footer.module.css';

const Footer = () => {
  return (
    <footer className={ footerStyles.footerContainer }>
      <h1>ANAN Business Holding</h1>
      <p>Tous droits réservés</p>
      <ul className={ footerStyles.footerLinks }>
        <li>
          <Link href="/">Accueil</Link>
        </li>
        <li>
          <Link href="/contact">Contact</Link>
        </li>
        <li>
          <Link href="/a-propos">À propos</Link>
        </li>
      </ul>
    </footer>
  )
}

export default Footer