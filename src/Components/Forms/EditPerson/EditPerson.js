
import { useEffect, useState } from "react";
import { Button, Form } from "react-bootstrap";
import InputText from "../../Inputs/InputText/InputText";
import axios from "axios";

const baseURL = "http://localhost:8080/person"

const EditPerson = (props) => {
    const [valid, setvalid] = useState(false);
    const [person, setperson] = useState(null);

    const updatePerson = (person) => {
        axios.put(`${baseURL}/${props.id}`, person)
            .then(() => alert("Personne modifer !"))
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
            updatePerson(person)
        }
        setvalid(true)
    }

    useEffect(() => {
        axios.get(`${baseURL}/${props.id}`).then((response) => {
            setperson(response.data);
        });
    }, []);

    if (!person) return "... Loading";

    return (
        <Form noValidate onSubmit={handleSubmit} validated={valid}>
            <InputText label={"Prénom"} value={person.firstName} name={"firstName"} handleChange={handleChange} required={true} />
            <InputText label={"Nom"} value={person.lastName} name={"lastName"} handleChange={handleChange} required={true} />
            <InputText label={"Addresse"} value={person.address} name={"address"} handleChange={handleChange} required={true} />
            <InputText label={"Ville"} value={person.city} name={"city"} handleChange={handleChange} />
            <InputText label={"zip"} value={person.zip} name={"zip"} handleChange={handleChange} />
            <InputText label={"Téléphone"} value={person.phone} name={"phone"} handleChange={handleChange} />
            <InputText label={"Email"} value={person.email} name={"email"} handleChange={handleChange} />
            <Button type="submit">Editer personne</Button>
        </Form>
    );
}

export default EditPerson;