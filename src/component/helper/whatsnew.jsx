import React, { Component } from 'react';
import Tour from 'reactour';
// import FontAwesome from 'react-fontawesome';

class WhatsNew extends Component {
    constructor(props){
        super(props);

        var seen = localStorage.getItem('WhatsNewSeen');
        var seenval = true;
        if(seen != null && seen === 'apple'){
            seenval = false;
        }

        this.state={
            "isOpen": seenval,
        };

        this.openTour = this.openTour.bind(this);
        this.closeTour = this.closeTour.bind(this);
    }

    closeTour(){
        this.setState({
            isOpen: false
        });

        localStorage.setItem('WhatsNewSeen', 'apple')
    }

    openTour(){
        this.setState({
            isOpen: true
        });
    }


    render(){
        return(
            <div className="whatsNew" >
                <button onClick={this.openTour}> + </button>
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