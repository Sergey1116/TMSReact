import React from 'react';
import './style.scss';
import Image from './Image';
import Button from './Button';

export default () => {
    return(
        <div className='main-block'>
            <Image/>
            <Button/>
        </div>
    );
}