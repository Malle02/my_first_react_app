import React, { useEffect, useState } from 'react';
import Navigation from '../componants/Navigation';
import Typewriter from '../componants/Typewriter';
import cv from '../image/projet/cv.png';
import dvd from '../image/projet/dvd_c.png';
import facture_js from '../image/projet/facture_js.png';
import gestio_Sala from '../image/projet/gestion_des_salarier.png';
import HIKY from '../image/projet/hiky_store.png';
import mansa from '../image/projet/portfolio_class.png';
import c_sharp_Updates from '../image/projet/projet_interagire_avec_la_bd_ajout_calcule_sup_c.png';
import Td_php from '../image/projet/tp_connection_requette multiple_a_la_bd.png';
import Zoo from '../image/projet/Zoo.png';
import MaPhoto from '../image/Photo pro.png';



import Block from '../componants/Block';

import Footer from '../componants/Footer';
import Background from '../componants/Background';
import Aos from 'aos';
import 'aos/dist/aos.css'
import '../style/style_bloc.css'



import '../style/style_bac1.css';



  
const blocks = [
  {
    title: 'BTS SIO - OPTION SLAM',
    content: (
      <div>
        <p>
          Actuellement en deuxième année de mon BTS SIO, je continue
          d'approfondir mes compétences en informatique et en gestion des
          systèmes d'information.
        </p>
        <p>
          J'ai développé une expertise plus avancée en programmation, en
          administration de bases de données, en virtualisation, et en gestion
          de projet.
        </p>
        <p>
          J'ai également eu l'occasion de travailler pendant mes stages sur des
          projets concrets, ce qui m'a permis d'appliquer mes connaissances en
          situation réelle.
        </p>
      </div>
    ),
  },
  {
    title: 'BTS SIO',
    content: (
      <div>
        <p>
          Durant ma première année de BTS SIO, j'ai acquis une base solide en
          informatique et en gestion des systèmes d'information.
        </p>
        <p>
          J'ai appris à concevoir, développer et maintenir des applications
          informatiques. J'ai également développé des compétences en gestion de
          projet, en résolution de problèmes informatiques, et en communication
          avec les utilisateurs.
        </p>
        <p>
          Parmi les sujets abordés, on peut citer la programmation, les bases
          de données, et la sécurité informatique.
        </p>
      </div>
    ),
    initiallyExpanded: true,
  },
  {
    title: 'BAC STMG',
    content: (
      <div>
        <p>
          Au cours de ma formation en Baccalauréat STMG, avec une spécialité en
          Mercatique, j'ai acquis une solide compréhension des principes
          fondamentaux du marketing.
        </p>
        <p>
          J'ai appris à analyser les marchés, à élaborer des stratégies
          marketing, et à utiliser des outils tels que les études de marché pour
          prendre des décisions éclairées.
        </p>
        <p>
          J'ai également développé des compétences en gestion, en économie, en
          communication, et en droit.
        </p>
      </div>
    ),
  },
];




const Home = () => {

  useEffect(() => {
    const hash = window.location.hash;
    if (hash === '#projet') {
        const projetElement = document.getElementById('projet');
        if (projetElement) {
            projetElement.scrollIntoView({ behavior: 'smooth' });
        }
    }
 

    
  },
    []);
  
        // AOS

  useEffect(() => {
    Aos.init(); 
  }, []);

  
  const [expandedIndex, setExpandedIndex] = useState(1);
  
  return (
    <div  className='home-container'>
      
       
       
      <div className='premiere_partie'>
     
        <Background />
        <Navigation />
        <h1  className='name '  data-aos="flip-left"
     data-aos-easing="ease-out-cubic"
     data-aos-duration="2000">Mallé TRAORE</h1>
      <div className='bienvenue' data-aos="fade-up" data-aos-easing="ease" data-aos-delay="400" data-aos-duration="800">
        <Typewriter text='["Bienvenue sur mon portfolio "]' period="2000" />
      </div>
      
      <div className='mouse'>
        <a href="#me" className='hover-link' >
          <span className='default-text'>Partez à ma découverte</span>
          <span className='hover-text'>Cliquez ici</span>
        </a>
        </div>
      </div>
      <div id='me'></div>
      <h1 id='moi'  ></h1>
      <div className='presentation'>
        <div className='img'><img src={MaPhoto} alt="" /></div>
        <div className='my_resume'>
        <section>
            <h4 data-aos="fade-up" >Qui suis-je ?</h4>
            <hr />
    <p className='tilte_span'>
      Je suis Mallé TRAORE, un passionné de technologie avec une variété de compétences impressionnantes.
    </p>
  </section>

  <section>
    <h3 data-aos="zoom-in-right">🚀 Compétences:</h3>
    <ul>
      <li>
        <strong>Développement Front-End:</strong> Je jongle avec Javascript (React), HTML et CSS pour donner vie aux interfaces.
      </li>
      <li>
        <strong>Développement Back-End:</strong> Je navigue aisément entre Python, C#, Java, Mysql et PHP pour créer des fonctionnalités puissantes.
      </li>
      <li>
        <strong>CMS Expertise:</strong> J'ai travaillé avec Shopify, WordPress et Elementor Pro pour créer des expériences web exceptionnelles.
      </li>
      <li>
        <strong>Réseau et Sécurité:</strong> Je configure des postes de travail, administre des services comme DHCP, VPN et DFS, tout en maintenant une sécurité de pointe.
      </li>
    </ul>
  </section>

  <section>
    <h3 data-aos="zoom-in-right">💼 Expériences:</h3>
    <ul>
      <li>
        <strong>Stage chez DIZAYGN (mai 2023 - juillet 2023):</strong> J'ai contribué au développement de sites Web sans code, en collaboration étroite avec une équipe dynamique.
      </li>
      <li>
        <strong>Bénévolat aux Restos du cœur Paris 19 (depuis janvier 2019):</strong> J'aide à distribuer plus de 500 repas par semaine pour soutenir les personnes dans le besoin.
      </li>
    </ul>
  </section>

  <section>
    <h3 data-aos="zoom-in-right">📚 Formation:</h3>
    <ul>
      <li>
        <strong>BTS SIO Services informatiques aux organisations (2022 - 2024):</strong> Actuellement à l'ECOLE NATIONALE DE COMMERCE, je me spécialise en Solution logicielles et applications métiers (SLAM).
      </li>
      <li>
        <strong>Certifications:</strong> Je me forme en cybersécurité et en protection des données personnelles, montrant mon engagement pour un environnement numérique sûr.
      </li>
    </ul>
  </section>

  <section>
    <p>
      🤝 Pour moi, la technologie est plus qu'une passion, c'est un moyen d'impact. Je suis ravi de mettre mes compétences au service de solutions innovantes.
    </p>
    <p>
      Je vous laisse explorer mon portfolio. Si vous partagez ma passion pour la technologie et l'innovation, discutons-en !
    </p>
  </section>
</div>

      </div>
      <div className='bouton'>
        <button data-aos="fade-down-left" className='btn1'><a  href="#education"  >Mon parcours éducatif</a></button>
        <button data-aos="fade-down-right" className='btn2'><a  href="#parcours">Mon parcours proféssionnels</a></button>
        
      </div>
      
    
      <div className='education' id='education'>
        <h4  data-aos="fade-down" >Mon Parcours Éducatif</h4>
        <hr />
        <div data-aos="fade-right" data-aos-duration="2000" className="block-container">
        {blocks.map((block, index) => (
        <Block
          key={index}
          index={index}
          title={block.title}
          content={block.content}
          expandedIndex={expandedIndex}
          setExpandedIndex={setExpandedIndex}
        />
      ))}

      </div>
      </div>

     
      <section id="parcours" className="portfolio-section">
        <h4   data-aos="fade-up">Parcours Professionnel</h4>
        <hr />
    <div data-aos="flip-left" className="experience">
        <h3>Bénévole au Restos du Cœur</h3>
        <p><span class="date">Janvier 2021 - Actuellement</span><br/>
            J'ai travaillé en tant que bénévole au Restos du Cœur, participant à diverses activités caritatives pour aider les personnes dans le besoin.</p>
    </div>
    <div data-aos="flip-left" class="experience" id='experience'>
        <h3>Stage Développeur No Code chez Disaygn</h3>
        <p><span class="date">Mai 2023 - Juillet 2023</span> <br />
            J'ai effectué un stage en tant que développeur No Code chez Disaygn, où j'ai contribué à la création d'applications sans nécessiter de codage traditionnel.</p>
    </div>
      </section>
      <section  id='projet'>
      
        <h4  data-aos="fade-down"> Projets et Travaux pratiques</h4>
        <hr />
        
        <div className='imageP'>
      <div className='PimgContainer'>
        <a href="http://malletd.epizy.com/ppe_zoo/index.php">
          <img className='Pimg' src={Zoo} alt="Projet Gestion du site d'un ZOO en PHP" />
            </a>
            <h6>Language PHP</h6>
        <p>Projet de gestion du site d'un zoo, réalisé en PHP en collaboration avec un camarade.</p>
      </div>

      <div className='PimgContainer'>
        <a href="https://github.com/Malle02/projet_location_DVD">
          <img  className='Pimg' src={dvd} alt="Projet de location de DVD en WPF C#" />
        </a> <h6>Language C#</h6>
        <p>Projet de location de DVD réalisé en WPF C#.</p>
      </div>

      <div className='PimgContainer'>
        <a href="https://malle02.github.io/facture_js/">
          <img className='Pimg' src={facture_js} alt="Application de facturation en JavaScript" />
        </a> <h6>Language Javascript</h6>
        <p>Application de facturation réalisée en JavaScript capable de générer des factures automatiquement.</p>
      </div>

      <div className='PimgContainer'>
        <a href="https://hikystore.com/">
          <img  className='Pimg' src={HIKY} alt="Site web e-commerce HIKY sur Shopify" />
        </a> <h6>Language Shopify</h6>
        <p>Site web e-commerce HIKYSTORE réalisé en groupe sur Shopify pendant mon stage chez Disaygn.</p>
      </div>

      <div className='PimgContainer'>
        <a href="http://gestiondessalarier.great-site.net/">
          <img  className='Pimg' src={gestio_Sala} alt="Site web de gestion des salariés d'une entreprise" />
            </a>
            <h6>Language PHP JS</h6>
        <p>Site web de gestion des salariés d'une entreprise réalisé en PHP et JavaScript.</p>
          </div>
          
          
      <div className='PimgContainer'>
        <a href="https://malle02.github.io/iframe.ML/">
          <img  className='Pimg' style={{height:"67.6%"}} src={mansa} alt="Portfolio Mansa créé en HTML et CSS" />
            </a>
            <h6>HTML CSS JS </h6>
        <p>Premier portfolio créé à partir de HTML et CSS et Javascript, enferment tout mes TP.</p>
      </div>

      <div className='PimgContainer'>
        <a href="https://github.com/Malle02/Training_Update">
          <img  className='Pimg' src={c_sharp_Updates} alt="TP C# sur l'interaction avec une base de données" />
            </a>
            <h6>Language C#</h6>
        <p>Travaux pratiques en C# sur l'interaction entre la base de données et l'interface pour améliorer l'expérience utilisateur.</p>
      </div>

      <div className='PimgContainer'>
        <a href="http://malletrsiteweb02.epizy.com/">
          <img className='Pimg' src={Td_php} alt="Travaux pratiques PHP sur les manipulations de requêtes SQL" />
            </a>
            <h6>Language PHP</h6>
        <p>Travaux pratiques en PHP sur les manipulations de requêtes SQL avec une base de données.</p>
      </div>

    </div>

    <div className='my_cvContainer'>
      <a href="https://cvdesignr.com/p/641654e2d1a2d">
        <img  className='my_cv' src={cv} alt="Mon CV" />
      </a>
      <h6>Et voilà mon CV.</h6>
    </div>
      </section>

      <div  class="section-title" 
        ><h4  data-aos="flip-left" style={{color:"black"}}>Notes de Synthèse</h4>
     <hr />  </div> 
      <div  class="section-notes">
       
        <div  class="summary" >
            Au terme de ma première année en classe de BTS SIO1 Slam au lycée PARC DE VILGENIS, j'ai eu l'opportunité exceptionnelle d'effectuer un stage au sein de DIZAYGN, une expérience qui a été déterminante pour mon parcours professionnel.
        </div>
        <a class="report-link" href="https://1drv.ms/b/s!ArTH9M77REB3mdcp1IVPcSyf7wFtvQ?e=nOpx1Y" target="_blank">Voir le rapport de stage</a>
        <a class="report-link" href="#" target="_blank">Voir mon Tableau de synthèse des réalisations professionnelles  </a>
    </div>
      <div className='etablissement'>
        <iframe
          // ecole nationnale de cpommerce
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2172.138715350368!2d2.3176629113888154!3d48.89710027121785!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47e66f00a0e11a9d%3A0x82ceb7280013e727!2s%C3%89cole%20Nationale%20de%20Commerce%20-%20E.N.C!5e1!3m2!1sfr!2sfr!4v1694627603748!5m2!1sfr!2sfr"
        width="600"
        height="450"
        style={{ border: '0' }}
        allowFullScreen=""
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
        title="Carte Google Maps"
      ></iframe>
      </div>
   <Footer/>
    </div>
   
  );
};

export default Home;