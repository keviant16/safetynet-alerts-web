import { useState } from "react";
import { Container, Form, Card, Button, Stack, Spinner } from "react-bootstrap";
import InputText from "../../Components/Inputs/InputText/InputText";
import axios from "axios";
import Checkbox from "../../Components/Inputs/Checkbox/Checkbox";
import { useNavigate } from 'react-router-dom';


const baseURL = "http://localhost:8080/api/auth"

const initialRegister = {
    username: "",
    email: "",
    roles: false,
    password: ""
}

const Register = () => {
    const [register, setregister] = useState(initialRegister);
    const [valid, setvalid] = useState(false);
    const [loading, setloading] = useState(false);
    const navigate = useNavigate();

    const registerUser = (register) => {
        setloading(true)
        const loginData = {
            username: register.username,
            password: register.password
        }
        axios.post(baseURL + "/signup", register)
            .then(() => loginUser(loginData))
            .then(() => setloading(false))
            .then(() => alert("Register and Login !"))
            .then(() => navigate('/'))
    }


    const loginUser = (login) => {
        axios.post(baseURL + "/signin", login)
            .then(res => console.log(res.data))
        // .then(res => localStorage.setItem("userInfo", res?.data))
        // .then(res => localStorage.setItem("snaCookieName", res))//set cookie
        //set user and token
    }


    const handleSubmit = (event) => {
        event.preventDefault();

        const form = event.currentTarget;

        if (!form.checkValidity()) {
            event.stopPropagation()
        } else {
            const registerData = { ...register, roles: register.roles ? ["ROLE_STATION"] : ["ROLE_PERSON"] }
            registerUser(registerData)
            setregister(initialRegister)
        }
        setvalid(true)
    }

    const handleChange = (event) => {
        if (event.target.name === "roles") {
            setregister((prev) => ({ ...prev, [event.target.name]: !register.roles }))

        } else {
            setregister((prev) => ({ ...prev, [event.target.name]: event.target.value }))
        }
    }


    return (
        <Container style={{ minHeight: "80vh", display: "flex", justifyContent: "center", alignItems: "center" }}>

            <Card border="primary" style={{ minWidth: "600px", padding: 20 }}>

                <Card.Title>S'incrire</Card.Title>


                <Card.Body>
                    <Form noValidate onSubmit={handleSubmit} validated={valid} >
                        <InputText
                            label={"Nom d'utilisateur"}
                            value={register.username}
                            name={"username"}
                            handleChange={handleChange}
                        />

                        <InputText
                            label={"Email"}
                            value={register.email}
                            name={"email"}
                            handleChange={handleChange}
                            type="email"
                        />

                        <InputText
                            label={"Mot de passe"}
                            value={register.password}
                            name={"password"}
                            handleChange={handleChange}
                            type="password"
                        />

                        <Checkbox
                            name="roles"
                            checked={register.roles}
                            handleChange={handleChange}
                            label="S'inscrire en tant que representant d'une station de pompier"
                        />

                        <Stack direction="horizontal" gap={3}>
                            <Button type="submit">S'incrire </Button>

                            {loading &&
                                <>
                                    <Spinner animation="border" role="status" className="ms-auto">
                                        <span className="visually-hidden">Loading...</span>
                                    </Spinner>
                                    <span >Loading...</span>
                                </>
                            }


                        </Stack>


                    </Form>
                </Card.Body>
            </Card>
        </Container>
    );
}

export default Register;