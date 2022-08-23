import { lazy } from "react";
import { Col, Container, Row } from "react-bootstrap";
const FireStationTable = lazy(() => import('../../Components/Tables/FireStationTable/FireStationTable'))
const BasicModal = lazy(() => import('../../Components/Modals/BasicModal/BasicModal'))
const AddFireStation = lazy(() => import('../../Components/Forms/AddFireStation/AddFireStation'))


const FireStation = () => {
    return (
        <Container>
            <Row className="mb-3">
                <Col>
                    <h1>Station Pompier</h1>
                </Col>
            </Row>
            <Row className="mb-3">
                <Col>
                    <BasicModal
                        button="Ajouter une station de pompier"
                        title="Ajouter une station de pompier"
                        body={<AddFireStation />}
                        variant="primary"
                    />
                </Col>
            </Row>
            <Row className="mb-3">
                <Col>
                    <FireStationTable />
                </Col>
            </Row>
        </Container>
    );
}

export default FireStation;