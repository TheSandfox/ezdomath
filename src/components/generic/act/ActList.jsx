import React from "react";
import { ACTS } from "../../../datas/acts"; // ACTS를 import합니다.
import "./ActList.css";
import ActItem from './ActItem';

export function ActList({ actId }) {
  const act = ACTS.find((a) => a.actId === parseInt(actId));

  if (!act) {
    return <div className="act-list">존재하지 않는 단원입니다.</div>;
  }

  return (
    <div className="act-list">
      <div key={act.actId} className="act">
        <h2 className="font_medium">{act.title}</h2>
        {act.items.map((item, index) => (
          <ActItem key={index} item={item} />
        ))}
      </div>
    </div>
  );
}
