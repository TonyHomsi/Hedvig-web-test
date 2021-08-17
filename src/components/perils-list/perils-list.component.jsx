import React from "react";

import {Peril} from '../peril/peril.component'
import "./perils-list.style.css";

export const PerilList = ({perils = [], onItemClick}) => (
  <div className="css-dsn619">
    {perils.map((peril, idx) => (
      <Peril key={`${idx}-${peril.title}`} peril={peril} onClick={() => onItemClick(peril)}/>
    ))}
  </div>
);
