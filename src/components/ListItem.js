import React from 'react'
import { Link } from 'react-router-dom'

// props is fixed data which we can't modify/updaye
// props are properties which we can pass down to a child component
const ListItem = ({note}) => {
  // Link is like <a> tag in html  to is 'href'
  //we're giving link to each note with id
  return (
    <Link to={`/note/${note.id}`}>
      <h3>{note.body}</h3>
    </Link>
  )
}

export default ListItem