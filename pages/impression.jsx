import Link from "next/link";
import Layout from "../components/Layout";
import layoutStyles from "../styles/Layout.module.css";
import printStyles from "../styles/Print.module.css";

const Impression = () => {
  return (
    <Layout title="ANAN Digital - Impression">
      <div className={printStyles.container}>
        <section id={printStyles.hero} className={layoutStyles.hero}>
          <div className={layoutStyles.overlay}>
            <div className={layoutStyles.imgContainer}></div>
            <div className={layoutStyles.textContainer}>
              <h1>
                Confiez nous la confection de vos objets de communication !
              </h1>
              <p>
                La communication par objet est très apprécié et qui vient en
                complément de la publicité traditionnelle. Avec l&apos;essor du
                digital, c&apos;est un excellent moyen de toucher sa cible
                physiquement et de diversifier les points de contacts.
              </p>
              <button className={layoutStyles.btn}>
                <Link href="/contact">Nous contacter</Link>
              </button>
            </div>
          </div>
        </section>
        <section className={printStyles.why}>
          <div
            id={printStyles.whyTitle}
            className={layoutStyles.titleContainer}
          >
            <h1 className={layoutStyles.sectionTitle}>
              Pourquoi confectionner des objets de communication ?
            </h1>
            <div className={layoutStyles.titleUnderline}></div>
          </div>
          <div className={printStyles.rowsContainer}>
            {/* <!-- left --> */}
            <div className={printStyles.rowLeft}>
              <div className={printStyles.card}>
                <h3 className={printStyles.title}>
                  Les objets de communication pour se faire connaître
                </h3>
                <p className={printStyles.text}>
                  De ce point de vue, il est ainsi possible d&apos;augmenter sa
                  visibilité par les objets promotionnels, et donc
                  d&apos;accroître son nombre de prospects, de contacts et de
                  leads. Dans la même idée, c&apos;est aussi une façon de
                  convertir ses prospects en clients. L&apos;objet de
                  communication permettra en effet, en plus de se faire
                  connaître, de se faire préférer aux concurrents par sa
                  démarche conviviale.
                </p>
              </div>
            </div>
            {/* <!-- right --> */}
            <div className={printStyles.rowRight}>
              <div className={printStyles.card}>
                <h3 className={printStyles.title}>
                  Les objets de communication pour renforcer votre image de
                  marque
                </h3>
                <p className={printStyles.text}>
                  En plus de votre notoriété, l&apos;objet de communication permet de
                  consolider vos valeurs et votre image aux yeux des prospects.
                  Le produit lui-même devient ainsi le siège des valeurs de
                  votre entreprise, par son design ou sa fonctionnalité. C&apos;est
                  aussi un moyen de consolider votre positionnement, en offrant
                  des objets publicitaires directement lié à ce dernier.
                </p>
              </div>
            </div>
            {/* <!-- left --> */}
            <div className={printStyles.rowLeft}>
              <div className={printStyles.card}>
                <h3 className={printStyles.title}>
                  Les objets de communication pour fidéliser vos clients
                </h3>
                <p className={printStyles.text}>
                  Les objets de communication sont aussi un moyen des plus
                  efficaces pour fidéliser vos clients. Des cadeaux de fin
                  d&apos;année ou de remerciement renforcent en effet votre relation
                  envers votre clientèle.
                </p>
              </div>
            </div>
            {/* <!-- right --> */}
            <div className={printStyles.rowRight}>
              <div className={printStyles.card}>
                <h3 className={printStyles.title}>
                  Les objets de communication pour assurer le lancement de
                  nouveaux produits
                </h3>
                <p className={printStyles.text}>
                  Dans la même idée, c&apos;est un ingrédient parfait pour stimuler
                  vos ventes lors du lancement d&apos;un nouveau produit. L&apos;objet
                  promotionnel vient dans ce cas de figure accompagner des
                  actions de promotions et les renforcer.
                </p>
              </div>
            </div>
          </div>
          <button className={layoutStyles.btn}>
            <Link href="/contact">Je me lance !</Link>
          </button>
        </section>
      </div>
    </Layout>
  );
};

export default Impression;
