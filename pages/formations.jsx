import Link from "next/link";
import Image from "next/image";
import Layout from "../components/Layout";
import { FaEllipsisH } from "react-icons/fa";
import layoutStyles from "../styles/Layout.module.css";
import trainingStyles from "../styles/Training.module.css";
import laptop from "../public/images/laptop.jpg";
import word from "../public/images/word.webp";
import excel from "../public/images/excel.webp";

const Formations = () => {
  const imageDim = 200;

  return (
    <Layout title="ANAN Digital - Formations">
      <div className={trainingStyles.container}>
        <section id={trainingStyles.hero} className={layoutStyles.hero}>
          <div className={layoutStyles.overlay}>
            <div className={layoutStyles.imgContainer}></div>
            <div className={layoutStyles.textContainer}>
              <h1>
                Formez-vous aux informatiques pour booster vos compétences !
              </h1>
              <p>
                Devenir autonome dans l&apos;utilisation des outils de
                bureautique devenus indispensables dans le cadre professionnel
                Maîtriser vos outils bureautiques, c&apos;est vous assurer un
                gain de temps et de productivité considérable. C&apos;est aussi
                faciliter votre travail au quotidien et valoriser votre
                efficacité personnelle.
              </p>
              <button className={layoutStyles.btn}>
                <Link href="/contact">Nous contacter</Link>
              </button>
            </div>
          </div>
        </section>
        <section className={trainingStyles.offers}>
          <div
            id={trainingStyles.offersTitle}
            className={layoutStyles.titleContainer}
          >
            <h1 className={layoutStyles.sectionTitle}>Nous vous proposons</h1>
            <div className={layoutStyles.titleUnderline}></div>
          </div>
          <div className={trainingStyles.rowsContainer}>
            <div className={trainingStyles.row}>
              <div className={trainingStyles.imgContainer}>
                <Image
                  src={laptop}
                  alt="site illustration"
                  className={trainingStyles.img}
                  // width={imageDim}
                  // height={imageDim}
                  objectFit="cover"
                  objectPosition="center"
                />
              </div>
              <div className={trainingStyles.card}>
                <h3 className={trainingStyles.title}>
                  Les bases de l&apos;informatique (Ordinateur, Windows, Word,
                  Excel, Email, Internet)
                </h3>
                <div className={trainingStyles.separator}>
                  <FaEllipsisH />
                </div>
                <p className={trainingStyles.text}>
                  L&apos;ordinateur est aujourd&apos;hui totalement intégré au
                  poste de travail, au point d&apos;être devenu indispensable.
                  Prendre le temps de se former à cet outil informatique,
                  c&apos;est gagner chaque jour en productivité et en confort.
                  Cette formation d&apos;initiation à l&apos;informatique vous
                  permettra d&apos;acquérir les bons réflexes pour exploiter au
                  mieux votre ordinateur et découvrir les fonctions de base des
                  principaux logiciels.
                </p>
              </div>
            </div>
            <div className={trainingStyles.row}>
              <div className={trainingStyles.imgContainer}>
                <Image
                  src={word}
                  alt="site illustration"
                  className={trainingStyles.img}
                  // width={imageDim}
                  // height={imageDim}
                  objectFit="cover"
                  objectPosition="center"
                />
              </div>
              <div className={trainingStyles.card}>
                <h3 className={trainingStyles.title}>
                  Maîtrisez l&apos;outil de traitement de texte Word
                </h3>
                <div className={trainingStyles.separator}>
                  <FaEllipsisH />
                </div>
                <p className={trainingStyles.text}>
                  Cette formation Word vous donne les bases pour bien utiliser
                  Word. L&apos;utilisation et l&apos;exploitation de manière
                  efficace de Word ne s&apos;improvise pas ! Cette formation
                  Word vous permettra d&apos;acquérir, dès le début, les bonnes
                  pratiques.
                  <br />
                  Cette formation Word, vous permettra aussi de maîtriser les
                  fonctionnalités avancées de Word pour produire rapidement des
                  documents professionnels. L&apos;interface de Word est
                  conviviale, efficace et les nouvelles possibilités graphiques
                  sont remarquables.
                </p>
              </div>
            </div>
            <div className={trainingStyles.row}>
              <div className={trainingStyles.imgContainer}>
                <Image
                  src={excel}
                  alt="site illustration"
                  className={trainingStyles.img}
                  // width={imageDim}
                  // height={imageDim}
                  objectFit="cover"
                  objectPosition="center"
                />
              </div>
              <div className={trainingStyles.card}>
                <h3 className={trainingStyles.title}>
                  Concevoir des tableaux et les représenter graphiquement avec
                  Excel
                </h3>
                <div className={trainingStyles.separator}>
                  <FaEllipsisH />
                </div>
                <p className={trainingStyles.text}>
                  Indispensable pour analyser ou suivre vos données chiffrées,
                  Excel contribuent directement à votre efficacité. Cette
                  formation Excel vous apporte les bases pour construire avec
                  méthode et rapidité des tableaux de calcul et les représenter
                  graphiquement.
                </p>
              </div>
            </div>
          </div>
          <button className={layoutStyles.btn}>
            <Link href="/contact">Je me forme !</Link>
          </button>
        </section>
      </div>
    </Layout>
  );
};

export default Formations;
