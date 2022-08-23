import { Form } from "react-bootstrap";

const InputText = (props) => {
    return (
        <Form.Group className="mb-3" controlId={props.label + "ID"}>
            <Form.Label>{props.label}</Form.Label>
            {props.required ?
                <Form.Control
                    name={props.name}
                    value={props.value}
                    onChange={props.handleChange}
                    type={props.number ? "number" : "text"}
                    required
                />
                :
                <Form.Control
                    name={props.name}
                    value={props.value}
                    onChange={props.handleChange}
                    type={props.number ? "number" : "text"}
                />
            }
        </Form.Group>
    );
}

export default InputText;