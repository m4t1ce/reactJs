import React from 'react'
import toLearns from '../tables/toLearns';
import ToLearnItem from './ToLearnItem'

function ToLearnList(){
    const toLearnsComponent=toLearns.map(item=> <ToLearnItem text={item.text} key={item.id} status={item.status}/>)
    function addItem(){
        toLearns.push(document.getElementById("add").value)
    }
return(
    <div className="middle">
        <div className="toLearnList">
            <h1>To Learn List:</h1>
        {toLearnsComponent}
        <input type="text" id="add"></input><input type="submit" value="Add new to knew" onClick={addItem} ></input>
        </div>
    </div>
)
}

export default ToLearnList