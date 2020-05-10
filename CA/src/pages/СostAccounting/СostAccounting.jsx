import React, {useState, useEffect} from 'react';
import {saveCAList, getCAList} from '../../helpers/costAccountingHelpers'
import CATable from './components/CATable'

export default function СostAccounting(){
    const [listCA, setlistCA] = useState(getCAList());

    useEffect(()=>{
        saveCAList(listCA);
    },[listCA])

    return(
        <div className="">
            <h2>Table of costs</h2>
            <div className="container">
                <CATable props={{listCA: listCA, setlistCA: setlistCA}} />
            </div>
        </div>
    );
}


