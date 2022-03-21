import Link from 'next/link';
import Layout from '../components/Layout';
import Image from 'next/image';
import { FaUsers, FaHandsHelping, FaRss, FaHandHoldingUsd, FaShoppingBasket, FaUserCog, FaSearch, FaExpandArrowsAlt, FaBezierCurve, FaPlaneDeparture, FaFileMedicalAlt } from "react-icons/fa";
import homeStyles from '../styles/Home.module.css';
import layoutStyles from '../styles/Layout.module.css';
import illustration1 from '../public/images/illustration-1.svg';
import illustration2 from '../public/images/illustration-3.svg';
import epharmed from '../public/images/epharmed.png';
import senpara from '../public/images/senpara.png';
import wila from '../public/images/wila.png';

const Home = () => {
  return (
    <Layout title="ANAN Digital - Accueil">
      <div className={ homeStyles.container }>
        <section className={ homeStyles.hero }>
          <div className={ homeStyles.imgContainer }>
            <Image src={ illustration1 } alt='illustration-1' height="360" width="360" />
          </div>
          <div className={ homeStyles.textContainer }>
            <h1>Confiez la création de votre site internet à une agence web</h1>
            <p>Lorsque l&apos;on parle d&apos;un site internet, qu&apos;il s&apos;agisse d&apos;un Site Vitrine et d&apos;un Site eCommerce, le beau n&apos;est pas une option, c&apos;est même une base indispensable.</p>
            <button className={ layoutStyles.btn }>
              <Link href='/contact'>Je veux un site web !</Link>
            </button>
          </div>
        </section>
        <section className={ homeStyles.why }>
          <div className={ layoutStyles.titleContainer }>
            <h1 className={ layoutStyles.sectionTitle }>Pourquoi avoir un site internet ?</h1>
          </div>
          <div className={ homeStyles.cardsContainer }>
            <div className={ homeStyles.cardContainer }>
              <div className={ homeStyles.card }>
                <div className={ homeStyles.icon }><FaUsers /></div>
                <h2 className={ homeStyles.text }>Vos clients sont en ligne et y passent beaucoup de temps</h2>
              </div>
            </div>
            <div className={ homeStyles.cardContainer }>
              <div className={ homeStyles.card }>
                <div className={ homeStyles.icon }><FaHandsHelping /></div>
                <h2 className={ homeStyles.text }>Un site internet vous permet d&apos;inspirer confiance et de maîtriser votre communication en ligne</h2>
              </div>
            </div>
            <div className={ homeStyles.cardContainer }>
              <div className={ homeStyles.card }>
                <div className={ homeStyles.icon }><FaRss /></div>
                <h2 className={ homeStyles.text }>Ce qui est formidable avec le Web, c&apos;est que c&apos;est accessible en tout temps et de partout</h2>
              </div>
            </div>
            <div className={ homeStyles.cardContainer }>
              <div className={ homeStyles.card }>
                <div className={ homeStyles.icon }><FaHandHoldingUsd /></div>
                <h2 className={ homeStyles.text }>Votre site web est un investissement et non une dépense</h2>
              </div>
            </div>
            <div className={ homeStyles.cardContainer }>
              <div className={ homeStyles.card }>
                <div className={ homeStyles.icon }><FaShoppingBasket /></div>
                <h2 className={ homeStyles.text }>C&apos;est bien connu, de plus en plus les acheteurs magasinent sur le web</h2>
              </div>
            </div>
            <div className={ homeStyles.cardContainer }>
              <div className={ homeStyles.card }>
                <div className={ homeStyles.icon }><FaUserCog /></div>
                <h2 className={ homeStyles.text }>Votre site Internet peut devenir un complément à votre service à la clientèle</h2>
              </div>
            </div>
          </div>
        </section>
        <section className={ homeStyles.banner }>
          <div className={ homeStyles.imgContainer }>
            <Image src={ illustration2 } alt='illustration-2' height="300" width="400" />
          </div>
          <div className={ homeStyles.textContainer }>
            <p className={ homeStyles.text }>
              Le site internet est aujourd&apos;hui un outil de communication incontournable à l&apos;ère du numérique. Pour valoriser au mieux votre image et votre offre, nous créons des sites internet de qualité. Nous mettons toutes les expertises de notre agence pour produire une solution parfaitement adaptée au service de votre projet et de la croissance de votre activité. Nous formons également nos clients pour qu&apos;ils soient autonomes sur la gestion de contenu (CMS) de leur site internet.
            </p>
            <button className={ layoutStyles.btn }>
              <Link href='/contact'>Je veux un devis !</Link>
            </button>
          </div>
        </section>
        <section className={ homeStyles.clients }>
          <div className={ layoutStyles.titleContainer }>
            <h1 className={ layoutStyles.sectionTitle }>Ils nous ont fait confiance</h1>
          </div>
          <div className={ homeStyles.cardsContainer }>
            <div className={ homeStyles.cardContainer }>
              <div className={ homeStyles.card }>
                <div className={ homeStyles.imgContainer }>
                  <Image src={ wila } alt='site-web-wila' />
                </div>
                <div className={ homeStyles.textContainer }>
                  <h3 className={ homeStyles.title }><a href="#">Wila</a></h3>
                  <p className={ homeStyles.desc }>Site e-commerce de cosmétiques naturelles</p>
                </div>
              </div>
            </div>
            <div className={ homeStyles.cardContainer }>
              <div className={ homeStyles.card }>
                <div className={ homeStyles.imgContainer }>
                  <Image src={ epharmed } alt='site-web-epharmed' />
                </div>
                <div className={ homeStyles.textContainer }>
                  <h3 className={ homeStyles.title }><a href="#">e-Pharmed</a></h3>
                  <p className={ homeStyles.desc }>Site de e-santé</p>
                </div> 
              </div>
            </div>
            <div className={ homeStyles.cardContainer }>
              <div className={ homeStyles.card }>
                <div className={ homeStyles.imgContainer }>
                  <Image src={ senpara } alt='site-web-senpara' />
                </div>
                <div className={ homeStyles.textContainer }>
                  <h3 className={ homeStyles.title }><a href="#">Senpara</a></h3>
                  <p className={ homeStyles.desc }>Site e-commerce de parapharmacie</p>
                </div>
              </div>
            </div>
          </div>
          <button className={ layoutStyles.btn }>
            <Link href='/contact'>Nous contacter</Link>
          </button>
        </section>
        <section className={ homeStyles.how }>
          <div className={ layoutStyles.titleContainer }>
            <h1 className={ layoutStyles.sectionTitle }>Ce que nous faisons</h1>
          </div>
          <div  className={ homeStyles.rowsContainer }>
            {/* <!-- left --> */}
            <div className={ homeStyles.rowLeft }>
              <div className={ homeStyles.card }>
                <h3 className={ homeStyles.title }><FaSearch /> Des sites SEO friendly</h3>
                <p className={ homeStyles.text }>
                  Les sites internet que nous créons sont SEO Friendly, c&apos;est-à-dire conformes aux standards du W3C et aux recommandations Google. L&apos;équipe web assure une veille technique active afin de maintenir ou faire évoluer les solutions web de l&apos;agence. Cette veille permet de proposer de nouvelles fonctionnalités web ou de remédier rapidement aux changements de comportement des moteurs de recherche.
                </p>
              </div>
              <div className={ homeStyles.join }>
                <div className={ homeStyles.lineContainer }>
                  <div className={ homeStyles.line }></div>
                </div>
                <div className={ homeStyles.circle }></div>
              </div>
            </div>
            {/* <!-- right --> */}
            <div className={ homeStyles.rowRight }>
              <div  className={ homeStyles.join }>
                <div className={ homeStyles.lineContainer }>
                  <div className={ homeStyles.line }></div>
                </div>
                <div className={ homeStyles.circle }></div>
              </div>
              <div className={ homeStyles.card }>
                <h3 className={ homeStyles.title }><FaExpandArrowsAlt /> Des sites responsives</h3>
                <p className={ homeStyles.text }>
                  Le mobile représente aujourd&apos;hui plus de 50% des consultations de sites internet. Le webdesign et le contenu des sites internet que nous créons sont adaptés à la consultation sur tous les support (ordinateur, mobile et tablette). Nous développons nos sites en suivant le concept  Mobile First. Votre site web est développé pour parfaitement se déformer et rester totalement opérationnel sur tous les supports.
                </p>
              </div>
            </div>
            {/* <!-- left --> */}
            <div className={ homeStyles.rowLeft }>
              <div className={ homeStyles.card }>
                <h3 className={ homeStyles.title }><FaBezierCurve /> Webdesign</h3>
                <p className={ homeStyles.text }>
                  En fonction de votre identité de marque et de votre marché, nous vous proposons une expérience utilisateur adaptée à votre cible et à ses attentes.
                </p>
              </div>
              <div className={ homeStyles.join }>
                <div className={ homeStyles.lineContainer }>
                  <div className={ homeStyles.line }></div>
                </div>
                <div className={ homeStyles.circle }></div>
              </div>
            </div>
            {/* <!-- right --> */}
            <div className={ homeStyles.rowRight }>
              <div  className={ homeStyles.join }>
                <div className={ homeStyles.lineContainer }>
                  <div className={ homeStyles.line }></div>
                </div>
                <div className={ homeStyles.circle }></div>
              </div>
              <div className={ homeStyles.card }>
                <h3 className={ homeStyles.title }><FaPlaneDeparture /> Des sites évolutifs</h3>
                <p className={ homeStyles.text }>
                  Les technologies que notre agence utilise pour la création de votre site web nous permettent de disposer d&apos;une solution qui va parfaitement évoluer avec votre activité.
                </p>
              </div>
            </div>
            {/* <!-- left --> */}
            <div className={ homeStyles.rowLeft }>
              <div className={ homeStyles.card }>
                <h3 className={ homeStyles.title }><FaFileMedicalAlt /> Contenus améliorés</h3>
                <p className={ homeStyles.text }>
                  Dotée des meilleurs outils d&apos;optimisation et formée aux bonnes pratiques sur les contenus web, notre équipe optimise les textes et médias de votre site internet pour améliorer l&apos;expérience utilisateur et votre référencement naturel.
                </p>
              </div>
              <div className={ homeStyles.join }>
                <div className={ homeStyles.lineContainer }>
                  <div className={ homeStyles.line }></div>
                </div>
                <div className={ homeStyles.circle }></div>
              </div>
            </div>
          </div>
          <button className={ layoutStyles.btn }>
            <Link href='/a-propos'>En savoir plus</Link>
          </button>
        </section>
      </div>
    </Layout>
  )
}

export default Home
