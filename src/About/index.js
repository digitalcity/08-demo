import React from 'react';
import TextField from 'material-ui/TextField';
import RaisedButton from 'material-ui/RaisedButton';

class About extends React.Component{
  handleSubmit(e){
    e.preventDefault();
    console.log(this.refs.gitname.getValue());
  }
  render(){
    return(
      <div className='about-wrap'>
        <div className='git-card'>
          <h2>Search Git Info</h2>
          <form className='about-form' onSubmit={this.handleSubmit.bind(this)}>
            <TextField ref='gitname' hintText="github username" underlineFocusStyle={{borderColor:'#bada55'}} />
            <RaisedButton label="search" secondary={true} style={{marginLeft:'10px'}}/>
          </form>
        </div>
      </div>
    )
  }
}

export default About;
