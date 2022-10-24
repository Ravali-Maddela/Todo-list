import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'

export default function AddList (){
    const [todoData, setTodoData] = useState(localStorage.getItem('todoData')
    ? JSON.parse(localStorage.getItem('todoData'))
    : [])

    const navigate= useNavigate()
    
   
 const handleSubmit = (e) => {
        e.preventDefault()
        
        const  sno= (todoData.length!==0) ? todoData.length+1 : 1;
        const task = e.target.elements.task.value;
        const status = e.target.elements.status.value;
        const addedTodo = {
            sno: sno,
            task: task,
            status: status
        }
        if (task && status) {
            todoData.push(addedTodo)
            setTodoData(todoData)
            localStorage.setItem('todoData', JSON.stringify(todoData))
          navigate('/')
        }
        console.log(todoData)
       
    }

    return (
        <div className='list'>
            <h4>Add Todo</h4>
            <form onSubmit={handleSubmit}>
                <div className='form-group'>
                    <input type={'text'} placeholder='Enter Task' className='form-control' name='task' />
                </div>
                <div className=' form-group row'>
                    <div className='form-check col'>
                        <label htmlFor='done' className='form-check-label'><input type={'radio'} id='done' className='form-check-input' name='status' value={'Done'} />Done</label>
                    </div>
                    <div className='form-check col'>
                        <label htmlFor='pending' className='form-check-label'><input type={'radio'} id='pending' className='form-check-input' name='status' value={'Pending..'} /> Pending</label>
                    </div>
                </div>
                <div><button>Add</button></div>
            </form>
        </div>
    )


  
}
