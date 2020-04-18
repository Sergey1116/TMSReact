import React, {useRef} from 'react';

export default function ToDoInput(props){
    let textInput = useRef(null);

    function insertTask(){
        if (textInput.current.value !== ""){
            props.setList([ ...props.list, { 
                task: textInput.current.value, 
                completed: false, 
                id: props.list.length ? props.list.reduce((acc, curr) => acc+curr.id, 0) + 1 : 0 }]);
            textInput.current.value = "";
        }
    }

    function clearInput(){
        textInput.current.value = "";
    }

    return (
        <div className="toDoInput">
            <input type="text" placeholder="What you need to do?" ref={textInput}></input> 
            <button onClick={clearInput}>&#10006;</button>
            <button onClick={insertTask}>&#10004;</button>
        </div>
    );
}