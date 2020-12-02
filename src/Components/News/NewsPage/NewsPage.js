import React, {Component} from 'react';
import ReactHtmlParser from 'react-html-parser';
import './newpage.css'
import Comments from "./Comments/Comments";

class NewsPage extends Component {
    render() {
        const {title, author, image_detail, short_body, image_blog, body} = this.props
        return (
            <div>
            <div className="container jumbotron">
                <img src={"https://nurkadyrnur.pythonanywhere.com" + image_detail} alt="" />
                <h1>
                    {title}
                </h1>
                <p>
                    {ReactHtmlParser(short_body)}
                </p>
                <img style={{width:"100%"}} src={"https://nurkadyrnur.pythonanywhere.com" + image_blog} alt="" />
                <p>
                    {ReactHtmlParser(body)}
                </p>
                <h4 style={{color:"gray"}}>
                    Author:{author}
                </h4>
            </div>
                <Comments/>
            </div>
        );
    }
}

export default NewsPage;