import React from 'react'
import ReactDOM from 'react-dom';

import Header from './Delay/Header'
import HeaderHooks from './DelayHooks/Header'

ReactDOM.render(
    <React.StrictMode>
        <Header delayInSeconds={5}>Привет мир!</Header>
        <HeaderHooks  delayInSeconds={5}>Привет мир</HeaderHooks>
    </React.StrictMode>
    ,
    document.getElementById('root')
  );
  