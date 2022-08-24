import { Form } from "react-bootstrap";

const InputSelect = (props) => {
    return (
        <Form.Group className="mb-3" controlId={props.label + "ID"}>
            <Form.Label>{props.label}</Form.Label>
            <Form.Select
                aria-label={props.label}
                name={props.name}
                value={props.value}
                onChange={props.handleChange}
                required={props.required}
            >
                <option>Open this select menu</option>
                {props.options.map((option, index) => <option key={index}>{option}</option>)}
            </Form.Select>
        </Form.Group >
    );
}

export default InputSelect;