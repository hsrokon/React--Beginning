import React from 'react'
import { useParams } from 'react-router-dom'

const NotePage = () => {
  let id = useParams()
  console.log("noteId:", id)
  return (
    <div>
      <h1>This is a single note page</h1>
    </div>
  )
}

export default NotePage