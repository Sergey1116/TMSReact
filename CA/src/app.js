import React from 'react';
import Header from "./components/Header";
import Main from './components/Main';
import Aside from "./components/Aside";
import Fotter from "./components/Fotter";

const App = () => {
        return (
            <>
                <Header />
                <div className="flex-grow-1 d-flex bg-light">  
                        <Aside/>
                        <Main/>
                </div>
                <Fotter/>
            </>
            )
    }

export default App;