import React from 'react';

class ShowGit extends React.Component{
  render(){
    let info = this.props.gitInfo;
    let styles={
      img:{
        width:'100%',
        maxWidth:'130px',
        borderRadius: '50%',
        boxShadow: 'rgba(0, 0, 0, 0.55) 0px 3px 10px'
      }
    }
    return(
      <div>
        <img src={info.avatar_url} style={styles.img}/>
        <h3>{info.login}</h3>
        <div className='show-git'>
          <p>followers<br/>{info.followers+100}</p>
          <p>following<br/>{info.following+100}</p>
          <p>public_repos<br/>{info.public_repos+100}</p>
        </div>
      </div>
    )
  }
}

export default ShowGit;
// avatar_url : "https://avatars.githubusercontent.com/u/16014943?v=3"
// bio : "微信 18033562690"
// blog : "newming.github.io"
// company : null
// created_at : "2015-11-25T10:16:18Z"
// email : "a977527479@sina.com"
// events_url : "https://api.github.com/users/newming/events{/privacy}"
// followers : 64
// followers_url : "https://api.github.com/users/newming/followers"
// following : 28
// following_url : "https://api.github.com/users/newming/following{/other_user}"
// gists_url : "https://api.github.com/users/newming/gists{/gist_id}"
// gravatar_id : ""
// hireable : null
// html_url : "https://github.com/newming"
// id : 16014943
// location : "秦皇岛"
// login : "newming"
// name : "钮旭明"
// organizations_url : "https://api.github.com/users/newming/orgs"
// public_gists : 0
// public_repos : 37
// received_events_url : "https://api.github.com/users/newming/received_events"
// repos_url : "https://api.github.com/users/newming/repos"
// site_admin : false
// starred_url : "https://api.github.com/users/newming/starred{/owner}{/repo}"
// subscriptions_url : "https://api.github.com/users/newming/subscriptions"
// type : "User"
// updated_at : "2016-11-30T01:12:13Z"
// url : "https://api.github.com/users/newming"
