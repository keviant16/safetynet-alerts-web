import { useState } from "react";
import { Container, Form, Card, Button, Stack } from "react-bootstrap";
import InputText from "../../Components/Inputs/InputText/InputText";
import axios from "axios";
import InputSelect from "../../Components/Inputs/InputSelect/InputSelect";
import Checkbox from "../../Components/Inputs/Checkbox/Checkbox";


const baseURL = "http://localhost:8080/api/auth/signin"

const initialLogin = {
    username: "",
    password: ""
}

const Login = () => {
    const [login, setLogin] = useState(initialLogin);
    const [valid, setvalid] = useState(false);


    const loginUser = (login) => {
        axios.post(baseURL, login)
            .then(res => console.log(res))
            .then(() => alert("Login"))
            .then(() => <Redirect to="/home" />)

        //redirect to person
    }

    const handleSubmit = (event) => {
        event.preventDefault();

        const form = event.currentTarget;

        if (!form.checkValidity()) {
            event.stopPropagation()
        } else {
            loginUser(login)
            setLogin(initialLogin)
        }
        setvalid(true)
    }

    const handleChange = (event) => {
        setLogin((prev) => ({ ...prev, [event.target.name]: event.target.value }))
    }

    return (
        <Container style={{ minHeight: "80vh", display: "flex", justifyContent: "center", alignItems: "center" }}>
            <Card border="primary" style={{ minWidth: "600px", padding: 20 }}>
                <Stack>
                    <Card.Title>Se connecter</Card.Title>
                </Stack>
                <Card.Body>
                    <Form noValidate onSubmit={handleSubmit} validated={valid} >
                        <InputText
                            label={"Nom d'utilisateur"}
                            value={Login.username}
                            name={"username"}
                            handleChange={handleChange}
                        />
                        <InputText
                            label={"Mot de passe"}
                            value={Login.password}
                            name={"password"}
                            handleChange={handleChange}
                            type="password"
                        />
                        <Button type="submit">Se Connecter</Button>
                    </Form>
                </Card.Body>
            </Card>
        </Container>
    );
}

export default Login;