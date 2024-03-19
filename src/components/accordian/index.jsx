import React, { useState } from "react";
import data from "./data.js";
import "./style.css";
function Accordion() {
  const [selected, setSelected] = useState(null);

  const handleClick = (getCurrentId) => {
    setSelected(getCurrentId);
    if (getCurrentId===selected) {
        setSelected(null)
    }
  };
  console.log(selected);

  return (
    <div className="wrapper">
      <div className="accordion">
        {data && data.length > 0 ? (
          data.map((item) => (
            <div className="item">
              <div className="question" onClick={() => handleClick(item.id)}>
                <h4> Question:{item.question} </h4>
                <span>+</span>
                {selected === item.id ? (
                  <div>
                    <p>Answer: {item.answer}</p>
                  </div>
                ) : null}
              </div>
            </div>
          ))
        ) : (
          <div>No data found</div>
        )}
      </div>
    </div>
  );
}

export default Accordion;
