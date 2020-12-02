import React, {Component} from 'react';

class CommentsItem extends Component {
    render() {
        return (
            <div className="be-comment">
                <div className="be-img-comment">
                    <img src="" alt="" className="be-ava-comment"/>
                </div>
                <div className="be-comment-content">

				<span className="be-comment-name">
					<a href="blog-detail-2.html">Ravi Sah</a>
					</span>
                    <span className="be-comment-time">
					<i className="fa fa-clock-o"></i>
					May 27, 2015 at 3:14am
				</span>

                    <p className="be-comment-text">
                        Pellentesque gravida tristique ultrices.
                        Sed blandit varius mauris, vel volutpat urna hendrerit id.
                        Curabitur rutrum dolor gravida turpis tristique efficitur.
                    </p>
                </div>
            </div>
    );
    }
    }

    export default CommentsItem;