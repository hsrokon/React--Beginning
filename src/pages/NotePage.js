import React from 'react'
import { useParams } from 'react-router-dom'
import notes from '../assets/data'

const NotePage = () => {
  let {id} = useParams()
  // id is a string, so it needs to be converted to a number by {id} and also Number(id)

  let note = notes.find(note=> note.id === Number(id))
  //imported all the notes> used id> ran a filter to find specific note> rendered that in the body
  
  return (
    <div>
      <p>{note?.body}</p>
    </div>
    //that '?' is not to through an error if id doesn't exist
  )
}

export default NotePage