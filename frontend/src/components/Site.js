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
                <div className="navbar bg-dark mb-4">
                    {this.state.sites.map(item => (
                        <button className="nav-link btn btn-link text-white p-2" key={item.id} id={item.id} onClick={this.handleClick}>
                            {item.name}
                        </button>
                    ))}
                </div>
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
