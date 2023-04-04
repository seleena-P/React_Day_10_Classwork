import { Outlet, Link } from "react-router-dom";
import { Navbar } from "react-bootstrap";
import { Nav } from "react-bootstrap";
import {Container} from "react-bootstrap";
const Layout = () => {
    return (
      <>
      <Navbar bg='secondary'>
          <Container>
            <Navbar.Brand href="#home">
                Tripped
            {/* <img src="https://cdn.dribbble.com/users/60166/screenshot
            s/11603032/media/b5785a0b8b6bc0426e1c7a761458c731.jpg?compress=1&resize=768x576&vertical=top" width={65} height={65} alt="" /> */}
            </Navbar.Brand>
        <Nav>
          <ul><Link to="/">Home</Link></ul>
              <ul><Link to="/About">About</Link></ul>
              <ul><Link to="/Destination">Destination</Link></ul>
              <ul><Link to="/Contact">Contact</Link></ul>
              <ul>
              <Link to="/Form">Registration </Link>
              </ul>
  
        </Nav>
        </Container>
        </Navbar>
  
        <Outlet />
      </>
    )
  };
  
  export default Layout;