import React from 'react'
import { useParams } from 'react-router-dom'
import notes from '../assets/data'
import { Link } from 'react-router-dom'
import {ReactComponent as ArrowLeft} from '../assets/arrow-left.svg'
//we can import images as components

const NotePage = () => {
  let {id} = useParams()
  // id is a string, so it needs to be converted to a number by {id} and also Number(id)

  let note = notes.find(note=> note.id === Number(id))
  //imported all the notes> used id> ran a filter to find specific note> rendered that in the body
  
  return (
    <div className='note'>
      <div className='note-header'>
        <h3>
            <Link to="/">
              <ArrowLeft />
            </Link>
        </h3>
      </div>
      <textarea value={note?.body}>
        
      </textarea>
    </div>
    //that '?' is not to through an error if id doesn't exist
  )
}

export default NotePage