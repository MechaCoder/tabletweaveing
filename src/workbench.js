import React, { Component } from 'react';

import Header from './component/header.jsx';
import Workbench from './component/pattenworkbench/workbench';
class WorkbenchRoot extends Component {

    constructor(props){ 
        super(props);

        var patten = JSON.parse(localStorage.getItem('pattens'));
        var ex = patten[props.match.url.split("h/")[1]];

        this.state = {
            pattenName: props.match.url.split("h/")[1],
            patten: ex
        }
    }

    render(){
        return(
            <div className="app-body">
                <Header />
                <Workbench name={this.state.pattenName} pattenObject={this.state.patten} />
                
            </div>
        );
    }

}

export default WorkbenchRoot;