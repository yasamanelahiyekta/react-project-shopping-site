
import React, { useState } from 'react'
import { useDispatch } from 'react-redux';
import { v4 as uuidv4 } from 'uuid';
import "./cart.css"
import { Badge, Button, CloseButton, Col, Container, Row } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { number } from '../../Action';
const Cart = () => {
    const [flag, setFlag] = useState(false)
    const toast = () => {
        return toast('first you must login', {
            position: "top-center",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "light",
        });
    }
    const navigate = useNavigate()
    const token = localStorage.getItem("token")
    const data = JSON.parse(localStorage.getItem("cart"))
    const price = data.reduce((x, item) => {
        return x + item.price
    }, 0)
    localStorage.setItem("price", JSON.stringify(price))
    const dispatch = useDispatch()
    const help = {}
    data.map(item => {
        help[item._id] = []
    })
    data.map(item => {
        help[item._id] = [...help[item._id], item]
    })
    const list = []
    Object.entries(help).map(([key, value]) => list.push({ "product": key, "qty": value.length })
    )
    localStorage.setItem("list", JSON.stringify(list))
    return (
        <div>
            { !data.length ? <div>
                <Badge bg='danger'>cart is empty</Badge>
            </div> : Object.entries(help).map(([key, value]) => (
                <div key={ uuidv4() } className='bo' style={ { color: "white", borderColor: "red", backgroundColor: "black" } }>
                    <Container>
                        <Row className='mb-5'>
                            <Col xs={ { offset: "6", xs: "1" } } sm={ { offset: "10", sm: "2" } } >
                                <Button variant='danger' onClick={ () => {
                                    const data2 = data.filter(item => item._id !== key)
                                    localStorage.setItem("cart", JSON.stringify(data2))
                                    dispatch(number((value.length) * -1));
                                    setFlag(l => !l)
                                } } bg='danger'>Delete</Button>
                            </Col>
                        </Row>
                    </Container>
                    <Container>
                        <div className='main' >
                            <Row>
                                <>
                                    <Col lg="3" className='c' id='c1' ><img src={ `${value[0].image}` } /></Col>
                                    <Col xs="5" sm="4" lg="3" className='c' >{ value[0].name }</Col>
                                    <Col xs="2" sm="4" lg="3" className='c' >{ value[0].price }</Col>
                                    <Col xs="5" sm="4" lg="3" className='c' > <div className='ne'>
                                        <div className='en'>
                                            <Button size='sm' variant='info' onClick={ () => {
                                                setFlag(l => !l)
                                                const data2 = data.filter(item => item._id !== key)
                                                const data3 = data.filter(item => item._id == key)
                                                data3.shift()
                                                const data4 = data2.concat(data3)
                                                localStorage.setItem("cart", JSON.stringify(data4))
                                                dispatch(number(-1))
                                            }
                                            } >-</Button>
                                            <span>
                                                { value.length }
                                            </span>
                                            <Button size='sm' variant={ value.length == value[0].countInStock || value.length > value[0].countInStock ? "secondary" : "info" } onClick={ () => {
                                                setFlag(l => !l);
                                                {
                                                    value.length < value[0].countInStock && value[0]._id == key ? data.push(value[0]) && dispatch(number(1)) : console.log("hi");
                                                };
                                                console.log(value.length);
                                                console.log(value[0].countInStock);
                                                console.log(value[0]._id)
                                                    ;
                                                console.log(key);
                                                localStorage.setItem("cart", JSON.stringify(data))
                                            } } >+</Button>
                                        </div>
                                        <div>{ value.length == value[0].countInStock ? <p style={ { color: 'red' } } >
                                            not exist
                                        </p> : value.length > value[0].countInStock && <p style={ { color: 'red' } }>sold out</p> }</div>
                                    </div>
                                    </Col>
                                </>
                            </Row>
                        </div>
                    </Container>
                </div >
            )) }
            {
                !data.length ? "" :
                    <div className='nex'>
                        <Badge bg='outline-danger' >{ price ? <span>{ price } $</span> : "" }</Badge><br />
                        <Button variant='outline-danger' className='mt-4' onClick={ () => {
                            token ? navigate("/Adrress") : Swal.fire({
                                title: `😟
                    first you must login`,
                                showDenyButton: false,
                                showCancelButton: true,
                                confirmButtonText: 'ok',
                            }).then((result) => {
                                if (result.isConfirmed) {
                                    navigate("/Login")
                                }
                            })
                        } } >next</Button>
                    </div>
            }
        </div >
    )
}

export default Cart

