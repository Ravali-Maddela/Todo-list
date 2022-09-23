import React, { useState } from 'react'
import AddList from './AddList'
import ViewList from './ViewList'

const todoData = localStorage.getItem('todoData')
    ? JSON.parse(localStorage.getItem('todoData'))
    : []

export default class Home extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            todoData: todoData,
        }
    }

    addTodo=(addedTodo) =>{
        todoData.push(addedTodo)
       this.setState({todoData: todoData})
        localStorage.setItem('todoData',JSON.stringify(todoData))
        console.log(todoData)

    }
    render() {
        return (
            <div>
                <div >
                    <AddList onAddTodo={this.addTodo} />
                    <ViewList todoData={todoData} />
                </div>

            </div>
        )
    }

}
