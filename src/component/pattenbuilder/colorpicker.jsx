
import React, { Component } from 'react';
import { CompactPicker, GithubPicker, CirclePicker } from 'react-color';
import Select from 'react-select';
import 'react-select/dist/react-select.css';

class Colorpicker extends Component {

    constructor(props){
        super(props);

        this.state = {
            background: props.currentcolor,
            uid: props.uid,
            open: false,

            changeFuction: props.changecolor,
            currentpicker: "compact"
        }
        
        this.handleChangeComplete = this.handleChangeComplete.bind(this);
        this.handleChangeSelect = this.handleChangeSelect.bind(this);
    }

    handleChangeComplete(color, event){
        
        this.state.changeFuction(color.hex);
        this.setState({background: color.hex});
    }

    handleChangeSelect(selectedOption){
        // console.log(selectedOption.value);
        if(selectedOption === null){
            return;
        }
        this.setState({'currentpicker': selectedOption.value});
    }

    render(){

        var pickeroptions = [
            {value: "github", label: "GitHub"},
            {value: "compact", label: "Compact"},
            // {value: "circle", label: "Circle"},
        ];

        var picker;

        switch(this.state.currentpicker){
            case "github":
                picker = (<GithubPicker color={this.state.background} onChangeComplete={this.handleChangeComplete} /> );
                break;
            case "compact":
                picker = (<CompactPicker color={this.state.background} onChangeComplete={this.handleChangeComplete} />);
                break;
            case "circle":
                picker = (<CirclePicker color={this.state.background} onChangeComplete={this.handleChangeComplete} />);
                break;
            default:
                picker = (<CompactPicker color={this.state.background} onChangeComplete={this.handleChangeComplete} />);
                break;
        }

        return(
            <div className="picker">
                <h4>color picker</h4>
                <div className="controls">
                    <Select clearable={false} options={pickeroptions} value={this.state.currentpicker} onChange={this.handleChangeSelect} />
                    
                </div>
                    {picker}
            </div>
        )
    }

}

export default Colorpicker;