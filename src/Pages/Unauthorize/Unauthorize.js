import { Button, Card, Container } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

const Unauthorize = () => {
    const navigate = useNavigate();

    return (
        <Container style={{ minHeight: "80vh", display: "flex", justifyContent: "center", alignItems: "center" }}>
            <Card>
                <Card.Header>Error 401</Card.Header>
                <Card.Body>
                    <Card.Title>Unauthorize Page</Card.Title>
                    <Card.Text>
                        Il semble que vous n'êtes pas autorisé a voir ce contenue.
                    </Card.Text>
                    <Button variant="primary" onClick={() => navigate("/")}>
                        Retourner à l'accueil</Button>
                </Card.Body>
            </Card>
        </Container>
    );
}

export default Unauthorize;