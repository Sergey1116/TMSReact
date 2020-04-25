import React, {Component} from 'react';

export default class Mouse extends Component{
    constructor(props){
        super(props);
        this.state = {x: 0, y: 0};
    }

    handlerMouseMove = (e) => {
        this.setState({x: e.clientX, y: e.clientY});
    }

    componentDidMount(){
        document.addEventListener("mousemove", this.handlerMouseMove);
    }

    componentWillUnmount(){
        document.removeEventListener("mousemove", this.handlerMouseMove);
    }

    render(){
        return (
            <>
                {this.props.render(this.state)}
            </>
            );    
    }
} 