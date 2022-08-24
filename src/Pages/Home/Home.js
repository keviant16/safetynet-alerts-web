import { useEffect, useState } from "react";
import { Container } from "react-bootstrap";

const Home = () => {
    const [username, setuserName] = useState(null)
    const storedUserInfo = window.localStorage.getItem('userInfo')

    useEffect(() => {
        if (storedUserInfo.includes("username")) {
            const userInfo = JSON.parse(window.localStorage.getItem('userInfo'))
            setuserName(userInfo.username)
        }
    }, [storedUserInfo]);



    return (
        <Container>
            <h1>Home {username && username}</h1>
        </Container>
    );
}

export default Home;