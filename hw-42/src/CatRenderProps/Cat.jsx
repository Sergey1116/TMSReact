import React, {Component} from 'react';

export default class Cat extends Component{
    render(){
        const mouse = this.props.mouse;
        return(
            <img src="cat.png" alt="cat" height='50px' style={{position: 'absolute',  top: mouse.y-25, left: mouse.x-50}}/>
        );
    }
}