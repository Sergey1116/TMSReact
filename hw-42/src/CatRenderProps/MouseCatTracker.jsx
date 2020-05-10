import React, {Component} from 'react';

export default class MouseCatTracker extends Component{
    render(){
        const mouse = this.props.mouse;
        return <p>Текущее положение курсора мыши: ({mouse.x}, {mouse.y})</p>;
    }
}