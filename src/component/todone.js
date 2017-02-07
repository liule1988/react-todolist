/**
 * Created by leliu5 on 2017/2/6.
 */
import React from 'react';
import TodoItem from './todoItem';
export default class Todone extends React.Component{

    constructor(){
        super();
    }
    render(){
        return(
            <div>

                <ul className="todo-main">
                    <div>已完成{this.props.todoDones.length}</div>

                    {
                        this.props.todoDones.map((todoDone, index) => {
                            //{...this.props} 用来传递TodoMain的todos属性和delete、change方法。

                            return<TodoItem isChecked={todoDone.isChecked} text={todoDone.text} index={index} key={index} {...this.props}/>

                        })
                    }
                </ul>
            </div>

        )
    }
}