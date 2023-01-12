import "./ParticipantsArea.css";
import ParticipantsCard from "./ParticipantsCard";

function ParticipantsArea(props) {
  return (
    <div>
      {/* <div className="title">Participants</div> */}
      <div className="participants">
        {props.cards.map((participants) => (
          <ParticipantsCard
            key={participants.id}
            fName={participants.fName}
            lName={participants.lName}
            email={participants.email}
          />
        ))}
      </div>
    </div>
  );
}

export default ParticipantsArea;
