import React from 'react';

const ActItem = ({ item }) => {
  if (item.type === 'text') {
    const { content, highlights = [] } = item;
    if (highlights.length === 0) {
      return <p className='font_main'>{content.split('\n').map((line, index) => (
        <React.Fragment key={index}>
          {line}
          {index < content.split('\n').length - 1 && <br />}
        </React.Fragment>
      ))}</p>;
    }

    const regex = new RegExp(`(${highlights.join('|')})`);

    const textWithHighlights = content.split('\n').map((line, index) => (
      <React.Fragment key={index}>
        {line.split(regex).map((part, partIndex) =>
          highlights.includes(part) ? (
            <span key={partIndex} style={{ color: '#FF8900' }}>{part}</span>
          ) : (
            part
          )
        )}
        {index < content.split('\n').length - 1 && <br />}
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
