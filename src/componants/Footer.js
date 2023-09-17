


import React, { useEffect, useState } from 'react';
import github from "../image/footer/github.png";
import Linkedin from "../image/footer/linkedin.png";


const Footer = () => {
  const [isAtFooter, setIsAtFooter] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const footer = document.querySelector('.footer');
      if (footer) {
        const distanceToFooter = footer.getBoundingClientRect().top;
        setIsAtFooter(distanceToFooter <= window.innerHeight);
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  useEffect(() => {
    if (isAtFooter) {
      // Si le pied de page est atteint, définissez la hauteur minimale du corps de la page pour empêcher le défilement supplémentaire.
      document.body.style.minHeight = `${window.innerHeight}px`;
    } else {
      // Réinitialisez la hauteur minimale du corps de la page lorsque le pied de page n'est pas atteint.
      document.body.style.minHeight = 'auto';
    }
  }, [isAtFooter]);

  return (
    <footer className={`footer ${isAtFooter ? 'at-footer' : ''}`}>
      <ul className="footer-links">
        <li className="footer-link"><a href="https://github.com/Malle02"><img className="img_foot" src={github} alt="" /></a></li>
        <li className="footer-link"><a href="https://www.linkedin.com/in/malle-traore-20001102d"><img className="img_foot" src={Linkedin} alt="" /></a></li>
    
      </ul>
      <p> <a style={{color:'#201e30'}} href="mailto:malle.traore02.pro@gmail.com">malle.traore02.pro@gmail.com</a></p> 
      
      <p>&copy; 2023 TRAORE-MALLE. Tous droits réservés.</p>
    </footer>
  );
};

export default Footer;
