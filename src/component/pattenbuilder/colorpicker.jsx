
import React, { Component } from 'react';
import { CompactPicker } from 'react-color';

class Colorpicker extends Component {

    constructor(props){
        super(props);

        this.state = {
            background: props.currentcolor,
            uid: props.uid,
            open: false,

            changeFuction: props.changecolor
        }
        
        this.handleChangeComplete = this.handleChangeComplete.bind(this);
    }

    handleChangeComplete(color, event){
        
        this.state.changeFuction(color.hex);
        this.setState({background: color.hex});
    }

    render(){

        return(
            <div className="picker">
                    <CompactPicker 
                        color={this.state.background}
                        onChangeComplete={this.handleChangeComplete}
                    />
            </div>
        )
    }

}

export default Colorpicker;