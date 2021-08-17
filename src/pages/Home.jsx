import React, { useState, useEffect } from "react";
import { PerilList } from "../components/perils-list/perils-list.component";
import PopupDesc from "../components/popup-description/popup-desc.component";
import { fetchPerils } from "../services/peril-service";

import "./Home.styles.css";

const Home = () => {
  const [perils, setPerils] = useState([]);
  const [selectedPeril, setSelectedPeril] = useState(null);

  useEffect(() => {
    const doFetch = async () => {
      const data = await fetchPerils();
      setPerils(data);
    };

    doFetch();
  }, []);

  const handlePopupClose = () => {
    setSelectedPeril(null);
  };

  return (
    <div className="page">
      <div className="title">
        <h2> We have you covered </h2>
        <h3 className="subtitle">
          Extensive coverage for you and your family, your house and your
          belongings. All risk is always included. Click the icons for more
          info.
        </h3>
        <div className="App">
          <PerilList
            perils={perils}
            onItemClick={(peril) => {
              setSelectedPeril(peril);
            }}
          />
        </div>
        {selectedPeril && (
          <PopupDesc onClose={handlePopupClose}>
            <div className="description">{selectedPeril.description}</div>
          </PopupDesc>
        )}
      </div>
    </div>
  );
};

export default Home;
