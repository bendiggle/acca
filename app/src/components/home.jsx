import React from 'react';
import data from '../../../mock-data.json';

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

    render() {

        const posts = this.state.postData.data.map(post => {
            return this.displayPost(post);
        });

        return (
            <main className="">
                <h1>Home</h1>
                <div>{posts}</div>
            </main>
        );
    }
}

export default Home;
