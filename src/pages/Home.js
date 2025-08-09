import React, { useEffect, useState } from 'react';
import Navigation from '../componants/Navigation';
import Typewriter from '../componants/Typewriter';
import cv from '../image/projet/cv.png';
import dvd from '../image/projet/dvd_c.png';
import facture_js from '../image/projet/facture_js.png';
import gestio_Sala from '../image/projet/gestion_des_salarier.png';
import mansa from '../image/projet/portfolio_class.png';
import c_sharp_Updates from '../image/projet/projet_interagire_avec_la_bd_ajout_calcule_sup_c.png';
import Zoo from '../image/projet/Zoo.png';
import MaPhoto from '../image/Photo pro.png';
import quiz from '../image/projet/quis.png';
import cinema from '../image/projet/cinemas.png';
import banque from '../image/projet/banq.png';
import portfolio from '../image/projet/portfolio.png';
import cisco from '../image/certif/cisco.png';
import Rgpd from '../image/certif/cnil.png';
import anssi from '../image/certif/anssi.png';

import paint from '../video/Paint.png';
import paintDemo from '../video/paint.mp4';
import space from '../video/Space.png';
import spaceDemo from '../video/Space.mp4';
import Rpg from '../video/RPGtex.png';
import RpgDemo from '../video/RPG.mp4';
import Egg from '../video/Egg.png';
import EggDemo from '../video/Egg.mp4';
import eboutique from '../video/mandingchic.png';
import Rave from '../video/Rave.png';
import GamePOINT from '../video/Gamepoint.png';
import GamePOINTDemo from '../video/Game.mp4';
import Itunes from '../video/Itunes.jpeg';



import Block from '../componants/Block';

import Footer from '../componants/Footer';
import Background from '../componants/Background';
import Aos from 'aos';
import 'aos/dist/aos.css'
import '../style/style_bloc.css'



import '../style/style_bac1.css';



  
const blocks = [
  {
    title: 'LICENCE PRO - PROJET WEB ET MOBILE',
    content: (
      <div>
        <p>
          Actuellement en licence professionnelle Métiers de l'informatique : applications web - 
          Parcours Projet Web et Mobile à Sorbonne Université, je spécialise mes compétences 
          dans le développement web et mobile.
        </p>
        <p>
          Cette formation en alternance me permet d'approfondir mes connaissances en 
          développement Full Stack, gestion de projet agile, UI/UX Design, et sécurité 
          des applications web. J'acquiers une expertise dans les frameworks modernes 
          et les CMS les plus populaires.
        </p>
        <p>
          Grâce aux projets en entreprise, j'applique concrètement mes compétences sur 
          des missions variées : développement d'applications web/mobile, réalisation 
          d'ERP, migration de portails, et outils métiers spécialisés.
        </p>
      </div>
    ),
    initiallyExpanded: true,
  },
  {
    title: 'BTS SIO - OPTION SLAM',
    content: (
      <div>
        <p>
          Diplômé du BTS SIO option SLAM (Solutions Logicielles et Applications Métiers), 
          j'ai développé une expertise solide en développement d'applications et en 
          gestion des systèmes d'information.
        </p>
        <p>
          J'ai acquis des compétences avancées en programmation orientée objet, 
          en conception et administration de bases de données, en développement web, 
          et en gestion de projet informatique.
        </p>
        <p>
          Les stages effectués m'ont permis de mettre en pratique mes connaissances 
          sur des projets concrets, renforçant ainsi mon expérience professionnelle 
          et ma capacité d'adaptation aux besoins des entreprises.
        </p>
      </div>
    ),
  },
  {
    title: 'BTS SIO - PREMIÈRE ANNÉE',
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
      Je suis Mallé TRAORE, développeur web titulaire d'une Licence Pro Projets Web et Mobile (Bac+3), passionné par le développement logiciel et les technologies back-end.
    </p>
  </section>

  <section>
    <h3 data-aos="zoom-in-right">Compétences:</h3>
    <ul>
      <li>
        <strong>Développement Front-End:</strong> Je jongle avec Javascript (React, Vue), HTML et CSS pour donner vie aux interfaces.
      </li>
      <li>
        <strong>Développement Back-End:</strong> Je maîtrise C# (.NET, WPF), Python (Django), PHP (Laravel, Symfony), Java (Swing, OpenGL), Node.js (Express) et les bases de données MySQL, SQL, MongoDB pour créer des solutions robustes et sécurisées.
      </li>
      <li>
        <strong>CMS Expertise:</strong> J'ai travaillé avec Shopify et WordPress pour créer des expériences web exceptionnelles.
      </li>
      <li>
        <strong>Administration réseau et cybersécurité:</strong> Je configure DHCP, Active Directory, VPN, DFS et applique les bonnes pratiques de sécurité, notamment la protection des données et la prévention des injections SQL.
      </li>
    </ul>
  </section>

  <section>
    <h3 data-aos="zoom-in-right">Expériences:</h3>
    <ul>
      <li>
        <strong>Stage développeur Back-End/Logiciel chez PIXECURITY (février 2025 - septembre 2025):</strong> Développement d'API sécurisées avec .NET, gestion PostgreSQL et implémentation de bonnes pratiques en sécurité.
      </li>
      <li>
        <strong>Stage développeur Back-end chez FEDHUBS (janvier 2024 - mars 2024):</strong> Développement d'API RESTful pour réservations avec paiements partagés, optimisation de bases de données et tests unitaires.
      </li>
      <li>
        <strong>Stage développeur Web chez DIZAYGN (mai 2023 - juillet 2023):</strong> Développement de sites e-commerce avec Shopify, WordPress, intégration responsive et analyse des besoins clients.
      </li>
      <li>
        <strong>Bénévolat aux Restos du cœur Paris 19 (depuis janvier 2019):</strong> Distribution de plus de 500 repas par semaine pour soutenir les personnes dans le besoin.
      </li>
    </ul>
  </section>

  <section>
    <h3 data-aos="zoom-in-right">Formation:</h3>
    <ul>
      <li>
        <strong>Licence professionnelle Métiers de l'informatique : applications web - Parcours Projet Web et Mobile (2024 - 2025):</strong> Formation en alternance à Sorbonne Université spécialisée en développement Full Stack, UI/UX Design, sécurité web et gestion agile.
      </li>
      <li>
        <strong>BTS SIO Services informatiques aux organisations (2022 - 2024):</strong> Diplômé de l'École Nationale de Commerce, spécialisation SLAM (Solutions Logicielles et Applications Métiers).
      </li>
      <li>
        <strong>Certifications:</strong> MOOC Cybersécurité ANSSI, Introduction to Cybersecurity Cisco, Formation RGPD CNIL - expertise en sécurité et protection des données.
      </li>
    </ul>
  </section>

  <section>
    <p>
      Pour moi, la technologie est plus qu'une passion, c'est un moyen d'impact. Je suis ravi de mettre mes compétences au service de solutions innovantes.
    </p>
    <p>
      Disponible à partir de septembre 2025, je recherche une première opportunité pour mettre en pratique mes compétences dans un environnement stimulant. Discutons-en !
    </p>
  </section>
</div>

      </div>
      <div className='bouton'>
        <button data-aos="fade-down-left" className='btn1'><a  href="#education"  >Mon parcours éducatif</a></button>
        <button data-aos="fade-down-right" className='btn2'><a  href="#parcours">Mon parcours professionnel</a></button>
        
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
        <div data-aos="flip-left" class="experience" id='experience'>
        <h3>Stage Développeur Back-End/Logiciel chez PIXECURITY </h3>
        <p><span class="date">février 2025 - septembre 2025</span> <br />
            Développement d'API sécurisées avec .NET, gestion PostgreSQL et implémentation de bonnes pratiques en sécurité.</p>
    </div>
        <div data-aos="flip-left" class="experience" id='experience'>
        <h3>Stage Développeur No Code chez Disaygn</h3>
        <p><span class="date">Mai 2023 - Juillet 2023</span> <br />
            J'ai effectué un stage en tant que développeur No Code chez Disaygn, où j'ai contribué à la création d'applications sans nécessiter de codage traditionnel.</p>
    </div>
    <div data-aos="flip-left" class="experience" id='experience'>
        <h3>Stage Développeur Back-end chez FEDHUBS</h3>
        <p><span class="date">Janvier 2024 - Mars 2024</span> <br />
            J'ai effectué un stage en tant que développeur Back-end chez FEDHUBS, où j'ai contribué activement au développement d'API et à la réalisation de tests unitaires pour l'application. Collaboration étroite avec l'équipe front-end pour assurer une intégration fluide des fonctionnalité.</p>
    </div>
    <div data-aos="flip-left" className="experience">
        <h3>Bénévole au Restos du Cœur</h3>
        <p><span class="date">Janvier 2021 - Actuellement</span><br/>
            J'ai travaillé en tant que bénévole au Restos du Cœur, participant à diverses activités caritatives pour aider les personnes dans le besoin.</p>
    </div>
    
      </section>
      <section  id='projet'>
      
        <h4  data-aos="fade-down"> Projets et Travaux pratiques</h4>
        <hr />
        
        <div className='imageP'>
    
          
<div className='PimgContainer'>
        <a href="https://github.com/Malle02/Paint_JavaSwing">
          <img className='Pimg' src={paint} alt="Paint" />
            </a>
            <h6>Langage JAVA</h6>
        <p>Projet de réalisation d'un logiciel de dessin similaire à Paint en Java Swing, intégrant plusieurs fonctionnalités de dessin : tracé de formes, gestion des couleurs, et outils de modification graphique.<a href={paintDemo}>Demo</a></p>
          </div>

      <div className='PimgContainer'>
        <a href="https://github.com/Malle02/Space_Invaders">
          <img  className='Pimg' src={space} alt="Space" />
        </a> <h6>Langage JAVA</h6>
        <p>Jeu Space Invaders développé en OpenGL 2D avec rendu 3D, proposant plusieurs niveaux de difficulté et des ennemis aux capacités variées. Projet disponible sur GitHub. <a href={spaceDemo}>Demo</a></p>
          </div>
          <div className='PimgContainer'>
        <a href="https://github.com/Malle02/Projet_RPG">
          <img className='Pimg' src={Rpg} alt="RPG" />
            </a>
            <h6>Langage JAVA</h6>
        <p>RPG textuel dans un donjon avec système de classes (sorcier, guerrier, etc.), combats contre des monstres et gestion d'inventaire. Mécaniques de jeu avancées en mode console.<a href={RpgDemo}>Demo</a></p>
          </div>

      <div className='PimgContainer'>
        <a href="https://github.com/Malle02/ItunesReactNative">
          <img  className='Pimg' src={Itunes} alt="Itunes" />
        </a> <h6>Langage React Native</h6>
        <p>Application musicale iTunes intégrant l'API officielle pour écouter des extraits, gérer les favoris, rechercher des albums et découvrir de nouveaux artistes.</p>
          </div>
          <div className='PimgContainer'>
        <a href="https://github.com/Malle02/RaveStudioMall-">
              <img  className='Pimg' src={Rave} alt="Rave." />
            </a>
            <h6>Langage React Native</h6>
        <p>Projet innovant utilisant une API Python basée sur l'IA pour transformer des sons en sonorités d'instruments (guitare, jazz, tambour). Interface mobile intuitive pour l'expérimentation musicale.</p>
          </div>

      <div className='PimgContainer'>
        <a href="https://github.com/Malle02/GamePoint">
          <img  className='Pimg' src={GamePOINT} alt="GamePoint" />
        </a> <h6>Langage React Native/Symfony</h6>
        <p>Application de fidélité collaborative avec système de points, scan de QR codes, backend Symfony/MySQL et interface mobile React Native. Gestion complète des récompenses utilisateurs.<a href={GamePOINTDemo}>Demo</a></p>
          </div>
          <div className='PimgContainer'>
        <a href="https://github.com/Malle02/Egg-n_Tea_Timer">
          <img className='Pimg' src={Egg} alt="Egg and tea" />
            </a>
            <h6>Langage SVELTE</h6>
        <p>Application web collaborative de chronomètres quotidiens développée en Svelte, spécialisée dans la préparation du thé avec minuteurs personnalisables et notifications.<a href="https://egg-n-tea.netlify.app/">Demo</a></p>
          </div>

      <div className='PimgContainer'>
        <a href="https://github.com/Malle02/eboutique">
          <img  className='Pimg' src={eboutique} alt="Eboutique" />
        </a> <h6>Langage Symfony</h6>
        <p>E-boutique complète développée en Symfony avec base de données MySQL, intégrant gestion des produits, panier d'achat, système de paiement et interface d'administration.<a href="https://traore2.alwaysdata.net/boutique/">Demo</a></p>
          </div>

          <div className='PimgContainer'>
        <a href="https://movies-api-website.netlify.app">
          <img className='Pimg' src={cinema} alt="Travaux pratiques VUEjs  portant sur les manipulations de requêtes API de cinéma, l'objectif est d'afficher mes tendances dans le monde du cinéma." />
            </a>
            <h6>Language VUEjs</h6>
        <p>Travaux pratiques VUEjs  portant sur les manipulations de requêtes API de cinéma, l'objectif est d'afficher mes tendances dans le monde du cinéma.</p>
          </div>

      <div className='PimgContainer'>
        <a href="https://github.com/Malle02/projet_location_DVD">
          <img  className='Pimg' src={dvd} alt="Projet de location de DVD en WPF C#" />
        </a> <h6>Language C#</h6>
        <p>Projet de location de DVD réalisé en WPF C#.</p>
          </div>

          <div className='PimgContainer'>
        <a href="https://github.com/Malle02/projetBanque.git">
          <img className='Pimg' src={banque} alt="Travaux pratiques Java sur la POO" />
            </a>
            <h6>Language JAVA</h6>
        <p>Travaux pratiques en JAVA sur la POO, la gestion des comptes bancaires.</p>
      </div>
          
         
          
          <div className='PimgContainer'>
        <a href="https://github.com/Malle02/PPE_QUIZ.git">
          <img className='Pimg' src={quiz} alt="Travaux pratiques : Application de quiz d'histoire et géo avec React, Node.js et MySQL." />
            </a>
            <h6>Languages React, Nodejs, mysql</h6>
        <p>Travaux pratiques : Application de quiz d'histoire et géo avec React, Node.js et MySQL.</p>
      </div>

      <div className='PimgContainer'>
        <a href="https://malle02.github.io/facture_js/">
          <img className='Pimg' src={facture_js} alt="Application de facturation en JavaScript" />
        </a> <h6>Language Javascript</h6>
        <p>Application de facturation réalisée en JavaScript capable de générer des factures automatiquement.</p>
          </div>
                    
          
      <div className='PimgContainer'>
        <a href="https://malle02.github.io/iframe.ML/">
          <img  className='Pimg' style={{height:"67.6%"}} src={mansa} alt="Portfolio Mansa créé en HTML et CSS" />
            </a>
            <h6>HTML CSS JS </h6>
        <p>Premier portfolio créé à partir de HTML et CSS et Javascript, enferment tout mes TP.</p>
          </div>
          
          <div className='PimgContainer'>
        <a href="https://github.com/Malle02/ppe_zoo">
          <img className='Pimg' src={Zoo} alt="Projet Gestion du site d'un ZOO en PHP" />
            </a>
            <h6>Language PHP</h6>
        <p>Projet de gestion du site d'un zoo, réalisé en PHP en collaboration avec un camarade.</p>
          </div>
          <div className='PimgContainer'>
        <a href="https://github.com/Malle02/Gestion-des-Salarier">
          <img  className='Pimg' src={gestio_Sala} alt="Site web de gestion des salariés d'une entreprise" />
            </a>
            <h6>Language PHP JS</h6>
        <p>Site web de gestion des salariés d'une entreprise réalisé en PHP et JavaScript.</p>
          </div>

      <div className='PimgContainer'>
        <a href="https://github.com/Malle02/Training_Update">
          <img  className='Pimg' src={c_sharp_Updates} alt="TP C# sur l'interaction avec une base de données" />
            </a>
            <h6>Language C#</h6>
        <p>Travaux pratiques en C# sur l'interaction entre la base de données et l'interface pour améliorer l'expérience utilisateur.</p>
          </div>
          
          <div className='PimgContainer'>
        <a href="https://github.com/Malle02/my_first_react_app.git">
          <img className='Pimg' src={portfolio} alt="Portfolio" />
            </a>
            <h6>Languages REACjs</h6>
        <p>Portfolio</p>
      </div>
    
  
   

    </div>

    <div className='my_cvContainer'>
      <a href="https://cvdesignr.com/p/641654e2d1a2d">
        <img  className='my_cv' src={cv} alt="Mon CV" />
      </a>
      <h6>Et voilà mon CV.</h6>
    </div>
      </section>

      <section id="certifications" className="certifications-section">
  <h4 data-aos="fade-down">Mes Certifications</h4>
  <hr />
  <div className="certifications-grid">
    <div className="certification-card" data-aos="flip-left">
            <a  href="https://www.credly.com/badges/8478073c-e147-4b18-95b9-39e52fbcd61c/linked_in_profile">
              <img src={cisco} alt="Nom Certification 1" /></a>
      <h5>Certification Cisco en Cybersécurité</h5>
      <p>Introduction à la cybersécurité avec Cisco. Acquisition de connaissances fondamentales sur les cybermenaces, la détection des vulnérabilités et la défense contre les attaques.</p>
    </div>
    <div className="certification-card" data-aos="flip-left">
            <a href="https://drive.google.com/file/d/1BPh_YiC1dPZ99J_RlZrQKx3kvwJ0PVXI/view?usp=drive_link">
              <img src="https://pix-site.cdn.prismic.io/pix-site/0b7002e1-44f8-4269-b0ce-188645a2a2b1_pix-couleur.svg" alt="Nom Certification 2" />
            </a>
      <h5>Certification PIX</h5>
      <p>Description brève de la certificationMaîtrise de la recherche, de la gestion et du partage d'informations numériques. Compétences en sécurité informatique, en communication et en adaptation de contenus multimédias....</p>
          </div>
          
          <div className="certification-card" data-aos="flip-left">
            <a href="https://drive.google.com/file/d/1mpqeg6cLvh5P9ltdRIyWwjsDwsmeo3B0/view?usp=drive_link">
              <img src={anssi} alt="Nom Certification 2" /></a> 
      <h5>MOOC de l'ANSSI</h5>
      <p> Formation en ligne permettant d'acquérir des connaissances essentielles en cybersécurité, couvrant les principes fondamentaux ainsi que des sujets avancés</p>
    </div>
    <div  className="certification-card" data-aos="flip-left">
            <a href="https://drive.google.com/file/d/1lNKASPbowXgiN0q3ET4VLihaNCVMlO7D/view?usp=drive_link"> <img style={{ marginTop: "17%" }} src={Rgpd}  alt="Nom Certification 2" /></a> 
      <h5 >Atelier RGPD CNIL-Module 1</h5>
      <p >Formation sur les principes de le RGPD et ses notions clés </p>
    </div>
    <div className="certification-card" data-aos="flip-left">
     <a href="https://drive.google.com/file/d/1uA_plOt9ze37cX3tCdVfNig7S1IWOyK7/view?usp=drive_link"> <img src={Rgpd} alt="Nom Certification 2" /></a>
      <h5>Atelier RGPD CNIL-Module 2</h5>
      <p>Formation sur les principes de la protection des données </p>
    </div>
    <div className="certification-card" data-aos="flip-left">
    <a href="https://drive.google.com/file/d/1aVua1HTvV-b-7Pvs8H7d8Sv-Kc9uVR9s/view?usp=drive_link">  <img src={Rgpd} alt="Nom Certification 2" /></a>
      <h5>Atelier RGPD CNIL-Module 3</h5>
      <p>Formation sur les responsabilités des acteurs</p>
    </div>
    <div className="certification-card" data-aos="flip-left">
    <a href="https://drive.google.com/file/d/15XNUJvAk3uLYxONfIjV49YDxw022cSVj/view?usp=drive_link">  <img src={Rgpd} alt="Nom Certification 2" /></a>
      <h5>Atelier RGPD CNIL-Module 4</h5>
      <p>Formation sur le DPO et les outils de la conformité avec le RGPD</p>
    </div>
    <div className="certification-card" data-aos="flip-left">
    <a href="https://drive.google.com/file/d/1ScYYfbM-FXXImTVxVpdANhTuD6WB8Jyt/view?usp=drive_link">  <img src={Rgpd} alt="Nom Certification 2" /></a>
      <h5>Atelier RGPD CNIL-Module 5</h5>
      <p>Formation sur les collectivités territoriales</p>
    </div>
    
   
  </div>
</section>


    <div  class="section-title" 
        ><h4  data-aos="flip-left" style={{color:"black"}}>Notes de Synthèse</h4>
     <hr />  </div> 
      <div  class="section-notes">
       
        <div  class="summary" >
            Diplômé du BTS SIO option SLAM à l'École Nationale de Commerce, je poursuis actuellement ma formation en Licence professionnelle Métiers de l'informatique : applications web - Parcours Projet Web et Mobile à Sorbonne Université. Mon parcours académique s'enrichit d'expériences professionnelles variées qui ont forgé mon expertise en développement web et back-end. Actuellement en stage chez PIXECURITY, je développe mes compétences en sécurité informatique et développement d'API.
        </div>
        <a class="report-link" href="https://drive.google.com/file/d/1lRYATgEY3AKEgIBRNEYibJ3LMPIJZQAq/view?usp=sharing" target="_blank">Voir le rapport de stage DIZAYGN</a>
        <a className="report-link" href="https://drive.google.com/file/d/1hQfj_98ECUTZkBXbvddGyJpAD3MleF-w/view?usp=sharing" target="_blank">Voir le rapport de mission FEDHUBS</a>
        <a class="report-link" href="https://drive.google.com/file/d/1JhLVcT2q8ecdtYJJA-8j6MLe3bLx1IXS/view?usp=sharing" target="_blank">Voir le Tableau de synthèse des réalisations professionnelles</a>
        <div class="note-info" style={{marginTop: "15px", fontStyle: "italic", color: "#666"}}>
            Mémoire de licence professionnelle en cours de rédaction - Stage PIXECURITY (février - septembre 2025)
        </div>
    </div>
      <div className='etablissement'>
      <iframe
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