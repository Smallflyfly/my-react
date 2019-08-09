import React,{Component} from 'react';
// import logo from './logo.svg';
import './App.css';

class App extends Component{
  gameName="星际争霸2";

  render(){
    return (
      <div className="panel panel-primary">
        <div className="panel-heading">
          游戏名：{this.gameName}
        </div>
        <div className="panel-body">
          这是区域的主体
        </div>
        <div className="panel-footer">
          <button className="btn btn-success">确定</button>
          <button className="btn btn-danger">删除</button>
        </div>
      </div>
    );
  }
}

export default App;
