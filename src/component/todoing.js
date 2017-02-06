/**
 * Created by leliu5 on 2017/2/6.
 */
import React from 'react';
export default class Todoing extends React.Component{

    constructor(){
        super();
    }
    render(){
        console.log(this.props.todos.length)
        if(this.props.todos.length == 0) {
            return (
                <div className="todo-empty">恭喜您，目前没有待办任务！</div>
            )
        } else {
            return (
                <ul className="todo-main">
                    {
                        this.props.todos.map((todo, index) => {
                            //{...this.props} 用来传递TodoMain的todos属性和delete、change方法。
                            return <div key={index}>{todo.text}</div>
                        })
                    }
                </ul>
            )
        }
    }
}