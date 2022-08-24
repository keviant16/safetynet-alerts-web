import { Form } from "react-bootstrap";


const Checkbox = (props) => {
    return (
        <Form.Group className="mb-3" controlId={props.label + "ID"}>
            {/* <Form.Label>{props.label}</Form.Label> */}
            <Form.Check
                label={props.label}
                name={props.name}
                id={props.label + "ID"}
                checked={props.checked}
                onChange={props.handleChange}
                type={"checkbox"}
            />
        </Form.Group>
    )
}
export default Checkbox