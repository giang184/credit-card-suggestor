import React from 'react';
import NewCardForm from './NewCardForm';
import CardList from './CardList';
import CardDetail from './CardDetail';
import EditCardForm from './EditCardForm';

class CardControl extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      formVisibleOnPage: false,
      masterCardList: [],
      selectedCard: null,
      editing: false,
    };
  }

  handleSellingCard = (card) => {
    if (card.quantity > 0) {
      card.quantity--;
      this.setState({
        selectedCard: card,
      });
    } else {
      alert('CANNOT SELL ANYMORE...OUT OF STOCK!');
    }
  }

  handleEditClick = () => {
    console.log('handleEditClick reached');
    this.setState({editing: true});
  }

  handleClick = () => {
    if (this.state.selectedCard != null) {
      this.setState({
        formVisibleOnPage: false,
        selectedCard: null,
        editing: false,
      });
    } else {
      this.setState(prevState => ({
        formVisibleOnPage: !prevState.formVisibleOnPage,
      }));
    }
  }

  handleAddingNewCard = (newCard) => {
    const newMasterCardList = this.state.masterCardList.concat(newCard);
    this.setState({
      masterCardList: newMasterCardList,
      formVisibleOnPage: false,
    });
  }

  handleChangingSelectedCard = (id) => {
    const selectedCard = this.state.masterCardList.filter(card => card.id === id)[0];
    this.setState({selectedCard: selectedCard});
  }

  handleDeletingCard = (id) => {
    const newMasterCardList = this.state.masterCardList.filter(card => card.id !== id);
    this.setState({
      masterCardList: newMasterCardList,
      selectedCard: null
    });
  }

  handleEditingCardInList = (cardToEdit) => {
    const editedMasterCardList = this.state.masterCardList
      .filter(card => card.id !== this.state.selectedCard.id)
      .concat(cardToEdit);
    this.setState({
        masterCardList: editedMasterCardList,
        editing: false,
        selectedCard: null
      });
      console.log('cart', this.state.cart)
  }
  
  handleRestockingCard = (cardToEdit) => {
    const editedMasterCardList = this.state.masterCardList
    .filter(card => card.id !== this.state.selectedCard.id)
    .concat(cardToEdit);
  this.setState({
      masterCardList: editedMasterCardList,
      editing: false,
      selectedCard: cardToEdit
    });
  }

  render(){      
    let currentlyVisibleState = null;
    let buttonText = null;
    let empty = null;
    if (this.state.masterCardList.length === 0) {
      empty = "Nothing added yet";
    }
    
    if (this.state.editing) {
      currentlyVisibleState = <EditCardForm 
        card = {this.state.selectedCard} 
        onEditCard = {this.handleEditingCardInList} 
        />
      buttonText = "Return to Credit Card List";
    } 
    else if (this.state.selectedCard != null) {
      currentlyVisibleState = <CardDetail 
      card = {this.state.selectedCard}
        onClickingSell={this.handleSellingCard}
        onClickingDelete={this.handleDeletingCard}
        onClickingEdit={this.handleEditClick}
        onClickingRestock= {this.handleRestockingCard}
      />
      buttonText= "Return to Credit Card List";
    } 
    else if (this.state.formVisibleOnPage) {
      currentlyVisibleState = <NewCardForm onNewCardCreation={this.handleAddingNewCard} />
      buttonText = "Return to Credit Card List"
    } 
    else {
      currentlyVisibleState = <CardList 
        empty = {empty}
        cardList = {this.state.masterCardList} 
        onCardSelection={this.handleChangingSelectedCard} 
        />;
      buttonText = "Add New Card"
    }
    return (
      <React.Fragment>
        <div class="container">
          <div className="row">
            <div className='col-5'>
              {currentlyVisibleState}
              <button className ="btn btn-primary" onClick={this.handleClick}>{buttonText}</button>
            </div>
            <div className='col-3'>
            </div>
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default CardControl;