import React from 'react'


export default function ViewItem(props) {

    const deleteTodo = () => {
        props.deleteTodo(props.id)
    }
    const editTodo =()=>{
        props.editTodo(props.list,props.id)
        
    }
    return (
        <>
            <tr key={props.list.sno} className='tableRow'>
                <td >{props.id + 1}</td>
                <td>{props.list.task}</td>
                <td>{props.list.status} </td>
                {
                    props.tableHead ?
                        props.tableHead === 'Delete'
                            ? <td><button onClick={deleteTodo} className='bg-warning'> X </button></td>
                            : <td><button onClick={()=>{props.updateTodo();  editTodo()}} className='bg-warning '> {props.tableHead} </button></td>
                        : null
                }

            </tr>    
        </>


    )
}
