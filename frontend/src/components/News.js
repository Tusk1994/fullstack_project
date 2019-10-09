import React, { Component } from 'react';


const API = 'http://127.0.0.1:8000/sites/';

class News extends Component {

    constructor(props) {
        super(props);

        this.state = {
            news: [],
        };
    }

    getResponse = (object_id) => {
        fetch(API + object_id)
            .then(response => response.json())
            .then(data => this.setState({ news: data }));
    };

    componentDidUpdate(prevProps) {
        if (prevProps.name !== this.props.name) {
            this.getResponse(this.props.name)
        }
    }

    componentDidMount() {
        this.getResponse(this.props.name)
    }

    render() {
        return (

            <div>
                {this.state.news.map((item, i) => (
                    <div key={i}>
                        <h1>{item.title}</h1>
                        <span>{item.description}</span>
                    </div>
                ))}
            </div>
        );
    }
}

export default News;
