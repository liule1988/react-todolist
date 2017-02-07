/**
 * Created by leliu5 on 2017/2/7.
 */
import React from 'react';
export default class TodoItem extends React.Component {

    constructor() {
        super();
    }
    handleClick(){
        console.log(this.props.index);
        console.log(this.props.isChecked);

        if (this.props.isChecked){
            this.props.delDone(this.props.index);
        }else {
            this.props.delTodo(this.props.index);   //使用props调用App组件传过来的方法。

        }

    }
    handleChange(){
        let isDone=!this.props.isChecked;
        if(this.props.isChecked){
            this.props.delDone(this.props.index);

        } else {
            this.props.todoDone(this.props.index,isDone);
            this.props.delTodo(this.props.index);   //使用props调用App组件传过来的方法。
        }


    }
    render(){
        return(
            <li className="todoItem-wrapper">
                <input type="checkbox" checked={this.props.isChecked} onChange={this.handleChange.bind(this)}/>
                <span className="todo-style">{this.props.text}</span>
                <span className="delete" onClick={this.handleClick.bind(this)}>删除</span>
            </li>
        )
    }
}