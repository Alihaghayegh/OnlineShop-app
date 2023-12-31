// Import consistent styles
import {useState} from "react";
import {NavLink, Outlet, useLocation} from "react-router-dom";
import {Container, Image, Nav, Navbar, NavDropdown, Offcanvas,} from "react-bootstrap";
import bag from "../../assets/image/bag.png";
import Search from "../../components/search/search";
import FirstPageProductShow from "../../components/firstPageProductShow/firstPageProductShow";
import "./root.css";

function Root() {
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    const location = useLocation();

    // Extracted Search component rendering logic
    let searchComponent = null;
    if (location.pathname !== "/") {
        searchComponent = <Search/>;
    }

    return (
        <>
            <Navbar key={"md"} expand={"md"} className="mb-3">
                <Container fluid>
                    <Navbar.Brand>
                        <NavLink to={`/`}>
                            <Image className="main-logo p-0 m-0" src={bag}/>
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
                                    <Image className="main-logo p-0 m-0" src={bag}/>
                                </NavLink>
                            </Offcanvas.Title>
                        </Offcanvas.Header>
                        <Offcanvas.Body>
                            <Nav className="justify-content-end flex-grow-1 pe-3">
                                <Nav.Item className="p-2">
                                    <NavLink
                                        to={`/cafe`}
                                        onClick={handleClose}
                                        className={({isActive, isPending}) =>
                                            isPending ? "pending" : isActive ? "active" : ""
                                        }
                                    >
                                        کافه
                                    </NavLink></Nav.Item>
                                <Nav.Item className="p-2">
                                    <NavLink
                                        to={`/products`}
                                        onClick={handleClose}
                                        className={({isActive, isPending}) =>
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
                                    <NavDropdown.Item>مواد اولیه</NavDropdown.Item>
                                    <NavDropdown.Item>تجهیزات</NavDropdown.Item>
                                    <NavDropdown.Item>خدمات کافه ای</NavDropdown.Item>
                                    <NavDropdown.Item>خدمات راه اندازی</NavDropdown.Item>
                                </NavDropdown>
                            </Nav>
                            {searchComponent}
                        </Offcanvas.Body>
                    </Navbar.Offcanvas>
                </Container>
            </Navbar>

            <Outlet/>

            {location.pathname === "/" && (
                <div>
                    <div className="d-flex justify-content-center align-items-center rounded-4 first-page-content">
                        <Search/>
                    </div>
                    <FirstPageProductShow/>
                </div>
            )}
        </>
    );
}

export default Root;
