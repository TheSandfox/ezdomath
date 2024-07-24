import React from 'react';
import './topbanner.css';

const TopBanner = ({ pageName }) => {
  return (
    <div className="top-banner font_title">
      {pageName}
    </div>
  );
};

export default TopBanner;

// 가져간 곳에서 <TopBanner pageName="자기페이지이름"/> 이렇게 가져다 쓰세요.