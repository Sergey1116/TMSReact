import React from "react";
import {Consumer} from './ThemeContex';

export default () => {
    return(
        <Consumer>{context =>(
            <button onClick={context.toggleTheme}>
                {`Turn on ${context.theme === 'day' ? '🌚':'🌞'}`}
            </button>
        )}
        </Consumer>
    );
};
