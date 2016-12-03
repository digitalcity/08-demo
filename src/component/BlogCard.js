import React from 'react';
import RaisedButton from 'material-ui/RaisedButton';

class BlogCard extends React.Component{
  render(){
    return(
      <div className='blog-card'>
        <div className='blog-index'><span>{this.props.index}</span></div>
        <div className='blog-content clearfix'>
          <h3>{this.props.title}</h3>
          <p>{this.props.desc}</p>
          {/* 下边的button要注意，引用的mui跳转页面，没有用link，注意href属性 */}
          <RaisedButton label="阅读更多" primary={true} href={`#/item/${this.props.url}`}/>
        </div>
      </div>
    )
  }
}

BlogCard.defaultProps={
  index:1,
  title:'我是默认标题',
  desc:'我是默认介绍'
}
BlogCard.propTypes={
  index:React.PropTypes.number,
  title:React.PropTypes.string,
  desc:React.PropTypes.string
}

export default BlogCard;
