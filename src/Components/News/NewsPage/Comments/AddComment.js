import React, {Component} from 'react';

class AddComment extends Component {
    render() {
        return (
            <form className="form-block">
                <div className="row">
                    <div className="col-12">
                        <div className="form-group fl_icon">
                            <div className="icon"><i className="fa fa-user"/></div>
                            <input className="form-input" type="text" placeholder="Your name"/>
                        </div>
                    </div>
                    <br/>
                    <div className="col-12">
                        <div className="form-group">
                            <textarea className="form-input" required="" placeholder="Your text"/>
                        </div>
                    </div>
                    <a className="btn btn-primary">submit</a>
                </div>
            </form>
        );
    }
}

export default AddComment;