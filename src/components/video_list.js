import React from 'react';
import VideoListItem from './video_list_item';

const Videolist = (props) => {
  const videoitems = props.videos.map((video) => {
    return (<VideoListItem
      onVidSelect={props.onVidSelect} 
      key={video.etag}
      video={video}/>);
  });
  return(
    <ul className = "col-md-4 list-group">
    {videoitems}
    </ul>
  );
};
export default Videolist;
