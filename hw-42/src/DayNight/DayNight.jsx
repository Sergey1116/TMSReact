import React, { useState } from 'react';
import {Provider} from './ThemeContex';
import MianBlock from './MianBlock';

export default () => {
    const [appContex, setAppContext] = useState("day");

    const handleClick = () => {
        appContex === "day" ? setAppContext("night"): setAppContext("day"); 
    }

    return(
        <Provider value={{theme: appContex, toggleTheme: handleClick}}>
            <MianBlock/>
        </Provider>
    );
}

