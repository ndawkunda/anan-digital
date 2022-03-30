import Link from "next/link";
import Script from "next/script";
import Image from "next/image";
import {
  FaBullseye,
  FaDiceD20,
  FaCogs,
  FaCheckCircle,
  FaDesktop,
  FaWrench,
} from "react-icons/fa";
import Layout from "../components/Layout";
import homeStyles from "../styles/Home.module.css";
import layoutStyles from "../styles/Layout.module.css";
import illustration1Alt from "../public/images/illustration-1-alt.svg";
import site from "../public/images/site.jpg";
import design from "../public/images/design.jpg";
import training from "../public/images/training.jpg";
import print from "../public/images/print.jpg";
import epharmed from "../public/images/partners/epharmed.png";
import jamesShoes from "../public/images/partners/james_shoes.png";
import matlabuChifai from "../public/images/partners/matlabu_chifai.png";
import nakoudie from "../public/images/partners/nakoudie.png";
import nk from "../public/images/partners/nk.png";
import samaclasse from "../public/images/partners/samaclasse.png";
import senpara from "../public/images/partners/senpara.png";
import tatichou from "../public/images/partners/tatichou.png";
import wila from "../public/images/partners/wila.png";

const Home = () => {
  const serviceImgWidth = 800;
  const serviceImgHeight = 300;
  const partnerImgDim = 500;

  return (
    <>
      <Layout title="ANAN Digital - Accueil">
        <div className={homeStyles.container}>
          <section id={homeStyles.hero} className={layoutStyles.hero}>
            <div className={layoutStyles.overlay}>
              <div className={layoutStyles.imgContainer}></div>
              <div className={layoutStyles.textContainer}>
                <h1>Confiez vos projets informatique à une agence IT</h1>
                <p>
                  Nous allons vous accompagner pour la création d&apos;un site
                  internet et le référencement naturel (SEO). Nous pouvons
                  également prendre en charge la création de logo,
                  d&apos;identité visuelle et supports de communication.
                </p>
                <button className={layoutStyles.btn}>
                  <Link href="/contact">J&apos;ai un projet !</Link>
                </button>
              </div>
            </div>
          </section>
          <section className={homeStyles.services}>
            <div className={layoutStyles.titleContainer}>
              <h1 className={layoutStyles.sectionTitle}>Nos services</h1>
              <div className={layoutStyles.titleUnderline}></div>
            </div>
            <div className={homeStyles.cardsContainer}>
              <Link href="/site" passHref>
                <div className={homeStyles.cardContainer}>
                  <div className={homeStyles.card}>
                    <div className={homeStyles.imgContainer}>
                      <Image
                        src={site}
                        alt="site illustration"
                        className={homeStyles.img}
                        width={serviceImgWidth}
                        height={serviceImgHeight}
                        objectFit="cover"
                        objectPosition="center"
                      />
                    </div>
                    <div className={homeStyles.textContainer}>
                      <h3 className={homeStyles.title}>Développement Web</h3>
                      <p className={homeStyles.desc}>
                        Avoir un site web est devenu aujourd&apos;hui
                        indispensable, faites nous confiance pour vos projets de
                        site e-Commerce, vitrine, SaaS, etc.
                      </p>
                    </div>
                  </div>
                </div>
              </Link>
              <Link href="/design" passHref>
                <div className={homeStyles.cardContainer}>
                  <div className={homeStyles.card}>
                    <div className={homeStyles.imgContainer}>
                      <Image
                        src={design}
                        alt="design illustration"
                        className={homeStyles.img}
                        width={serviceImgWidth}
                        height={serviceImgHeight}
                        objectFit="cover"
                        objectPosition="center"
                      />
                    </div>
                    <div className={homeStyles.textContainer}>
                      <h3 className={homeStyles.title}>Design Graphic</h3>
                      <p className={homeStyles.desc}>
                        Le cerveau humain retient naturellement plus facilement
                        un visuel qu&apos;un texte. Confiez nous la création de
                        votre identité graphique.
                      </p>
                    </div>
                  </div>
                </div>
              </Link>
              <Link href="/impression" passHref>
                <div className={homeStyles.cardContainer}>
                  <div className={homeStyles.card}>
                    <div className={homeStyles.imgContainer}>
                      <Image
                        src={print}
                        alt="print illustration"
                        className={homeStyles.img}
                        width={serviceImgWidth}
                        height={serviceImgHeight}
                        objectFit="cover"
                        objectPosition="center"
                      />
                    </div>
                    <div className={homeStyles.textContainer}>
                      <h3 className={homeStyles.title}>Impression</h3>
                      <p className={homeStyles.desc}>
                        Avec une identité graphique, nous pouvons vous
                        confectionner des objets de communication pour vos
                        campagne de marketing.
                      </p>
                    </div>
                  </div>
                </div>
              </Link>
              <Link href="formations" passHref>
                <div className={homeStyles.cardContainer}>
                  <div className={homeStyles.card}>
                    <div className={homeStyles.imgContainer}>
                      <Image
                        src={training}
                        alt="training illustration"
                        className={homeStyles.img}
                        width={serviceImgWidth}
                        height={serviceImgHeight}
                        objectFit="cover"
                        objectPosition="center"
                      />
                    </div>
                    <div className={homeStyles.textContainer}>
                      <h3 className={homeStyles.title}>Formation</h3>
                      <p className={homeStyles.desc}>
                        Devenir autonome avec les outils informatique est
                        indispensables de nos jours. Nous vous proposons des
                        formations sur les bases de l&apos;informatique les
                        outils les plus utilisés (Word, Excel, Powerpoint, etc.)
                      </p>
                    </div>
                  </div>
                </div>
              </Link>
            </div>
            <button className={layoutStyles.btn}>
              <Link href="/contact">Je veux un devis !</Link>
            </button>
          </section>
          <section className={homeStyles.banner}>
            <div className={homeStyles.textContainer}>
              <h3>
                Vous avez un projet informatique ? Vous souhaitez faire votre
                transition digitale ? Faisons-le ensemble !
              </h3>
              <button
                id={homeStyles.bannerBtnDesktop}
                className={layoutStyles.btn}
              >
                <Link href="/contact">Nous contacter</Link>
              </button>
            </div>
            <div className={homeStyles.imgContainer}>
              <Image
                src={illustration1Alt}
                alt="illustration-2"
                height={600}
                width={600}
                objectFit="cover"
                objectPosition="center"
              />
            </div>
            <button
              id={homeStyles.bannerBtnMobile}
              className={layoutStyles.btn}
            >
              <Link href="/contact">Nous contacter</Link>
            </button>
          </section>
          <section className={homeStyles.steps}>
            <div className={layoutStyles.titleContainer}>
              <h1 className={layoutStyles.sectionTitle}>
                Notre méthode de travail
              </h1>
              <div className={layoutStyles.titleUnderline}></div>
            </div>
            <div className={homeStyles.stepsContainer}>
              <div className={homeStyles.stepOddContainer}>
                <div className={homeStyles.stepOdd}>
                  <div className={homeStyles.side1}>
                    <div className={homeStyles.side1Content}>
                      <div className={homeStyles.stepText}>01.</div>
                      <div className={homeStyles.ideaText}>Objectifs</div>
                    </div>
                    <div className={homeStyles.vBarContainer}>
                      <div className={homeStyles.vBar}></div>
                    </div>
                  </div>
                  <div className={homeStyles.side2}>
                    <div className={homeStyles.side2Content}>
                      <div>
                        <div className={homeStyles.side2Header}>
                          <span>01.</span> - Objectifs
                        </div>
                        <div className={homeStyles.side2Title}>
                          Stratégie et définition des objectifs
                        </div>
                        <div className={homeStyles.side2Text}>
                          Lors de cette phase préalable au démarrage du projet,
                          nous définissons ensemble : les objectifs et la portée
                          du projet,es livrables attendus, les délais souhaités,
                          le budget alloué, le degré de souplesse qui pourra
                          être accordé, etc.
                        </div>
                      </div>
                      <div className={homeStyles.side2IconContainer}>
                        <FaBullseye />
                      </div>
                    </div>
                  </div>
                </div>
                <div className={homeStyles.strokeOdd}>
                  <div className={homeStyles.line1Container}>
                    <div className={homeStyles.line1}></div>
                  </div>
                  <div className={homeStyles.line2Container}>
                    <div className={homeStyles.line2}></div>
                  </div>
                  <div className={homeStyles.line3}></div>
                </div>
              </div>
              <div className={homeStyles.stepEvenContainer}>
                <div className={homeStyles.stepEven}>
                  <div className={homeStyles.side1}>
                    <div className={homeStyles.side1Content}>
                      <div className={homeStyles.stepText}>02.</div>
                      <div className={homeStyles.ideaText}>Conception</div>
                    </div>
                    <div className={homeStyles.vBarContainer}>
                      <div className={homeStyles.vBar}></div>
                    </div>
                  </div>
                  <div className={homeStyles.side2}>
                    <div className={homeStyles.side2Content}>
                      <div>
                        <div className={homeStyles.side2Header}>
                          <span>02.</span> - Conception
                        </div>
                        <div className={homeStyles.side2Title}>
                          Conception détaillée
                        </div>
                        <div className={homeStyles.side2Text}>
                          Après l’élaboration des spécifications de la structure
                          générale du projet, on rentre dans le vif du sujet
                          avec sa conception détaillée en plusieurs sous-étapes
                          : découpage et chiffrage pour évaluer le coût global
                          du projet, planification et constitution de l’équipe
                          de projet.
                        </div>
                      </div>
                      <div className={homeStyles.side2IconContainer}>
                        <FaDiceD20 />
                      </div>
                    </div>
                  </div>
                </div>
                <div className={homeStyles.strokeEven}>
                  <div className={homeStyles.line1Container}>
                    <div className={homeStyles.line1}></div>
                  </div>
                  <div className={homeStyles.line2Container}>
                    <div className={homeStyles.line2}></div>
                  </div>
                  <div className={homeStyles.line3}></div>
                </div>
              </div>
              <div className={homeStyles.stepOddContainer}>
                <div className={homeStyles.stepOdd}>
                  <div className={homeStyles.side1}>
                    <div className={homeStyles.side1Content}>
                      <div className={homeStyles.stepText}>03.</div>
                      <div className={homeStyles.ideaText}>Développement</div>
                    </div>
                    <div className={homeStyles.vBarContainer}>
                      <div className={homeStyles.vBar}></div>
                    </div>
                  </div>
                  <div className={homeStyles.side2}>
                    <div className={homeStyles.side2Content}>
                      <div>
                        <div className={homeStyles.side2Header}>
                          <span>03.</span> - Développement
                        </div>
                        <div className={homeStyles.side2Title}>
                          Développement du projet
                        </div>
                        <div className={homeStyles.side2Text}>
                          La réalisation est le cœur même du projet, qui
                          intervient après sa conception rigoureuse, en
                          conformité avec la stratégie et les objectifs.
                        </div>
                      </div>
                      <div className={homeStyles.side2IconContainer}>
                        <FaCogs />
                      </div>
                    </div>
                  </div>
                </div>
                <div className={homeStyles.strokeOdd}>
                  <div className={homeStyles.line1Container}>
                    <div className={homeStyles.line1}></div>
                  </div>
                  <div className={homeStyles.line2Container}>
                    <div className={homeStyles.line2}></div>
                  </div>
                  <div className={homeStyles.line3}></div>
                </div>
              </div>
              <div className={homeStyles.stepEvenContainer}>
                <div className={homeStyles.stepEven}>
                  <div className={homeStyles.side1}>
                    <div className={homeStyles.side1Content}>
                      <div className={homeStyles.stepText}>04.</div>
                      <div className={homeStyles.ideaText}>Recette</div>
                    </div>
                    <div className={homeStyles.vBarContainer}>
                      <div className={homeStyles.vBar}></div>
                    </div>
                  </div>
                  <div className={homeStyles.side2}>
                    <div className={homeStyles.side2Content}>
                      <div>
                        <div className={homeStyles.side2Header}>
                          <span>04.</span> - Recette
                        </div>
                        <div className={homeStyles.side2Title}>
                          Validation par l&apos;utilisateur
                        </div>
                        <div className={homeStyles.side2Text}>
                          Les tests menés vont permettre de développer une
                          solution correspondant aux besoins exprimés en amont
                          du projet. La recette, ou le recettage, est le
                          processus de validation par l&apos;utilisateur de la
                          conformité des livrables par rapport aux objectifs
                          initials.
                        </div>
                      </div>
                      <div className={homeStyles.side2IconContainer}>
                        <FaCheckCircle />
                      </div>
                    </div>
                  </div>
                </div>
                <div className={homeStyles.strokeEven}>
                  <div className={homeStyles.line1Container}>
                    <div className={homeStyles.line1}></div>
                  </div>
                  <div className={homeStyles.line2Container}>
                    <div className={homeStyles.line2}></div>
                  </div>
                  <div className={homeStyles.line3}></div>
                </div>
              </div>
              <div className={homeStyles.stepOddContainer}>
                <div className={homeStyles.stepOdd}>
                  <div className={homeStyles.side1}>
                    <div className={homeStyles.side1Content}>
                      <div className={homeStyles.stepText}>05.</div>
                      <div className={homeStyles.ideaText}>Déploiement</div>
                    </div>
                    <div className={homeStyles.vBarContainer}>
                      <div className={homeStyles.vBar}></div>
                    </div>
                  </div>
                  <div className={homeStyles.side2}>
                    <div className={homeStyles.side2Content}>
                      <div>
                        <div className={homeStyles.side2Header}>
                          <span>05.</span> - Déploiement
                        </div>
                        <div className={homeStyles.side2Title}>
                          Mise en production
                        </div>
                        <div className={homeStyles.side2Text}>
                          Une fois toutes les objectifs atteints, la solution
                          peut être déployée : il s&apos;agit de la livraison du
                          produit final et de sa mise en service. Il sera prévu
                          une formation des utilisateurs aux nouvelles
                          fonctionnalités offertes par la solution.
                        </div>
                      </div>
                      <div className={homeStyles.side2IconContainer}>
                        <FaDesktop />
                      </div>
                    </div>
                  </div>
                </div>
                <div className={homeStyles.strokeOdd}>
                  <div className={homeStyles.line1Container}>
                    <div className={homeStyles.line1}></div>
                  </div>
                  <div className={homeStyles.line2Container}>
                    <div className={homeStyles.line2}></div>
                  </div>
                  <div className={homeStyles.line3}></div>
                </div>
              </div>
              <div className={homeStyles.stepEvenContainer}>
                <div className={homeStyles.stepEven}>
                  <div className={homeStyles.side1}>
                    <div className={homeStyles.side1Content}>
                      <div className={homeStyles.stepText}>06.</div>
                      <div className={homeStyles.ideaText}>Maintenance</div>
                    </div>
                    <div className={homeStyles.vBarContainer}></div>
                  </div>
                  <div className={homeStyles.side2}>
                    <div className={homeStyles.side2Content}>
                      <div>
                        <div className={homeStyles.side2Header}>
                          <span>04.</span> - Maintenance
                        </div>
                        <div className={homeStyles.side2Title}>
                          Support client
                        </div>
                        <div className={homeStyles.side2Text}>
                          Après la mise en service, le produit informatique
                          nécessite des ajustements, qui englobent à la fois des
                          actions correctives et évolutives : correction de
                          dysfonctionnements, améliorations à apporter, etc.
                        </div>
                      </div>
                      <div className={homeStyles.side2IconContainer}>
                        <FaWrench />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <button className={layoutStyles.btn}>
              <Link href="/contact">J&apos;ai une idée !</Link>
            </button>
          </section>
          <section className={homeStyles.partners}>
            <div
              id={homeStyles.partnersTitle}
              className={layoutStyles.titleContainer}
            >
              <h1 className={layoutStyles.sectionTitle}>
                Ils nous ont fait confiance
              </h1>
              <div className={layoutStyles.titleUnderline}></div>
            </div>
            <div className={homeStyles.partnersContainer}>
              <div className={homeStyles.partner}>
                <div>
                  <Image
                    src={epharmed}
                    alt="Logo e-Pharmed"
                    height={partnerImgDim}
                    width={partnerImgDim}
                    objectFit="cover"
                    objectPosition="center"
                  />
                </div>
              </div>
              <div className={homeStyles.partner}>
                <div>
                  <Image
                    src={wila}
                    alt="Logo Wila"
                    height={partnerImgDim}
                    width={partnerImgDim}
                    objectFit="cover"
                    objectPosition="center"
                  />
                </div>
              </div>
              <div className={homeStyles.partner}>
                <div>
                  <Image
                    src={jamesShoes}
                    alt="Logo James Shoes"
                    height={partnerImgDim}
                    width={partnerImgDim}
                    objectFit="cover"
                    objectPosition="center"
                  />
                </div>
              </div>
              <div className={homeStyles.partner}>
                <div>
                  <Image
                    src={tatichou}
                    alt="Logo Tatichou"
                    height={partnerImgDim}
                    width={partnerImgDim}
                    objectFit="cover"
                    objectPosition="center"
                  />
                </div>
              </div>
              <div className={homeStyles.partner}>
                <div>
                  <Image
                    src={matlabuChifai}
                    alt="Logo Matlabu Chifai"
                    height={partnerImgDim}
                    width={partnerImgDim}
                    objectFit="cover"
                    objectPosition="center"
                  />
                </div>
              </div>
              <div className={homeStyles.partner}>
                <div>
                  <Image
                    src={senpara}
                    alt="Logo Senpara"
                    height={partnerImgDim}
                    width={partnerImgDim}
                    objectFit="cover"
                    objectPosition="center"
                  />
                </div>
              </div>
              <div className={homeStyles.partner}>
                <div>
                  <Image
                    src={samaclasse}
                    alt="Logo Samaclasse"
                    height={partnerImgDim}
                    width={partnerImgDim}
                    objectFit="cover"
                    objectPosition="center"
                  />
                </div>
              </div>
              <div className={homeStyles.partner}>
                <div>
                  <Image
                    src={nakoudie}
                    alt="Logo Nakoudie"
                    height={partnerImgDim}
                    width={partnerImgDim}
                    objectFit="cover"
                    objectPosition="center"
                  />
                </div>
              </div>
              <div className={homeStyles.partner}>
                <div>
                  <Image
                    src={nk}
                    alt="Logo NK"
                    height={partnerImgDim}
                    width={partnerImgDim}
                    objectFit="cover"
                    objectPosition="center"
                  />
                </div>
              </div>
            </div>
            <button className={layoutStyles.btn}>
              <Link href="/contact">Je lance mon projet !</Link>
            </button>
          </section>
        </div>
      </Layout>

      <Script src="../public/assets/js/home.js" strategy="lazyOnload" />
    </>
  );
};

export default Home;
