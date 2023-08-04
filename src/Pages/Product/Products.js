import React, { useEffect, useState } from "react";
import { Badge, Button } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate, useParams } from "react-router-dom";
import { cart, getoneproduct, number, render } from "../../Action";
import { getcart } from "../../Reducer";
import "./product.css"
import Swal from "sweetalert2";

const Products = () => {
    const { itemId } = useParams()
    const selector = useSelector(s => s)
    const dispatch = useDispatch()
    const add = () => {
        Swal.fire(
            'Good job!',
            'Added',
            'success'
        )
    }
    useEffect(() => {
        dispatch(getoneproduct(itemId))
    }, [])
    console.log(selector.cart);
    console.log(selector);
    return (
        <div>
            { selector.getoneproduct.loading ? (
                <>
                    <div style={ { marginTop: "20rem" } }>
                        <span className="loader"></span>
                    </div>
                </>
            ) : selector.getoneproduct.error ? (
                <h1>
                    <Badge bg="danger" style={ { marginTop: "20rem" } }>
                        { selector.getoneproduct.error }
                    </Badge>
                </h1>
            ) : (<>
                { selector.getoneproduct.data.map(item =>
                    <div key={ item._id }>
                        <div className="cntainer" >
                            <div>
                                <img src={ `${item.image}` } alt={ `${item.name}` } />
                            </div>
                            <div>
                                <h1 className="h" >
                                    <p >Name: { item.name }</p>
                                    <p>Brand: { item.brand }</p>
                                    <p>Color: { item.color }</p>
                                </h1>
                            </div>
                        </div>
                        <div className="dis" >
                            <p>Description: { item.description }</p>
                        </div>
                        <div style={ { textAlign: "right", marginRight: "4rem", padding: "2rem" } }>

                            <button className="bt" onClick={ () => {
                                dispatch(number(1))
                                add()
                                selector.getoneproduct.data.qut =
                                    dispatch(cart(selector.getoneproduct.data))
                            } } >add to cart</button>
                        </div>
                    </div>
                ) }

            </>)





            }

        </div>)

}
export default Products