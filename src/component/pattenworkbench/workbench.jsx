import React, { Component } from 'react';

class Wbtable extends Component {
    constructor(props){
        super(props)

        this.state = {
            current_patten: props.pattenObject,
            pattenName: props.name
        }
    }

    

    render(){

        console.log(this.state.current_patten);

        var tableInternal = [];

        for(var rows = 0; rows < this.state.current_patten.d_rows; rows++){{

            var colstemp = []
            for( var cols = 0; cols < this.state.current_patten.d_cols; cols++){
                var index = this.state.current_patten.patten[(rows + "|" + cols)];

                // console.log((rows + "|" + cols));

                colstemp.push(<td data-rows={rows} data-cols={cols} style={{ "backgroundColor": index }} >{rows}{cols}</td>)
            }

            tableInternal.push(<tr>{colstemp}</tr>)

        }

        }

        return(
            <div className="wbtable">
                <h2>{this.state.pattenName} | </h2>
                <table> {tableInternal} </table>
            </div>
        )
    }
}

export default Wbtable;