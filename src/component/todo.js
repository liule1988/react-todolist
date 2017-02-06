import React from 'react';
import TodoHeader from './todoheader';
import Todoing from './todoing';
import Todone from './todone';
 export default class Todo extends React.Component{
    constructor(){
        super();
        this.state={
            todos:[],
            havedones:[],
            isChecked:false
        }
    }
    addTodo(todoItem){
        this.state.todos.push(todoItem)
        this.setState({
            todos:this.state.todos
        })


        console.log(this.state.todos)
    }
    render(){
        let info={
            todos:this.state.todos,
            havedones:this.state.havedones
        }

        return(
            <div className="todo-wrapper">
                <TodoHeader addTodo={this.addTodo.bind(this)}></TodoHeader>
                <Todoing todos={this.state.todos}></Todoing>
                <Todone></Todone>
            </div>
            )


    }
 }