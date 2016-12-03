import React from 'react';

import BlogCard from '../component/BlogCard';
let data=[
  {index:1,title:'hello',desc:'world'},
  {index:2,title:'hello1',desc:'world1'},
  {index:3,title:'hello2',desc:'world2'},
  {index:4,title:'hello3',desc:'world3'},
  {index:5,title:'hello4',desc:'world4'},
  {index:6,title:'hello5',desc:'world5'}
]
class Blog extends React.Component{
  render(){
    let cards=data.map( (item,i) => <BlogCard {...item} key={i}/> )
    return(
      <div className='blog-warp'>
        {cards}
      </div>
    )
  }
}

export default Blog;
