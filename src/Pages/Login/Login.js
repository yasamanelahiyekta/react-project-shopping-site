import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { flag, login, singup } from "../../Action";
import "./login.css"
import { Button } from "react-bootstrap";
const Login = () => {
    const navigate = useNavigate()
    const [email, setEmail] = useState("")
    const [pass, setPass] = useState("")
    const selector = useSelector(s => s.login)
    const sup = useSelector(s => s.singup)
    const [eye, setEye] = useState(false)
    const dispatch = useDispatch()
    const select = useSelector(s => s.flag)
    return (
        <>
            { sup.error ? (<div className="ersup" >
                <p>OPS...</p>
                <p>somthing went wrong</p>
                <div className="erspan" >
                    { sup.error.data.message
                    }
                </div>
                <p> please refresh</p>
            </div>) : sup.loading ? <p>loading</p> : <div style={ { marginTop: "2rem" } }>

                <form className="formlog" >
                    <div className="divlog" >
                        <label>email :   </label>
                        <input type="email" value={ email } onChange={ (e) => setEmail(e.target.value) } /><br /><br />
                    </div>
                    <div className="la">
                        <label>password :   </label>
                        <div className="paseye" >
                            <input type={ eye ? "text" : "password" } className="eye" value={ pass } onChange={ (e) => setPass(e.target.value) } />
                            { !eye ? <div onClick={ () => setEye(true) }>
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="white" className="open">
                                    <path d="M10 12.5a2.5 2.5 0 100-5 2.5 2.5 0 000 5z" />
                                    <path fillRule="evenodd" d="M.664 10.59a1.651 1.651 0 010-1.186A10.004 10.004 0 0110 3c4.257 0 7.893 2.66 9.336 6.41.147.381.146.804 0 1.186A10.004 10.004 0 0110 17c-4.257 0-7.893-2.66-9.336-6.41zM14 10a4 4 0 11-8 0 4 4 0 018 0z" clipRule="evenodd" />
                                </svg>

                            </div> : <div onClick={ () => setEye(false) } >
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="white" className="open">
                                    <path fillRule="evenodd" d="M3.28 2.22a.75.75 0 00-1.06 1.06l14.5 14.5a.75.75 0 101.06-1.06l-1.745-1.745a10.029 10.029 0 003.3-4.38 1.651 1.651 0 000-1.185A10.004 10.004 0 009.999 3a9.956 9.956 0 00-4.744 1.194L3.28 2.22zM7.752 6.69l1.092 1.092a2.5 2.5 0 013.374 3.373l1.091 1.092a4 4 0 00-5.557-5.557z" clipRule="evenodd" />
                                    <path d="M10.748 13.93l2.523 2.523a9.987 9.987 0 01-3.27.547c-4.258 0-7.894-2.66-9.337-6.41a1.651 1.651 0 010-1.186A10.007 10.007 0 012.839 6.02L6.07 9.252a4 4 0 004.678 4.678z" />
                                </svg>

                            </div> }
                        </div>
                    </div>
                </form>
                <div style={ { marginTop: "1rem" } } >
                    <Button variant="outline-danger" onClick={ () => {
                        dispatch(login(email, pass))
                        if (!selector.error) {
                            dispatch(flag(select))
                            navigate("/")
                        }
                    } }>Login</Button>
                </div>
                <div className="don" >
                    <small className="sma1">you don't have an account?</small>
                    <small className="sma" onClick={ () => {
                        navigate("/Singup")
                    }
                    }>Sing up</small>
                </div>
            </div > }
        </>
    )
}
export default Login