import React,{Component} from 'react'

class List extends Component{
    logIt(){
        this.value.setState({
        value:this.state.value.push("fdas")
        })
        console.log("asf")
    }
    constructor(){
        super()
        this.state={
            value:["asdf","2"]
        }
        this.logit =this.logIt.bind(this)
    }
    render(){
        return(
            <div><p>{this.state.value}</p>
            <button onClick={this.logIt}>logIt</button>
            </div>
        )
    }
}
class ListItem extends Component{
    render(){
        return(
            <div><p></p></div>
        )
    }
}
export default List