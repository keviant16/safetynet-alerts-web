import { useState } from "react";
import { Button, Col, ListGroup, Row } from "react-bootstrap";
import InputSelect from "../InputSelect/InputSelect";


const InputSelectList = (props) => {
    const [input, setInput] = useState({
        name: props.element, value: ""
    });

    return (
        <div className="mb-3">
            <Row className="d-flex align-items-end">
                <Col>
                    <InputSelect
                        label={"Ajouter " + props.element}
                        name={input.name}
                        value={input.value}
                        options={props.options}
                        handleChange={(event) => setInput((prev) => ({ ...prev, value: event.target.value }))}
                    />

                </Col>
                <Col className="mb-3">
                    <Button onClick={() => props.addElem(input.value)}>Ajouter {props.element}</Button>
                </Col>
            </Row>
            <Row>
                <Col>
                    <ListGroup>
                        {props.tab.length > 0 ? props.tab.map((e) =>
                            <ListGroup.Item
                                key={e.toString()}
                                className="d-flex justify-content-between align-items-center"
                            >
                                {e}  <Button onClick={() => props.deleteElem(e)} variant="danger">X</Button>
                            </ListGroup.Item>) : null
                        }
                    </ListGroup>
                </Col>
            </Row>
        </div>
    );
}

export default InputSelectList;