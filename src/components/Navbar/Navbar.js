import { BsSearch } from "react-icons/bs";
import { GiHamburgerMenu } from "react-icons/gi";
import { RxCross2 } from "react-icons/rx";
import {
  Col,
  Offcanvas,
  Row,
  Form,
  Button,
  Navbar,
  Nav,
  Container,
} from "react-bootstrap";
import "./Navbar.css";
import { useEffect, useState } from "react";

function NavBar() {
  const [isSearchBarShown, setIsSearchBarShown] = useState(false);

  const toggleSearchBar = () => {
    setIsSearchBarShown(!isSearchBarShown);
  };

  const logo = (
    <span className="logo">
      <span>B</span>inge<span>M</span>e
    </span>
  );

  const hideSeachBarOnClickAnywhere = (e) => {
    //hides searc bar if you click anywhere else except search bar and search icon
    if (
      e.target.classList.contains("search__icon") ||
      e.target.classList.contains("search__bar")
    )
      return;

    setIsSearchBarShown(false);
  };

  useEffect(() => {
    //attach event listner to document(root object) on initial rendering
    document.addEventListener("click", hideSeachBarOnClickAnywhere);
  }, []);

  return (
    <Navbar expand="lg" className="p-0 pt-2 pt-lg-0" id="navbar">
      <Container fluid className="nav__container">
        <Row className=" w-100 align-items-center justify-content-between">
          <Col className="" xs={10} lg={4}>
            <Navbar.Toggle
              aria-controls="offcanvasNavbar-expand-lg"
              className="ham__menu text-white"
            >
              <GiHamburgerMenu />
            </Navbar.Toggle>
            <Navbar.Brand href="#" className="ms-2 fs-2 text-white">
              {logo}
            </Navbar.Brand>
          </Col>
          <Col className="d-none d-lg-block">
            <Navbar.Offcanvas
              id="offcanvasNavbar-expand-lg"
              aria-labelledby="offcanvasNavbarLabel-expand-lg"
              placement="start"
            >
              <Offcanvas.Header closeButton>
                <Offcanvas.Title id="offcanvasNavbarLabel-expand-lg">
                  {logo}
                </Offcanvas.Title>
              </Offcanvas.Header>
              <Offcanvas.Body>
                <Nav className="justify-content-center flex-grow-1 pe-3">
                  <Nav.Link href="#action1" className="m-2 px-1 fs-5 nav__link">
                    Home
                  </Nav.Link>
                  <Nav.Link href="#action2" className="m-2 px-1 fs-5 nav__link">
                    Genre
                  </Nav.Link>
                </Nav>
              </Offcanvas.Body>
            </Navbar.Offcanvas>
          </Col>
          <Col xs={2} lg={4}>
            <Form className="d-flex align-items-center">
              {isSearchBarShown ? (
                <Form.Control
                  type="search"
                  placeholder="Search"
                  className="d-block search__bar"
                  aria-label="Search"
                />
              ) : (
                <></>
              )}
              <Button
                variant="none"
                className="text-white ms-auto search__icon"
                onClick={toggleSearchBar}
              >
                {!isSearchBarShown ? (
                  <BsSearch className="fs-2 search__icon " />
                ) : (
                  <RxCross2 className="fs-2 search__icon " />
                )}
              </Button>
            </Form>
          </Col>
        </Row>
      </Container>
    </Navbar>
  );
}

export default NavBar;
