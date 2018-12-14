import React, { Component } from 'react';
import TodoList from './TodoList';

class todo extends Component {
    state = {
        list: [
            {
                id: 1,
                title: '할일할일1'
            },
            {
                id: 2,
                title: '할일할일2'
            },
        ],
        text: '',
    }

    checkTodo = (event) => {
        console.log(11111);

        const text = this.state.text;
        const list = [...this.state.list];//값이 레퍼런스로 전달되는거 방지

        list.push({
            id:3,
            title: text
        })

        this.setState({list: list, text: ''});

        event.preventDefault();//이벤트 전파 중지
        
    }

    handleChange = (event) => {
        // console.log(event.target.value);
        this.setState({text: event.target.value});
        
    }

    render() {
        return (
            <div>
                <h1>Todo</h1>
                <form onSubmit={this.checkTodo}>
                    <input type='text' onChange={this.handleChange} value={this.state.text}/>
                </form>
                {this.state.text}<br />
                
            </div>
        );
    }
}

export default todo;