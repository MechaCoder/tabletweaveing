import React, { Component } from 'react';
import swal from 'sweetalert2';

class Load extends Component{
    constructor(props){
        super(props);

        this.state = {
            "data": this.get()
        }

        this.onButtonClick = this.onButtonClick.bind(this);
    }

    get(){
        var data = localStorage.getItem("pattens");
        
        if(
            typeof(Storage) === undefined
        ){
            return;
        }

        data = JSON.parse(data);
        return data;
    }

    onButtonClick(event){
        var data = this.get();
        var newdata = {}

       var keys = Object.keys(data);

       if(event.target.value === 'delete'){
           for(var i = 0; i < keys.length; i++){
               if(keys[i] !== event.target.attributes[0].value){
                    newdata[keys[i]] = data[keys[i]];
               }
           }
       }

       this.setState({"data": newdata});
       
       newdata = JSON.stringify(newdata);
       localStorage.setItem("pattens", newdata);

    }

    render(){

        // this.get();

        var files = [];

        var data = this.state.data
        var datakeys = Object.keys(data);
        for(var i = 0; i < datakeys.length; i++){
            files.push( <li>{datakeys[i]} <input data-name={datakeys[i]} type="button"  onClick={this.onButtonClick} value="delete" /></li> );
        }

        return(<div>
            <h4>load</h4>
            <input type="button" onClick={this.onButtonClick} value="refresh" />
            <ol>{files}</ol>
        </div>)
    }
}

export default Load;