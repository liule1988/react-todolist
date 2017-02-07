/**
 * Created by leliu5 on 2017/2/6.
 */
import React from 'react';
import '../styles/main.css';
import TodoItem from './todoItem';
export default class Todoing extends React.Component{

    constructor(){
        super();
    }

    render(){
        console.log(this.props.todos.length)
        if(this.props.todos.length == 0) {
            return (
                <div>进行中{this.props.todos.length}</div>
            )
        } else {
            return (
                <ul className="todo-main">
                    <div>进行中{this.props.todos.length}</div>

                    {
                        this.props.todos.map((todo, index) => {
                            //{...this.props} 用来传递TodoMain的todos属性和delete、change方法。

                            return<TodoItem ischecked={todo.isChecked} text={todo.text} index={index} key={index} {...this.props}/>

                        })
                    }
                </ul>
            )
        }
    }
}