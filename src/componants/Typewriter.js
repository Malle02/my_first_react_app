
import React, { useState, useEffect, useRef } from 'react';

//  Typewriter  prend deux props :
// - text : une liste de mots ou phrases sous forme de JSON
// - period : le temps d'attente avant d'afficher le prochain mot/phrase
const Typewriter = ({ text, period }) => {
  const elRef = useRef(null); // l'élément HTML qui contiendra le texte
  const cursorRef = useRef(null); // le cursuer
  const [shouldDelete, setShouldDelete] = useState(false); 
  let loopNum = 0; // Compteur 
  let txt = ''; 
  let isDeleting = false; 
  const toRotate = JSON.parse(text); // Convertit la chaîne JSON en tableau
  const periodValue = parseInt(period, 10) || 3000; // Temps d'attente après chaque effacement
  const displayTime = 2000; 
  const waitTimeBeforeDelete = 2000; 

  // Fonction principale qui gère l'effet d'écriture et d'effacement
  const tick = () => {
    const i = loopNum % toRotate.length; // Récupère l'index du texte à afficher
    const fullTxt = toRotate[i]; 

    //  (entre 60ms et 160ms)
    let delta = 160 - 100 * Math.random(); 

    if (isDeleting) {
      // Si on est en train d'effacer, réduit la vitesse d'affichage
      delta = 100 - 50 * Math.random();
    }

    if (!isDeleting && txt === fullTxt) {
      // Si le texte est entièrement affiché, on attend avant de commencer à effacer
      delta = shouldDelete ? displayTime : waitTimeBeforeDelete;
      isDeleting = true; // Déclenche l'effacement
    }

    // Gestion de l'ajout et de la suppression de lettres
    isDeleting 
      ? (txt = fullTxt.substring(0, txt.length - 1)) 
      : (txt = fullTxt.substring(0, txt.length + 1));

    // Met à jour le contenu HTML avec le texte et un curseur clignotant
    elRef.current.innerHTML = `<span class="wrap">${txt}</span><span ref={cursorRef} class="cursor">|</span>`;

    if (isDeleting && txt === '') {
      // Quand le texte est complètement effacé, passe au mot suivant
      isDeleting = false;
      loopNum++;
      
      if (shouldDelete) {
        setShouldDelete(false);
        delta = displayTime; // Attend avant d'afficher le texte suivant
      } else {
        setShouldDelete(true);
        delta = waitTimeBeforeDelete; // Attend avant d'effacer à nouveau
      }
    }

    // Supprime l'ancien timeout et en définit un nouveau pour l'animation continue
    clearTimeout(window.typewriterTimeout);
    window.typewriterTimeout = setTimeout(() => {
      tick();
    }, delta);
  };

  // useEffect pour lancer le typewriter et appliquer les styles au montage
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
        0%, 100% { opacity: 1; }
        50% { opacity: 0; }
      }
    `;
    document.body.appendChild(style); // Ajoute les styles dynamiquement au DOM

    tick(); // Démarre l'animation

    return () => {
      // Nettoie le timeout à la suppression du composant
      clearTimeout(window.typewriterTimeout);
    };
  }, []);

  // Retourne un élément div où le texte sera affiché
  return <div ref={elRef} className="typewrite"></div>;
};

export default Typewriter;





































































// import React, { useState, useEffect, useRef } from 'react';

// const Typewriter = ({ text, period }) => {
//   const elRef = useRef(null);
//   const cursorRef = useRef(null);
//   const [shouldDelete, setShouldDelete] = useState(false);
//   let loopNum = 0;
//   let txt = '';
//   let isDeleting = false;
//   const toRotate = JSON.parse(text);
//   const periodValue = parseInt(period, 10) || 3000; // Temps d'attente après chaque effacement
//   const displayTime = 2000; // Temps d'affichage complet avant l'effacement (2 secondes)
//   const waitTimeBeforeDelete = 2000; // Temps d'attente avant l'effacement complet (10 secondes)

//   const tick = () => {
//     const i = loopNum % toRotate.length;
//     const fullTxt = toRotate[i];

//     // Vitesse d'écriture plus lente
//     let delta = 160 - 100 * Math.random(); // 

//     if (isDeleting) {
//       // Vitesse d'effacement plus lente
//       delta = 100 - 50 * Math.random();
//     }

//     if (!isDeleting && txt === fullTxt) {
//       delta = shouldDelete ? displayTime : waitTimeBeforeDelete; // Temps d'affichage complet avant l'effacement ou temps d'attente avant l'effacement complet
//       isDeleting = true;
//     }

//     isDeleting ? (txt = fullTxt.substring(0, txt.length - 1)) : (txt = fullTxt.substring(0, txt.length + 1));

//     elRef.current.innerHTML = `<span class="wrap">${txt}</span><span ref={cursorRef} class="cursor">|</span>`;

//     if (isDeleting && txt === '') {
//       isDeleting = false;
//       loopNum++;
//       if (shouldDelete) {
//         setShouldDelete(false);
//         delta = displayTime;
//       } else {
//         setShouldDelete(true);
//         delta = waitTimeBeforeDelete;
//       }
//     }

//     clearTimeout(window.typewriterTimeout);
//     window.typewriterTimeout = setTimeout(() => {
//       tick();
//     }, delta);
//   };

//   useEffect(() => {
//     const style = document.createElement('style');
//     style.type = 'text/css';
//     style.innerHTML = `
//       .typewrite > .wrap {
//         border-right: 0.08em solid #fff;
//         display: inline;
        
//       }
//       .typewrite .cursor {
//         display: inline;
//         animation: blink 0.7s infinite;
//       }
//       @keyframes blink {
//         0%, 100% {
//           opacity: 1;
//         }
//         50% {
//           opacity: 0;
//         }
//       }
//     `;
//     document.body.appendChild(style);

//     tick();

//     return () => {
//       clearTimeout(window.typewriterTimeout);
//     };
//   }, []);

//   return <div ref={elRef} className="typewrite"></div>;
// };

// export default Typewriter;
