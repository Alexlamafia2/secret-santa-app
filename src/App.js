import React, {useState} from "react";

import NewParticipant from "./components/NewParticipant/NewParticipant";
import Footer from "./components/Participants/Footer";
import ParticipantsArea from "./components/Participants/ParticipantsArea";
import Top from "./components/Participants/Top";
// const DummyCards = [
//   {
//     fName: "Alexey",
//     lName: "Gallego",
//     email: "alex@gmail.com",
//   },
// ];

function App() {
  const[participants, setParticipants] = useState([]);

  function addParticipantHandler(participant){
    setParticipants(prevParticipants => {
      return [participant, ...prevParticipants];
    });
  }

  return (
    <div>
      <Top />
      <NewParticipant onAddParticipant={addParticipantHandler}/>
      <ParticipantsArea cards={participants} />
      <Footer />
    </div>
  );
}

export default App;