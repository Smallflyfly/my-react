import React,{Component} from 'react';
// import logo from './logo.svg';
import './App.css';

class App extends Component{
  gameName="星际争霸2";
  names = ["神族","人族","虫族"];
  getMethod(){
    return "1:人族";
  }
  successHandler(){
    alert("success");
  }
  deleteHandler(){
    alert("delete");
  }
  render(){
    return (
      <div className="panel panel-primary">
        <div className="panel-heading">
          游戏名：{this.gameName}
        </div>
        <div className="panel-body">
          <p>
            请选择种族：
          </p>
          <ul>
            {
              this.names.map(function(name, index){
                return <li>{index+1}-{name}</li>
              })
            }
          </ul>
          <p>{this.getMethod()}</p>
          <p>
            随机种族:
            {/* {
              (Math.random()*10)%2==0?"人族":"神族"
            } */}
          </p>
        </div>
        <div className="panel-footer">
          <button className="btn btn-success" onClick={
            (e)=>this.successHandler()
            }>
              确定
          </button>
          <button className="btn btn-danger" onClick={(e)=>this.deleteHandler()}>删除</button>
        </div>
      </div>
    );
  }
}

export default App;
