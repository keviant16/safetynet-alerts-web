import { ListGroup } from "react-bootstrap";

const BasicList = (props) => {
    return (
        <ListGroup>
            {props.tab.length > 0 ?
                props.tab.map((e, i) => <ListGroup.Item key={i}>{e}</ListGroup.Item>)
                : null
            }
        </ListGroup>
    );
}

export default BasicList;