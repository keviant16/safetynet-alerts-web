import { Container, Nav, Navbar } from "react-bootstrap";
import { Link } from "react-router-dom";


const MainNav = () => {
    return (
        <Navbar bg="light" variant="light">
            <Container>

                <Navbar.Brand to="/">SafetyNet Alerts</Navbar.Brand>
                <Nav className="me-auto" >
                    <Link className="m-1" to="/">Accueil</Link>
                    <Link className="m-1" to="/alerts">Alerts</Link>
                    <Link className="m-1" to="/persons">Personnes</Link>
                    <Link className="m-1" to="/medicalRecords">Dossiers Médicaux</Link>
                    <Link className="m-1" to="/fireStations">Stations Pompier</Link>
                    <Link className="m-1" to="/register">S'inscrire</Link>
                    <Link className="m-1" to="/login">Se Connecter</Link>
                </Nav>
            </Container>
        </Navbar >
    );
}

export default MainNav;
