
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
            <p>Dans un monde professionnel en constante évolution, l'essor de l'intelligence artificielle (IA) soulève des interrogations sur son impact sur l'emploi. Les articles sélectionnés examinent cette dynamique, mettant en lumière les tendances, les défis et les opportunités de cette transformation numérique. Suivre de près les avancées de l'IA dans le milieu du travail est essentiel pour anticiper les changements et saisir les opportunités de cette révolution en cours. </p>
          </section>
    
          <section className="section-article1">
          <h2>L'impact de l'IA générative sur le marché du travail : </h2>
          <p className='linkVeil'>Publié en 2023</p>
            <p>Tendances, opportunités et défis à prendre en compte pour profiter au maximum des avantages tout en gérant efficacement le changement.</p>
          <ul>
          <a className='linkVeil' href="https://www.agefi.fr/news/economie-marches/lia-et-le-marche-du-travail-leffet-de-substitution"><img style={{width:"100%" , height: "25rem", marginTop:"5%", marginBottom:"5%"}} src={article1} alt="" /></a>
              <li>Cet article nous montre l'impact potentiel de l'IA générative sur le marché du travail, soulignant les bouleversements prévus et ainsi que les opportunités.</li>
              <li> Il évoque notamment la vulnérabilité des emplois administratifs à l'automatisation, mais aussi la nécessité pour les entreprises de gérer efficacement leur capital humain tout en investissant dans la technologie.</li>
          
            
          </ul>
          
          </section>
          <section className="section-artIcile2">
          <h2>Adoption de l'IA dans les entreprises :</h2>
          <p className='linkVeil'>Publié en 2023</p>
            <p>Regard sur l'augmentation de l'utilisation de l'Intelligence Artificielle dans différents domaines et comment cela affecte les performances et l'emploi.</p>
          <ul>
          <a className='linkVeil' href="https://www.lesechos.fr/economie-france/social/ce-que-lia-a-deja-change-dans-les-entreprises-1970438"><img style={{width:"100%" , height: "25rem", marginTop:"5%", marginBottom:"5%"}} src={article2} alt="" /></a>
            
              <li>L'article met en lumière l'adoption croissante de l'intelligence artificielle (IA) par les entreprises, avec plus d'un tiers d'entre elles utilisant des technologies liées à l'IA. Les secteurs agricoles et industriels sont les plus adeptes de ces technologies. L'IA est perçue comme un moyen d'améliorer les performances et la compétitivité des entreprises.</li>
              <li> Cependant, son utilisation pourrait également entraîner des réductions d'effectifs, suscitant des inquiétudes chez les salariés. Malgré cela, les experts soulignent que l'IA pourrait créer de nouveaux métiers où l'humain apportera une valeur ajoutée irremplaçable.</li>
            
          </ul>
          
          </section>
          <section className="section-artIcile3">
          <h2> L'IA et l'emploi à l'échelle mondiale :</h2>
          <p className='linkVeil'>Publié en 2024</p>
            <p>Prévisions et conséquences de l'IA selon le FMI sur le marché de l'emploi, en mettant l'accent sur les inégalités et les défis à surmonter.</p>
          <ul>
          <a className='linkVeil' href="https://www.lemondeinformatique.fr/actualites/lire-l-ia-impactera-40-des-emplois-dans-le-monde-selon-le-fmi-92668.html#:~:text=D'apr%C3%A8s%20le%20Fonds%20Mon%C3%A9taire,in%C3%A9galit%C3%A9s%20sociales%20au%20niveau%20mondial"><img style={{width:"100%" , height: "25rem", marginTop:"5%", marginBottom:"5%"}} src={article3} alt="" /></a>
              <li> L'article du Fonds Monétaire International examine l'impact de l'IA sur l'emploi à l'échelle mondiale, mettant en avant les prévisions et conséquences, notamment en termes d'inégalités sociales et de nécessité d'investir dans la formation et la reconversion professionnelle.</li>
            
          </ul>
          
          </section>
          <section className="section-artIcile4">
          <h2>Utilisation stratégique de l'IA dans le monde professionnel :</h2>
          <p className='linkVeil'>Publié en 2024</p>
            <p>Perspectives sur l'importance de combiner l'IA avec les compétences humaines pour maximiser la productivité et prévenir les risques pour l'emploi.</p>
          <ul>
          <a className='linkVeil' href="https://fr.euronews.com/business/2024/03/07/comment-bien-utiliser-lia-dans-le-monde-du-travail"> <img style={{width:"100%" , height: "25rem", marginTop:"5%", marginBottom:"5%"}} src={article4} alt="" /></a>
              <li>L'article explore l'utilisation efficace de l'intelligence artificielle (IA) dans le monde professionnel. Arun Sundararajan, professeur à l'université de New York, souligne l'importance de combiner l'IA avec les compétences humaines pour maximiser son potentiel.</li>
              <li> Il explique comment l'IA peut être utilisée pour gérer les tâches routinières, permettant aux entrepreneurs de se concentrer sur des aspects plus créatifs du travail. Cependant, il souligne également la nécessité de définir des frontières claires entre l'IA et le capital humain pour protéger les emplois et encourager l'innovation.</li>
            
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