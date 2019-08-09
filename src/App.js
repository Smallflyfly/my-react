import React,{Component} from 'react';
// import logo from './logo.svg';
import './App.css';
import NaviBar from "./component/navi-bar/naviBar"
import SiderBar from "./component/sider-bar/siderBar"
import Banner from './component/banner/Banner'

class App extends Component{
  render(){
    return (
      <div className="container">
        <NaviBar>
        </NaviBar>
        <div className="main-body">
          <div className="row">
            <div className="col-md-9">
              <Banner></Banner>
            </div>
            <div className="col-md-3">
              <SiderBar></SiderBar>
            </div>
          </div>
        </div>
        <div className="foot-area"></div>
      </div>
    );
  }
}

export default App;
