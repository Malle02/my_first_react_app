


import React, { useState, useRef } from 'react';
import Navigation from '../componants/Navigation';
import Footer from '../componants/Footer';
import '../style/style_form_contact.css';
import emailjs from '@emailjs/browser';

const Contact = () => {
  const form = useRef();
  const [isSent, setIsSent] = useState(false);

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm('service_n8aaimb', 'template_1apk1iq', form.current, 'b4P72Vwn6YhidAp9b')
      .then((result) => {
        console.log(result.text);
        setIsSent(true); 
      })
      .catch((error) => {
        console.log(error.text);
      });

    e.target.reset();
  };

  return (
    <div className='contenu'>
      <Navigation />
      <div className='naviga'></div>

      <div className="card">
        <span className="title">Me contacter ? </span>
        {isSent ? (
          <div className="thank-you-message">Merci pour votre message je vous répondrais bientôt!😊</div>
        ) : (
          <form ref={form} name='contact' className="form" onSubmit={sendEmail}>
            <input type="hidden" name="form-name" value="contact" />

            <div className="group">
              <input placeholder="‎" id='name' name='name' type="text" required="" />
              <label for="name">Votre nom</label>
            </div>
            <div className="group">
              <input placeholder="‎" type="email" id="email" name="email" required="" />
              <label for="email">Votre adresse email</label>
            </div>
            <div className="group">
              <textarea placeholder="‎" id="comment" name="message" rows="5" required=""></textarea>
              <label for="message">Votre message</label>
            </div>

            <button type="submit">Envoyer</button>
          </form>
        )}
      </div>

      <div className='foot'>
        <Footer />
      </div>
    </div>
  );
};

export default Contact;
