import React, {useState, useEffect} from 'react';
import {saveCAList, getCAList} from '../helpers/costAccountingHelpers'
import CAList from './components/CAlist'
import CAInput from './components/CAInput'

export default function СostAccounting(){
    const [listCA, setlistCA] = useState(getCAList());

    useEffect(()=>{
        saveCAList(listCA);
    },[listCA])

    return(
        <div className="container mx-auto text-center px-3 py-3 pt-md-5 pb-md-4 ">
            <h2>Table expenses</h2>
            <div className="container mt-5">
                <CAList props={{listCA: listCA, setlistCA: setlistCA}} />
                <CAInput listCA={listCA} setlistCA={setlistCA}/>
            </div>
        </div>
    );
}


