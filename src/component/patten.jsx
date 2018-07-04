import React, { Component } from 'react';

import Pattentable  from "./pattenbuilder/pattentable.jsx";
import Colorpicker from "./pattenbuilder/colorpicker";
import Preview from "./pattenbuilder/pattenpreviewtable";



class Patten extends Component {
    constructor(props){
        super(props);

        this.state = {
            "cardtype": this.props.cardtype,
            "cardamou": this.props.cardamount,
            "pattenOb": {},
            "curColor": "#FFFFFF"
            
        }
        

        this.changepatten = this.changepatten.bind(this);
        this.changecolor  = this.changecolor.bind(this);
        

    }

    componentWillReceiveProps(newProp){

        this.setState({
            "cardamou": newProp.cardamount,
            "cardtype": newProp.cardtype
        })
        this.forceUpdate()

    }

    changecolor(color){
        this.setState({'curColor': color});
    }

    changepatten(event){
        var key = (
            event.target.attributes[0].value + 
            "|" + 
            event.target.attributes[1].value
        );

        var temp = this.state.pattenOb;

        temp[key] = this.state.curColor;
        
        this.setState({"pattenOb": temp})
        // add the key and the color state
    }

    render(){
        // add capeabilty to change the amount of cards used in a patten
        // add cap.. to change card type 
        return (<div className="basic patten" >
            <div className="controls">
                <Colorpicker
                    changecolor={this.changecolor} 
                    currentcolor={this.state.curColor} 
                />
            </div>
            <div className="designer">

                <Pattentable 
                    cards_amounts={this.state.cardamou} 
                    cards_type={this.state.cardtype} 
                    change_obj={this.changepatten}
                    current_patten={this.state.pattenOb}
                    mirror="false"
                    numbers="true"
                />
            </div>
            
            <div className="preview-group" >
                <Preview 
                    amount="2"
                    cards_amounts={this.state.cardamou}
                    cards_type={this.state.cardtype}
                    current_patten={this.state.pattenOb}
                />
            </div>
            
        </div>);
    }
}

export default Patten;