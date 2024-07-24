// src/components/ContentComponent.jsx
import React from 'react';
import './ContentComponent.css';

const ContentComponent = ({ content }) => {
  return (
    <div>
      {content.map((item, index) => (
        <div
          key={index}
          className={`content-item content-item-${item.type}`}
          style={{ marginBottom: index !== content.length - 1 ? '20px' : '0' }}
        >
          {item.type === 'bold' && <p className="bold-text">{item.content}</p>}
          {item.type === 'normal' && <p className="normal-text">{item.content}</p>}
          {item.type === 'image' && <div className="image-container"><img src={item.src} alt={item.alt} /></div>}
        </div>
      ))}
    </div>
  );
};

export default ContentComponent;
