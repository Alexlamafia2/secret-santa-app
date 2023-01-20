import "./ParticipantsArea.css";
import ParticipantsCard from "./ParticipantsCard";

function ParticipantsArea(props) {

  return (
    <div>
      <div className="participants">
        {props.cards.map((participants) => (
          <ParticipantsCard
            key={participants.id}
            id={participants.id}
            fName={participants.fName}
            lName={participants.lName}
            email={participants.email}
            onDelete={props.handleDelete}
          />
        ))}
      </div>
    </div>
  );
}

export default ParticipantsArea;
