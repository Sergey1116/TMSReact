import React, {useState, useEffect} from 'react';
import {saveToDoList, getToDoList} from '../helpers/toDoHelpers.js'
import ToDoFilters from './components/ToDoFilters'
import ToDoInput from './components/ToDoInput'
import ToDoTask from './components/ToDoTask'

import './styles/index.scss';

const filters = ["All", "New", "Completed"];

export default function ToDolist(){
    const [filter, setFilter] = useState('All');
    const [listTasks, setListTasks] = useState(getToDoList());

    useEffect(()=>{
        saveToDoList(listTasks);
    },[listTasks])

    return(
        <div className="toDoList">
            <ToDoInput setList={setListTasks} list={listTasks}/>
            <ToDoTask props={{listTasks: listTasks, filter: filter, setListTasks: setListTasks}} />
            <ToDoFilters filters={filters} activFilter={filter} changeFilter={setFilter}/>
        </div>
    );
}


