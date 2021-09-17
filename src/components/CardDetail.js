import React from "react";
import PropTypes from 'prop-types';

function CardDetail(props) {
  const {card, onClickingDelete, onClickingSell} = props;
  const quantity = (card.quantity === 0)? "Out of Stock" : card.quantity;
  const almostEmpty = (card.quantity < 10 && card.quantity >0)? "(Almost Empty)" : "";

  function handleRestockCardSubmission(event) {
    event.preventDefault();
    props.onClickingRestock({
      ...card,
      quantity: parseInt(card.quantity) + parseInt(event.target.quantity.value),
    });
  }

  return (
    <React.Fragment>
      <h2>Keg Details:</h2>
      <div class="card">
        <div class="card-header">
          <h3>{card.name}</h3>
        </div>
        <div class="card-body">
          <p>Brand: <strong>{card.brand}</strong></p>
          <p>Pints Available: <strong>{quantity} {almostEmpty}</strong></p>
          <p>Alcohol Content = <strong>{card.alcoholContent}%</strong></p>
        </div>
        <div class="card-footer text-muted">
          <p>Price: <strong>${card.price}</strong></p>
        </div>
      </div>
      <button 
        onClick={ props.onClickingEdit }
        className="btn btn-warning">
        Update Card
      </button>
      <button 
        className="btn btn-danger"
        onClick={() => onClickingDelete(card.id)}>
          Delete Card
      </button>
      <button 
        className="btn btn-success"
        onClick={() => onClickingSell(card)}>
          Sell 1
      </button>
      <hr/>
      <h2>Restock keg:</h2>
      <form onSubmit={handleRestockCardSubmission}>
        <input
          className="form-control"
          type='number'
          name='quantity'
          placeholder='pints' />
          <button className="btn btn-info" type='submit'>restock</button>
      </form>
      <hr/>
    </React.Fragment>
  );
}

CardDetail.propTypes = {
  card: PropTypes.object,
  onClickingDelete: PropTypes.func,
  onClickingEdit: PropTypes.func,
  onClickingSell: PropTypes.func,
  onClickingRestock: PropTypes.func
};

export default CardDetail;