/*
 * @Date: 2020-09-22 17:41:33
 * @LastEditors: Hewie
 * @LastEditTime: 2020-10-10 18:00:56
 * @FilePath: /react/react-todolist/src/TodoList.js
 */
import React, { Component, Fragment } from 'react';// Fragment 占位符 组件必须只有一个根标签，h5标签作为根标签会被渲染出来，用占位符做根标签不会被渲染
import './style.css'

// function TodoList(){
//   return (
//     <div>dsdsd</div>
//   )
// }


class TodoList extends Component {
  constructor(props) {
    super(props);
    // state是组件的状态,负责存储组件的数据
    this.state = {
      inputValue: '',
      list: ['学习英文', '学习react', '测试提交']
    }
  };
  render() {
    return (
      <Fragment>
        <div>
          {/* 多行注释 */}
          {
            // 单行注释
          }
          {/* 1、表达式要通过花括号进行包裹
              2、原生的绑定事件onchange小写，react的绑定事件onChange大写
              3、事件绑定的时候要通过bind(this)对函数作用域进行变更
          */}
          {/* className代替class */}
          <input
            className='input'
            value={this.state.inputValue}
            onChange={this.handleInputChange.bind(this)}
          />

          <button onClick={this.handleBtnClick.bind(this)}>提交</button>
        </div>
        <ul>
          {
            this.state.list.map((item, index) => {
              return (
                <li
                  key={index}
                  // 传递参数放在this后面
                  onClick={this.handleItemDelete.bind(this, index)}
                  dangerouslySetInnerHTML={{ __html: item }}
                >
                  {item}
                </li>
              )
            })
          }
        </ul>
      </Fragment>
    )
  }

  handleInputChange(e) {
    // console.log(e.target.value)
    // console.log(this)
    // 注意this的指向问题，bind(this)这里的bind将this的作用域指定到组件实例
    this.setState({
      inputValue: e.target.value
    })
  }
  handleBtnClick() {
    this.setState({
      // ...es6展开运算符
      list: [...this.state.list, this.state.inputValue],
      inputValue: ''
    })
  }
  handleItemDelete(index) {
    // immutable
    // state 不允许我们做任何的改变
    const list = [...this.state.list];
    list.splice(index, 1);
    this.setState({
      list: list
    })
  }
}


export default TodoList;