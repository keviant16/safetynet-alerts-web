import { useState } from "react";
import { ButtonGroup, Col, Container, Row, ToggleButton } from "react-bootstrap";



const Alerts = () => {

    const [radioValue, setRadioValue] = useState('1');

    const radios = [
        { name: 'Email', value: '1' },
        { name: 'Information personne', value: '2' },
        { name: 'Enfant perdu', value: '3' },
        { name: 'Incendie', value: '4' },
    ];

    return (
        <Container>
            <Row>
                <Col>
                    <h1>Alerts</h1>
                </Col>
            </Row>
            <Row>
                <Col>
                    <ButtonGroup>
                        {radios.map((radio, idx) => (
                            <ToggleButton
                                key={idx}
                                id={`radio-${idx}`}
                                type="radio"
                                variant={'outline-primary'}
                                name="radio"
                                value={radio.value}
                                checked={radioValue === radio.value}
                                onChange={(e) => setRadioValue(e.currentTarget.value)}
                            >
                                {radio.name}
                            </ToggleButton>
                        ))}
                    </ButtonGroup>
                </Col>
            </Row>
            <Row>
                <Col>
                    Zone de déclaration alerts
                </Col>
            </Row>
        </Container>
    );
}

export default Alerts;