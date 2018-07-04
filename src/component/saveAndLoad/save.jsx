import React, { Component } from 'react';

class Save extends Component {
    constructor(props){
        super(props);

        this.state = {
            "name": props.pattenName,
            "save": props.pattenObject
        }

        this.onNameChange = this.onNameChange.bind(this);
        this.onSubmitForm = this.onSubmitForm.bind(this);
    }

    componentWillReceiveProps(newProp){
        this.setState({
            save: newProp.pattenObject
        });

        console.log(newProp.save)
    }

    onNameChange(event){
        this.setState({
            "name": this.state.name 
        })
    }

    onSubmitForm(event){
        event.preventDefault()
        //window.localStorage.
        var temp = localStorage.getItem("pattens");

        if(typeof(temp) === "string"){
            temp = JSON.parse(temp);
        }

        if(temp === null){
            temp = {};
        }
        
        temp[event.target.name.value] = this.state.save;

        var temp = JSON.stringify(temp)
        localStorage.setItem("pattens", temp );
    }

    render(){

        if(
            typeof(Storage) === 'undefined'
        ){
            return(<div className="savemod">saveing not permmited</div>)
        }

        if(
            typeof(this.state.save) === 'undefined'
        ){
            return(<div className="savemod">saveing not permmited</div>)
        }

        return(
            <div className="savemod">
                <form onSubmit={this.onSubmitForm}>
                    <input type="text" name="name" value={this.state.name} onChange={this.onNameChange} /><input type="submit" value="Save Button" />
                </form>
            </div>
        )
    }
}

export default Save