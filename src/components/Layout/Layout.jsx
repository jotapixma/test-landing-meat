import React from 'react';
import "../../styles/global.scss";
// import NavBar from '../NavBar/NavBar.js';

function Layout(props) {

  return(
    <React.Fragment>
      {/* <NavBar/> */}
      {props.children}
    </React.Fragment>
  )

}

export default Layout;