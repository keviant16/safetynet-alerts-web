import { Form } from "react-bootstrap";

const InputText = (props) => {
    return (
        <Form.Group className="mb-3" controlId={props.label + "ID"}>
            <Form.Label>{props.label}</Form.Label>
            <Form.Control
                name={props.name}
                value={props.value}
                onChange={props.handleChange}
                type={props.type}
                required={props.required}
            />
        </Form.Group>
    );
}

export default InputText;