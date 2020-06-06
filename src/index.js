import React,{Component} from 'react';
import ReactDom from 'react-dom';
import Searchbar from './components/search_bar.js';
import Videolist from './components/video_list.js';
import Videodetail from './components/video_detail.js';
import YTSearch from 'youtube-api-search';

const API_KEY = 'AIzaSyAlzc2eW-hK4v_9ouQ6Xdmq_mSUJaEVtNE';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {videos:[]};
    YTSearch({key: API_KEY,term: 'surfboards'},(videos) => {
      this.setState({videos});
    });
  }
  render(){
    return (
      <div>
      <Searchbar />
      <Videodetail video = {this.state.videos[0]}/>
      <Videolist videos = {this.state.videos}/>
      </div>
    );
  }
}
ReactDom.render(<App />,document.querySelector('.container'));
