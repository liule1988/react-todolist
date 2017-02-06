/**
 * Created by leliu5 on 2017/2/6.
 */
import React from 'react';
export default class TodoHeader extends React.Component{

    constructor(){
        super();
    }
    handleEnter(e){
        if(e.keyCode == 13) {
            let value = e.target.value;
            console.log(value);
            if(!value) return false;
            let newTodoItem = {
                text: value,
            };
            e.target.value = '';
            this.props.addTodo(newTodoItem);   //使用props调用App组件传过来的方法。
        }
    }
    render(){
        return(
            <div>
                <span>TodoList</span>
                <div>
                    <input placeholder="添加待办事项" onKeyUp={this.handleEnter.bind(this)}/>
                </div>
            </div>
        )
    }
}