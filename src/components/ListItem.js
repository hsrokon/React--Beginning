import React from 'react'

// props is fixed data which we can't modify/updaye
// props are properties which we can pass down to a child component
const ListItem = ({note}) => {
  // console.log('PROPS:', props);
  return (
    <div>
      <h3>{note.body}</h3>
    </div>
  )
}

export default ListItem