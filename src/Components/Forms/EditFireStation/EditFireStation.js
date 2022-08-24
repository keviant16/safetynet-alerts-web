import axios from "axios";
import { useEffect, useState } from "react";
import { Button, Form } from "react-bootstrap";
import InputSelectList from "../../Inputs/InputSelectList/InputSelectList";
import InputText from "../../Inputs/InputText/InputText";

const baseURL = "http://localhost:8080"

const EditFireStation = (props) => {
    const [valid, setvalid] = useState(false);
    const [fireStation, setfireStation] = useState(null);
    const [addresses, setaddresses] = useState([]);

    const updateFireStation = (fireStation) => {
        axios.put(`${baseURL}/fireStation/${props.id}`, fireStation)
            .then(() => alert("Station Pompier ajouter !"))
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
            updateFireStation(fireStation)
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

        axios.get(`${baseURL}/fireStation/${props.id}`).then((response) => {
            setfireStation(response.data);
        });
    }, [props.id]);

    if (!fireStation) return "... Loading";

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

            <Button type="submit">Editer station pompier</Button>
        </Form>);
}

export default EditFireStation;