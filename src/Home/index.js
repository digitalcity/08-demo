import React from 'react';
import RaisedButton from 'material-ui/RaisedButton';

class Home extends React.Component{
  render(){
    return(
      <div className='home-wrap'>
        <div className='home-cover'>
          <div className='home-item'>
            <h3>HI, I'M NEWMING</h3>
            <p>WEB DEVELOPER</p>
            <RaisedButton label="hire me" secondary={true} />
          </div>
        </div>
      </div>
    )
  }
}

export default Home;
