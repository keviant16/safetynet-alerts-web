import { useEffect, useState } from "react";
import { Container } from "react-bootstrap";

const Home = () => {
    const [userName, setuserName] = useState(null);
    const userInfo = localStorage
    console.log({ userInfo });
    useEffect(() => {
        setuserName("name")
    }, []);
    return (
        <Container>
            <h1>Home {userName && userName}</h1>
        </Container>
    );
}

export default Home;