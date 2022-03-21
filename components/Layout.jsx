import Head from 'next/head';
import Nav from './Nav';
import Footer from './Footer';
import layoutStyles from '../styles/Layout.module.css';

const Layout = ({ children, title }) => {

  return (
    <>
      <Head>
        <title>{ title }</title>
        <meta name="description" content="ANAN Digital est une agence de création de site web." />
        <meta name="keywords" content="agence web, création de site internet, SEO, refonte site web, marketing Digital" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className={layoutStyles.wrapper}>
        <Nav />
        <main>{ children }</main>
        <Footer />
      </div>

    </>
  )
}

export default Layout