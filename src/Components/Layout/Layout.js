import { Container } from "react-bootstrap";
import { Outlet } from "react-router-dom";
import MainNav from "../Navs/MainNav/MainNav";

const Layout = () => {
    return (
        <Container>
            <MainNav />
            <hr />
            <Outlet />
        </Container>
    );
}

export default Layout;