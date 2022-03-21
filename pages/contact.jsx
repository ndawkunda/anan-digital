import Layout from '../components/Layout';
import contactStyles from '../styles/Contact.module.css';

const contact = () => {
  return (
    <Layout title="ANAN Digital - Contact">
      <div className={ contactStyles.container }>
        <div className={ contactStyles.textContainer }>
          <h1 className={ contactStyles.title }>Vous avez un projet ?</h1>
          <p>
            Merci de renseigner le formulaire pour permettre à votre consultant de mieux cerner vos besoins. Vos échanges n&apos;en seront que plus efficaces !
          </p>
          <p>
            Nous allons vous contactez dans les plus brefs délais afin de fixer un rendez-vous.
          </p>
        </div>
        <div className={ contactStyles.formContainer }>
          <form action='#' method='POST'>
            <div className={ contactStyles.inputContainer }>
              <label htmlFor='name'>Votre nom</label>
              <input type='text' name='name'  id='name' placeholder='Prénom Nom' />
            </div>
            <div className={ contactStyles.inputContainer }>
              <label htmlFor='email'>Votre email</label>
              <input type='text' name='email'  id='email'  autoComplete="email" placeholder='pseudo@email.com' />
            </div>
            <div className={ contactStyles.inputContainer }>
              <label htmlFor='phone'>Votre numéro de téléphone</label>
              <input type='tel' name='phone' id='phone' placeholder='77 123 45 67' />
            </div>
            <div className={ contactStyles.checksContainer }>
              <p>Vous avez un projet de </p>
              <div className={ contactStyles.checkContainer }>
                <input type='checkbox' name='site' id='site' />
                <label htmlFor='site'>Site internet</label>
              </div>
              <div className={ contactStyles.checkContainer }>
                <input type='checkbox' name='graphique' id='graphique' />
                <label htmlFor='graphique'>Création graphique</label>
              </div>
              <div className={ contactStyles.checkContainer }>
                <input type='checkbox' name='logo' id='logo' />
                <label htmlFor='logo'>Logo</label>
              </div>
              <div className={ contactStyles.checkContainer }>
                <input type='checkbox' name='autre' id='autre' />
                <label htmlFor='autre'>Autre</label>
              </div>
            </div>
            <div className={ contactStyles.inputContainer }>
              <label htmlFor='info'>Vous souhaitez préciser votre demande ?</label>
              <textarea name='info' id='info' rows={8}></textarea>
            </div>
            <div className={ contactStyles.btnContainer }>
              <input type="submit" value="Envoyer" className={ contactStyles.btn } />
            </div>
          </form>
        </div>
      </div>
    </Layout>
  )
}

export default contact