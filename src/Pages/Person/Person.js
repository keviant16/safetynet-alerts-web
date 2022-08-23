import { lazy } from "react";
import { Col, Container, Row } from "react-bootstrap";
const PersonTable = lazy(() => import('../../Components/Tables/PersonTable/PersonTable'))
const BasicModal = lazy(() => import('../../Components/Modals/BasicModal/BasicModal'))
const AddPerson = lazy(() => import('../../Components/Forms/AddPerson/AddPerson'))


const Person = () => {
    return (
        <Container>
            <Row className="mb-3">
                <Col>
                    <h1>Personne</h1>
                </Col>
            </Row>
            <Row className="mb-3">
                <Col>
                    <BasicModal
                        button="Ajouter une personne"
                        title="Ajouter une personne"
                        body={<AddPerson />}
                        variant="primary"
                    />
                </Col>
            </Row>
            <Row className="mb-3">
                <Col>
                    <PersonTable />
                </Col>
            </Row>
        </Container>
    );
}

export default Person;