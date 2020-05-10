import React from 'react'
import ReactDOM from 'react-dom';

import MouseInfoTracker from './CatRenderProps/MouseInfoTracker.jsx'
import DayNight from './DayNight/DayNight'

ReactDOM.render(
    <React.StrictMode>
        <MouseInfoTracker/>
        <DayNight/>
    </React.StrictMode>
    ,
    document.getElementById('root')
  );
