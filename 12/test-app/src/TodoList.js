import React, { Component } from 'react';

const TodoList = () => {
    return (
        <ul>
        {
            props.list.map((item, index) => {
                return (
                    <li key={index}>{item.title}</li>
                )
            })
        }
        </ul>
    );
}

export default TodoList;