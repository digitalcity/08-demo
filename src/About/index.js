import React from 'react';
import TextField from 'material-ui/TextField';
import RaisedButton from 'material-ui/RaisedButton';
import axios from 'axios';

class About extends React.Component{
  handleSubmit(e){
    e.preventDefault();
    console.log(this.refs.gitname.getValue());
    this.refs.form.reset()
  }
  render(){
    let styles={
      underline:{
        borderColor:'#00bcd4'
      }
    }
    return(
      <div className='about-wrap'>
        <div className='git-card'>
          <h2>Search Git Info</h2>
          <form ref='form' className='about-form' onSubmit={this.handleSubmit.bind(this)}>
            <TextField style={{width:'60%'}} ref='gitname' hintText="github name" underlineFocusStyle={styles.underline} />
            <RaisedButton onClick={this.handleSubmit.bind(this)} label="search" secondary={true} style={{marginLeft:'10px'}}/>
          </form>
        </div>
      </div>
    )
  }
}

export default About;
