import React, { useState } from 'react'
import ViewList from './ViewList'

// const todoData = localStorage.getItem('todoData')
//   ? JSON.parse(localStorage.getItem('todoData'))
//   : []

export default function UpdateList() {
  const [dataToEdit, setDataToEdit] = useState()
  const [id, setId] = useState(0)
  const [todoData, setTodoData] = useState(localStorage.getItem('todoData')
    ? JSON.parse(localStorage.getItem('todoData'))
    : [])

  const editTodo = (list, id) => { setDataToEdit(list); setId(id) }
  console.log(dataToEdit)
  console.log(id)


  const editedTodo = (editedData) => {
    const item = todoData[id];
  
    item.sno = editedData.sno;
    item.task = editedData.task;
    item.status = editedData.status;
    setTodoData(todoData)
    localStorage.setItem('todoData', JSON.stringify(todoData))
    console.log(todoData)
  }

  return (
    <div>
      <ViewList todoData={todoData} tableHead={'Update'} editTodo={editTodo} editedTodo={editedTodo} />
    </div>
  )
}
