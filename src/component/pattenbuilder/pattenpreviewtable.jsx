import React, { Component } from 'react';
import Pattentable from './pattentable';

class Preview extends Component {
    constructor(props){
        super(props);


        this.state = {
            'amount': props.amount,
            'card_amounts': props.cards_amounts,
            'card_type': props.cards_type,
            'stateobj': props.current_patten,
        }
    }

    componentWillReceiveProps(newProp){

        this.setState({
            "card_amounts": newProp.cards_amounts,
            "card_type": newProp.cards_type,
            "stateobj": newProp.current_patten
        })
        this.forceUpdate();

    }

    render(){

        var x = []
        for(var i = 0; i < this.state.amount; i++ ){
            var temp = (<div>
                <Pattentable
                    cards_amounts={this.state.card_amounts}
                    cards_type={this.state.card_type}
                    current_patten={this.state.stateobj}
                    mirror="false"
                />
                <Pattentable
                    cards_amounts={this.state.card_amounts}
                    cards_type={this.state.card_type}
                    current_patten={this.state.stateobj}
                    mirror="true"
                /> </div>
            );
            x.push(temp);
        }

        return(
            <span>{x}</span>
        );
    }

}

export default Preview;