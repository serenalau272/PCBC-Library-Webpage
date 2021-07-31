import React from 'react';
import '../styling/index.css';
import '../styling/App.css';



function NoResult() {

    return (
      <div>
        <div className={'noPage'}>
            <h1>No results containing your search terms were found.</h1>

            <a href={'/'}>
              <img className={'speech'} src="./speechbubble.png"/>
            </a>
            
            <img className={'sad_cat'} src="./sad_cat.png"/>

            {/* <p>CLICK TO GO BACK <a href={'/'}>here</a></p> */}
            
        </div>
       
      </div>
  
    );
  }
  
  export default NoResult;