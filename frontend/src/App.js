import React, { Component } from 'react';

class App extends Component {
  state = {
    sites: []
  };

  async componentDidMount() {
    try {
      const res = await fetch('http://127.0.0.1:8000/sites/3');
      const sites = await res.json();
      this.setState({
        sites
      });
    } catch (e) {
      console.log(e);
    }
  }

  render() {
    return (
      <div>
        {this.state.sites.map(item => (
          <div key={item.id}>
            <h1>{item.title}</h1>
            <span>{item.description}</span>
          </div>
        ))}
      </div>
    );
  }
}

export default App;
