import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { allorders } from '../../Action'
import { Badge, Col, Container, Row } from 'react-bootstrap'
import { v4 as uuidv4 } from 'uuid';
import "./allorders.css"
const Allorders = () => {
    // const selector = useSelector(s => s.Allorders)
    const navigate = useNavigate()
    useEffect(() => {
        dispatch(allorders())
    }, [])
    const { data, loading, error } = useSelector(s => s.Allorders)
    // const order = JSON.parse(localStorage.getItem("orders"))
    console.log(data);
    const dispatch = useDispatch()


    return (
        <div>{ loading ? <p>...loadig...</p> : error ? <Badge bg='danger' >{ error.message }</Badge> : (<div>

            <Container>
                <Row className='r1'>

                    <Col lg="1" xs="2" sm="2" className='c' > <span>row</span> </Col>
                    <Col lg="2" xs="3" sm="3" className='c' > <span>City</span> </Col>
                    <Col lg="2" xs="" sm="" className='cc' > <span>Adrress</span> </Col>
                    <Col lg="2" xs="" sm="" className='cc' > <span>Paymentmethod</span> </Col>
                    <Col lg="1" xs="2" sm="2" className='c' > <span>Shiping Price</span>  </Col>
                    <Col lg="2" xs="2" sm="2" className='c' > <span>Total Price</span>  </Col>
                    <Col lg="2" xs="3" sm="3" className='c' > <span>Details</span>  </Col>

                </Row>
                { data.map((item, index) => (
                    <div key={ uuidv4() }>
                        <Row className='r2' >
                            <Col lg="1" xs="2" sm="2" className='c' >
                                <span>{ index + 1 }</span>
                            </Col>
                            <Col lg="2" xs="3" sm="3" className='c' >
                                <span>{ item.shippingAddress.city }</span>
                            </Col>
                            <Col lg="2" xs="" sm="" className='cc'>
                                <span>{ item.shippingAddress.address }</span>
                            </Col>
                            <Col lg="2" xs="" sm="" className='cc' >
                                <span>{ item.paymentMethod }</span>
                            </Col>
                            <Col lg="1" xs="2" sm="2" className='c'>
                                <span>{ item.shippingPrice } $</span>
                            </Col>
                            <Col lg="2" xs="2" sm="2" className='c'>
                                <span>{ item.totalPrice } $</span>
                            </Col>
                            <Col lg="2" xs="3" sm="3" className='c' >
                                <span className='svg' onClick={ () => navigate(`/Allorders/${item._id}`) } ><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" >
                                    <path fillRule="evenodd" d="M4.72 3.97a.75.75 0 011.06 0l7.5 7.5a.75.75 0 010 1.06l-7.5 7.5a.75.75 0 01-1.06-1.06L11.69 12 4.72 5.03a.75.75 0 010-1.06zm6 0a.75.75 0 011.06 0l7.5 7.5a.75.75 0 010 1.06l-7.5 7.5a.75.75 0 11-1.06-1.06L17.69 12l-6.97-6.97a.75.75 0 010-1.06z" clipRule="evenodd" />
                                </svg>

                                </span>
                            </Col>
                        </Row>
                    </div>
                )) }
            </Container>
        </div>)
        }</div>
    )
}

export default Allorders