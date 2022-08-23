import axios from "axios";
import { ButtonGroup } from "react-bootstrap";
import BasicList from "../../Lists/BasicList/BasicList";
import BasicModal from "../../Modals/BasicModal/BasicModal";
import DeleteModal from "../../Modals/DeleteModal/DeleteModal";
import EditMedicalRecord from "../../Forms/EditMedicalRecord/EditMedicalRecord";

const baseUrl = "http://localhost:8080/medicalRecord";

const MedicalRecordRow = (props) => {

    const deleteMedicalRecord = (firstName, lastName) => {
        axios.delete(baseUrl, { data: { firstName: firstName, lastName: lastName } }).then(() => {
            alert("MedicalRecord supprimer !");
        });
    }

    return (
        <tr>
            <td>{props.medicalRecord.id}</td>
            <td>{props.medicalRecord.firstName}</td>
            <td>{props.medicalRecord.lastName}</td>
            <td>{props.medicalRecord.birthdate}</td>
            <td>
                <BasicModal
                    title={"Liste des Allergies"}
                    variant={"secondary"}
                    body={<BasicList tab={props.medicalRecord.allergies}/>}
                    button={"Voir allergies"}
                />
            </td>
            <td>
            <BasicModal
                    title={"Liste des Médication"}
                    variant={"secondary"}
                    body={<BasicList tab={props.medicalRecord.medications}/>}
                    button={"Voir médications"}
                />
            </td>
            <td>
                <ButtonGroup aria-label="Basic example">
                    <BasicModal
                        title={"Editer dossier médical"}
                        variant={"secondary"}
                        body={<EditMedicalRecord id={props.medicalRecord.id}/>}
                        button={"Editer"}
                    />
                    <DeleteModal
                        element={"dossier médical"}
                        delete={() => deleteMedicalRecord(props.medicalRecord.firstName, props.medicalRecord.lastName)}
                    />
                </ButtonGroup>
            </td>
        </tr>
    );
}

export default MedicalRecordRow;