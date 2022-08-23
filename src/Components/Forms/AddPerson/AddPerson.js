
import { useState } from "react";
import { Button, Form } from "react-bootstrap";
import InputText from "../../Inputs/InputText/InputText";
import axios from "axios";

const baseURL = "http://localhost:8080/person"

const initialPerson = {
    firstName: "",
    lastName: "",
    address: "",
    city: "",
    zip: "",
    phone: "",
    email: ""
}

const AddPerson = () => {
    const [valid, setvalid] = useState(false);
    const [person, setperson] = useState(initialPerson);

    const createPerson = (person) => {
        axios.post(baseURL, person)
            .then(() => alert("Personne ajouter !"))
    }

    const handleChange = (event) => {
        setperson((prev) => ({ ...prev, [event.target.name]: event.target.value }))
    }

    const handleSubmit = (event) => {
        event.preventDefault();
        const form = event.currentTarget;

        if (!form.checkValidity()) {
            event.stopPropagation()

        } else {
            createPerson(person)
            setperson(initialPerson)
        }
        setvalid(true)
    }

    return (
        <Form noValidate onSubmit={handleSubmit} validated={valid}>
            <InputText label={"Prénom"} value={person.firstName} name={"firstName"} handleChange={handleChange} />
            <InputText label={"Nom"} value={person.lastName} name={"lastName"} handleChange={handleChange} />
            <InputText label={"Addresse"} value={person.address} name={"address"} handleChange={handleChange} />
            <InputText label={"Ville"} value={person.city} name={"city"} handleChange={handleChange} />
            <InputText label={"zip"} value={person.zip} name={"zip"} handleChange={handleChange} />
            <InputText label={"Téléphone"} value={person.phone} name={"phone"} handleChange={handleChange} />
            <InputText label={"Email"} value={person.email} name={"email"} handleChange={handleChange} />
            <Button type="submit">Ajouter Person</Button>
        </Form>
    );
}

export default AddPerson;