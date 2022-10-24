import React from 'react'

export default function Update(props){
  
    const handleSubmit = (e) => {
        const  sno= (props.todoData.length!==0) ? props.todoData.length+1 : 1;
        const task=e.target.elements.task.value
        const status =e.target.elements.status.value
        const updatedData={
            sno:sno,
            task:task,
            status:status
        }
        console.log(updatedData) 
    props.editedTodo(updatedData)

    }
  
    
    return (
        <div className='list'>
            <h4>Update Todo of no. {props.id} </h4>
            <form onSubmit={handleSubmit} >
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
                <div><button className='bg-warning'>Update</button></div>
            </form>

        </div>
    )
}
