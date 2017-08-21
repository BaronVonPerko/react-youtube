import React from 'react';
import ReactDOM from 'react-dom';

import SearchBar from './components/search_bar';

const API_KEY = 'AIzaSyAM6pHRYJJMJdopOkjk6AXTpJlIpmIvtx8';


const App = () => {
  return (
    <div>
      <SearchBar />
    </div>
  );
}


ReactDOM.render(<App />, document.getElementById('app'));
