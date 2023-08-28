import React, { useEffect, useMemo } from "react";
import { Badge, Carousel, Col, Container, Row, Spinner } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import 'bootstrap/dist/css/bootstrap.min.css'
import { Action, pprice } from "../../Action";
import "./home.css"
import { Link, useNavigate } from "react-router-dom";
const Home = () => {
    const navigate = useNavigate()
    const { data, loading, error } = useSelector(s => s.Data)
    const log = useSelector(s => s.login)
    const search = useSelector(s => s.search.text)
    const dispatch = useDispatch()
    const plist = data.map(item => item.price).sort((x, y) => {
        return x - y
    })
    const k = []
    const m = []
    const map = data.map(item => {
        if (item.category == "Keyboard") {
            k.push(item)
        }
        if (item.category == "Mouse") {
            m.push(item)
        }
    })
    console.log(k);
    const result = data.filter(
        (item) => {
            const name = item.name.toLowerCase()
            const brand = item.name.toLowerCase()
            const sear = search
            return name.includes(sear) || brand.includes(sear)
        }
    );
    useEffect(() => {
        dispatch(Action())
        dispatch(pprice(plist))
    }, [])
    return (
        <>
            <div className="slider">
                <Carousel>
                    { loading ? "" : error ? "" :
                        data.map(item => (<Carousel.Item>
                            <img className="imgcarousel"
                                src={ `${item.image}` }
                                alt="First slide"
                            />
                        </Carousel.Item>
                        )) }
                </Carousel>
            </div>
            <div className="ho" >

                { log.loading ? (<Spinner animation="grow" />) : log.error ? (<div className='loger'>
                    <p className='ops' >OPS...</p>
                    <p className='ops' >somthing went wrong</p>
                    <Badge bg="danger" ><p>{ log.error.data.message }</p></Badge>
                    <p className="ops" >
                        OR
                    </p>
                    <Badge bg="danger" >
                        <p>
                            email is not valid
                        </p>
                    </Badge>
                    <p className="ops" >
                        OR
                    </p>
                    <Badge bg="danger" >   <p>you first must sing up    </p></Badge>
                    <p className="ops" > please refresh</p>
                </div >
                ) : loading ? (
                    <>
                        <div style={ { marginTop: "20rem" } }>
                            <span className="loader"></span>
                        </div>
                    </>
                ) : error ? (
                    <h1>
                        <Badge bg="danger" style={ { marginTop: "20rem" } }>
                            { error }
                        </Badge>
                    </h1>
                ) : (
                    <div>
                        <Container>
                            <p id="k">Mouse</p>
                            <Row id="row">

                                { data ? m.map((item) => {
                                    return (<Col key={ item._id } xs="12" sm="6" md="4" lg="3" style={ { margin: "20px auto" } } >
                                        <div className="card" style={ { backgroundColor: item.countInStock <= 0 ? "#ABB2B9" : "white" } } onClick={ () => item.countInStock > 0 && navigate(`/${item._id}`) }>
                                            <Container>
                                                <img variant="top" src={ `${item.image}` } />
                                                <div>
                                                    <p>{ item.name }</p>
                                                    <p style={ { color: item.countInStock <= 0 ? "red" : "black" } }>
                                                        countInStock :   { item.countInStock }
                                                    </p>
                                                </div>
                                                <div>
                                                    <Container>
                                                        <Row>
                                                            <Col xs={ {
                                                                span: "4",
                                                                offset: "2"
                                                            } } md={ {
                                                                span: "5",
                                                                offset: "1"
                                                            } } lg={ {
                                                                span: "5",
                                                                offset: "1"
                                                            } }>
                                                                <small className="text-muted" style={ { marginRight: "2rem" } }>${ item.price }</small>
                                                            </Col>
                                                            <Col xs={ {
                                                                span: "3",
                                                                offset: "3"
                                                            } } md={ {
                                                                span: "5",
                                                                offset: "1"
                                                            } } lg={ {
                                                                span: "3",
                                                                offset: "3"
                                                            } }>
                                                                <small className="text-muted">{ item.rating }</small>
                                                            </Col>
                                                        </Row>
                                                    </Container>
                                                </div>
                                            </Container>
                                        </div>
                                    </Col>)
                                }) : "" }
                                <p id="k">Keyboard</p>
                                <Row id="row">
                                    { data ? k.map((item) => {
                                        return (<Col key={ item._id } xs="12" sm="6" md="4" lg="3" style={ { margin: "20px auto" } } >
                                            <div className="card" style={ { backgroundColor: item.countInStock <= 0 ? "#ABB2B9" : "white" } } onClick={ () => item.countInStock > 0 && navigate(`/${item._id}`) }>
                                                <Container>
                                                    <img variant="top" src={ `${item.image}` } />
                                                    <div>
                                                        <p>{ item.name }</p>
                                                        <p style={ { color: item.countInStock <= 0 ? "red" : "black" } }>
                                                            countInStock :   { item.countInStock }
                                                        </p>
                                                    </div>
                                                    <div>
                                                        <Container>
                                                            <Row>
                                                                <Col xs={ {
                                                                    span: "4",
                                                                    offset: "2"
                                                                } } md={ {
                                                                    span: "5",
                                                                    offset: "1"
                                                                } } lg={ {
                                                                    span: "5",
                                                                    offset: "1"
                                                                } }>
                                                                    <small className="text-muted" style={ { marginRight: "2rem" } }>${ item.price }</small>
                                                                </Col>
                                                                <Col xs={ {
                                                                    span: "3",
                                                                    offset: "3"
                                                                } } md={ {
                                                                    span: "5",
                                                                    offset: "1"
                                                                } } lg={ {
                                                                    span: "3",
                                                                    offset: "3"
                                                                } }>
                                                                    <small className="text-muted">{ item.rating }</small>
                                                                </Col>
                                                            </Row>
                                                        </Container>
                                                    </div>
                                                </Container>
                                            </div>
                                        </Col>)
                                    }) : "" }
                                </Row>
                            </Row>
                        </Container>
                    </div>
                ) }

            </div>
        </>
    )
}
export default Home