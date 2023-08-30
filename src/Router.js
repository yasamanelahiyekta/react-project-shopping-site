import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "./Pages/Home/Home";
import Cart from "./Pages/Cart/Cart";
import Login from "./Pages/Login/Login";
import Products from "./Pages/Product/Products";
import Singup from "./Pages/singup/Singup";
import Setting from "./Pages/Setting/Setting";
import Changeprofile from "./Pages/Setting/Changeprofile/Changeprofile";
import Changepassword from "./Pages/Setting/Changepassword/Changepassword";
import Aploadprofile from "./Pages/Setting/Aploadprofile/Aploadprofile";
import Profile from "./Pages/Profile/Profile";
import Address from "./Pages/Address/Address";
import Checkout from "./Pages/Checkout/Checkout";
import Allorders from "./Pages/Allorders/Allorders";
import Oneorder from "./Pages/Oneorder/Oneorder";
import Error from "./Components/Error/Error";
const Router = () => {
    return (
        <>
            <Routes>
                <Route path="/" element={ <Home /> } />
                <Route path="/Cart" element={ <Cart /> } />
                <Route path="/Login" element={ <Login /> } />
                <Route path="/Singup" element={ <Singup /> } />
                <Route path="/:itemId" element={ <Products /> } />
                <Route path="/Profile" element={ <Profile /> } />
                <Route path="/Setting" element={ <Setting /> }>
                    <Route path="Changeprofile" element={ <Changeprofile /> } />
                    <Route path="Changepassword" element={ <Changepassword /> } />
                    <Route path="Aploadprofile" element={ <Aploadprofile /> } />
                </Route>
                <Route path="/Adrress" element={ <Address /> } />
                <Route path="/Checkout" element={ <Checkout /> } />
                <Route path="/Allorders" element={ <Allorders /> } />
                <Route path="/Allorders/:orderId" element={ <Oneorder /> } />
                <Route path="*" element={ <Error /> } />


            </Routes>




        </>
    )
}
export default Router