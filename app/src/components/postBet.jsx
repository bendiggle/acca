import React from 'react';

class Post extends React.Component {
    constructor(props) {
        super(props);
        this.state = {betFieldValue: ''};
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(e) {
        this.setState({betFieldValue: e.target.value});
    }

    handleSubmit(e) {
        e.preventDefault();
        const newData = {
            userID: Math.random(),
            username: 'testUser',
            postId: Math.random(),
            post: this.state.betFieldValue
        };
        this.setState({betFieldValue: ''});
        this.props.handleSubmit(newData);
    }

    render() {
        return (
            <form onSubmit={this.handleSubmit}>
                <label>Post bet</label>
                <input id="bet" type="text" onChange={this.handleChange} value={this.state.betFieldValue}/>
                <input className="button-primary" type="submit" value="Submit"/>
            </form>
        )
    }
}

export default Post;
