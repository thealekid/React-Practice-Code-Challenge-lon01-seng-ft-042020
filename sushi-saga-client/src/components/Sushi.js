import React from "react";

const Sushi = (props) => {
  return (
    <div className="sushi">
      <div
        className="plate"
        onClick={() => {
          if (!props.isEaten) {
            props.decrementPrice(props.price, props.id);
          }
        }}
      >
        {
          /* Tell me if this sushi has been eaten! */

          props.isEaten ? // false ?
          null : (
            <img src={props.image_url} alt="happy sushi!" width="100%" />
          )
        }
      </div>
      <h4 className="sushi-details">
        {props.name} - ${props.price}
      </h4>
    </div>
  );
};

export default Sushi;
