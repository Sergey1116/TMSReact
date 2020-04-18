import React from 'react';

import {filterList} from '../../helpers/toDoHelpers'

export default function ToDoTask({props}){
    const { listTasks, filter, setListTasks } = props;
    function handleCheckbox(e){
        const newListTasks = listTasks.map(el => {
            if(el.id === +e.target.value){
                el["completed"] = !el["completed"];
                return el;
            } else{
                return el;
            }
        })
        setListTasks(newListTasks);
    }

    function onClickDelete(e){
        debugger
        const newListTasks = listTasks.filter(el => el.id !== e.target.parentNode.value);
        setListTasks(newListTasks);
    }

    return (
        <ul className="tasks">
                {filterList(listTasks, filter).map( el => {
                   return (
                    <li className="toDoElement" key={el.id} value={el.id}>
                        <div className="elem">
                            <input type="checkbox" value={el.id} defaultChecked={el.completed} onChange={handleCheckbox}></input>
                            <span className={`${el.completed? "completed" : "actual"}`}>
                                {el.task}
                            </span>
                        </div>
                        <div className="deleteElem" onClick={onClickDelete}>&#10006;</div>
                    </li>)
                })}
            </ul>
    );
}