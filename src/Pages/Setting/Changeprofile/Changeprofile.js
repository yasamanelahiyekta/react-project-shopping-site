import { Button } from "react-bootstrap"
import "./Changeprofile.css"
import { useDispatch, useSelector } from "react-redux"
import { useEffect, useState } from "react"
import { changeprofile } from "../../../Action"
import Swal from "sweetalert2"
const Changeprofile = () => {
    const [first, setFirst] = useState("")
    const [last, setLast] = useState("")
    const [gender, setGender] = useState("")
    const [age, setAge] = useState("")
    const [city, setCity] = useState("")
    const sel = useSelector(s => s.changeprofile)
    console.log(sel);
    const dispatch = useDispatch()

    return (
        <>
            <form className="fo">
                <input className="input" type="text" value={ first } placeholder="first name" onChange={ (e) => setFirst(e.target.value) } />
                <input className="input" type="text" value={ last } placeholder="last name" onChange={ (e) => setLast(e.target.value) } />
                <input className="input" type="text" value={ gender } placeholder="gender" onChange={ (e) => setGender(e.target.value) } />
                <input className="input" type="text" value={ age } placeholder="age" onChange={ (e) => setAge(e.target.value) } />
                <input className="input" type="text" value={ city } placeholder="city" onChange={ (e) => setCity(e.target.value) } />
                <Button className="mt-1" variant="outline-danger" onClick={ () => {
                    console.log("oncl");
                    Swal.fire(sel.data.message);
                    dispatch(changeprofile(first, last, gender, age, city))
                }
                } >save</Button>
            </form>

        </>
    )
}
export default Changeprofile