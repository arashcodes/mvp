import React from 'react';
import { Search } from './Imports.jsx';

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      view: '',
      sarchedTerm: '',
    };
    this.hanldeSearch = this.hanldeSearch.bind(this);
  }

  hanldeSearch(movieTitle) {
    console.log('From app:', movieTitle)
  }

  render() {
    return (
      <div>
        <Search hanldeSearch={this.hanldeSearch} />
      </div>
    );
  }
}

export default App;
