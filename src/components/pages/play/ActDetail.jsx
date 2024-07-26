import React from "react";
import { ACTS } from "../../../datas/acts.js";

export function ActDetail({ actId }) {
  const selectedAct = ACTS.find((act) => act.actId.toString() === actId);
  if (!selectedAct) return <div>Invalid Act ID</div>;

  return <div>{selectedAct.title}</div>;
}
