import React from 'react';

export default function FilterSearchWord(notes, searchText){
    let rez = notes;
    if (searchText){
        rez = notes.filter(el => el.val.toLowerCase().includes(searchText.toLowerCase()));
    } 
    return(
        rez.map((note, index) =>{
            return(   
                <fieldset key={note.id}>
                    <legend>note {++index}:</legend>
                    {searchText ? HighlightWord(note.val, searchText) : <span>{note.val}</span>}
                </fieldset>)})
        )
}

function HighlightWord(note, searchText){
    const parts = note.split(new RegExp(`(${searchText})`, 'gi'));

    return ( 
        <span> 
            {parts.map((part, i) => <span key={i} 
                style={part.toLocaleLowerCase() === searchText.toLocaleLowerCase() 
                ? {backgroundColor:'yellow'} :{} }>{part}
            </span>)}
        </span>
    )
}
