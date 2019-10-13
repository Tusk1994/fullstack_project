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
            <div className="container">
                {this.state.news.map((item, i) => (
                    <div key={i}>
                        <div className="row border overflow-hidden mb-4 p-4 shadow bg-white">
                            <div>
                                <h3>{item.title}</h3>
                                <div className="mb-1 text-muted">{item.pubdate}</div>
                                <p className="card-text text-justify">{item.description}</p>
                                <a href={item.link} target="_blank" rel="noopener noreferrer">Continue reading</a>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        );
    }
}

export default News;
