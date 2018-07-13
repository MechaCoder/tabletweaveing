import React from 'react'
import BasicTour from '../component/helper/tour';

const Header = function(){
    return(
        <header className="App-header">
          <h1 className="App-title">The Marvellous Mechanical Tablet Weaving Thing.</h1>
          <BasicTour />
        </header>
    )
}

export default Header;