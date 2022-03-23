import { Animated } from "react-animated-css";
import Head from 'next/head';
import Nav from './Nav';
import Footer from './Footer';
import layoutStyles from '../styles/Layout.module.css';

const Layout = ({ children, title }) => {

  return (
    <>
      <Head>
        <title>{ title }</title>
      </Head>

      <div className={layoutStyles.wrapper}>
        <Nav />
        <Animated animationIn='fadeIn' animationInDuration='2000' animationOut='fadeOut' isVisible={true}>
          <main>{ children }</main>
        </Animated>
        <Footer />
      </div>

    </>
  )
}

export default Layout