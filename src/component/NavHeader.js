import React from 'react';

class NavHeader extends React.Component{
  render(){
    return(
      <div className='nav-header'>
        <button type="button">
          <span className="glyphicon glyphicon-menu-left" aria-hidden="true"></span> BACK
        </button>
        <h3>Newming@Home</h3>
        <button type="button">
          <span className="glyphicon glyphicon-remove-circle" aria-hidden="true"></span>
        </button>
      </div>
    )
  }
}

export default NavHeader;
