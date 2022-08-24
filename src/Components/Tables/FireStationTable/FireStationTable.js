import axios from "axios";
import { useEffect, useState } from "react";
import { Table } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import FireStationRow from "../../Rows/FireStationRow/FireStationRow";

const baseUrl = "http://localhost:8080/fireStation"


const FireStationTable = () => {
    const navigate = useNavigate();

    const [fireStationList, setfireStationList] = useState([]);

    useEffect(() => {
        axios.get(baseUrl).then((response) => {
            setfireStationList(response.data);
        }).catch(error => error.response.status === 401 && navigate("/unauthorize"));
    }, [navigate]);

    return (
        <Table responsive>
            <thead>
                <tr>
                    <th>#</th>
                    <th>Numéro de station</th>
                    <th>Addresses</th>
                </tr>
            </thead>
            <tbody>
                {fireStationList.length > 0 ?
                    fireStationList.map((fireStation, index) =>
                        <FireStationRow key={index} fireStation={fireStation} />)
                    : <tr>
                        <td colSpan={3}>...</td>
                    </tr>
                }
            </tbody>
        </Table>);
}

export default FireStationTable;