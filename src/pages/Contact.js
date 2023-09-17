import React from 'react';
import Navigation from '../componants/Navigation';
import Footer from '../componants/Footer';
import '../style/style_form_contact.css';

function remercierUtilisateur() {
    // Récupérer la valeur de l'attribut "_next" de l'élément input hidden
    const nextPage = document.querySelector('input[name="_next"]').value;
  
    // Afficher un message de remerciement à l'utilisateur
    alert("Merci pour votre message ! Nous vous répondrons bientôt.");
  
    // Rediriger vers la page spécifiée dans "_next"
    if (nextPage) {
      window.location.href = nextPage;
    }
  }

const Contact = () => {
    return (
      <div className='contenu'>
        <Navigation/>
       <div className='naviga'>
         
          </div>
          
            <div className="card">
  <span className="title">Me contacter ? </span>
  <form className="form" action='https://formsubmit.co/6d48ad819506d0649fd4b23ac10814e2' method='POST'>
    <div className="group">
    <input placeholder="‎" id='name' name='name' type="text" required=""/>
    <label for="name">Votre nom</label>
    </div>
<div className="group" > 
    <input placeholder="‎" type="email" id="email" name="email" required=""/>
    <label for="email">Votre adresse email</label>
    </div>
<div className="group">
    <textarea placeholder="‎" id="comment" name="comment" rows="5" required=""></textarea>
    <label for="comment">Votre message</label>
                    </div>
                    <input type="hidden" name="_next" value={"https://malle02.github.io/iframe.ML/html_css/lien/tuto%20html/remer.html"} id="" />
                    <input type="hidden" name='_captcha' value={"false"} />
    <button type="submit">Envoyer</button>
          </form>
          
</div>

       
<div className='foot'>
          <Footer />
          </div>
    
        </div>
    );
};

export default Contact;