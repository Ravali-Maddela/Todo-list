import React from 'react'
// import ListItem from './ListItem'

export default function ViewList(props) {
    const todoData= props.todoData;
    console.log(todoData)
    return (
        <div className='list'>
            <h4>Todo List</h4>
            <table className='table table-bordered' >
                <thead className='bg-warning'>
                    <tr><th>SR. No</th>
                        <th>Task</th>
                        <th>Status</th></tr>
                </thead>
                <tbody>
                    {
                        console.log(todoData)}
                        {
                        todoData.map((list,i) => <tr key={i}>
                            <td >{list.sno}</td>
                            <td>{list.task}</td>
                            <td>{list.status} </td>
                        </tr>)
                    }


                </tbody>
            </table>
        </div>
    )
}
