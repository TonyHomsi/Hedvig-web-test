import React from "react";

import {Peril} from '../peril/peril.component'
import "./perils-list.style.css";

export const PerilList = ({perils = [], onItemClick}) => (
  <div className="peril-list">
    {perils.map((peril, idx) => (
      <Peril key={`${idx}-${peril.title}`} peril={peril} onClick={() => onItemClick(peril)}/>
    ))}
  </div>
);
