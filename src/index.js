import React from 'react';
import ReactDOM from 'react-dom';

import {
    BrowserRouter as Router,
    Route,
} from 'react-router-dom';


import './index.css';
import App from './App';
import Workbench from './workbench';
import registerServiceWorker from './registerServiceWorker';

const SiteRouter = function(){
    return(
    <Router>
        <span>
        <Route exact path="/" component={App} />
        <Route path="/workbench/:pattenName" component={Workbench} />
        </span>
    </Router>
    )

}

export default SiteRouter
ReactDOM.render(<SiteRouter />, document.getElementById('root'));
registerServiceWorker();
