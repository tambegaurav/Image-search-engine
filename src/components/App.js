import React from 'react';
import unsplash from '../api/unsplash';
import SearchBar from './SearchBar';
import ImageList from '../components/ImageList';

class App extends React.Component {
  state = {
    images: []
  };
  onSearchSubmit = async term => {
    const response = await unsplash.get('/search/photos', {
      params: { query: term, per_page: 31 }
    });

    this.setState({ images: response.data.results });
  };

  render() {
    return (
      <div className=" ui container" style={{ marginTop: '10px' }}>
        <SearchBar onSubmit={this.onSearchSubmit} />
        <ImageList images={this.state.images} />
      </div>
    );
  }
}

export default App;
