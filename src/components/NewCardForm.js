import React from "react";
import { v4 } from 'uuid';
import PropTypes from 'prop-types';
import ReusableForm from "./ReusableForm";

function NewCardForm(props){
  function handleNewCardFromSubmission(e) {
    e.preventDefault();
    props.onNewCardCreation({
      name: e.target.name.value,
      brand: e.target.brand.value,
      quantity: e.target.quantity.value,
      price: e.target.price.value,
      alcoholContent: e.target.alcoholContent.value,
      id: v4()
    });
  }
  return (
    <React.Fragment>
      <ReusableForm
        formSubmissionHandler={handleNewCardFromSubmission}
        buttonText="Add"
      />
    </React.Fragment>
  );
}


NewCardForm.propTypes = {
  onNewCardCreation: PropTypes.func
}

export default NewCardForm;