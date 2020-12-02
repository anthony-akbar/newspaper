import React, {Component} from 'react';
import NewsItem from "./NewsItem/NewsItem";

class News extends Component {
    render() {
        return (
            <div className="container jumbotron">
                {this.props.data.map((item)=><NewsItem key={item.id} {...item}/>)}
            </div>
        );
    }
}

export default News;