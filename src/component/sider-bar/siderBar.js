import React,{Component} from "react";
import "./siderBar";

export default class SiderBar extends Component{
    render(){
        return (
            <div className="list-group">
                <a href="#" className="list-group-item active">
                    在线客服列表
                </a>
                <a href="#" className="list-group-item">1号客服</a>
                <a href="#" className="list-group-item">2号客服</a>
                <a href="#" className="list-group-item">3号客服</a>
                <a href="#" className="list-group-item">4号客服</a>
            </div>
        )
    }
}