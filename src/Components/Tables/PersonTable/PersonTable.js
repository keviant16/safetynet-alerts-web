import { Table } from "react-bootstrap";
import axios from "axios";
import { useEffect, useState } from "react";
import PersonRow from "../../Rows/PersonRow/PersonRow";

const baseUrl = "http://localhost:8080/person"

const PersonTable = () => {
  const [personsList, setpersonsList] = useState([]);

  useEffect(() => {
    axios.get(baseUrl).then((response) => {
      setpersonsList(response.data);
    });
  }, []);



  return (
    <Table responsive>
      <thead>
        <tr>
          <th>#</th>
          <th>Prénom</th>
          <th>Nom</th>
          <th>Addresse</th>
          <th>Ville</th>
          <th>Code Postal</th>
          <th>Téléphone</th>
          <th>Email</th>
          <th>Action</th>
        </tr>
      </thead>
      <tbody>
        {personsList.length > 0 ? personsList.map((person, index) =>
          <PersonRow key={index} person={person} />) :
          <tr>
            <td colSpan={9}>
              ...
            </td>
          </tr>
        }
      </tbody>
    </Table>);
}

export default PersonTable;