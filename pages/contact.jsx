import { useState } from "react";
import { FaTimes } from "react-icons/fa";
import { Animated } from "react-animated-css";
import Layout from '../components/Layout';
import contactStyles from '../styles/Contact.module.css';

const Contact = () => {
  const [fullname, setFullname] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [projects, setProjects] = useState({
    'site': false,
    'graphic': false,
    'logo': false,
    'training': false,
    'other': false,
  });
  const [info, setInfo] = useState('');
  const [errors, setErrors] = useState([]);

  const [showError, setShowError] = useState(false);
  const [showSuccess, setShowSuccess] = useState(false);

  const handleCheck = (project) => {
    let copiedProjects = { ...projects };
    copiedProjects[project] = !copiedProjects[project];
    setProjects(copiedProjects);
  }

  const handleSubmit = (e) => {
    e.preventDefault();

    // VALIDATION
    let tempErrors = [];
    let isValid = true;

    if (fullname.length <= 0) {
      tempErrors.push('Entrez un nom valide.');
      isValid = false;
    }
    if (email.length <= 0) {
      tempErrors.push('Entrez un email valide');
      isValid = false;
    }
    if (phone.length <= 0) {
      tempErrors.push('Entrez un numéro de téléphone valide');
      isValid = false;
    }

    // SUBMITION
    if (!isValid) {
      console.log("errors", tempErrors);
      setErrors(tempErrors);
      setShowError(true);
    }
    else {
      console.log('submit');
      let projectsChoice = [];
      for (const project in projects) {
        if (projects[project]) {
          projectsChoice.push(project);
        }
      }
      let data = {
        fullname,
        email,
        phone,
        projectsChoice,
        info,
      }
      fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Accept': 'application/json, text/plain, */*',
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
      }).then((res) => {
        console.log('Response received')
        console.log(data)
        if (res.status === 200) {
          console.log('Response succeeded!');
          setShowSuccess(true)
          setFullname('');
          setEmail('');
          setPhone('');
          setProjects('');
          setInfo('');
        }
      })
    }
  }

  const handleCloseError = () => {
    setShowError(false);
    setErrors([]);
  }

  const handleCloseSuccess = () => {
    setShowSuccess(false);
  }

  return (
    <Layout title="ANAN Digital - Contact">
      <div className={ contactStyles.container }>
        <div className={ contactStyles.mainContent }>
          {/* TEXT */}
          <div className={ contactStyles.textContainer }>
            <h1 className={ contactStyles.title }>Vous avez un projet ?</h1>
            <p>
              Merci de renseigner le formulaire pour permettre à votre consultant de mieux cerner vos besoins. Vos échanges n&apos;en seront que plus efficaces !
            </p>
            <p>
              Nous allons vous contactez dans les plus brefs délais afin de fixer un rendez-vous.
            </p>
          </div>

          {/* FORM */}
          <div className={ contactStyles.formContainer }>
            <form>
              <div className={ contactStyles.inputContainer }>
                <label htmlFor='fullname'>Votre nom *</label>
                <input 
                  type='text' name='fullname'  id='fullname'
                  placeholder='Prénom Nom'
                  value={ fullname }
                  onChange={(e) => {
                    setFullname(e.target.value);
                  }}
                  required />
              </div>
              <div className={ contactStyles.inputContainer }>
                <label htmlFor='email'>Votre email *</label>
                <input
                  type='text' name='email'  id='email' 
                  autoComplete="email"
                  placeholder='pseudo@email.com'
                  value={ email }
                  onChange={(e) => {
                    setEmail(e.target.value);
                  }}
                  required />
              </div>
              <div className={ contactStyles.inputContainer }>
                <label htmlFor='phone'>Votre numéro de téléphone *</label>
                <input
                  type='text' name='phone' id='phone'
                  placeholder='77 123 45 67'
                  value={ phone }
                  onChange={(e) => {
                    setPhone(e.target.value);
                  }}
                  required />
              </div>
              <div className={ contactStyles.checksContainer }>
                <p>Vous avez un projet de </p>
                <div className={ contactStyles.checkContainer }>
                  <input
                    type='checkbox' name='site' id='site'
                    value='Site internet'
                    checked={ projects.site }
                    onChange={ () => handleCheck('site') } />
                  <label htmlFor='site'>Site internet</label>
                </div>
                <div className={ contactStyles.checkContainer }>
                  <input
                    type='checkbox' name='graphic' id='graphic'
                    value='Création graphique'
                    checked={ projects.graphic }
                    onChange={ () => handleCheck('graphic') } />
                  <label htmlFor='graphic'>Création graphique</label>
                </div>
                <div className={ contactStyles.checkContainer }>
                  <input
                    type='checkbox' name='logo' id='logo'
                    value='Logo'
                    checked={ projects.logo }
                    onChange={ () => handleCheck('logo') } />
                  <label htmlFor='logo'>Logo</label>
                </div>
                <div className={ contactStyles.checkContainer }>
                  <input
                    type='checkbox' name='training' id='training'
                    value='training'
                    checked={ projects.training }
                    onChange={ () => handleCheck('training') } />
                  <label htmlFor='training'>Formation</label>
                </div>
                <div className={ contactStyles.checkContainer }>
                  <input
                    type='checkbox' name='other' id='other'
                    value='Autre'
                    checked={ projects.other }
                    onChange={ () => handleCheck('other') } />
                  <label htmlFor='other'>Autre</label>
                </div>
              </div>
              <div className={ contactStyles.inputContainer }>
                <label htmlFor='info'>Vous souhaitez préciser votre demande ?</label>
                <textarea 
                  name='info' id='info' rows={8}
                  value={ info }
                  placeholder='Décrivez nous un peu ce que vous voulez'
                  onChange={(e) => {
                    setInfo(e.target.value);
                  }}
                ></textarea>
              </div>
              <div className={ contactStyles.btnContainer }>
                <input
                  type="submit" value="Envoyer"
                  className={ contactStyles.btn }
                  onClick={ (e) => handleSubmit(e) }
                />
              </div>
            </form>
          </div>
        </div>
        {/* MODALS */}
        {(showError || showSuccess) && 
          <div className={ contactStyles.modalContainer }>
            <Animated animationIn='fadeInLeft' animationInDuration='1000' animationOut='fadeOutLeft' isVisible={true}>
              {showError &&
                <div className={ contactStyles.modalError }>
                  <div className={ contactStyles.header }>
                    <button onClick={ handleCloseError }><FaTimes /></button>
                  </div>
                  <div className={ contactStyles.messageContainer }>
                    <h1>Erreur !</h1>
                    <p>
                      {errors.map((error, idx) => {
                        return <li key={idx}>{error}</li>
                      })}
                    </p>
                  </div>
                </div>}
              {showSuccess &&
                <div className={ contactStyles.modalSuccess }>
                  <div className={ contactStyles.header }>
                    <button onClick={ handleCloseSuccess }><FaTimes /></button>
                  </div>
                  <div className={ contactStyles.messageContainer }>
                    <h1>Succès !</h1>
                    <p>
                      Votre requête a été envoyé avec succès. Nous allons entrer en contact avec dans les plus brefs délais. 
                    </p>
                  </div>
                </div>}
            </Animated>
          </div>
        }
      </div>
    </Layout>
  )
}

export default Contact