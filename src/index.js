import React from 'react';
import ReactDom from 'react-dom';
import App from'./app';
import './index.css';


const Main=() =>{
    return(
      <>
      <App/>
      </>
    );
}

ReactDom.render(<Main/>,document.getElementById('root'))