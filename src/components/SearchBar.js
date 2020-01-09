import React from 'react';

class SearchBar extends React.Component {
  state = { term: '' };

  onFormSubmit = event => {
    event.preventDefault();

    this.props.onSubmit(this.state.term, 1000);
  };

  render() {
    return (
      <div className="ui segment">
        <form className="ui form" onSubmit={this.onFormSubmit}>
          <div className="field">
            <label className="ui center aligned container massive">
              <h1 className="ui block header inverted">
                Gaurav's Image Search Engine
              </h1>
            </label>

            <div
              type="text"
              value={this.state.term}
              onChange={e => this.setState({ term: e.target.value })}
              className="ui blue inverted transparent segment large input"
            >
              <input
                style={{ color: 'azure' }}
                type="text"
                placeholder="Search..."
              />
            </div>
          </div>
        </form>
      </div>
    );
  }
}

export default SearchBar;
