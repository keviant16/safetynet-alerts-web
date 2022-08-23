import axios from "axios";
import { useEffect, useState } from "react";
import { Button, Form } from "react-bootstrap";
import InputText from "../../Inputs/InputText/InputText";
import InputTextList from "../../Inputs/InputTextList/InputTextList";

const baseURL = "http://localhost:8080/medicalRecord"


const EditMedicalRecord = (props) => {
    const [valid, setvalid] = useState(false);
    const [medicalRecord, setmedicalRecord] = useState(null);

    const addAllergy = (value) => {
        setmedicalRecord((prev) => ({ ...prev, allergies: [...prev.allergies, value] }))
    }

    const deleteAllergy = (value) => {
        setmedicalRecord((prev) => ({ ...prev, allergies: [...prev.allergies.filter((v) => v !== value)] }))
    }

    const addMedication = (value) => {
        setmedicalRecord((prev) => ({ ...prev, medications: [...prev.medications, value] }))
    }

    const deleteMedication = (value) => {
        setmedicalRecord((prev) => ({ ...prev, medications: [...prev.medications.filter((v) => v !== value)] }))
    }

    const updateMedicalRecord = (medicalRecord) => {
        axios.put(`${baseURL}/${props.id}`, medicalRecord)
            .then(() => alert("Dossier médical modifier !"))
    }

    const handleChange = (event) => {
        setmedicalRecord((prev) => ({ ...prev, [event.target.name]: event.target.value }))
    }

    const handleSubmit = (event) => {
        event.preventDefault();
        const form = event.currentTarget;

        if (!form.checkValidity()) {
            event.stopPropagation()

        } else {
            updateMedicalRecord(medicalRecord)
        }
        setvalid(true)
    }

    useEffect(() => {
        axios.get(`${baseURL}/${props.id}`).then((response) => {
            setmedicalRecord(response.data);
        });
    }, []);

    if (!medicalRecord) return "... Loading";

    return (
        <Form noValidate onSubmit={handleSubmit} validated={valid}>
            <InputText
                label={"Prénom"}
                value={medicalRecord.firstName}
                name={"firstName"}
                handleChange={handleChange}
                required={true}
            />

            <InputText
                label={"Nom"}
                value={medicalRecord.lastName}
                name={"lastName"}
                handleChange={handleChange}
                required={true}
            />

            <InputText
                label={"Date de naissance"}
                value={medicalRecord.birthdate}
                name={"birthdate"}
                handleChange={handleChange}
                required={true}
            />

            <InputTextList
                addElem={addAllergy}
                deleteElem={deleteAllergy}
                element="allergie"
                tab={medicalRecord.allergies}
            />

            <InputTextList
                addElem={addMedication}
                deleteElem={deleteMedication}
                element="médication"
                tab={medicalRecord.medications}
            />

            <Button type="submit">Editer dossier médical</Button>
        </Form>
    );
}

export default EditMedicalRecord;