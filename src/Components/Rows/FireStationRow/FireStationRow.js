import axios from "axios";
import { ButtonGroup } from "react-bootstrap";
import EditFireStation from "../../Forms/EditFireStation/EditFireStation";
import BasicList from "../../Lists/BasicList/BasicList";
import BasicModal from "../../Modals/BasicModal/BasicModal";
import DeleteModal from "../../Modals/DeleteModal/DeleteModal";

const baseUrl = "http://localhost:8080/fireStation";

const FireStationRow = (props) => {
    

    const deleteFireStation = (id) => {
        axios.delete(`${baseUrl}/${id}`).then(() => {
            alert("Station Pompier supprimer !");
        });
    }

    return (
        <tr>
            <td>{props.fireStation.id}</td>
            <td>{props.fireStation.station}</td>
            <td>
                <BasicModal
                    title={"Liste des Addresses"}
                    variant={"secondary"}
                    body={<BasicList tab={props.fireStation.addresses} />}
                    button={"Voir addresses"}
                />
            </td>
            <td>
                <ButtonGroup aria-label="Basic example">
                    <BasicModal
                        title={"Editer Station"}
                        variant={"secondary"}
                        body={<EditFireStation id={props.fireStation.id} />}
                        button={"Editer"}
                    />
                    <DeleteModal
                        element={"station de pompier"}
                        delete={() => deleteFireStation(props.fireStation.id)}
                    />
                </ButtonGroup>
            </td>

        </tr>);
}

export default FireStationRow;