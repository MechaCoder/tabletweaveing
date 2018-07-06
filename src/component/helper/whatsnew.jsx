import React, { Component } from 'react';
import Tour from 'reactour';

class WhatsNew extends Component {
    constructor(props){
        super(props);

        this.state={
            "isOpen": true,
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
                <button onClick={this.openTour}> whats new </button>
                <Tour 
                    steps={steps}
                    isOpen={this.state.isOpen}
                    onRequestClose={this.closeTour}
                />
            </div>
        )
    }
}

export default WhatsNew;

const steps = [
    {
        selector: '.App-title',
        content: `Welcome back the Marvellous Mechanical Tablet Weaving Thing.
            Hi My name is matthew let me show you what is new :-)
        `
    },
    {
        selector: '.button-pannel button.reset',
        content : `Here is a handy little button to reset the patten in the the designer`
    },
    {
        selector: '.button-pannel .savemod',
        content: `you can now save the pattens your working on and delete them if you wish`
    }
]