import React, { useState } from "react";

import NewParticipant from "../NewParticipant/NewParticipant";
import ParticipantsArea from "../Participants/ParticipantsArea";
// import Card from "../UI/Card/Card";

import styles from "./Home.module.css";

export default function Home(props) {
  const [participants, setParticipants] = useState([]);

  function addParticipantHandler(participant) {
    setParticipants((prevParticipants) => {
      return [participant, ...prevParticipants];
    });
  }

  function deleteParticipantHandler(participantsId) {
    setParticipants(prevParticipants => {
      const updatedParticipants = prevParticipants.filter(participant => participant.id !== participantsId);
      //console.log(updatedParticipants);
        return updatedParticipants;
      }); 
  }

  return (
    <div>
      <div className={styles.location}>
        <NewParticipant onAddParticipant={addParticipantHandler} />
      </div>
      <div>
        <ParticipantsArea cards={participants} handleDelete={deleteParticipantHandler} />
      </div>
    </div>
  );
}
