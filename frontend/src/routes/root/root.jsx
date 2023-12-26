import { useState } from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import Offcanvas from "react-bootstrap/Offcanvas";
import Image from "react-bootstrap/Image";
import { Outlet, NavLink, useLocation } from "react-router-dom";

import "./root.css";

import bag from "../../assets/image/bag.png";
import Search from "../../components/search/search";

function Root() {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const location = useLocation();

  return location.pathname == "/" ? (
    <>
      <Navbar key={"md"} expand={"md"} className="mb-3">
        <Container fluid>
          <Navbar.Brand>
            <NavLink to={`/`}>
              <Image className="main-logo p-0 m-0" src={bag}></Image>
            </NavLink>
          </Navbar.Brand>
          <Navbar.Toggle
            aria-controls={`offcanvasNavbar-expand-md`}
            onClick={handleShow}
          />
          <Navbar.Offcanvas
            id={`offcanvasNavbar-expand-md`}
            aria-labelledby={`offcanvasNavbarLabel-expand-md`}
            placement="start"
            show={show}
            onHide={handleClose}
          >
            <Offcanvas.Header closeButton>
              <Offcanvas.Title id={`offcanvasNavbarLabel-expand-md`}>
                <NavLink to={`/`} onClick={handleClose}>
                  <Image className="main-logo p-0 m-0" src={bag}></Image>
                </NavLink>
              </Offcanvas.Title>
            </Offcanvas.Header>
            <Offcanvas.Body>
              <Nav className="justify-content-end flex-grow-1 pe-3">
                <Nav.Item className="p-2">کافه</Nav.Item>
                <Nav.Item className="p-2">
                  <NavLink
                    to={`/products`}
                    onClick={handleClose}
                    className={({ isActive, isPending }) =>
                      isPending ? "pending" : isActive ? "active" : ""
                    }
                  >
                    محصولات
                  </NavLink>
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
            </Offcanvas.Body>
          </Navbar.Offcanvas>
        </Container>
      </Navbar>
      <Outlet />
      <Search />
    </>
  ) : (
    <>
      <Navbar key={"md"} expand={"md"} className="mb-3">
        <Container fluid>
          <Navbar.Brand>
            <NavLink to={`/`}>
              <Image className="main-logo p-0 m-0" src={bag}></Image>
            </NavLink>
          </Navbar.Brand>
          <Navbar.Toggle
            aria-controls={`offcanvasNavbar-expand-md`}
            onClick={handleShow}
          />
          <Navbar.Offcanvas
            id={`offcanvasNavbar-expand-md`}
            aria-labelledby={`offcanvasNavbarLabel-expand-md`}
            placement="start"
            show={show}
            onHide={handleClose}
          >
            <Offcanvas.Header closeButton>
              <Offcanvas.Title id={`offcanvasNavbarLabel-expand-md`}>
                <NavLink to={`/`} onClick={handleClose}>
                  <Image className="main-logo p-0 m-0" src={bag}></Image>
                </NavLink>
              </Offcanvas.Title>
            </Offcanvas.Header>
            <Offcanvas.Body>
              <Nav className="justify-content-end flex-grow-1 pe-3">
                <Nav.Item className="p-2">کافه</Nav.Item>
                <Nav.Item className="p-2">
                  <NavLink
                    to={`/products`}
                    onClick={handleClose}
                    className={({ isActive, isPending }) =>
                      isPending ? "pending" : isActive ? "active" : ""
                    }
                  >
                    محصولات
                  </NavLink>
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
              <Search />
            </Offcanvas.Body>
          </Navbar.Offcanvas>
        </Container>
      </Navbar>
      <Outlet />
    </>
  );
}
export default Root;
