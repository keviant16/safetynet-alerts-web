import { useEffect, useState } from "react";
import { Button, Form } from "react-bootstrap";
import InputText from "../../Inputs/InputText/InputText";
import axios from "axios";
import InputSelect from "../../Inputs/InputSelect/InputSelect";
import InputTextList from "../../Inputs/InputTextList/InputTextList";

const baseURL = "http://localhost:8080"

const initialMedicalRecord = {
    firstName: "",
    lastName: "",
    birthdate: "",
    allergies: [],
    medications: []
}

const AddMedicalRecord = () => {
    const [valid, setvalid] = useState(false);
    const [medicalRecord, setmedicalRecord] = useState(initialMedicalRecord);
    const [personsList, setpersonsList] = useState([]);
    const [personId, setpersonId] = useState(null);


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

    const createMedicalRecord = (personId, medicalRecord) => {
        axios.post(`${baseURL}/medicalRecord?personId=${personId}`, medicalRecord)
            .then(() => alert("Dossier médical ajouter !"))
    }

    const handleChange = (event) => {
        setmedicalRecord((prev) => ({ ...prev, [event.target.name]: event.target.value }))
    }

    const handlePersonChange = (event) => {
        const personStr = event.target.value
        const peronsArr = personStr.split(" ")

        setpersonId(peronsArr[0])
        setmedicalRecord((prev) => ({ ...prev, firstName: peronsArr[1], lastName: peronsArr[2] }))
    }

    const handleSubmit = (event) => {
        event.preventDefault();
        const form = event.currentTarget;

        if (!form.checkValidity()) {
            event.stopPropagation()

        } else {
            createMedicalRecord(personId, medicalRecord)
            setmedicalRecord(initialMedicalRecord)
        }
        setvalid(true)
    }

    useEffect(() => {
        axios.get(`${baseURL}/person`).then((response) => {
            const personsList = response.data
            const personOptions = []
            personsList.map((person) => personOptions.push(`${person.id} ${person.firstName} ${person.lastName} ${person.address}`))

            setpersonsList(personOptions);
        });
    }, []);

    return (
        <Form noValidate onSubmit={handleSubmit} validated={valid}>
            <InputSelect label={"Selectionner une personne"} name={"selectPerson"} options={personsList} handleChange={handlePersonChange} />
            <InputText label={"Prénom"} value={medicalRecord.firstName} name={"firstName"} handleChange={handleChange} />
            <InputText label={"Nom"} value={medicalRecord.lastName} name={"lastName"} handleChange={handleChange} />
            <InputText label={"Date de naissance"} value={medicalRecord.birthdate} name={"birthdate"} handleChange={handleChange} />
            <InputTextList addElem={addAllergy} deleteElem={deleteAllergy} element="allergie" tab={medicalRecord.allergies} />
            <InputTextList addElem={addMedication} deleteElem={deleteMedication} element="médication" tab={medicalRecord.medications} />
            <Button type="submit">Ajouter dossier médical</Button>
        </Form>
    );
}

export default AddMedicalRecord;