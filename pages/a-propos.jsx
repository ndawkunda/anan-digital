import Layout from '../components/Layout';
import aproposStyles from '../styles/Apropos.module.css';

const Apropos = () => {
  return (
    <Layout title="ANAN Digital - À Propos">
      <div className={ aproposStyles.container }>
        <section className={ aproposStyles.mainSection }>
          <div className={ aproposStyles.textContainer }>
            <h1 className={ aproposStyles.title }>À PROPOS</h1>
            <p>
              Nous sommes une agence WEB ! Nous créons des sites internet, faisons du référencement et de la création graphique. Plus qu’une agence de prestataires, nous intervenons auprès de nos clients dans le quotidien de leur activité avec la conviction d’apporter un changement apportant de meilleurs résultats et plus de confort chaque jour.
            </p>
            <p>
              Nous plaçons la satisfaction de nos clients au-dessus de tout. C’est à travers cette reconnaissance, que nous puisons l’énergie qui nous pousse sans cesse à relever de nouveaux défis.
            </p>
            <p>
              Vous souhaitez redéfinir votre stratégie web ? Passer votre site en Responsive Design ? Créer un nouveau site internet ? Confiez-nous votre projet web et bénéficiez de nos conseils pour votre communication digitale.
            </p>
            <p>
              Nos domaines de compétences sont les suivants :
              <ul>
                <li>Étude stratégique et positionnement concurrentiel</li>
                <li>Webdesign, ergonomie (UX)</li>
                <li>Intégration et développement web</li>
                <li>Refonte site web</li>
                <li>Formation client à la gestion du site web</li>
                <li>Analyse sémantique, rédaction de contenu web</li>
                <li>Création graphique, logotype et charte graphique</li>
              </ul>
            </p>
            <p>
              Fournir un service constant et qualitatif pour chaque projet, gagner la satisfaction et fidéliser nos clients, c’est l'état d'esprit dans lequel nous travaillons et ce dont nous sommes les plus fiers.
            </p>
          </div>
        </section>
      </div>
    </Layout>
  )
}

export default Apropos