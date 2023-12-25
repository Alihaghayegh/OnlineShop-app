import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import Offcanvas from "react-bootstrap/Offcanvas";
import Image from "react-bootstrap/Image";
import "./root.css";

import bag from "../assets/image/bag.png";
import search from "../assets/image/search.png";

function OffcanvasExample() {
  return (
    <>
      <Navbar key={"md"} expand={"md"} className="mb-3">
        <Container fluid>
          <Navbar.Brand>
            <Image className="main-logo" src={bag}></Image>
          </Navbar.Brand>
          <Navbar.Toggle aria-controls={`offcanvasNavbar-expand-md`} />
          <Navbar.Offcanvas
            id={`offcanvasNavbar-expand-md`}
            aria-labelledby={`offcanvasNavbarLabel-expand-md`}
            placement="start"
          >
            <Offcanvas.Header closeButton>
              <Offcanvas.Title id={`offcanvasNavbarLabel-expand-md`}>
                <Image className="main-logo" src={bag}></Image>
              </Offcanvas.Title>
            </Offcanvas.Header>
            <Offcanvas.Body>
              <Nav className="justify-content-end flex-grow-1 pe-3">
                <Nav.Link>کافه</Nav.Link>
                <Nav.Link>بلاگ</Nav.Link>
                <Nav.Link>تماس با ما</Nav.Link>
                <NavDropdown
                  title="محصولات"
                  id={`offcanvasNavbarDropdown-expand-md`}
                >
                  <NavDropdown.Item>قهوه</NavDropdown.Item>
                  <NavDropdown.Item>تجهیزات</NavDropdown.Item>
                  <NavDropdown.Divider />
                  <NavDropdown.Item>خدمات کافه ای</NavDropdown.Item>
                </NavDropdown>
              </Nav>
              <Form className="d-flex">
                <Form.Control
                  type="search"
                  placeholder="جست و جو"
                  className="mx-2"
                  aria-label="Search"
                />
                <Button variant="outline-light">
                  <Image src={search}></Image>
                </Button>
              </Form>
            </Offcanvas.Body>
          </Navbar.Offcanvas>
        </Container>
      </Navbar>
    </>
  );
}

export default OffcanvasExample;
