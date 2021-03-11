import React from 'react';
import {
    Link,
   
  } from 'react-router-dom';
// import hero from '/assets/hero-background.jpg';
import './SideBar.scss'


const sideBar = () => {

    return(
        <aside>
          <div className="card-container">
            <ul className="sidebar-panel">
        
              <li><Link to="#"> Todos</Link></li>
              <li><Link to="#"> Productos</Link></li>
              <li><Link to="#"> Recetas</Link></li>
              <li><Link to="#"> Consejos</Link></li>
            </ul>
          </div>
        </aside>
      
    )

}

export default sideBar;