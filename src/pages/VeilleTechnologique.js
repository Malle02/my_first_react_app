// import React from 'react';
// import '../style/style_veilstecno.css';

// import Pconcurance from '../image/veilles_images/bard_gpt.png'
// import P2 from '../image/veilles_images/ia3.jpg'
// import P3 from '../image/veilles_images/ia5.jpg'
// import P4 from '../image/veilles_images/4.jpeg'
// import P5 from '../image/veilles_images/ue.jpg'
// import P7 from '../image/veilles_images/IA10.webp'
// import P8 from '../image/veilles_images/avenir.jpg'
// import P6meta from '../image/veilles_images/meta.jpg'


// const VeilleTechnologique = () => {
//     return (
//         <div className="veille-container">
          
//             <header className='veil'>
//           <h1 style={{ color: "white", marginTop: "20%" }}>Veille Technologique : Course à l'IA </h1><p style={{ color: "dodgerblue" , fontSize: "20px"}}>Concurrence et Collaboration dans le Paysage Technologique.</p>
//     </header>
//           <section className="section-introduction">
//             <h2>Introduction</h2>
//             <p>L'intelligence artificielle (IA) est devenue un pilier essentiel de l'innovation technologique, influençant de manière significative divers secteurs tels que la santé, la finance, l'industrie et le commerce électronique. Cette veille technologique vise à explorer les développements récents dans le domaine de l'IA, en mettant en lumière les avancées, les applications et les tendances.</p>
//           </section>
    
//           <section className="section-chatgpt">
//             <h2>ChatGPT et la concurrence</h2>
//             <p>Lancement et succès de ChatGPT :</p>
//             <ul>
//               <li>ChatGPT, développé par OpenAI, a été lancé en novembre 2022, offrant une conversation fluide et personnalisée grâce à son modèle de langage avancé.</li>
//               <li>En janvier 2023, seulement deux mois après son lancement, ChatGPT a atteint 100 millions d'utilisateurs actifs mensuels, ce qui témoigne de son adoption rapide et de son impact sur les interactions humaines.</li>
//             <a className='linkVeil' href="https://www.strategies.fr/actualites/culture-tech/LQ2560832C/chatgpt-en-10-dates.html">sources</a>
//             <br />
//             <a className='linkVeil' href="https://tippinsights.com/chatgpt-hits-100m-users-after-only-two-months/">sources</a>
//                 </ul>
//             <p>Réponse de Google avec Bard :</p>
//             <ul>
//               <li>En février 2023, Google a annoncé Bard, son propre chatbot basé sur l'IA, pour rivaliser avec ChatGPT.</li>
//                     <li>Bard, basé sur le modèle Lamda de Google, est un concurrent direct de ChatGPT, marquant le début d'une concurrence intense dans le domaine des chatbots conversationnels.</li>
//                     <p>La guerre de l’IA entre les géants technologiques :</p>
//               <li>L’annonce de Google a déclenché une guerre de l’IA entre les géants technologiques. Depuis l’émergence de ChatGPT en novembre 2022, plusieurs géants de la technologie ont fait des mouvements pour l’avenir. Par exemple, Microsoft a investi environ 10 milliards de dollars dans OpenAI et a intégré ChatGPT à Bing. De plus, Google a rapidement sorti Bard pour rivaliser avec ChatGPT. Ces mouvements montrent clairement que les géants de la technologie sont en concurrence pour dominer le domaine de l’IA conversationnelle.</li>
//                <a className='linkVeil' href="https://www.bbc.com/news/technology-64546299">Source</a>
//                <br />
//               <a className='linkVeil' href="https://amandaai.com/resources/blog/industry-trends/the-big-tech-ai-war/">Source</a>
//                 </ul>
//                 <img style={{width:"100%" , height: "40%"}}, marginTop:"10%", marginBottom:"10%" src={Pconcurance} alt="" />
//           </section>
    
//           <section className="section-evolution">
//             <h2>Évolution des modèles d'IA</h2>
//             <p>Lancement de GPT-4 et API pour ChatGPT :</p>
//             <ul>
//               <li>En mars 2023, OpenAI a dévoilé GPT-4, une nouvelle version de son modèle de langage avec des performances améliorées et une plus grande précision.</li>
//               <li>Simultanément, des API pour ChatGPT ont été introduites, permettant aux développeurs d'intégrer facilement les modèles ChatGPT dans leurs applications et produits.</li>
//             <a className='linkVeil' href="https://www.searchenginejournal.com/gpt-4-is-multimodal/481993/">Source</a>
//             <br />
//             <a className='linkVeil' href="https://openai.com/blog/introducing-chatgpt-and-whisper-apis">Source</a>
//                 </ul>
//             <p>Avancées dans la synthèse vocale avec Whisper :</p>
//             <ul>
//               <li>En mars 2023, OpenAI a continué à améliorer son modèle de synthèse vocale Whisper, en introduisant de nouvelles fonctionnalités et des améliorations significatives.</li>
//               <li>Whisper offre désormais des performances supérieures dans la synthèse vocale, ouvrant de nouvelles perspectives pour les applications conversationnelles et les interfaces utilisateur vocales.</li>
//                <a className='linkVeil' href="https://github.com/collabora/whisperspeech">Sources</a>
//                 </ul>
//                 <img style={{width:"100%" , height: "40%"}}, marginTop:"10%", marginBottom:"10%" src={P2} alt="" />
//           </section>
    
//           <section className="section-fusion">
//             <h2>Fusion et partenariats</h2>
//             <p>Formation de Google DeepMind :</p>
//             <ul>
//               <li>En avril 2023, Google a annoncé la fusion de Google Research et DeepMind pour former Google DeepMind.</li>
//               <li>Cette fusion vise à accélérer les progrès de Google dans le domaine de l'IA et à développer des systèmes plus avancés et responsables.</li>
//            <a className='linkVeil' href="https://blog.google/technology/ai/april-ai-update/">Sources</a>
//            <br />
//             <a className='linkVeil' href="https://aimagazine.com/articles/google-deepmind-continue-with-groundbreaking-ai-developments">Sources</a>
//                 </ul>
//             <p>Investissement d'Amazon dans Anthropic :</p>
//             <ul>
//               <li>En septembre 2023, Amazon a annoncé un investissement potentiel de jusqu'à 4 milliards de dollars dans Anthropic, soulignant l'importance croissante de l'IA dans les stratégies des grandes entreprises.</li>
//               <li>Cet investissement démontre l'engagement d'Amazon à participer à l'évolution et à l'adoption de l'IA à grande échelle.</li>
//                <a className='linkVeil' href="https://www.msn.com/en-us/money/technology/amazon-to-invest-up-to-4-billion-in-anthropic-as-ai-arms-race-escalates/ar-AA1hd21x">Source</a>
//                 </ul>
//                 <img style={{width:"100%" , height: "40%"}}, marginTop:"10%", marginBottom:"10%" src={P3} alt="" />
//           </section>
    
//           <section className="section- Windows_IA ">
           
//             <h2>Annonce de l'Assistant IA pour Windows 11 par Microsoft:</h2>
//             <ul>
//               <li>Le 23 mai 2023, Microsoft a dévoilé Windows Copilot, un assistant d'IA intégré à Windows 11. Cette fonctionnalité vise à offrir une assistance centralisée pour faciliter les interactions des utilisateurs avec leur système d'exploitation.</li>
//               <a className='linkVeil' href="https://blogs.windows.com/windowsdeveloper/2023/05/23/bringing-the-power-of-ai-to-windows-11-unlocking-a-new-era-of-productivity-for-customers-and-developers-with-windows-copilot-and-dev-home/">Sources</a>
//                 </ul>
//                 <img style={{width:"100%" , height: "40%"}}, marginTop:"10%", marginBottom:"10%" src={P4} alt="" />
                
//           </section>
//           <section className="section-reglementation">
//             <h2>Réglementation et éthique</h2>
//             <p>Avancées réglementaires dans l'UE :</p>
//             <ul>
//               <li>En juin 2023, le Parlement européen a adopté sa position de négociation sur l'Acte IA, marquant une étape importante dans la réglementation de l'IA en Europe.</li>
//               <li>L'Acte IA vise à encadrer l'utilisation des systèmes d'IA et à atténuer les risques potentiels tout en favorisant l'innovation.</li>
//                <a className='linkVeil' href="https://artificialintelligenceact.eu/fr/developpements/">Sources</a>
//                <br />
//               <a className='linkVeil' href="https://www.europarl.europa.eu/RegData/etudes/BRIE/2021/698792/EPRS_BRI%282021%29698792_EN.pdf">Sources</a>
//                 </ul>
//                 <img style={{width:"100%" , height: "40%"}}, marginTop:"10%", marginBottom:"10%" src={P5} alt="" />
                
//           </section>
//           <section className="section-NVIDIA">
//             <h2>NVIDIA atteint une capitalisation boursière de 1 000 milliards de dollars :</h2>
            
//             <ul>
//               <li>Le 30 mai 2023, NVIDIA est devenue la première entreprise de semi-conducteurs à atteindre une capitalisation boursière de 1 000 milliards de dollars. Cette réussite reflète l'importance croissante de l'IA et des technologies de traitement graphique dans l'industrie.</li>
//           <a className='linkVeil' href="https://www.youtube.com/watch?v=y7wnoFUm8m8">Source</a>
//             </ul>
//           </section>
    
//           <section className="section-meta">
//             <h2>Annonce de Meta sur le modèle LLM open source Llama 2 :</h2>
            
//             <ul>
//               <li>Le 18 juillet 2023, Meta (anciennement Facebook) a présenté Llama 2, une collection de modèles de langage pré-entraînés et affinés. Ces modèles, allant de 7 milliards à 70 milliards de paramètres, sont optimisés pour les cas d'utilisation du dialogue et témoignent de l'engagement continu de Meta dans le domaine de l'IA.</li>
//                <a className='linkVeil' href="https://ai.meta.com/research/publications/llama-2-open-foundation-and-fine-tuned-chat-models/?ref=ghost.oxen.ai">Source</a>
//                 </ul>
//                 <img style={{width:"100%" , height: "40%"}}, marginTop:"10%", marginBottom:"10%" src={P6meta} alt="" />
                
//           </section>
//           <section className="section-Elon">
//             <h2>En effet, en octobre et novembre 2023, Elon Musk et OpenAI ont fait des annonces importantes : </h2>
            
//             <ul>
//               <li>Elon Musk annonce un chatbot IA pour X appelé “Grok” : Le 6 novembre 2023, Elon Musk a annoncé le lancement de Grok, un chatbot IA pour X1234. Grok est un nouveau modèle de langage de grande taille (LLM) construit pour “aider à la poursuite de la compréhension” et injecter de l’humour dans ses réponses5. Grok a été développé par xAI, la startup d’IA d’Elon Musk6. Grok a été testé par un petit groupe d’utilisateurs aux États-Unis avant d’être déployé au public1. </li>
//               <li>Le 17 novembre 2023, Sam Altman, l’un des fondateurs et le PDG d’OpenAI, a été licencié par le conseil d’administration d’OpenAI78. Cependant, après des négociations intenses et la menace de près de tous les employés d’OpenAI de quitter l’entreprise si Altman n’était pas réintégré, Altman a finalement repris son poste de PDG789.</li>
//                <a className='linkVeil' href="https://www.msn.com/en-us/news/technology/elon-musk-announces-humorous-grok-ai-chatbot-for-x-premium-subscribers/ar-AA1jqjx4">Source</a>
//                <br />
//                 <a className='linkVeil' href="https://www.theguardian.com/technology/2023/nov/19/openai-investors-push-for-return-of-ousted-ceo-sam-altman-chatgpt?ref=biztoc.com">Source</a>
//                 </ul>
                
//           </section>
            
//           <section className="section-developpements">
//             <h2>Développements de l'année 2024</h2>
//             <p>Lancement de ChatGPT-5 par OpenAI :</p>
//             <ul>
//               <li>En janvier 2024, OpenAI a lancé ChatGPT-5, une version améliorée de ChatGPT offrant des performances supérieures et une précision accrue dans le traitement du langage naturel.</li>
//               <li>ChatGPT-5 représente une avancée significative dans la capacité des modèles de langage à comprendre et à générer du texte de manière plus contextuelle et précise.</li>
//             <a className='linkVeil' href="https://www.geeky-gadgets.com/openai-chatgpt-5-2024/">Source</a>
            
//                 </ul>
//             <p>Annonce du modèle d'IA QuantumMind par Google :</p>
            
//                 <ul>
//               <li>En février 2024, Google DeepMind et Quantinuum ont dévoilé AlphaTensor-Quantum, un modèle d'IA utilisant l'informatique quantique pour optimiser les opérations de calcul.</li>
//               <li>Cette avancée promet d'accélérer les progrès dans le domaine de l'informatique quantique alimentée par l'IA, ouvrant de nouvelles possibilités pour les applications de l'IA.</li>
//               <a className='linkVeil' href="https://www.insidequantumtechnology.com/news-archive/quantum-news-briefs-february-27-2024-google-deepmind-and-quantinuum-use-ai-to-accelerate-quantum-computers-quantum-educational-tool-quokka-launched-at-the-2024-quantum-australia-conference-consta/">Source</a>
//                 </ul>
//             <p>L’IA dans la santé atteint un jalon avec le diagnostic automatisé de certaines maladies rares :</p>
            
//                 <ul>
//               <li>Des chercheurs de l’Université de Floride et de Penn Medicine ont utilisé un ensemble d’algorithmes alimentés par l’IA appelé PANDA pour trouver des “zèbres” rares dans les dossiers médicaux des patients et aider les patients atteints de certaines maladies rares à être diagnostiqués et traités plus rapidement. De plus, une nouvelle étude a révélé que l’IA est précise à 90% pour détecter les variantes causant des maladies chez les enfants atteints de maladies rares. Ces avancées représentent un jalon significatif dans le domaine de la médecine génétique. </li>
//               <li>Les chatbots IA deviennent plus autonomes, capables de gérer des conversations complexes sans intervention humaine : En 2024, nous assistons à la révolution des chatbots, une transformation des assistants numériques “simples” en partenaires conversationnels hyper-personnalisés. Cette évolution est alimentée par l’IA générative, les cerveaux spécifiques à chaque entreprise, et l’engagement indéfectible des fournisseurs de SaaS à offrir des expériences client exceptionnelles. Les chatbots IA excellent dans la gestion d’interactions complexes, apprenant des conversations passées et s’améliorant avec le temps</li>
//               <a className='linkVeil' href="https://medicalxpress.com/news/2022-10-ai-rare-diseases.html">Source</a>
//               <br />
//               <a className='linkVeil' href="https://www.cobbai.com/blog/chatbots-and-beyond-revolutionizing-customer-support-with-ai-in-2024">Source</a>
//                 </ul>
//                 <img style={{width:"100%" , height: "40%"}}, marginTop:"10%", marginBottom:"10%" src={P7} alt="" />
                
//           </section>
    
//           <section className="section-predictions">
//             <h2>Prédictions pour l'avenir</h2>
//             <p>Évolution de l'IA multimodale et de l'éthique :</p>
//             <ul>
//               <li>On prévoit que les modèles d'IA multimodaux continueront de progresser, intégrant plusieurs modalités telles que texte, image et audio.</li>
//                     <li>Les discussions sur l'éthique et la transparence de l'IA se poursuivront, avec un accent accru sur la responsabilité des décisions automatisées.</li>
//                 </ul>
//                 <img style={{width:"100%" , height: "40%"}}, marginTop:"10%", marginBottom:"10%" src={P8} alt="" />
                
//           </section>
    
//           <section className="section-conclusion">
//             <h2>Conclusion</h2>
//             <p>L'IA continue de révolutionner de nombreux aspects de notre vie, de la conversation quotidienne à la réglementation gouvernementale. Avec des avancées constantes et une concurrence croissante entre les grandes entreprises technologiques, l'avenir de l'IA est prometteur mais exige également une attention soutenue à l'éthique et à la réglementation.</p>
//           </section>
//         </div>
//       );
//     }


// export default VeilleTechnologique;




import React from 'react';
import '../style/style_veilstecno.css';
import article1 from '../image/veilles_images/article1.webp'
import article2 from '../image/veilles_images/article2.jpg'
import article3 from '../image/veilles_images/article3.jpg'
import article4 from '../image/veilles_images/article4.jpg'
import article5 from '../image/veilles_images/article5.png'
import article6 from '../image/veilles_images/artcile6.avif'
import twiter from '../image/veilles_images/twiter.png'
import linkedin from '../image/veilles_images/linkedin.png'

import P8 from '../image/veilles_images/avenir.jpg'



const VeilleTechnologique = () => {
    return (
        <div className="veille-container">
          
            <header className='veil'>
          <h1 style={{ color: "white", marginTop: "20%" }}>Veille Technologique :</h1><p style={{ color: "dodgerblue" , fontSize: "20px"}}>L'impact de l'IA sur le marché du travail : Regards croisés.</p>
    </header>
          <section className="section-introduction">
            <h2>Introduction</h2>
            <p> Dans un monde professionnel en constante évolution, l'intégration croissante de l'intelligence artificielle (IA) suscite de nombreuses questions quant à son impact sur l'emploi. Les articles sélectionnés examinent de près cette dynamique, en mettant en lumière les tendances, les défis et les opportunités découlant de cette transformation numérique. Ainsi, une veille technologique sur l'IA dans le monde du travail devient essentielle pour anticiper les changements et saisir les opportunités offertes par cette révolution en cours. </p>
          </section>
    
          <section className="section-article1">
          <h2>L'impact de l'IA générative sur le marché du travail : </h2>
          <p className='linkVeil'>Publié en 2023</p>
            <p>Tendances, opportunités et défis à saisir pour maximiser les avantages tout en gérant efficacement la transition.</p>
          <ul>
          <a className='linkVeil' href="https://www.agefi.fr/news/economie-marches/lia-et-le-marche-du-travail-leffet-de-substitution"><img style={{width:"100%" , height: "25rem", marginTop:"5%", marginBottom:"5%"}} src={article1} alt="" /></a>
              <li>Cet article met en lumière l'impact potentiel de l'IA générative sur le marché du travail, soulignant les bouleversements prévus ainsi que les opportunités et les défis qui en découlent.</li>
              <li> Il évoque notamment la vulnérabilité des emplois administratifs à l'automatisation, mais aussi la nécessité pour les entreprises de gérer efficacement leur capital humain tout en investissant dans la technologie.</li>
          
            
          </ul>
          
          </section>
          <section className="section-artIcile2">
          <h2>Adoption de l'IA dans les entreprises :</h2>
          <p className='linkVeil'>Publié en 2023</p>
            <p>Un regard sur la prévalence croissante de l'IA dans différents secteurs et son impact sur les performances et l'emploi.</p>
          <ul>
          <a className='linkVeil' href="https://www.lesechos.fr/economie-france/social/ce-que-lia-a-deja-change-dans-les-entreprises-1970438"><img style={{width:"100%" , height: "25rem", marginTop:"5%", marginBottom:"5%"}} src={article2} alt="" /></a>
            
              <li>L'article souligne la prévalence croissante de l'IA dans les entreprises et ses implications sur les performances et l'emploi.</li>
              <li> Il met en évidence la tendance des entreprises à adopter l'IA pour améliorer leurs performances tout en soulevant des préoccupations quant à la réduction potentielle des effectifs.</li>
            
          </ul>
          
          </section>
          <section className="section-artIcile3">
          <h2> L'IA et l'emploi à l'échelle mondiale :</h2>
          <p className='linkVeil'>Publié en 2024</p>
            <p>Prévisions et implications du FMI sur l'impact de l'IA sur le marché du travail, avec un accent sur les inégalités et les défis à relever.</p>
          <ul>
          <a className='linkVeil' href="https://www.lemondeinformatique.fr/actualites/lire-l-ia-impactera-40-des-emplois-dans-le-monde-selon-le-fmi-92668.html#:~:text=D'apr%C3%A8s%20le%20Fonds%20Mon%C3%A9taire,in%C3%A9galit%C3%A9s%20sociales%20au%20niveau%20mondial"><img style={{width:"100%" , height: "25rem", marginTop:"5%", marginBottom:"5%"}} src={article3} alt="" /></a>
              <li> L'article du Fonds Monétaire International examine l'impact de l'IA sur l'emploi à l'échelle mondiale, mettant en avant les prévisions et implications, notamment en termes d'inégalités sociales et de nécessité d'investir dans la formation et la reconversion professionnelle.</li>
            
          </ul>
          
          </section>
          <section className="section-artIcile4">
          <h2>Utilisation stratégique de l'IA dans le monde professionnel :</h2>
          <p className='linkVeil'>Publié en 2024</p>
            <p>Perspectives sur l'importance de combiner l'IA avec les compétences humaines pour maximiser la productivité et prévenir les risques pour l'emploi.</p>
          <ul>
          <a className='linkVeil' href="https://fr.euronews.com/business/2024/03/07/comment-bien-utiliser-lia-dans-le-monde-du-travail"> <img style={{width:"100%" , height: "25rem", marginTop:"5%", marginBottom:"5%"}} src={article4} alt="" /></a>
              <li>Cet article souligne l'importance de l'utilisation stratégique de l'IA dans le monde professionnel, mettant en garde contre les risques liés à une utilisation inappropriée tout en mettant en avant le potentiel de l'IA pour compléter les compétences humaines.</li>
            
          </ul>
          
          </section>
          <section className="section-artIcile5">
          <h2>L'avenir du travail avec l'IA :</h2>
          <p className='linkVeil'>Publié en 2024</p>
            <p>Avantages clés de l'intégration de l'IA dans le monde professionnel, mettant en évidence les opportunités d'automatisation, d'efficacité accrue et d'innovation.</p>
          <ul>
          <a className='linkVeil' href="https://fr-fr.workplace.com/blog/ai-and-the-future-of-work"> <img style={{width:"100%" , height: "25rem", marginTop:"5%", marginBottom:"5%"}} src={article5} alt="" /></a>
            
              <li> L'article explore les avantages clés de l'intégration de l'IA dans le monde du travail, notamment en termes d'automatisation, de productivité accrue, de résolution de problèmes complexes et d'innovation, tout en soulignant l'importance de la collaboration entre humains et IA.</li>
            
          </ul>
          
               
          </section>
          <section className="section-artIcile6">
          <h2>Transformation du travail par l'IA :</h2>
          <p className='linkVeil'>Publié en 2023</p>
            <p>Analyse des impacts positifs et négatifs de l'IA sur le marché du travail, ainsi que des initiatives et des réponses politiques pour gérer cette transition.</p>
          <ul>
          <a className='linkVeil' href="https://fr.euronews.com/business/2023/12/13/comment-l-intelligence-artificielle-transforme-le-monde-du-travail"><img style={{width:"100%" , height: "25rem", marginTop:"5%", marginBottom:"5%"}} src={article6} alt="" /></a>
            
              <li>Cet article examine l'impact de l'IA sur le marché du travail, abordant divers aspects tels que la transformation du marché du travail, les questions éthiques et de gouvernance, les exemples d'utilisation de l'IA et les initiatives européennes visant à protéger les travailleurs.</li>
            
          </ul>
          
                
          </section>
    
              
         
    
          <section className="section-conclusion">
          <h2>Conclusion</h2>
          <p>Dans le futur, avec l'intelligence artificielle, certains métiers traditionnels seront remplacés par des machines. Par exemple, les emplois administratifs ou les postes où les tâches sont répétitives pourraient disparaître.</p>
          <img style={{width:"100%" , height: "25rem", marginTop:"5%", marginBottom:"5%"}} src={P8} alt="" />
          
            <p>Mais cela ne veut pas dire qu'il n'y aura plus de travail. De nouveaux métiers vont apparaître, surtout ceux qui sont liés à l'IA, comme les ingénieurs en intelligence artificielle ou les spécialistes des données. Et puis, les métiers qui demandent des compétences créatives ou qui nécessitent des relations humaines resteront importants, comme ceux dans la santé ou l'éducation. En résumé, l'intelligence artificielle va changer le monde du travail, mais elle va aussi créer de nouvelles opportunités. Pour réussir dans ce nouveau monde, il faut être prêt à apprendre de nouvelles choses et à s'adapter aux changements. Si on fait ça, on peut façonner un avenir où l'IA nous aide à effectuer mieux notre travail et à vivre mieux.</p>
        </section>
        

        <section className="section-outils-recherche">
                <h2>Outils de Recherche Utilisés :</h2>
                <div className="outils-recherche">
                    <a href="https://www.google.com" target="_blank" rel="noopener noreferrer">
                        <img src="https://inesrihane.weebly.com/uploads/1/4/1/1/141176122/published/41hel2cy9ll.png?1681725920" alt="Google Search" />
                    </a>
                    <a href="https://www.linkedin.com" target="_blank" rel="noopener noreferrer">
                        <img src={linkedin} alt="LinkedIn" />
                    </a>
                    <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
                        <img src={twiter} alt="Twitter" />
                    </a>
                </div>
            </section>
        </div>
      );
    }


export default VeilleTechnologique;