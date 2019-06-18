import React from 'react'
import Counter from './Counter'
import List from './List'
class Right extends React.Component{
    constructor(){
        super()
    }
render(){
    return(
        <div>
            <Counter />
            <List />
        </div>
    )
}
}



export default Right