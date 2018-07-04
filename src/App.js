import React, { Component } from 'react';
import './App.css';

import Patten from './component/patten';
import BasicTour from './component/helper/tour';


class App extends Component {
  constructor(props){
    super(props);

    this.state = {
      cardType: 4,
      cardAmount: 10,
    }

    this.changeCardamount = this.changeCardamount.bind(this);
    this.changeCardType = this.changeCardType.bind(this);
  }

  changeCardamount(event){
    var amount = parseInt(this.state.cardAmount, 0);

    if(event.target.value === "+"){
      ++amount;
    }

    if(event.target.value === "-" && amount >= 5){
      --amount;
    }



    this.setState({'cardAmount': amount});
    this.forceUpdate();
  }

  changeCardType(event){
    var amount = parseInt(this.state.cardType, 0);

    if(event.target.value === "+"){
      ++amount;
    }

    if(event.target.value === "-" && amount >= 5){
      --amount;
    }

    this.setState({'cardType': amount});
    this.forceUpdate();
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          {/* <img src={logo} className="App-logo" alt="logo" /> */}
          <h1 className="App-title">The Marvellous Mechanical Tablet Weaving Thing.</h1>
          <BasicTour />
        </header>

        <div className="app-body">
          <div className="format-contorls">
            <div className="CardAmount">
              <h4>Card Amount</h4>
              <input type="button" onClick={this.changeCardamount} value="+" />
                <div>{this.state.cardAmount}</div>
              <input type="button" onClick={this.changeCardamount} value="-" />
            </div>
            <div className="CardType">
            <h4>Card Type</h4>
              <input type="button" onClick={this.changeCardType} value="+" />
                <div>{this.state.cardType}</div>
              <input type="button" onClick={this.changeCardType} value="-" />
            </div>
          </div>
          <Patten 
            cardtype={this.state.cardType} 
            cardamount={this.state.cardAmount}
          />
        </div>
      </div>
    );
  }
}

export default App;