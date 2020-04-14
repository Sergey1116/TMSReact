import React, {useState, useEffect} from 'react'

const styles = {
    width: "600px",
    margin: "50px auto",
  };

export default function NotesSearch({props}){
    const [searchText, setSearchText] = useState("");
    const [notes, setNotes] = useState(props);

    function onChangeHandler(e) {
        const rez = props.filter(val => val.toLowerCase().includes(e.target.value.toLowerCase()));
        setNotes(rez);
        setSearchText(e.target.value);

    }

    return (
        <>
            <div style={styles}>
            <input type="text" value={searchText}  onChange={onChangeHandler}/>
            
            {notes.map((val, index) => {
                 return(
                <fieldset key={index}>
                    <legend>note {++index}:</legend>
                    {HighlightWord(searchText, val)}
                 </fieldset>
            )})}
            </div>
        </>
    );
    }

    function HighlightWord(searchText, note){
        if ( searchText===""){
            return note;
        } else{
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
    }


