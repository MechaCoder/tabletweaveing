import React, { Component } from 'react';

class Wbtable extends Component {
    constructor(props){
        super(props)

        this.state = {
            current_patten: props.pattenObject,
            pattenName: props.name,
            highlight: 0,
            Direction: 'up',
            removed: false
        }

        this.onMoveStep = this.onMoveStep.bind(this);
        this.onClickRemove = this.onClickRemove.bind(this);
    }

    onMoveStep(event){

        var base = 0;

        if(this.state.Direction === "up"){
            base = (this.state.highlight + 1);
        }
        if(this.state.Direction === "down"){
            base = (this.state.highlight - 1);
        }

        if(base === this.state.current_patten.d_cols){
            base = (this.state.highlight);
            this.setState({ Direction: 'down' });
            // alert("change direction");
        }

        if(base === 0){
            this.setState({ Direction: 'up' });
        }

        // alert(base);        
        this.setState({highlight: base })

    }

    onClickRemove(event){
        this.setState({removed: !this.state.removed});
    }    

    render(){

        var tableInternal = [];

        for(var rows = 0; rows < this.state.current_patten.d_cols; rows++){{
            var colstemp = []
            for( var cols = 0; cols < this.state.current_patten.d_rows; cols++){
                var index = this.state.current_patten.patten[(cols + "|" + rows)];

                var highlight = [];
                if(rows === this.state.highlight && this.state.removed){
                    highlight = (<div className="highlight"></div>);
                }
            

                colstemp.push(<td data-rows={rows} data-cols={cols} style={{ "backgroundColor": index }} > {highlight} </td>)
            }

            tableInternal.unshift(<tr>{colstemp}</tr>)

        }

        }

        var controls = [];

        if( this.state.removed ){
            controls.push(<input type="button" value="move step" onClick={this.onMoveStep}/>)
        }

        return(
            <div className="wbtable">
                <h2>{this.state.pattenName}</h2>
                <table> {tableInternal} </table> 
                <div className="controls">
                    
                    <input type="button" value="remove" onClick={this.onClickRemove} />
                    {controls}
                </div>
            </div>
        )
    }
}

export default Wbtable;