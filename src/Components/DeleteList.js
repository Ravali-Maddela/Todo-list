import React from 'react'
import ViewList from './ViewList'

const todoData = localStorage.getItem('todoData')
  ? JSON.parse(localStorage.getItem('todoData'))
  : []

export default class DeleteList extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      todoData: todoData,
    }
  }

  deleteTodo = (id) => {
    todoData.splice(id, 1);
    this.setState({ todoData: todoData })
    localStorage.setItem('todoData', JSON.stringify(todoData))

  }
  render() {
    return (
      <div>
        <ViewList todoData={todoData} tableHead={'Delete'} deleteTodo={this.deleteTodo} />
      </div>
    )
  }

}
