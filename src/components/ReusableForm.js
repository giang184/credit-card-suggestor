import React from "react";
import PropTypes from "prop-types";

function ReusableForm(props) {
  const startingName = props.card ? props.card.name : '';
  const startingBrand = props.card ? props.card.brand : '';
  const startingQuantity = props.card? props.card.quantity : '';
  const startingPrice = props.card? props.card.price : '';
  const startingAlcoholContent = props.card? props.card.alcoholContent : '';

  return (
    <>
      <h2>Add a new Card:</h2>
      <form onSubmit={props.formSubmissionHandler}>
        <label>Name: --------------
          <input type='text' name='name' defaultValue={startingName} />
        </label>
        <label>Brand: -------------- 
          <input type='text' name='brand' defaultValue={startingBrand}/>
        </label>
        <label># of pints: ----------
          <input type='text' name='quantity' defaultValue={startingQuantity}/>
        </label>
        <label>Alcohol %: ---------
          <input type='text' name='alcoholContent' defaultValue={startingAlcoholContent} />
        </label>
        <label>Price: ---------------
          <input type='text' name='price' defaultValue={startingPrice}/>
        </label>
        <br/>
          <button className="btn btn-warning" type='submit'>{props.buttonText}</button>
      </form>
    </>
  );
}

ReusableForm.propTypes = {
  formSubmissionHandler: PropTypes.func,
  buttonText: PropTypes.string,
  card: PropTypes.object
};

export default ReusableForm;