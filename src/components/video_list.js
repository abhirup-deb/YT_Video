import React from 'react';

const Videolist = (props) => {
  return(
    <ul className = "col-md-4 list-group">
    {props.videos.length}
    </ul>
  );
};
export default Videolist;
