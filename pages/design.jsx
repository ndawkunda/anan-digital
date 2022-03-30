import Link from "next/link";
import Layout from "../components/Layout";
import { FaDiceOne, FaDiceTwo, FaDiceThree, FaDiceFour } from "react-icons/fa";
import layoutStyles from "../styles/Layout.module.css";
import designStyles from "../styles/Design.module.css";

const Design = () => {
  return (
    <Layout title="ANAN Digital - Design">
      <div className={designStyles.container}>
        <section id={designStyles.hero} className={layoutStyles.hero}>
          <div className={layoutStyles.overlay}>
            <div className={layoutStyles.imgContainer}></div>
            <div className={layoutStyles.textContainer}>
              <h1>Confiez nous la création de votre identité visuelle !</h1>
              <p>
                La création graphique c&apos;est l&apos;ensemble des visuels
                créés pour donner une image à votre entreprise ou une marque.
                L&apos;identité visuelle est ce qui permettra à vos clients de
                vous identifier rapidement. Votre logotype, et sa charte
                graphique associée (couleur, typographie, slogan) doivent
                révéler votre image et vos valeurs.
              </p>
              <button className={layoutStyles.btn}>
                <Link href="/contact">Nous contacter</Link>
              </button>
            </div>
          </div>
        </section>
        <section className={designStyles.importance}>
          <div className={designStyles.left}>
            <h3>
              L&apos;importance d&apos;une identité visuelle qui reflète
              l&apos;image de votre entreprise ou marque.
            </h3>
            <button
              id={designStyles.importanceBtnDesktop}
              className={layoutStyles.btn}
            >
              <Link href="/contact">Je veux une identité !</Link>
            </button>
          </div>
          <div className={designStyles.right}>
            Le cerveau humain retient naturellement plus facilement un visuel
            qu&apos;un texte. Disposer d&apos;un logo, d&apos;une identité
            visuelle, facilite la mémorisation de votre marque par vos prospects
            et vos clients. Le marketing digital est aujourd&apos;hui
            incontournable pour le développement d&apos;un business et de son
            image de marque. Les internautes surfent sur les réseaux sociaux et
            sont exposés aux marques. Ne pas avoir d&apos;identité visuelle ou
            pire avoir une identité qui n&apos;est pas en adéquation avec
            l&apos;image que l&apos;on souhaite envoyer, peut participer à un
            manque à gagner en termes de développement commercial.
          </div>
          <button
            id={designStyles.importanceBtnMobile}
            className={layoutStyles.btn}
          >
            <Link href="/contact">Nous contacter</Link>
          </button>
        </section>
        <section className={designStyles.how}>
          <div
            id={designStyles.howTitle}
            className={layoutStyles.titleContainer}
          >
            <h1 className={layoutStyles.sectionTitle}>
              Nous vous accompagnons pour
            </h1>
            <div className={layoutStyles.titleUnderline}></div>
          </div>
          <div className={designStyles.rowsContainer}>
            {/* <!-- left --> */}
            <div className={designStyles.rowLeft}>
              <div className={designStyles.card}>
                <h3 className={designStyles.title}>
                  <i>
                    <FaDiceOne />
                  </i>
                  La création de logo et l&apos;élaboration de charte graphique
                </h3>
              </div>
              <div className={designStyles.join}>
                <div className={designStyles.lineContainer}>
                  <div className={designStyles.line}></div>
                </div>
                <div className={designStyles.circle}></div>
              </div>
            </div>
            {/* <!-- right --> */}
            <div className={designStyles.rowRight}>
              <div className={designStyles.join}>
                <div className={designStyles.lineContainer}>
                  <div className={designStyles.line}></div>
                </div>
                <div className={designStyles.circle}></div>
              </div>
              <div className={designStyles.card}>
                <h3 className={designStyles.title}>
                  <i>
                    <FaDiceTwo />
                  </i>
                  La refonte (évolution) de votre logo et identité visuelle,
                </h3>
              </div>
            </div>
            {/* <!-- left --> */}
            <div className={designStyles.rowLeft}>
              <div className={designStyles.card}>
                <h3 className={designStyles.title}>
                  <i>
                    <FaDiceThree />
                  </i>
                  L&apos;illustration d&apos;informations sous forme
                  d&apos;infographie,
                </h3>
              </div>
              <div className={designStyles.join}>
                <div className={designStyles.lineContainer}>
                  <div className={designStyles.line}></div>
                </div>
                <div className={designStyles.circle}></div>
              </div>
            </div>
            {/* <!-- right --> */}
            <div className={designStyles.rowRight}>
              <div className={designStyles.join}>
                <div className={designStyles.lineContainer}>
                  <div className={designStyles.line}></div>
                </div>
                <div className={designStyles.circle}></div>
              </div>
              <div className={designStyles.card}>
                <h3 className={designStyles.title}>
                  <i>
                    <FaDiceFour />
                  </i>
                  La création et la mise en page de contenus sur vos supports de
                  communication.
                </h3>
              </div>
            </div>
          </div>
          <button className={layoutStyles.btn}>
            <Link href="/contact">Commençons à créer</Link>
          </button>
        </section>
      </div>
    </Layout>
  );
};

export default Design;
