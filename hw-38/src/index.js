import React from 'react'
import ReactDOM from 'react-dom';
import NotesSearch from './components/notes/notes';

const notes = [
    {id: 1, val:"Create user stories and issues, plan sprints, and distribute tasks across your software team."},
    {id: 2, val:"Prioritize and discuss your team’s work in full context with complete visibility."},
    {id: 3, val:"Ship with confidence and sanity knowing the information you have is always up-to-date."},
    {id: 4, val:"Improve team performance based on real-time, visual data that your team can put to use."},
    {id: 5, val:"Transform product requirements in Confluence into a Jira Software backlog with one click."},
    {id: 6, val:"Upgrade your workflow with Confluence, Bitbucket, and hundreds of other developer tools."}];

ReactDOM.render(
    <React.StrictMode>
        <NotesSearch props = {notes}/>
    </React.StrictMode>
    ,
    document.getElementById('root')
  );
  