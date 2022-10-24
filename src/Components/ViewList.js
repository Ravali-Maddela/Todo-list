import React, { useState } from 'react'
import Update from './Update';
import ViewItem from './ViewItem'

export default function ViewList(props) {
    const todoData = props.todoData;
    const [isEditing, setisEditing] = useState(false)

 const updateTodo =()=>{
    setisEditing(true)
  }
    return (
        <div className='list'>
            <h4>Todo List</h4>
            <table className='table table-bordered' >
                <thead className='bg-warning'>
                    <tr><th>SR. No</th>
                        <th>Task</th>
                        <th>Status</th>
                        {
                            props.tableHead ? <th>{props.tableHead}</th> : null
                        }
                    </tr>
                </thead>
                <tbody>
                    {
                        todoData.map((list, i) =>
                            <ViewItem
                                key={i}
                                list={list}
                                id={i}
                                deleteTodo={props.deleteTodo}
                                tableHead={props.tableHead}
                                updateTodo={updateTodo}
                                editTodo={props.editTodo}
                            />)
                    }

                </tbody>
            </table>
            {

                isEditing ? <Update isEditing={isEditing} todoData={todoData} editTodo={props.editTodo} editedTodo={props.editedTodo} /> : null

            }
        </div>
    )
}
