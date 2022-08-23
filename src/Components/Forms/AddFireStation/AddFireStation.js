import axios from "axios";
import { useEffect, useState } from "react";
import { Button, Form } from "react-bootstrap";
import InputText from "../../Inputs/InputText/InputText";
import InputSelectList from "../../Inputs/InputSelectList/InputSelectList";

const baseURL = "http://localhost:8080"

const initialFireStation = {
    station: "",
    addresses: []
}

const AddFireStation = () => {
    const [valid, setvalid] = useState(false);
    const [fireStation, setfireStation] = useState(initialFireStation);
    const [addresses, setaddresses] = useState([]);

    const createFireStation = (fireStation) => {
        axios.post(`${baseURL}/fireStation`, fireStation)
            .then(() => alert("Station ajouter !"))
    }

    const handleChange = (event) => {
        setfireStation((prev) => ({ ...prev, [event.target.name]: event.target.value }))
    }

    const addAddress = (value) => {
        setfireStation((prev) => ({ ...prev, addresses: [...prev.addresses, value] }))
    }

    const deleteAddress = (value) => {
        setfireStation((prev) => ({ ...prev, addresses: [...prev.addresses.filter((v) => v !== value)] }))
    }

    const handleSubmit = (event) => {
        event.preventDefault();
        const form = event.currentTarget;

        if (!form.checkValidity()) {
            event.stopPropagation()

        } else {
            createFireStation(fireStation)
            setfireStation(initialFireStation)
        }
        setvalid(true)
    }

    useEffect(() => {
        axios.get(`${baseURL}/person`).then((response) => {
            const persons = response.data
            const addresArr = persons.map((p) => p.address)
            const addressArrFilter = addresArr.filter((item, index) => addresArr.indexOf(item) === index)

            setaddresses(addressArrFilter);
        });
    }, []);

    return (
        <Form noValidate onSubmit={handleSubmit} validated={valid}>
            <InputText
                label={"Numéro de station"}
                value={fireStation.station}
                name={"station"}
                handleChange={handleChange}
                number={true}
            />

            <InputSelectList addElem={addAddress} deleteElem={deleteAddress} element="addresse" tab={fireStation.addresses} options={addresses} />

            <Button type="submit">Ajouter station</Button>
        </Form>);
}

export default AddFireStation;