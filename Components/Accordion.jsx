import React, { useState } from "react";
import data from "./data";

//!Single selection
function Accordion() {
  const [selected, setSelected] = useState(null);
  return (
    <div className="wrapper">
      <div className="accordion">
        {data && data.length > 0 ? (
          data.map((dataItem) => {
            <div className="item">
              <div className="title">
                <h2>{dataItem.question}</h2>
                <span>+</span>
              </div>
            </div>;
          })
        ) : (
          <div>No Data found</div>
        )}
      </div>
    </div>
  );
}

export default Accordion;
