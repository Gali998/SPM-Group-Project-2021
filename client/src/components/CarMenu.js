import React from "react";

function CarMenu({ carItem }) {
  return (
    <div className="item">
      {carItem.map((item) => {
        return (
          <div className="item-con" key={item.id}>
            <div className="item-container">
              <img src={item.image} alt="" />
              <h2>{item.title}</h2>
              <p>{item.description}</p>
            </div>
          </div>
        );
      })}
    </div>
  );
}

export default CarMenu;
