import React from 'react'

class Counter extends React.Component{
    constructor(props){
        super()
        this.state={
            age:props.initialNumber
        }
    }

    add(){
        this.setState({
            age:parseInt(this.state.age)+2
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