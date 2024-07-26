// ActItem.js
import React from 'react';

const ActItem = ({ item }) => {
  if (item.type === 'text') {
    const { content, highlights = [] } = item; // highlights 기본값을 빈 배열로 설정

    const textWithHighlights = content.split('\n').map((line, index) => (
      <React.Fragment key={index}>
        {line.split(new RegExp(`(${highlights.join('|')})`)).map((part, partIndex) =>
          highlights.includes(part) ? (
            <span key={partIndex} style={{ color: '#FF8900' }}>{part}</span>
          ) : (
            part
          )
        )}
        <br />
      </React.Fragment>
    ));

    return <p className='font_main'>{textWithHighlights}</p>;
  }

  if (item.type === 'image') {
    return <img src={item.src} alt={item.alt} />;
  }

  return null;
};

export default ActItem;
