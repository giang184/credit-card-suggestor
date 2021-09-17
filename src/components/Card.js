import React from "react";
import PropTypes from "prop-types";

function Card(props) {
  const quantity = (props.quantity === 0)? "Out of Stock" : props.quantity;
  const almostEmpty = (props.quantity < 10 && props.quantity >0)? "(Almost Empty)" : "";

  return (
    <React.Fragment>
      <div onClick = {() => props.whenCardClicked(props.id)}>
        <div class="card">
          <div class="card-header">
            <h3>{props.name}</h3>
          </div>
          <div class="card-body">
              <p>Brand: <strong>{props.brand}</strong></p>
              <p>Pints Available: <strong>{quantity} {almostEmpty}</strong></p>
              <p>Alcohol Content = <strong>{props.alcoholContent}%</strong></p>
          </div>
          <div class="card-footer text-muted">
              <p>Price: <strong>${props.price}</strong></p>
          </div>
        </div>
      </div>
    </React.Fragment>
  )
}

Card.propTypes = {
  name: PropTypes.string.isRequired,
  brand: PropTypes.string.isRequired,
  quantity: PropTypes.string.isRequired,
  price: PropTypes.string.isRequired,
  alcoholContent: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
  whenCardClicked: PropTypes.func
};

export default Card;