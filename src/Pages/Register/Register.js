import { useState } from "react";
import { Container, Form, Card, Button, Stack } from "react-bootstrap";
import InputText from "../../Components/Inputs/InputText/InputText";
import axios from "axios";
import InputSelect from "../../Components/Inputs/InputSelect/InputSelect";
import Checkbox from "../../Components/Inputs/Checkbox/Checkbox";


const baseURL = "http://localhost:8080/api/auth/signup"

const initialRegister = {
    username: "",
    email: "",
    roles: false,
    password: ""
}

const Register = () => {
    const [register, setregister] = useState(initialRegister);
    const [valid, setvalid] = useState(false);


    const registerUser = (register) => {
        axios.post(baseURL, register)
            .then(res => console.log(res))
            .then(() => alert("register"))
        //login
        //redirect to person
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
        setregister((prev) => ({ ...prev, [event.target.name]: event.target.value }))
    }

    return (
        <Container style={{ minHeight: "80vh", display: "flex", justifyContent: "center", alignItems: "center" }}>

            <Card border="primary" style={{ minWidth: "600px", padding: 20 }}>
                <Stack>
                    <Card.Title>S'incrire</Card.Title>
                </Stack>
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
                        <Button type="submit">S'incrire</Button>
                    </Form>
                </Card.Body>
            </Card>
        </Container>
    );
}

export default Register;