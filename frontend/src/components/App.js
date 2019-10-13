import React, { Component } from 'react';
import Site from './Site'

class App extends Component {

    render() {
        return (
            <div className="container">
                <h1 className="display-3 text-center">
                    <a className="text-dark" href=".">News</a>
                </h1>
                <Site/>
            </div>
        );
    }
}

export default App;
