import { BsSearch } from "react-icons/bs";
import { GiHamburgerMenu } from "react-icons/gi";
import { RxCross2 } from "react-icons/rx";
import { AiFillStar } from "react-icons/ai";
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
import { useEffect, useRef, useState } from "react";
import axios from "axios";

function NavBar() {
  const [isSearchBarShown, setIsSearchBarShown] = useState(false);
  const [searchText, setSearchText] = useState("");
  const navbarRef = useRef();
  const [searchResult, setSearchResult] = useState([]);

  const toggleSearchBar = () => {
    setIsSearchBarShown(!isSearchBarShown);
  };

  const logo = <span className="logo fw-bold">OtaKu</span>;

  const hideSeachBarOnClickAnywhere = (e) => {
    //hides searc bar if you click anywhere else except search bar and search icon
    if (
      e.target.classList.contains("search__icon") ||
      e.target.classList.contains("search__bar") ||
      e.target.closest(".search__container")
    )
      return;

    setIsSearchBarShown(false);
    setSearchText("");
  };

  const showNavOnScrollUp = () => {
    //hide navbar when scrolled down and show when scrolled up

    //on initial scroll
    let prevScroll = 0;
    window.addEventListener("scroll", (e) => {
      let currentScroll = window.scrollY;

      // scroll down
      if (currentScroll - prevScroll >= 0) {
        navbarRef.current.classList.add("scroll__down");
        navbarRef.current.classList.remove("scroll__up");
      }

      // scroll up
      if (currentScroll - prevScroll <= 0) {
        navbarRef.current.classList.add("scroll__up");
        navbarRef.current.classList.remove("scroll__down");
      }

      prevScroll = currentScroll;
    });
  };

  useEffect(() => {
    //attach event listner to document(root object) on initial rendering
    document.addEventListener("click", hideSeachBarOnClickAnywhere);
    //when navbar scrolls up and down do something with nav bar
    showNavOnScrollUp();
  }, []);

  //whever user searches
  useEffect(() => {
    axios
      .get("https://anime-db.p.rapidapi.com/anime", {
        params: {
          page: "1",
          size: "10",
          search: searchText,
          sortBy: "ranking",
          sortOrder: "asc",
        },
        headers: {
          "X-RapidAPI-Key":
            "cd1977dadcmsh8b8e321069b7f89p10e2b8jsnfbba2370d0fb",
          "X-RapidAPI-Host": "anime-db.p.rapidapi.com",
        },
      })
      .then((res) => {
        setSearchResult(res.data.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, [searchText]);

  return (
    <Navbar
      expand="lg"
      className="p-0 py-2 py-lg-1"
      id="navbar"
      ref={navbarRef}
    >
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
                  onChange={(e) => setSearchText(e.target.value)}
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
      {/* search items when user searches   */}
      {isSearchBarShown ? (
        <div className="search__container p-3">
          {searchResult.map((result) => {
            return (
              <div className="search__item d-flex justify-content-start align-items-start mb-2 p-1">
                <img src={result.image} alt="" className="" />
                <div className=" ms-2">
                  <h5 className="text-white ms-1">{result.title}</h5>
                  <div className="text-danger">
                    <span className="rating pe-2">
                      <AiFillStar className="text-white" /> {result.rating}
                    </span>
                    |<span className="type px-2">{result.type}</span>|
                    <span className="released px-2">{result.status}</span>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      ) : (
        <></>
      )}
    </Navbar>
  );
}

export default NavBar;
