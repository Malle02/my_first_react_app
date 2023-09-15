





// import React, { useState } from 'react';
// import '../style/style_bloc.css';

// const Block = ({ title, content, initiallyExpanded = false }) => {
//   const [isExpanded, setIsExpanded] = useState(initiallyExpanded);

//   const handleArrowClick = () => {
//     setIsExpanded(!isExpanded);
//   };

//   return (
//     <div className={`cool-block ${isExpanded ? 'expanded' : ''}`}>
//       <div className="block-header" onClick={handleArrowClick}>
//         <h2 className="cool-title">{title}</h2>
//         <div className={`cool-arrow ${isExpanded ? 'expanded' : ''}`}>
//           {isExpanded ? '▼' : '►'}
//         </div>
//       </div>
//       <div
//         className={`block-content ${isExpanded ? 'expanded' : ''}`}
//         style={{
//           maxHeight: isExpanded ? '500px' : '0',
//           transition: 'max-height 0.8s ease-in-out',
//           overflow: 'hidden',
//         }}
//       >
//         <p className="cool-content">{content}</p>
//       </div>
//     </div>
//   );
// };

// export default Block;



import React, { useState } from 'react';
import '../style/style_bloc.css';

const Block = ({ index, title, content, expandedIndex, setExpandedIndex }) => {
  const isExpanded = index === expandedIndex;

  const handleArrowClick = () => {
    if (isExpanded) {
      setExpandedIndex(null); // Fermer le bloc actuellement ouvert
    } else {
      setExpandedIndex(index); // Ouvrir ce bloc
    }
  };

  return (
    <div className={`cool-block ${isExpanded ? 'expanded' : ''}`}>
      <div className="block-header" onClick={handleArrowClick}>
        <h2 className="cool-title">{title}</h2>
        <div className={`cool-arrow ${isExpanded ? 'expanded' : ''}`}>
          {isExpanded ? '▼' : '►'}
        </div>
      </div>
      <div
        className={`block-content ${isExpanded ? 'expanded' : ''}`}
        style={{
          maxHeight: isExpanded ? '500px' : '0',
          transition: 'max-height 0.8s ease-in-out',
          overflow: 'hidden',
        }}
      >
        <p className="cool-content">{content}</p>
      </div>
    </div>
  );
};

export default Block;

// test


