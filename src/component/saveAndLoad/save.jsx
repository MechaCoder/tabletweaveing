import React, { Component } from 'react';

import Load from './load';
class Save extends Component {
    constructor(props){
        super(props);

        this.state = {
            "name": props.pattenName,
            "save": props.pattenObject,
            "match": Math.random(),

            "col": props.col,
            "row": props.row
        }

        this.onNameChange = this.onNameChange.bind(this);
        this.onSubmitForm = this.onSubmitForm.bind(this);
    }

    componentWillReceiveProps(newProp){
        this.setState({
            save: newProp.pattenObject,
            cols: newProp.col,
            row: newProp.row
        });
    }

    onNameChange(event){
        this.setState({
            "name": event.target.value
        })
    }

    onSubmitForm(event){
        event.preventDefault();
        var temp = localStorage.getItem("pattens");

        if(typeof(temp) === "string"){
            temp = JSON.parse(temp);
        }

        if(temp === null){
            temp = {};
        }

        var t = {
            patten: this.state.save,
            d_cols: this.state.cols,
            d_rows: this.state.row
        }
        
        temp[event.target.name.value] = t;

        temp = JSON.stringify(temp);

        localStorage.setItem("pattens", temp );
        this.setState({"match": Math.random()})
    }

    render(){

        if(
            typeof(Storage) === 'undefined'
        ){
            return(<div className="savemod">saveing not permmited</div>);
        }

        if(
            typeof(this.state.save) === 'undefined'
        ){
            return(<div className="savemod">saveing not permmited</div>);
        }

        return(
            <div className="savemod">
                <form onSubmit={this.onSubmitForm}>
                    <input type="text" name="name" value={this.state.name} onChange={this.onNameChange} />
                    <input type="submit" value="Save" />
                </form>
                {this.state.col}
                {this.state.row}

                <Load lockhash={this.state.match} />
            </div>
        );
    }
}

export default Save