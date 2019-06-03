import React from 'react'

function ToLearnItem(props){
    return(
        <div>
            <p key={props.id} className={props.status}>{props.text}</p>
        </div>
           )}

export default ToLearnItem