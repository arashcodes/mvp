/* eslint-disable react/prop-types */
import React from 'react';

class Search extends React.Component {
  constructor({props}) {
    super({props});

    this.state = {
      value: '',
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    event.preventDefault();
    this.setState({
      value: event.target.value,
    });
  }

  handleSubmit(event) {
    event.preventDefault();
    const { value } = this.state;
    const { hanldeSearch } = this.props;
    hanldeSearch(value);
    this.setState({ value: '' });
  }

  render() {
    const { value } = this.state;
    return (
      <form onSubmit={this.handleSubmit}>
        <lable>
          <input type="text" value={value} onChange={this.handleChange} placeholder="Movie title..." />
        </lable>
        <input type="submit" value="Search Movie" />
      </form>
    );
  }
}

export default Search;
