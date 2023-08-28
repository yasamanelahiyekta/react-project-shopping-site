import React, { useMemo } from 'react'
import { oneorder } from '../../Action'
import { useParams } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { v4 as uuidv4 } from 'uuid';
import { Col, Container, Row, Tab, Tabs } from 'react-bootstrap';
import "./oneorder.css"

const Oneorder = () => {
    const { orderId } = useParams()
    const dispatch = useDispatch()
    useMemo(() => {
        dispatch(oneorder(orderId))
    }, [])
    const { data, loading, error } = useSelector(s => s.oneorder)
    console.log(data);
    return (
        <div>{ loading ? <p>...loading...</p> : error ? error : data._id ? <div className='maman'>
            <div className='tab' >
                <Tabs
                    defaultActiveKey="profile"
                    id="uncontrolled-tab-example"
                    className="mb-3"
                >
                    <Tab eventKey="home" title="City">
                        <p>
                            { data.shippingAddress.city }
                        </p>
                    </Tab>
                    <Tab eventKey="Adrress" title="Adrress">
                        <p>
                            { data.shippingAddress.address }
                        </p>
                    </Tab>
                    <Tab eventKey="Postal code" title="Postal Code" >
                        <p>
                            { data.shippingAddress.postalCode }
                        </p>
                    </Tab>
                    <Tab eventKey="Phone" title="Phone" >
                        <p>
                            { data.shippingAddress.phone }
                        </p>
                    </Tab>
                    <Tab eventKey="Shiping Price" title="Shiping Price" >
                        <p>
                            { data.shippingPrice } $
                        </p>
                    </Tab>
                    <Tab eventKey="Contact" title="Total Price" >
                        <p>
                            { data.totalPrice } $
                        </p>
                    </Tab>

                </Tabs>
            </div>
            <div className='in' >
                <section className='section'>
                    <section>

                        <span>
                            <Container>
                                <Row>
                                    <Col>
                                        <span className='spa' >
                                            city
                                        </span>
                                    </Col>
                                    <Col>
                                        <span className="sp">
                                            { data.shippingAddress.city }
                                        </span>
                                    </Col>
                                </Row>
                            </Container>
                        </span>



                        <span>
                            <Container>
                                <Row>
                                    <Col> <span className="spa">
                                        address
                                    </span></Col>
                                    <Col><span className="sp">
                                        { data.shippingAddress.address }
                                    </span></Col>
                                </Row>
                            </Container>
                        </span>
                        <span>
                            <Container>
                                <Row>
                                    <Col><span className="spa">
                                        postalCode
                                    </span></Col>
                                    <Col> <span className="sp">
                                        { data.shippingAddress.postalCode }
                                    </span></Col>
                                </Row>
                            </Container>
                        </span>
                        <span>
                            <Container>
                                <Row>
                                    <Col> <span className="spa">
                                        phone
                                    </span></Col>
                                    <Col>  <span className="sp">
                                        { data.shippingAddress.phone }
                                    </span></Col>
                                </Row>
                            </Container>
                        </span>
                        <span>
                            <Container>
                                <Row>
                                    <Col>  <span className="spa">
                                        shippingPrice
                                    </span></Col>
                                    <Col> <span className="sp">
                                        { data.shippingPrice } $
                                    </span></Col>
                                </Row>
                            </Container>
                        </span>
                        <span>
                            <Container>
                                <Row>
                                    <Col> <span className="spa">
                                        totalPrice
                                    </span></Col>
                                    <Col> <span className="sp">
                                        { data.totalPrice } $
                                    </span></Col>
                                </Row>
                            </Container>
                        </span>
                    </section>
                </section>
                <div>
                    <div className='ta1' >

                        <Container>
                            <Row className='t' >
                                <Col xs="3" lg="2" className='cttt' >Image</Col>
                                <Col xs="" lg="2" className='ctt' >Brand</Col>
                                <Col xs="" lg="2" className='ctt' >Category</Col>
                                <Col xs="" lg="2" className='ctt' >Color</Col>
                                <Col xs="5" lg="2" className='ct' >Name</Col>
                                <Col xs="2" lg="1" className='ct' >Price</Col>
                                <Col xs="2" lg="1" className='ct' >Quantity</Col>
                            </Row>
                        </Container>
                    </div>
                    <Container>
                        <div className='ta2'>

                            { data.orderItems.map(item => <Row key={ uuidv4() } className='ta' >
                                <Col lg="2" className='cttt' >
                                    <img src={ `${item.product.image}` } className='i' /> </Col>

                                <Col lg="2" className='ctt' >{ item.product.brand } </Col>

                                <Col lg="2" className='ctt' >{ item.product.category } </Col>

                                <Col lg="2" className='ctt' >{ item.product.color } </Col>

                                <Col lg="2" className='ct' >{ item.product.name } </Col>

                                <Col lg="1" className='ct' >{ item.product.price } $</Col>
                                <Col lg="1" className='ct' >{ item.qty } </Col>
                            </Row>) }
                        </div>
                    </Container>
                </div>
            </div>
        </div>
            : <div> empty</div> }</div>
    )
}

export default Oneorder