import React from 'react'
import Update from './Update'
import ViewList from './ViewList'


export default function UpdateList(props) {
  return (
    <div>
          <ViewList todoData={props.todoData}/>
          <Update />
    </div>
  )
}
