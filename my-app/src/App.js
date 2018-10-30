import React, { Component } from 'react';
import 'antd/dist/antd.css'
import {Button,Input,List} from 'antd'
import store from './store/'
class App extends Component {
  constructor(props){
    super(props)
    this.state = store.getState()
    this.handleInputchange = this.handleInputchange.bind(this)
    this.handleStorechanged = this.handleStorechanged.bind(this)
    this.handleButtonclick = this.handleButtonclick.bind(this)
   
    store.subscribe(this.handleStorechanged)
    //store的监听方法要在绑定this以后使用；
    //react绑定一般是在constructor里绑定，
    //如果要传递参数则需要在行间绑定
  }
  handleInputchange(e){
   
    const action ={
      type:"input-change",
      value:e.target.value
    }
    store.dispatch(action)
  }
  handleStorechanged(){
  
    this.setState(store.getState())
  }
  handleButtonclick(){
    const action = {
      type:"button-click",
    }
    store.dispatch(action)
  }
  handleDelete(index){
    
    
    const action = {
      type:"delete-item",
      index
    }
    store.dispatch(action)
   
  }
  render() {
    return (
      <div className="App">
      <Input placeholder="Basic usage"
       style={{width:"300px",margin:"10px"}}
       onChange = {this.handleInputchange}
       value = {this.state.value}/>
      <Button 
      type="primary"
      onClick = {this.handleButtonclick}
      >Primary</Button>
      <List
      size="small"
      style = {{width:"400px",margin:"10px"}}
      bordered
      dataSource={this.state.message}
      renderItem={(item,index) => (<List.Item onClick={this.handleDelete.bind(this,index)}
      >{item}</List.Item>)}
    />
      </div>
    );
  }
}

export default App;
