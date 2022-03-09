import React from "react";

class ClassComponent extends React.Component{
    constructor(){
        super();
        this.state = {name:'Anu'};
        this.handleClick = this.handleClick.bind(this);
    }

    handleClick(){
        this.setState({name:this.props.name});
    }

    render(){
        return(
        <div>
            <button onClick={this.handleClick}>Change name</button>
            <h2>Hello {this.state.name}</h2>    
        </div>
        );
    }
}

export default ClassComponent;