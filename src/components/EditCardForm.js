import React from "react";
import ReusableForm from "./ReusableForm";
import PropTypes from "prop-types";

function EditCardForm (props) {
  const { card } = props;

  function handleEditCardFormSubmission(event) {
    event.preventDefault();
    props.onEditCard({
      name: event.target.name.value, 
      brand: event.target.brand.value, 
      quantity: event.target.quantity.value,
      price: event.target.price.value, 
      alcoholContent: event.target.alcoholContent.value, 
      id: card.id
    });
  }

  return (
    <React.Fragment>
      <ReusableForm 
        formSubmissionHandler={handleEditCardFormSubmission}
        card={card}
        buttonText="Update Card" />
    </React.Fragment>
  );
}

EditCardForm.propTypes = {
  card: PropTypes.object,
  onEditCard: PropTypes.func
};

export default EditCardForm;