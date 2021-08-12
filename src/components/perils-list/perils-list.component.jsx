import React from "react";

import {Peril} from '../peril/peril.component'
import "./perils-list.style..css";

export const PerilList = (props) => (
  <div className="css-dsn619">
    {props.perils.map((peril) => (
      <Peril key={peril.id} peril={peril}/>
    ))}
  </div>
);
