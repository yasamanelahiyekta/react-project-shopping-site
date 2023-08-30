import { Badge, Button } from "react-bootstrap"
import 'react-toastify/dist/ReactToastify.css';
import "./address.css"
import { useDispatch, useSelector } from "react-redux"
import { useState } from "react"
import { submit } from "../../Action"
import { useNavigate } from "react-router-dom"
import { ToastContainer, toast } from "react-toastify"
const Address = () => {

    const totalPrice = JSON.parse(localStorage.getItem("price"))
    const dispatch = useDispatch()
    const qty = JSON.parse(localStorage.getItem("list"))
    const token = localStorage.getItem("token")
    const [city, setCity] = useState("")
    const [adrress, setAdrress] = useState("")
    const [postcode, setPostcode] = useState("")
    const [telphone, setTelphone] = useState("")
    const pho = telphone.toString().length
    const spl = [...telphone]
    const spl1 = spl.splice(0, 2).join().split().includes("0,9")
    const notify = toast.error('somthing is wrong', {
        position: "top-center",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "colored",
    })
    const navigate = useNavigate()
    return (
        <div className="ad">
            <form className="form">
                <div>
                    <input type="text" onChange={ (e) => setCity(e.target.value) } value={ `${city}` } placeholder="city" />
                </div>
                <div>
                    <input type="text" onChange={ (e) => setAdrress(e.target.value) } value={ `${adrress}` } placeholder="adrress" />
                    <div className="message" >

                        { adrress.length >= 10 ?
                            <div className="correct">
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="green" >
                                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z" clipRule="evenodd" />
                                </svg>
                            </div>
                            : <div className="wrong">
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="red">
                                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.28 7.22a.75.75 0 00-1.06 1.06L8.94 10l-1.72 1.72a.75.75 0 101.06 1.06L10 11.06l1.72 1.72a.75.75 0 101.06-1.06L11.06 10l1.72-1.72a.75.75 0 00-1.06-1.06L10 8.94 8.28 7.22z" clipRule="evenodd" />
                                </svg>

                            </div> }
                        <small style={ { color: adrress.length >= 10 ? "green" : "red" } }>address must be at least 10 characters</small>

                    </div>
                </div>
                <div>
                    <input type="number" onChange={ (e) => setPostcode(e.target.value) } value={ `${postcode}` } placeholder="post code" />
                </div>
                <div>
                    <input type="tel" onChange={ (e) => setTelphone(e.target.value) } value={ `${telphone}` } placeholder="phone number" />
                    <div className="message1">
                        <div className="message">
                            { pho == 11 ? (<div className="correct">
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="green" >
                                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z" clipRule="evenodd" />
                                </svg>
                            </div>) : <div className="wrong">
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="red">
                                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.28 7.22a.75.75 0 00-1.06 1.06L8.94 10l-1.72 1.72a.75.75 0 101.06 1.06L10 11.06l1.72 1.72a.75.75 0 101.06-1.06L11.06 10l1.72-1.72a.75.75 0 00-1.06-1.06L10 8.94 8.28 7.22z" clipRule="evenodd" />
                                </svg></div> }
                            <small style={ { color: pho == 11 ? "green" : "red" } } >phone must be exactly 11 characters</small>
                        </div>
                        <div className="message">

                            { spl1 ? (<div className="correct">
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="green" >
                                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z" clipRule="evenodd" />
                                </svg>
                            </div>) : <div className="wrong">
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="red">
                                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.28 7.22a.75.75 0 00-1.06 1.06L8.94 10l-1.72 1.72a.75.75 0 101.06 1.06L10 11.06l1.72 1.72a.75.75 0 101.06-1.06L11.06 10l1.72-1.72a.75.75 0 00-1.06-1.06L10 8.94 8.28 7.22z" clipRule="evenodd" />
                                </svg></div> }
                            <small style={ { color: spl1 ? "green" : "red" } }>phone must begin with "09"</small>
                        </div>
                    </div>
                </div>
            </form >
            <div className="down">
                <Button variant='outline-secondary' onClick={ () => navigate("/Cart") } >Edit</Button>
                { pho == 11 && spl1 && adrress.length >= 10 ? <Button variant="outline-success" onClick={ () => (
                    dispatch(submit(adrress, city, postcode, telphone, totalPrice, qty, token)),
                    localStorage.removeItem("num"),
                    localStorage.removeItem("cart"),
                    navigate("/Checkout")
                )
                } >submit</Button> : <Button variant="outline-danger" onClick={ () => (
                    localStorage.clear(),
                    notify, alert("ops"),
                    console.log("onclick"))

                } >submit</Button> }
            </div>
        </div >
    )
}
export default Address