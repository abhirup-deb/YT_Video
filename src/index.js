import React,{Component} from 'react';
import ReactDom from 'react-dom';
import Searchbar from './components/search_bar.js';
import YTSearch from 'youtube-api-search_bar';

const API_KEY = 'AIzaSyAlzc2eW-hK4v_9ouQ6Xdmq_mSUJaEVtNE';

class App extends Component{
  constructor(props) {
    super(props);
    this.state = {videos:[]};
    YTSearch({key: API_KEY,term: 'surfboards'},(videos) => {
      this.setState({videos});
    });
  }
  render(){
    return(
      <div>
      <Searchbar />
      <div>
    );
  }
}
ReactDom.render(<App />,document.querySelector('.container'));
