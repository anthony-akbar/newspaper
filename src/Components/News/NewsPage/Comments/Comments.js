import React, {Component} from 'react';
import {Container} from "react-bootstrap";
import AddComment from "./AddComment";

class Comments extends Component {
    render() {
        return (
                <div style={{backgroundColor:"gray"}} className="container be-comment-block">
                    <Container>
                        {/*{this}*/}
                        <AddComment/>
                    </Container>
            </div>
        );
    }
}

export default Comments;