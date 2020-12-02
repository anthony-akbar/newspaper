import React, {Component} from 'react';
import {Card} from "react-bootstrap";
import {NavLink} from "react-router-dom";
import ReactHtmlParser from 'react-html-parser';

class NewsItem extends Component {
    render() {
        const {title, author, image_detail, short_body, id} = this.props
        return (
            <Card style={{margin: "20px"}} className="bg-dark text-white">
                    <Card.Img href="/body" src={"https://nurkadyrnur.pythonanywhere.com" + image_detail}
                              alt="Card image"/>
                <Card.ImgOverlay style={{fixed:"bottom"}}>
                    <Card.Title>{title}</Card.Title>
                    <Card.Text style={{color:"black"}}>
                        {ReactHtmlParser(short_body)}
                    </Card.Text>
                    <Card.Text>{author}</Card.Text>
                    <NavLink style={{float:"right"}} className="btn btn-success" to={`/news/${id}`}>Go</NavLink>
                </Card.ImgOverlay>
            </Card>
        );
    }
}

export default NewsItem;