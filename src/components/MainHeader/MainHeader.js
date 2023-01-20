import React from "react";

import Navigation from './Navigation';
import styles from "./MainHeader.module.css";

export default function MainHeader(props) {

  
  return (
    <header className={styles['main-header']}>
      <h1>WELCOME!</h1>
      <Navigation isLoggedIn={props.isAuthenticated} onLogout={props.onLogout}/>
    </header>
  );
}
