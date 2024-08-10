import React from 'react'
import notes from '../assets/data.js'
import ListItem from '../components/ListItem.js'

const NotesListPage = () => {
  return (

//{/* writing logic inside of html */}

// we're maping through notes 
//The term 'note' here is a parameter refers to each individual element of the notes array array as the map method iterates through it.
    <div>
      <div className="notes-list">
        {notes.map((note, index) => (
          <ListItem key={index} note={note}/>
        ))}
      </div>
    </div>
// we'e maping through note, saving each value in note parameter and showing it on body through <p>{note.body}</p>

//key prop is way that we can identify list items for the virtual dom | we'll be able to update a single item | index is to start it from zero
  )
}

export default NotesListPage