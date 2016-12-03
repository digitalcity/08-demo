import React from 'react';
import CircularProgress from 'material-ui/CircularProgress';

class Loading extends React.Component{
  render(){
    return(
      <div style={{textAlign:'center'}}>
        <CircularProgress size={80} thickness={5} />
      </div>
    )
  }
}

export default Loading;
