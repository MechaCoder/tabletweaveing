import React, { Component } from 'react';

class StitchType extends Component {
    constructor(props){
        super(props);

        this.state = {
            stitch: ["-","S", "Z"],
            index: 0

        }

        this.clickEventChange = this.clickEventChange.bind(this);
    }

    clickEventChange(event){

        var temp = this.state.index + 1;

        if (this.state.stitch[temp] === undefined ) {
            temp = 0;
        }

        this.setState({"index": temp})
        
    }

    render(){

        return(
            <div onClick={this.clickEventChange} > {this.state.stitch[this.state.index]} </div>
        )

    }
}

export default StitchType;