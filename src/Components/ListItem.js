import React from 'react'

export default function ListItem(props) {
    const list = props.list;
    return (
        <div className='table'>
            <tr key={list.sno}>
                <td >{list.sno}</td>
                <td>{list.task}</td>
                <td>{list.status} </td>
            </tr>
        </div>
    )
}
