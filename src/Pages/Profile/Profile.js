import { useDispatch, useSelector } from "react-redux"
import "./profile.css"
import { useEffect } from "react";
import { getprofile } from "../../Action";
import { v4 as uuidv4 } from 'uuid';
import { Button } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
const Profile = () => {
    const navigate = useNavigate()
    const { data } = useSelector(s => s.getprofile)
    const dispatch = useDispatch()
    useEffect(() => {
        dispatch(getprofile())
    }, [])
    const help = localStorage.getItem("token")
    return (<>
        { help ? data.map(item => <div key={ uuidv4() }>
            <div className="proimg">
                <img src={ `${item.user.image}` } />
            </div>
            <div className="prop">
                <p>email :  { item.user.email }</p>
                <p>user name  :  { item.user.username } </p>
                <p>mobile  :  { item.user.mobile } </p>
                <p>first name  : { item.user.firstname ? item.user.firstname : "" } </p>
                <p>last name  : { item.user.lastname ? item.user.lastname : "" } </p>
                <p>gender : { item.user.gender ? item.user.gender : "" } </p>
                <p>age  : { item.user.age ? item.user.age : "" } </p>
                <p>city  :  { item.user.city ? item.user.city : "" } </p>
            </div>

        </div>) :
            <>
                <h1>You have to login</h1>
                <Button variant="outline-dark" onClick={ () => navigate("/Login") }>login</Button>
            </>
        }
    </>
    )
}
export default Profile