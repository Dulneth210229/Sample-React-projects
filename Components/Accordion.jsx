import React, { useState } from "react";
import data from "./data";
import "./Accordion.css";
//!Single selection
function Accordion() {
  const [selected, setSelected] = useState(null);

  const handleSingleSelection = (currentId) => {
    setSelected(currentId === selected ? null : currentId);
  };
  return (
    <div className="wrapper">
      <div className="accordion">
        {data && data.length > 0 ? (
          data.map((dataItem) => (
            <div className="item">
              <div
                onClick={() => handleSingleSelection(dataItem.id)}
                className="title"
              >
                <h3>{dataItem.question}</h3>
                <span>+</span>
              </div>
              {selected === dataItem.id ? <div>{dataItem.answer}</div> : null}
            </div>
          ))
        ) : (
          <div>No Data found</div>
        )}
      </div>
    </div>
  );
}

export default Accordion;
