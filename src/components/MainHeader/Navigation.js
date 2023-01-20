import React from "react";
import styles from './Navigation.module.css';
export default function Navigation(props) {
  return (
    <nav>
      <ul>
        {props.isLoggedIn && <button className={styles.btn} onClick={props.onLogout}>Logout</button>}
      </ul>
    </nav>
  );
}
