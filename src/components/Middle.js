import React from 'react'
import toLearns from '../tables/toLearns'
import ToLearnList from './ToLearnList';


class Middle extends React.Component{
    constructor(){
        super()
console.log(toLearns)
    }
render(){
    return(
        <ToLearnList />
    )
}
}



export default Middle