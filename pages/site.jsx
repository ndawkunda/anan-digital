import Link from "next/link";
import Layout from "../components/Layout";
import {
  FaUsers,
  FaHandsHelping,
  FaRss,
  FaHandHoldingUsd,
  FaShoppingBasket,
  FaUserCog,
  FaSearch,
  FaExpandArrowsAlt,
  FaBezierCurve,
  FaPlaneDeparture,
  FaFileMedicalAlt,
} from "react-icons/fa";
import layoutStyles from "../styles/Layout.module.css";
import siteStyles from "../styles/Site.module.css";

const Site = () => {
  return (
    <Layout title="ANAN Digital - Site Web">
      <div className={siteStyles.container}>
        <section id={siteStyles.hero} className={layoutStyles.hero}>
          <div className={layoutStyles.overlay}>
            <div className={layoutStyles.imgContainer}></div>
            <div className={layoutStyles.textContainer}>
              <h1>Confiez nous vos projets de site web !</h1>
              <p>
                Lorsque l&apos;on parle d&apos;un site internet, qu&apos;il
                s&apos;agisse d&apos;un Site Vitrine et d&apos;un Site
                eCommerce, le beau n&apos;est pas une option, c&apos;est même
                une base indispensable.
              </p>
              <button className={layoutStyles.btn}>
                <Link href="/contact">Nous contacter</Link>
              </button>
            </div>
          </div>
        </section>
        <section className={siteStyles.why}>
          <div className={layoutStyles.titleContainer}>
            <h1 className={layoutStyles.sectionTitle}>
              Pourquoi avoir un site internet ?
            </h1>
            <div className={layoutStyles.titleUnderline}></div>
          </div>
          <div className={siteStyles.cardsContainer}>
            <div className={siteStyles.cardContainer}>
              <div className={siteStyles.card}>
                <div className={siteStyles.icon}>
                  <FaUsers />
                </div>
                <h2 className={siteStyles.text}>
                  Vos clients sont en ligne et y passent beaucoup de temps
                </h2>
              </div>
            </div>
            <div className={siteStyles.cardContainer}>
              <div className={siteStyles.card}>
                <div className={siteStyles.icon}>
                  <FaHandsHelping />
                </div>
                <h2 className={siteStyles.text}>
                  Un site internet vous permet d&apos;inspirer confiance et de
                  maîtriser votre communication en ligne
                </h2>
              </div>
            </div>
            <div className={siteStyles.cardContainer}>
              <div className={siteStyles.card}>
                <div className={siteStyles.icon}>
                  <FaRss />
                </div>
                <h2 className={siteStyles.text}>
                  Ce qui est formidable avec le Web, c&apos;est que c&apos;est
                  accessible en tout temps et de partout
                </h2>
              </div>
            </div>
            <div className={siteStyles.cardContainer}>
              <div className={siteStyles.card}>
                <div className={siteStyles.icon}>
                  <FaHandHoldingUsd />
                </div>
                <h2 className={siteStyles.text}>
                  Votre site web est un investissement et non une dépense
                </h2>
              </div>
            </div>
            <div className={siteStyles.cardContainer}>
              <div className={siteStyles.card}>
                <div className={siteStyles.icon}>
                  <FaShoppingBasket />
                </div>
                <h2 className={siteStyles.text}>
                  C&apos;est bien connu, de plus en plus les acheteurs
                  magasinent sur le web
                </h2>
              </div>
            </div>
            <div className={siteStyles.cardContainer}>
              <div className={siteStyles.card}>
                <div className={siteStyles.icon}>
                  <FaUserCog />
                </div>
                <h2 className={siteStyles.text}>
                  Votre site Internet peut devenir un complément à votre service
                  à la clientèle
                </h2>
              </div>
            </div>
          </div>
          <button className={layoutStyles.btn}>
            <Link href="/contact">Je veux un site !</Link>
          </button>
        </section>
        <section className={siteStyles.how}>
          <div id={siteStyles.howTitle} className={layoutStyles.titleContainer}>
            <h1 className={layoutStyles.sectionTitle}>Ce que nous faisons</h1>
            <div className={layoutStyles.titleUnderline}></div>
          </div>
          <div className={siteStyles.rowsContainer}>
            {/* <!-- left --> */}
            <div className={siteStyles.rowLeft}>
              <div className={siteStyles.card}>
                <h3 className={siteStyles.title}>
                  <FaSearch /> Des sites SEO friendly
                </h3>
                <p className={siteStyles.text}>
                  Les sites internet que nous créons sont SEO Friendly,
                  c&apos;est-à-dire conformes aux standards du W3C et aux
                  recommandations Google. L&apos;équipe web assure une veille
                  technique active afin de maintenir ou faire évoluer les
                  solutions web de l&apos;agence. Cette veille permet de
                  proposer de nouvelles fonctionnalités web ou de remédier
                  rapidement aux changements de comportement des moteurs de
                  recherche.
                </p>
              </div>
              <div className={siteStyles.join}>
                <div className={siteStyles.lineContainer}>
                  <div className={siteStyles.line}></div>
                </div>
                <div className={siteStyles.circle}></div>
              </div>
            </div>
            {/* <!-- right --> */}
            <div className={siteStyles.rowRight}>
              <div className={siteStyles.join}>
                <div className={siteStyles.lineContainer}>
                  <div className={siteStyles.line}></div>
                </div>
                <div className={siteStyles.circle}></div>
              </div>
              <div className={siteStyles.card}>
                <h3 className={siteStyles.title}>
                  <FaExpandArrowsAlt /> Des sites responsives
                </h3>
                <p className={siteStyles.text}>
                  Le mobile représente aujourd&apos;hui plus de 50% des
                  consultations de sites internet. Le webdesign et le contenu
                  des sites internet que nous créons sont adaptés à la
                  consultation sur tous les support (ordinateur, mobile et
                  tablette). Nous développons nos sites en suivant le concept
                  Mobile First. Votre site web est développé pour parfaitement
                  se déformer et rester totalement opérationnel sur tous les
                  supports.
                </p>
              </div>
            </div>
            {/* <!-- left --> */}
            <div className={siteStyles.rowLeft}>
              <div className={siteStyles.card}>
                <h3 className={siteStyles.title}>
                  <FaBezierCurve /> Webdesign
                </h3>
                <p className={siteStyles.text}>
                  En fonction de votre identité de marque et de votre marché,
                  nous vous proposons une expérience utilisateur adaptée à votre
                  cible et à ses attentes.
                </p>
              </div>
              <div className={siteStyles.join}>
                <div className={siteStyles.lineContainer}>
                  <div className={siteStyles.line}></div>
                </div>
                <div className={siteStyles.circle}></div>
              </div>
            </div>
            {/* <!-- right --> */}
            <div className={siteStyles.rowRight}>
              <div className={siteStyles.join}>
                <div className={siteStyles.lineContainer}>
                  <div className={siteStyles.line}></div>
                </div>
                <div className={siteStyles.circle}></div>
              </div>
              <div className={siteStyles.card}>
                <h3 className={siteStyles.title}>
                  <FaPlaneDeparture /> Des sites évolutifs
                </h3>
                <p className={siteStyles.text}>
                  Les technologies que notre agence utilise pour la création de
                  votre site web nous permettent de disposer d&apos;une solution
                  qui va parfaitement évoluer avec votre activité.
                </p>
              </div>
            </div>
            {/* <!-- left --> */}
            <div className={siteStyles.rowLeft}>
              <div className={siteStyles.card}>
                <h3 className={siteStyles.title}>
                  <FaFileMedicalAlt /> Contenus améliorés
                </h3>
                <p className={siteStyles.text}>
                  Dotée des meilleurs outils d&apos;optimisation et formée aux
                  bonnes pratiques sur les contenus web, notre équipe optimise
                  les textes et médias de votre site internet pour améliorer
                  l&apos;expérience utilisateur et votre référencement naturel.
                </p>
              </div>
              <div className={siteStyles.join}>
                <div className={siteStyles.lineContainer}>
                  <div className={siteStyles.line}></div>
                </div>
                <div className={siteStyles.circle}></div>
              </div>
            </div>
          </div>
          <button className={layoutStyles.btn}>
            <Link href="/a-propos">En savoir plus</Link>
          </button>
        </section>
      </div>
    </Layout>
  );
};

export default Site;
