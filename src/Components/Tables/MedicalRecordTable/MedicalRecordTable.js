import { Table } from "react-bootstrap";
import axios from "axios";
import { useEffect, useState } from "react";
import MedicalRecordRow from "../../Rows/MedicalRecordRow/MedicalRecordRow";
import { useNavigate } from "react-router-dom";

const baseUrl = "http://localhost:8080/medicalRecord"

const MedicalRecordTable = () => {
    const navigate = useNavigate();

    const [medicalRecordsList, setmedicalRecordsList] = useState([]);

    useEffect(() => {
        axios.get(baseUrl).then((response) => {
            setmedicalRecordsList(response.data);
        }).catch(error => error.response.status === 401 && navigate("/unauthorize"));
    }, [navigate]);

    return (
        <Table responsive>
            <thead>
                <tr>
                    <th>#</th>
                    <th>Prénom</th>
                    <th>Nom</th>
                    <th>Date de naissance</th>
                    <th>Allergies</th>
                    <th>Médications</th>
                    <th>Action</th>
                </tr>
            </thead>
            <tbody>
                {medicalRecordsList.length > 0 ? medicalRecordsList.map((m, index) =>
                    <MedicalRecordRow key={index} medicalRecord={m} />) :
                    <tr>
                        <td colSpan={7}>
                            ...
                        </td>
                    </tr>
                }
            </tbody>
        </Table>);
}

export default MedicalRecordTable;