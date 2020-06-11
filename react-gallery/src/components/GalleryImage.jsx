import Navbar from "react-bootstrap/Navbar";
import NavbarBrand from "react-bootstrap/NavbarBrand";
import NavbarToggle from "react-bootstrap/NavbarToggle";
import NavbarCollapse from "react-bootstrap/NavbarCollapse";

<Navbar bg="light" expand="lg">
<Navbar.Brand href="#home">Chris</Navbar.Brand>
<NavbarToggle aria-control="basic-navbar-nav"/>
<Navbar.Collapse id="basic-navbar-nav">
    <Nav className="mr-auto">
        <Nav.Link href="#home">Home</Nav.Link>
        <Nav.Link href="#link">Link</Nav.Link>
        <NavDropdown title="Dropdown" id="basic-nav-dropdown">
            
        </NavDropdown>
    </Nav>
    <Form inline>
        <Form type="text" placeholder="Search" className="mr-sm-2"/>
        <button variant="outline-success">Search</button>
    </Form>
    </Navbar.Collapse>
    </Navbar>
