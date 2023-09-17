import React from 'react';
import Navigation from '../componants/Navigation';
import Footer from '../componants/Footer';
import '../style/style_form_contact.css';



const Contact = () => {
    return (
      <div className='contenu'>
        <Navigation/>
       <div className='naviga'>
         
          </div>
          
            <div className="card">
  <span className="title">Me contacter ? </span>
  <form name='contact' className="form "  method='POST' data-netlify="true" onSubmit="submit">
<input type="hidden" name='from-name' value="contact" />
            
    <div className="group">
    <input placeholder="‎" id='name' name='name' type="text" required=""/>
    <label for="name">Votre nom</label>
    </div>
<div className="group" > 
    <input placeholder="‎" type="email" id="email" name="email" required=""/>
    <label for="email">Votre adresse email</label>
    </div>
<div className="group">
    <textarea placeholder="‎" id="comment" name="message" rows="5" required=""></textarea>
    <label for="comment">Votre message</label>
                    </div>
                    
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