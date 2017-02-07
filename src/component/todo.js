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

    }
    todoDone(doneItemIndex,isDone){
        this.state.todos[doneItemIndex].isChecked=isDone;
        this.state.havedones.push(this.state.todos[doneItemIndex]);
        this.setState({
            todos:this.state.todos,
            havedones:this.state.havedones
        })
    }
    delTodo(index){
        this.state.todos.splice(index,1);
        console.log(this.state.todos)

        this.setState({
            todos:this.state.todos
        })
    }
     delDone(index){
         this.state.havedones.splice(index,1);
         this.setState({
             havedones:this.state.havedones
         })
     }
    render(){
        let info={
            todos:this.state.todos,
            havedones:this.state.havedones
        }

        return(
            <div className="todo-wrapper">
                <TodoHeader addTodo={this.addTodo.bind(this)}/>
                <Todoing todos={this.state.todos} delTodo={this.delTodo.bind(this)} todoDone={this.todoDone.bind(this)}/>
                <Todone todoDones={this.state.havedones} delDone={this.delDone.bind(this)}/>
            </div>
            )


    }
 }