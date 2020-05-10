import {createContext} from 'react';

export const {Provider, Consumer} = createContext({
    theme: 'day',
    toggleTheme: () => {}
});