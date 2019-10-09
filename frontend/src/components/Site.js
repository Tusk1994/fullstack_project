import React, { Component } from 'react';
import News from './News'

const API = 'http://127.0.0.1:8000/sites/';

class Site extends Component {

    constructor(props) {
        super(props);

        this.state = {
            sites: [],
            id: 1
        };
    }

    componentDidMount() {
        fetch(API)
          .then(response => response.json())
          .then(data => this.setState({ sites: data }));
    }

    render() {
        return (
            <div>
                {this.state.sites.map(item => (
                    <div key={item.id}>
                        <h1>{item.name}</h1>
                        <button id={item.id} onClick={this.handleClick}>
                            Показать
                        </button>
                    </div>
                ))}
                <div>
                    <News name={this.state.id}/>
                </div>
            </div>
        );
    }

    handleClick = (site) => {
        this.setState({
            id: site.target.id
        });
    }

}

export default Site;
