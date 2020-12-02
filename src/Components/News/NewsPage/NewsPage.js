import React, {Component} from 'react';

class NewsPage extends Component {
    render() {
        const {title, author, image_detail, short_body, image_blog, body} = this.props
        return (
            <div className="container jumbotron">
                <img src={"https://nurkadyrnur.pythonanywhere.com" + image_detail} alt="" />
                <h1>
                    {title}
                </h1>
                <p>
                    {short_body}
                </p>
                <img src={"https://nurkadyrnur.pythonanywhere.com" + image_blog} alt="" />
                <p>
                    {body}
                </p>
                <h4 style={{color:"gray"}}>
                    Author:{author}
                </h4>
            </div>
        );
    }
}

export default NewsPage;