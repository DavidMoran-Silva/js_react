import React from 'react';
import './App.css';

class App extends React.Component{
//convert app.js into a class base comp bc using state

constructor(props){
  super(props)
  this.state = {
    title:"David Moran-Silva"
  }
}

  render(){
  return (
     <div>Welcome Hello </div>
    );
  }
}

export default App;
