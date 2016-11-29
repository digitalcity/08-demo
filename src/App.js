import React from 'react';

import NavHeader from './component/NavHeader';
import NavFooter from './component/NavFooter';

class App extends React.Component {
  render () {
    return(
      <div className='my-wrap'>
        <NavHeader />

        <div className='main'>
          {this.props.children}
        </div>

        <NavFooter />
      </div>
    )
  }
}

export default App;
