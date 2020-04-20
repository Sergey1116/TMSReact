import React from 'react';

import {sortList} from '../../helpers/toDoHelpers'

export default function ToDoTask({props}){
    const { listTasks, filter, setListTasks } = props;
    
    function handleCheckbox(e){
        const newListTasks = listTasks.map(el => {
            if(el.id === +e.target.parentNode.parentNode.id){
                el["completed"] = !el["completed"];
                return el;
            } else{
                return el;
            }
        })
        
        setListTasks(newListTasks);
    }

    function onClickDelete(e){
        const newListTasks = listTasks.filter(el => el.id !== +e.target.parentNode.id);
        setListTasks(newListTasks);
    }

    return (
        <ul className="tasks">
                {sortList(listTasks, filter).map( el => {
                   return (
                    <li className="toDoElement" id={el.id} key={el.id}>
                        <div className="elem">
                            <input type="checkbox" defaultChecked={el.completed} onChange={handleCheckbox}></input>
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