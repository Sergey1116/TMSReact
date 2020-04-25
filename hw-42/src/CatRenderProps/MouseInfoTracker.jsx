import React, {Component} from 'react';
import Mouse from './Mouse';
import Cat from './Cat';
import MouseCatTracker from './MouseCatTracker';

export default class MouseInfoTracker extends Component{
    render(){
        return(
            <>
                <h2>Перемещайте курсор мыши!</h2>
                <Mouse render = {mouse =>
                    
                        { return (
                            <>
                                <MouseCatTracker mouse={mouse}/>
                                <Cat mouse={mouse}/>
                            </>)}
                     }/>
            </>
        );
    }
}