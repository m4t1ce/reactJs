import React from 'react'

class Counter extends React.Component{
    constructor(props){
        super()
        this.state={
            age:0
        }
    }

    add(){
        this.setState({
            age:this.state.age+1
        });
    }

render(){
    return(
        <div className="counter">
            <p>{this.state.age}</p>
            <input type="submit" value="AddOne"onClick={() => this.add()}></input>
        </div>
    )
}
}
export default Counter