import React,{Component} from "react";
import "./Banner";

export default class Banner extends Component{
    render(){
        return (
            <div class="jumbotron">
                <h1>Hello, world!</h1>
                <p>This is a simple hero unit, a simple jumbotron-style component for calling extra attention to featured content or information.</p>
                <p>
                    <a className="btn btn-primary btn-lg" href="#" role="button">
                        Learn more
                    </a>
                </p>
            </div>
        )
    }
}
