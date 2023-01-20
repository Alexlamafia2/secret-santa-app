import "./ParticipantsCard.css";
import deleteButton from "./delete.svg";

function ParticipantsCard(props) {

  function deleteHandler() {
    props.onDelete(props.id);
  };

  return (
    <div className="participant-card">
      <div>
        <h3>
          {props.fName} {props.lName}
        </h3>
        <p>{props.email}</p>
        <button onClick={deleteHandler}>
          <img className="img" src={deleteButton} alt="Your SVG" />
        </button>
      </div>
    </div>
  );
}

export default ParticipantsCard;
