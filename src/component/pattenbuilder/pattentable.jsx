import React, { Component } from 'react';
import StitchType from './pattentable/stitchtype';

class Pattentable extends Component {
    constructor(props){
        super(props);

        this.state = {
            'cards_amounts': props.cards_amounts,
            'cards_type': props.cards_type,
            'passPatten': props.change_obj,
            'displayPatten': props.current_patten,
            'mirror': props.mirror,
            'num': props.numbers
        }

    }

    componentWillReceiveProps(newProp){
        this.setState({
            "cards_amounts": newProp.cards_amounts,
            "cards_type": newProp.cards_type,
            "displayPatten": newProp.current_patten
        });
        this.forceUpdate();
    }

    render(){

        var table = [];

        for(var row = 0; row < this.state.cards_amounts; row++){ // rows
            
            var temp = [];
                for(var col = 0; col < this.state.cards_type; col++){ // col
                    
                    // if(this.state.displayPatten === undefined){
                    //     continue;
                    // }
                    var displayColor = this.state['displayPatten'][ (row + "|" + col) ];

                    var item = <td data-row={row} data-col={col} style={{ 'background-color': displayColor }} onClick={this.state.passPatten}></td>
                        if(this.state.mirror === "true"){
                            temp.unshift(item);
                        }else{
                            temp.push(item)
                        }
                        
                }
                if(this.state.num === "true"){
                    temp.unshift(<td>{row}</td>)
                    temp.push( <td><StitchType /></td>);
                }

            table.push(<tr>{temp}</tr>)
        }

        return (
            <table>{table}</table>
        )

    }
}

export default Pattentable;