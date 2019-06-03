import React from 'react';
import Middle from './components/Middle'
import './App.css';
import Right from './components/Right'

function App(){
  return(
    <div className="flexbox">
    <h1 className="header">HEllo!</h1>
    <Middle />
    <Right />
    <h1 className="bottom">sum bottome</h1>
    </div>
  )
}

export default App;