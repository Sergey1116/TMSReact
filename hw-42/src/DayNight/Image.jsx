import React from 'react';
import {Consumer} from './ThemeContex';

export default () =>{
    return(
        <Consumer>
            {context =>(
                <div className={`sky ${context.theme}`}>
                    <div className={`${context.theme === 'day' ? 'sun':'moon'}`}></div>
                </div>
            )}   
        </Consumer>
    );
}