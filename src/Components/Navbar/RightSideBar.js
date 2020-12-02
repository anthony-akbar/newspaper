import React, {Component} from 'react';
import NewsItem from "../News/NewsItem/NewsItem";

class RightSideBar extends Component {
    render() {
        return (
            <div className="col-4">
              <ul>
                  {this.props.data.map((item)=><li>{item.type}</li>)}
              </ul>
            </div>
        );
    }
}

export default RightSideBar;