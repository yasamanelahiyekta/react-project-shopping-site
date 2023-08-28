import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { Badge, Container, Form, Nav, Navbar } from "react-bootstrap";
import Swal from "sweetalert2";
import { flag, search } from "../../Action";
import "./header.css"
const Header = (val) => {
    const plist = JSON.parse(localStorage.getItem("pprice"))
    const [show, setShow] = useState(false);
    const [f, setf] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    const num = useSelector(s => s.number)
    if (num <= 0) {
        localStorage.removeItem("num")
    }
    const dispatch = useDispatch()
    const navigate = useNavigate()
    const select = useSelector(s => s.flag)
    const token = localStorage.getItem("token")
    const number = localStorage.getItem("num")
    useEffect(() => {
        setf(l => !l)
    }, [num, select])
    useEffect(() => {
        setf(l => !l)
    }, [select])
    return (
        <div className="div">
            <>
                <Navbar expand="lg">
                    <Container fluid>
                        <Navbar.Brand href="#"><p onClick={ () => navigate("/") }>Home</p></Navbar.Brand>
                        <Navbar.Toggle aria-controls="navbarScroll" />
                        <Navbar.Collapse id="navbarScroll">
                            <Nav
                                className="me-auto my-2 my-lg-0"
                                style={ { maxHeight: '100px' } }
                                navbarScroll
                            >
                                <Nav.Link href="#action2"><span onClick={ () => {
                                    return !localStorage.getItem("cart") ? Swal.fire('Cart is empty')
                                        : navigate("/Cart")
                                } }><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" >
                                        <path d="M1 1.75A.75.75 0 011.75 1h1.628a1.75 1.75 0 011.734 1.51L5.18 3a65.25 65.25 0 0113.36 1.412.75.75 0 01.58.875 48.645 48.645 0 01-1.618 6.2.75.75 0 01-.712.513H6a2.503 2.503 0 00-2.292 1.5H17.25a.75.75 0 010 1.5H2.76a.75.75 0 01-.748-.807 4.002 4.002 0 012.716-3.486L3.626 2.716a.25.25 0 00-.248-.216H1.75A.75.75 0 011 1.75zM6 17.5a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0zM15.5 19a1.5 1.5 0 100-3 1.5 1.5 0 000 3z" />
                                    </svg>
                                </span><Badge className="badgedanger" bg="danger" >{ number <= 0 ? "" : number }</Badge></Nav.Link>
                                { token ? (
                                    <>
                                        <div>
                                            <div className="email2">
                                                <span onClick={ () => navigate("/Profile") } >profile</span>
                                                <span onClick={ () => navigate("/Allorders") }>orders</span>
                                                <span onClick={ () => navigate("/Setting") } >setting</span>
                                                <p onClick={ () => {
                                                    return (Swal.fire({
                                                        position: 'center',
                                                        icon: 'success',
                                                        title: 'You are logged out',
                                                        showConfirmButton: false,
                                                        timer: 1500
                                                    }),
                                                        localStorage.clear())
                                                } }>
                                                    <span onClick={ () => {
                                                        dispatch(flag(select))
                                                        navigate("/")
                                                    } } >log out</span>
                                                </p>
                                            </div>
                                        </div>
                                        <div
                                            className="dropdown"
                                        >
                                            <span className="email" >
                                                <Nav.Link href="#action2" ><p>email</p></Nav.Link>
                                            </span>
                                            <div className="dropdown-content">
                                                <a href="# " onClick={ () => navigate("/Profile") } >profile</a>
                                                <a href="#" onClick={ () => navigate("/Allorders") }>orders</a>
                                                <a href="#" onClick={ () => navigate("/Setting") } >setting</a>
                                                <hr></hr>
                                                <p onClick={ () => {
                                                    return (Swal.fire({
                                                        position: 'center',
                                                        icon: 'success',
                                                        title: 'You are logged out',
                                                        showConfirmButton: false,
                                                        timer: 1500
                                                    }),
                                                        localStorage.clear())
                                                } }>
                                                    <a href="#" >log out</a>
                                                </p>
                                            </div>
                                        </div>
                                    </>
                                ) : <Nav.Link style={ { display: "flex", alignItems: "center", justifyContent: "center" } } href="#action2"><div className="plog"><p onClick={ () => navigate("/Login") }>login</p></div></Nav.Link> }
                            </Nav>
                            <Form className="d-flex">
                                <Form.Control
                                    type="search"
                                    placeholder="Search"
                                    className="me-2"
                                    aria-label="Search"
                                    onChange={ (e) => dispatch(search(e.target.value)) }
                                />
                            </Form>
                        </Navbar.Collapse>
                    </Container>
                </Navbar>
            </>
        </div >
    )
}
export default Header