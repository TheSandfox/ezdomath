import React from "react";
import { ACTS } from "../../../datas/acts.jsx";
import "./ActList.css";
import ActItem from './ActItem';

export function ActList({ actId }) {
  const act = ACTS.find((a) => a.actId === actId);

  if (!act) {
    return <div className="act-list">
    {ACTS.map(act => (
      <div key={act.actId} className="act">
        <h2 className="font_medium">{act.title}</h2>
        {act.items.map((item, index) => (
          <ActItem key={index} item={item} />
        ))}
      </div>
    ))}
  </div>;
  }

  return (
    <div className="act-list">
      {ACTS.map(act => (
        <div key={act.actId} className="act">
          <h2 className="font_medium">{act.title}</h2>
          {act.items.map((item, index) => (
            <ActItem key={index} item={item} />
          ))}
        </div>
      ))}
    </div>
  );
}
