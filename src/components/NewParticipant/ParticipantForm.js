import React, { useState } from "react";

import "./ParticipantForm.css";

function ParticipantForm(props) {
  const [enteredFirstName, setEnteredFirstName] = useState("");
  const [enteredLastName, setEnteredLastName] = useState("");
  const [enteredEmail, setEnteredEmail] = useState("");

  function firstNameChangeHandler(event) {
    setEnteredFirstName(event.target.value);
  }
  function lastNameChangeHandler(event) {
    setEnteredLastName(event.target.value);
  }
  function emailChangeHandler(event) {
    setEnteredEmail(event.target.value);
  }

  function submitHandler(event) {
    event.preventDefault();

    const infoData = {
      fName: enteredFirstName,
      lName: enteredLastName,
      email: enteredEmail,
    };

    props.onSaveInfoData(infoData);
    setEnteredFirstName("");
    setEnteredLastName("");
    setEnteredEmail("");
  }

  return (
    <div>
      <div className="add-participant">
        <h1>Add participant</h1>
        <form onSubmit={submitHandler}>
          <input
            name="fname"
            value={enteredFirstName}
            onChange={firstNameChangeHandler}
            placeholder="Full Name"
          />
          <input
            name="lname"
            value={enteredLastName}
            onChange={lastNameChangeHandler}
            placeholder="Last Name"
          />
          <input
            name="email"
            value={enteredEmail}
            onChange={emailChangeHandler}
            placeholder="Email"
          />
          <button type="submit">Submit</button>
        </form>
      </div>
    </div>
  );
}

export default ParticipantForm;
