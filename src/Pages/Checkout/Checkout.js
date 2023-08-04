import React from 'react'
import { useSelector } from 'react-redux'
import { v4 as uuidv4 } from 'uuid';
import "./checkout.css"
import { Badge, Button, Col, Container, Row } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';

const Checkout = () => {
    const price = JSON.parse(localStorage.getItem("price"))
    const loading = useSelector(s => s.submit.loading)
    const error = useSelector(s => s.submit.error)
    console.log(error)
    const checkout = JSON.parse(localStorage.getItem("check"))
    // console.log(checkout.orderItems.map(i => i));
    const navigate = useNavigate()
    return (
        <div className='mt-4 full'>
            { loading ? <p>loading</p> : error ? <div className='errorbadge'>
                <Badge bg='danger'>
                    { error.data.message }
                </Badge>
            </div> : (<div>
                <Container>
                    <Row>
                        <div className="he">
                            <Col xs="2" >product</Col>
                            <Col xs="2" >name</Col>
                            <Col xs="2" >brand</Col>
                            <Col xs="2" >color</Col>
                            <Col xs="2" >price</Col>
                            <Col xs="2" >qty</Col>
                        </div>
                    </Row>
                    { checkout.orderItems.map(item => (
                        <Row key={ uuidv4() }>
                            <div className='dm' >
                                <Col xs="2" ><img style={ { width: "100px", height: "100px", paddingTop: "1rem" } } src={ `${item.product.image}` } alt={ `${item.product.name}` } /> </Col>
                                <Col xs="2" > <span>{ item.product.name }</span></Col>
                                <Col xs="2" ><span>{ item.product.brand }</span></Col>
                                <Col xs="2" ><span>{ item.product.color }</span></Col>
                                <Col xs="2" ><span>{ (item.product.price) * (item.qty) }$</span></Col>
                                <Col xs="2" ><span>{ item.qty }</span></Col>
                            </div>
                        </Row>
                    )) }
                </Container>
                <div className="pr">

                    <Badge bg='danger' style={ { margin: "2rem", fontSize: "20px" } }>total price : { price }$</Badge>
                </div>
                <div className="ed">
                    <Button variant='light' onClick={ () => navigate("/Home") } >OK</Button>
                </div>

            </div>) }
        </div>
    )
}

export default Checkout