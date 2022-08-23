import { lazy } from "react";
import { Col, Container, Row } from "react-bootstrap";
const AddMedicalRecord = lazy(() => import('../../Components/Forms/AddMedicalRecord/AddMedicalRecord'))
const BasicModal = lazy(() => import('../../Components/Modals/BasicModal/BasicModal'))
const MedicalRecordTable = lazy(() => import('../../Components/Tables/MedicalRecordTable/MedicalRecordTable'))


const MedicalRecord = () => {
    return (
        <Container>
            <Row className="mb-3">
                <Col>
                    <h1>MedicalRecord Dashboard</h1>
                </Col>
            </Row>
            <Row className="mb-3">
                <Col>
                    <BasicModal
                        button="Ajouter une dossier médical"
                        title="Ajouter une dossier médical"
                        body={<AddMedicalRecord />}
                        variant="primary"
                    />
                </Col>
            </Row>
            <Row className="mb-3">
                <Col>
                    <MedicalRecordTable />
                </Col>
            </Row>
        </Container>
    );
}

export default MedicalRecord;