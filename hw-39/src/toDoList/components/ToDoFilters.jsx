import React from 'react';

export default function ToDoFilters(props){
    function onChangeFilter(e){
        props.changeFilter(e.target.innerText)
    }

    return (
    <ul className="filters">
        {props.filters.map(val => 
        <li className={`${props.activFilter === val? "active": ""}`} 
            key={val} 
            onClick={onChangeFilter}>
                {val}
        </li>)}
    </ul>
    );
}