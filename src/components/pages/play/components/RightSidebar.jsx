// src/components/RightSidebar.jsx
import React from 'react';

const RightSidebar = ({ rightMenu, onSubMenuClick }) => {
  return (
    <div className="right-sidebar">
      <ul>
        {rightMenu.map((item) => (
          <li key={item.key} onClick={() => onSubMenuClick(item.key)}>
            {item.label}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default RightSidebar;
