import React, { useState } from "react";

import Card from "../UI/Card/Card";
import Button from "../UI/Button/Button";
import styles from "./Login.module.css";

export default function Login(props) {
  const [enteredEmail, setEnteredEmail] = useState("");
  const [enteredPassword, setEnteredPasword] = useState("");
  const [emailIsValid, setEmailIsValid] = useState();
  const [passwordIsValid, setPasswordIsValid] = useState();
  const [formIsValid, setFormIsValid] = useState(false);

  function emailChangeHandler(event) {
    setEnteredEmail(event.target.value);

    setFormIsValid(
      event.target.value.includes("@") && enteredPassword.trim().length > 6
    );
  }

  function passwordChangeHandler(event) {
    setEnteredPasword(event.target.value);

    setFormIsValid(
      event.target.value.trim().length > 6 && enteredEmail.includes("@")
    );
  }

  function submitHandler(event) {
    event.preventDefault();
    props.onLogin(enteredEmail, enteredPassword);
  }

  function validateEmailHandler() {
    setEmailIsValid(enteredEmail.includes("@"));
  }

  function validatePasswordHandler() {
    setPasswordIsValid(enteredPassword.trim().length > 6);
  }

  return (
    <Card className={styles.login}>
      <form onSubmit={submitHandler}>
        <div
          className={`${styles.control} ${
            emailIsValid === false ? styles.invalid : ""
          }`}
        >
          <input
            type="email"
            id="email"
            placeholder="Enter Email"
            value={enteredEmail}
            onChange={emailChangeHandler}
            onBlur={validateEmailHandler}
          ></input>
        </div>
        <div
          className={`${styles.control} ${
            passwordIsValid === false ? styles.invalid : ""
          }`}
        >
          <input
            type="password"
            id="password"
            placeholder="Enter Password"
            value={enteredPassword}
            onChange={passwordChangeHandler}
            onBlur={validatePasswordHandler}
          ></input>
        </div>
        <div className={styles.actions}>
          <Button type="submit" className={styles.btn} disabled={!formIsValid}>
            Login
          </Button>
        </div>
      </form>
    </Card>
  );
}
