import React from "react";
import "./setting.css"
import { Outlet, useNavigate } from "react-router-dom";
// import Chamgeprofile from "../Changeprofile/Changeprofile";
// import Changepassword from "./Changepassword/Changepassword";
// import Aploadprofile from "./Aploadprofile/Aploadprofile";
const Setting = () => {
    const navigate = useNavigate()

    return (
        <div style={ { display: "flex", gap: "33rem", border: "1px solid red" } }>

            <div className="set">
                <div className="setting">
                    <p onClick={ () => navigate("Changeprofile") } >Changeprofile</p>
                    <p onClick={ () => navigate("Changepassword") } >Changepassword</p>
                    <p onClick={ () => navigate("Aploadprofile") } >Aploadprofile</p>
                </div>
            </div>
            <Outlet />
        </div>
    )
}
export default Setting