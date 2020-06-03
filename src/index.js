import React from 'react';
import ReactDom from 'react-dom';
import Searchbar from './components/search_bar.js';

const API_KEY = 'AIzaSyAlzc2eW-hK4v_9ouQ6Xdmq_mSUJaEVtNE';

const App = () => {
  return <div> <Searchbar /> </div>;
}

ReactDom.render(<App />,document.querySelector('.container'));
