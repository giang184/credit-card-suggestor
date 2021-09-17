import React from "react";
import Card from "./Card";
import PropTypes from 'prop-types';

function CardList(props){
  return (
    <React.Fragment>
      <h1>Credit Cards in Your Wallet:</h1>
      <p><em>{props.empty}</em></p>
      <br/>
      {props.cardList.map((card) =>
        <Card 
          whenCardClicked = {props.onCardSelection}
          name = {card.name}
          brand = {card.brand}
          quantity = {card.quantity}
          price = {card.price}
          alcoholContent = {card.alcoholContent}
          id={card.id}
          key={card.id}/>
      )}
    </React.Fragment>
  );
}

CardList.propTypes = {
  CardList: PropTypes.array,
  onCardSelection: PropTypes.func,
  empty: PropTypes.string,
};

export default CardList;