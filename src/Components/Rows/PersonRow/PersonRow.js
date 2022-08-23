import { ButtonGroup } from "react-bootstrap";
import axios from "axios";
import BasicModal from "../../Modals/BasicModal/BasicModal";
import DeleteModal from "../../Modals/DeleteModal/DeleteModal";
import EditPerson from "../../Forms/EditPerson/EditPerson";

const baseUrl = "http://localhost:8080/person";

const PersonRow = (props) => {

    const deletePerson = (firstName, lastName) => {

        axios.delete(baseUrl, { data: { firstName: firstName, lastName: lastName } }).then(() => {
            alert("Personne supprimer !");
        });
    }

    return (
        <tr>
            <td>{props.person.id}</td>
            <td>{props.person.firstName}</td>
            <td>{props.person.lastName}</td>
            <td>{props.person.address}</td>
            <td>{props.person.city}</td>
            <td>{props.person.zip}</td>
            <td>{props.person.phone}</td>
            <td>{props.person.email}</td>
            <td>
                <ButtonGroup aria-label="Basic example">
                    <BasicModal
                        title={"Editer personne"}
                        variant={"secondary"}
                        body={<EditPerson id={props.person.id} />}
                        button={"Editer"}
                    />
                    <DeleteModal
                        element={"person"}
                        delete={() => deletePerson(props.person.firstName, props.person.lastName)}
                    />
                </ButtonGroup>
            </td>
        </tr>);
}

export default PersonRow;