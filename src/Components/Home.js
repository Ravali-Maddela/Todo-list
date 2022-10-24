import React from 'react'
import ViewList from './ViewList'


export default function Home(){
    const todoData = localStorage.getItem('todoData')
    ? JSON.parse(localStorage.getItem('todoData'))
    : []

    console.log('home')
    
        return (
            <div>
                <div >
                    <ViewList todoData={todoData} />
                </div>

            </div>
        )
    }


