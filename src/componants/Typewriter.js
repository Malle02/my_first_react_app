import React, { useState, useEffect, useRef } from 'react';

const Typewriter = ({ text, period }) => {
  const elRef = useRef(null);
  const cursorRef = useRef(null);
  const [shouldDelete, setShouldDelete] = useState(false);
  let loopNum = 0;
  let txt = '';
  let isDeleting = false;
  const toRotate = JSON.parse(text);
  const periodValue = parseInt(period, 10) || 3000; // Temps d'attente après chaque effacement
  const displayTime = 2000; // Temps d'affichage complet avant l'effacement (2 secondes)
  const waitTimeBeforeDelete = 2000; // Temps d'attente avant l'effacement complet (10 secondes)

  const tick = () => {
    const i = loopNum % toRotate.length;
    const fullTxt = toRotate[i];

    // Vitesse d'écriture plus lente
    let delta = 160 - 100 * Math.random();

    if (isDeleting) {
      // Vitesse d'effacement plus lente
      delta = 100 - 50 * Math.random();
    }

    if (!isDeleting && txt === fullTxt) {
      delta = shouldDelete ? displayTime : waitTimeBeforeDelete; // Temps d'affichage complet avant l'effacement ou temps d'attente avant l'effacement complet
      isDeleting = true;
    }

    isDeleting ? (txt = fullTxt.substring(0, txt.length - 1)) : (txt = fullTxt.substring(0, txt.length + 1));

    elRef.current.innerHTML = `<span class="wrap">${txt}</span><span ref={cursorRef} class="cursor">|</span>`;

    if (isDeleting && txt === '') {
      isDeleting = false;
      loopNum++;
      if (shouldDelete) {
        setShouldDelete(false);
        // Ajouter un temps d'affichage après l'effacement avant de passer au prochain texte
        delta = displayTime;
      } else {
        // Activer l'effacement complet après l'attente de 10 secondes
        setShouldDelete(true);
        delta = waitTimeBeforeDelete;
      }
    }

    clearTimeout(window.typewriterTimeout);
    window.typewriterTimeout = setTimeout(() => {
      tick();
    }, delta);
  };

  useEffect(() => {
    const style = document.createElement('style');
    style.type = 'text/css';
    style.innerHTML = `
      .typewrite > .wrap {
        border-right: 0.08em solid #fff;
        display: inline;
        
      }
      .typewrite .cursor {
        display: inline;
        animation: blink 0.7s infinite;
      }
      @keyframes blink {
        0%, 100% {
          opacity: 1;
        }
        50% {
          opacity: 0;
        }
      }
    `;
    document.body.appendChild(style);

    tick();

    return () => {
      clearTimeout(window.typewriterTimeout);
    };
  }, []);

  return <div ref={elRef} className="typewrite"></div>;
};

export default Typewriter;
