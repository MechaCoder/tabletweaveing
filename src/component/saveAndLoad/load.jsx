import React, { Component } from 'react';
// import swal from 'sweetalert2';

class Load extends Component{
    constructor(props){
        super(props);

        this.state = {
            "data": this.get(),
            "hash": props.lockhash
        }

        this.onButtonClick = this.onButtonClick.bind(this);
    }
    componentWillReceiveProps(newprop){
        this.setState({
            "hash": newprop.lockhash,
            "data": this.get()
        });
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
        if(data === null){
            data = {}
        }
        var keys = Object.keys(data);

       if(event.target.value === 'delete'){
           for(var i = 0; i < keys.length; i++){
               if(keys[i] !== event.target.attributes[0].value){
                    newdata[keys[i]] = data[keys[i]];
               }
           }
       }

       if(event.target.value === 'refresh'){
            newdata = data;
       }

       if(event.target.value === 'Load'){

            localStorage.setItem('loaded_patten', event.target.attributes[0].value);

            window.location.reload();
            return;
       }

       this.setState({"data": newdata});
       
       newdata = JSON.stringify(newdata);
       localStorage.setItem("pattens", newdata);

    }

    render(){

        // this.get();

        var files = [];

        var data = this.state.data

        if(data === null){
            data = {}
        }
        var datakeys = Object.keys(data);
        for(var i = 0; i < datakeys.length; i++){
            files.push( <li>{datakeys[i]} 
                <input data-name={datakeys[i]} type="button" onClick={this.onButtonClick} value="delete" />
                <input data-name={datakeys[i]} type="button" onClick={this.onButtonClick} value="Load" />
            </li> );
        }

        return(<div>
            <h4>load</h4>
            {/* <input type="button" onClick={this.onButtonClick} value="refresh" /> */}
            <ol>{files}</ol>
        </div>)
    }
}

export default Load;