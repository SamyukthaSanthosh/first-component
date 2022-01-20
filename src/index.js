import React from 'react';
import ReactDom from 'react-dom';

//function Greeting(){
//return(
  //<div>
    //<h4>This is my first component</h4>;
    //</div>
    //)
//}

const Greeting =() =>{
  return React.createElement('h1',{},React.createElement('h1',{},'hi'));
}

ReactDom.render(<Greeting/>,document.getElementById('root'))