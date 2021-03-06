import _ from 'lodash';
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
    this.state = {videos:[],
    selectedVid: null
    };
    this.videoSearch("Audi");
  }

  videoSearch(term){
    YTSearch({key: API_KEY,term: term},(videos) => {
      this.setState({videos:videos,
      selectedVid: videos[0]
    });
    });
  }
  render(){
    const videoSearch = _.debounce((term) => {this.videoSearch(term)},500);
    return (
      <div>
      <Searchbar onSearchChange={videoSearch}/>
      <Videodetail video = {this.state.selectedVid}/>
      <Videolist
      onVidSelect= {selectedVid => this.setState({selectedVid})}
      videos = {this.state.videos}/>
      </div>
    );
  }
}
ReactDom.render(<App />,document.querySelector('.container'));
