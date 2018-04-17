import React from 'react';
import Post from './postBet';
import postData from '../../../mock-data.json';

class Home extends React.Component {
    constructor() {
        super();
        this.state = { postData };
    }

    displayPost(data) {
        return (
            <div className="post" key={data.postId}>
                <p id="username">{data.username}</p>
                <p>{data.post}</p>
            </div>
        );
    }

    handlePostSubmit(newPost) {
        const postData = this.state.postData;
        postData.data.push(newPost);
        this.setState({postData});
    }

    render() {
        const posts = this.state.postData.data.map(post => {
            return this.displayPost(post);
        });

        return (
            <main className="">
                <Post handleSubmit={this.handlePostSubmit.bind(this)}/>
                <h1>Home</h1>
                <div>{posts}</div>
            </main>
        );
    }
}

export default Home;
