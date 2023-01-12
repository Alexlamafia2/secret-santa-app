import "./NewParticipant.css";
import ParticipantForm from "./ParticipantForm";

function NewParticipant(props){
    function saveInfoDataHandler(enteredInfoData){
        const infoData = {
            ...enteredInfoData
        }

        props.onAddParticipant(infoData);
    }

    return (
        <div >
            <ParticipantForm onSaveInfoData = {saveInfoDataHandler}/>
        </div>
    );
}

export default NewParticipant;