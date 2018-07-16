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

            if(!window.confirm("Are you sure you want to delete!")){
                return;
            }

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
            var wb = '/workbench/'.concat(datakeys[i]);

            files.push( <tr> <td className="p-title">{datakeys[i]}</td>
                <td>
                    <input data-name={datakeys[i]} type="button" onClick={this.onButtonClick} value="delete" />
                    <input data-name={datakeys[i]} type="button" onClick={this.onButtonClick} value="Load" />
                    <a href={wb} >Workbench</a>
                </td>
            </tr> );
        }

        return(<div>
            <h4>load</h4>
            <table>{files}</table>
        </div>)
    }
}

export default Load;