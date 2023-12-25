import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import Offcanvas from "react-bootstrap/Offcanvas";
import Image from "react-bootstrap/Image";
import { Outlet, Link } from "react-router-dom";
import "./root.css";

import bag from "../../assets/image/bag.png";
import search from "../../assets/image/search.png";

function Root() {
  return (
    <>
      <Navbar key={"md"} expand={"md"} className="mb-3">
        <Container fluid>
          <Navbar.Brand>
            <Link to={`/`}>
              <Image className="main-logo p-0 m-0" src={bag}></Image>
            </Link>
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
                <Nav.Item className="p-2">کافه</Nav.Item>
                <Nav.Item className="p-2">
                  <Link to={`/products`}>محصولات</Link>
                </Nav.Item>
                <Nav.Item className="p-2">تماس با ما</Nav.Item>
                <NavDropdown
                  title="دسته بندی ها"
                  id={`offcanvasNavbarDropdown-expand-md`}
                >
                  <NavDropdown.Item>قهوه</NavDropdown.Item>
                  <NavDropdown.Item>تجهیزات</NavDropdown.Item>
                  <NavDropdown.Item>خدمات کافه ای</NavDropdown.Item>
                  <NavDropdown.Item>خدمات راه اندازی</NavDropdown.Item>
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
      <Outlet />
    </>
  );
}

export default Root;
