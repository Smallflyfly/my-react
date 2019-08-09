import React,{Component} from "react";
import "./post-list";

export default class PostList extends Component{
    render(){
        return (
            <div class="row">
            <div class="col-sm-6 col-md-4">
              <div class="thumbnail">
                <img src="..." alt="..."></img>
                <div class="caption">
                  <h3>Thumbnail label</h3>
                  <p>...</p>
                </div>
              </div>
            </div>
          </div>
        )
    }
}
