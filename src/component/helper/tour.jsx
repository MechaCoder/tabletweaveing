import React, { Component } from 'react';
import Tour from 'reactour';

import WhatsNew from './whatsnew';

class BasicTour extends Component{

    constructor(props){
        super(props);

        this.state={
            "isOpen": false,
        };

        this.openTour = this.openTour.bind(this);
        this.closeTour = this.closeTour.bind(this);
    }

    closeTour(){
        this.setState({
            isOpen: false
        })
    }

    openTour(){
        this.setState({
            isOpen: true
        })
    }


    render(){
        return(
            <div className="tour" >
                <button onClick={this.openTour}> HELP ! </button>
                <Tour 
                    steps={steps}
                    isOpen={this.state.isOpen}
                    onRequestClose={this.closeTour}
                />
                <WhatsNew />
            </div>
        )
    }


}

const steps = [
    {
        selector: '.App-title',
        content: `Welcome to the Marvellous Mechanical Tablet Weaving Thing.
            Hi My name is matthew let me show you around :-)
        `
    },
    {
        selector: '.CardAmount',
        content: `this is the card amount this the amount of cards you are 
        going to use in the pattens`
    },
    {
        selector: '.CardType',
        content: `this is the card type this is the number of holes on the cards your useing`
    },
    {
        selector: '.compact-picker',
        content: `this is the color picker this is where you can select the color you want use`
    },
    {
        selector: '.designer table',
        content: `This is the designer this is where you can put your patten in to see in the preview panel`
    },
    {
        selector: '.stitch-type',
        content: `this is the thread type you can click to change them on a round`

    },
    {
        selector: '.preview-group',
        content: `this is the thread type you can click to change them on a round`

    }
]

export default BasicTour;