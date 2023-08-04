import axios from "axios";
import React, { useState } from "react";

export const pprice = (list) => (dispatch, getstate) => {
    dispatch({ type: "pprice", paylode: list })
    localStorage.setItem("pprice", JSON.stringify(list))
}
export const Action = () => async (dispatch, getstate) => {
    try {
        dispatch({
            type: "getpost",
            paylode: { data: [], loading: true, error: "" },
        });
        const { data } = await axios("http://kzico.runflare.run/product/");
        dispatch({
            type: "getpost",
            paylode: { data: [...data], loading: false, error: "" },
        });
    } catch (error) {
        dispatch({
            type: "getpost",
            paylode: { data: [], loading: false, error: error.message },
        });
        console.log(error);
    }
};
export const allorders = () => async (dispatch, getstate) => {
    try {
        const token = localStorage.getItem("token")
        dispatch({
            type: "allorders",
            paylode: { data: [], loading: true, error: "" },
        });
        const { data } = await axios.get("http://kzico.runflare.run/order/", {
            headers: {
                authorization:
                    `Bearer ${token}`,
            },
        })
        console.log(data);
        // localStorage.setItem("orders", JSON.stringify(data))
        const help = JSON.parse(JSON.stringify(data))
        dispatch({
            type: "allorders",
            paylode: { data: help, loading: false, error: "" },
        });
    } catch (error) {
        dispatch({
            type: "allorders",
            paylode: { data: [], loading: false, error: error.message },
        });
        console.log(error);
    }
};
export const oneorder = (id) => async (dispatch, getstate) => {
    try {
        const token = localStorage.getItem("token")
        dispatch({
            type: "oneorder",
            paylode: { data: [], loading: true, error: "" },
        });
        const { data } = await axios.get(`http://kzico.runflare.run/order/${id}`, {
            headers: {
                authorization:
                    `Bearer ${token}`,
            },
        })
        const help = JSON.parse(JSON.stringify(data))
        dispatch({
            type: "oneorder",
            paylode: { data: help, loading: false, error: "" },
        });
    } catch (error) {
        dispatch({
            type: "oneorder",
            paylode: { data: [], loading: false, error: error.message },
        });
        console.log(error);
    }
};

export const getoneproduct = (itemId) => async (dispatch, getstate) => {
    try {
        dispatch({
            type: "getoneproduct",
            paylode: { data: [], loading: true, error: "" },
        });
        const { data } = await axios.get(`http://kzico.runflare.run/product/${itemId}`);
        const help = JSON.parse(JSON.stringify(data))
        console.log("get1pro", help);
        dispatch({
            type: "getoneproduct",
            paylode: { data: [help], loading: false, error: "" },
        });
        // console.log(getstate().getcart.data);
    } catch (error) {
        dispatch({
            type: "getoneproduct",
            paylode: { data: [], loading: false, error: error.message },
        });
        console.log(error);
    }
};
export const singup = (user, mail, pass, tel) => async (dispatch, getstate) => {
    console.log("aa");
    try {
        console.log("b");
        dispatch({ type: "singup", paylode: { dataa: [], loading: true, error: "" } })
        const { data } = await axios.post(
            "http://kzico.runflare.run/user/signup",
            {
                username: user,
                email: mail,
                password: `#${pass}`,
                mobile: tel,
            }
        );
        localStorage.setItem("tel", JSON.stringify(tel))
        console.log("c");
        dispatch({ type: "singup", paylode: { dataa: [...data], loading: false, error: "" } })
        // console.log()
        console.log(data);
    } catch (error) {
        dispatch({ type: "singup", paylode: { dataa: [], loading: false, error: error.response } })
        console.log(error.response);
    }
}
export const login = (email, pass) => async (dispatch, getstate) => {
    try {
        dispatch({ type: "login", paylode: { data: [], loading: true, error: "" } })
        const { data } = await axios.post(
            "http://kzico.runflare.run/user/login",
            {
                email: email,
                password: `#${pass}`,
            }
        )
        const help = JSON.parse(JSON.stringify(data))
        localStorage.setItem("token", help.user.token)
        console.log(help.user.token);
        dispatch({ type: "login", paylode: { data: [help], loading: false, error: "" } })
        console.log("help", help);
    } catch (error) {
        console.log(error.response);
        dispatch({ type: "login", paylode: { data: [], loading: false, error: error.response } })
    }
}
export const getprofile = () => async (dispatch, getstate) => {
    try {
        const token = localStorage.getItem("token")
        dispatch({ type: "getprofile", paylode: { data: [], loading: true, error: "" } })
        const { data } = await axios.get(
            "http://kzico.runflare.run/user/profile",
            {
                headers: {
                    authorization:
                        `Bearer ${token}`,
                },
            }
        )
        console.log("hi");
        const help = JSON.parse(JSON.stringify(data))
        dispatch({ type: "getprofile", paylode: { data: [help], loading: false, error: "" } })
    } catch (error) {
        dispatch({ type: "getprofile", paylode: { data: [], loading: false, error: error.message } })
        console.log(error);
    }


}
export const changeprofile = (first, last, gender, age, city) => async (dispatch, getstate) => {
    try {
        const token = localStorage.getItem("token")
        dispatch({ type: "changeprofile", paylode: { data: [], loading: true, error: "" } })
        const { data } = await axios.put(
            "http://kzico.runflare.run/user/change-profile",
            {
                firstname: `${first}`,
                lastname: `${last}`,
                gender: `${gender}`,
                age: `${age}`,
                city: `${city}`,
            },
            {
                headers: {
                    authorization:
                        `Bearer ${token} `,
                },
            }
        )
        console.log("hi");
        const help = JSON.parse(JSON.stringify(data))
        dispatch({ type: "changeprofile", paylode: { data: [help], loading: false, error: "" } })
    } catch (error) {
        dispatch({ type: "changeprofile", paylode: { data: [], loading: false, error: error.message } })
        console.log("error", error);
    }


}
export const flag = (flagg) => (dispatch, getstate) => {
    dispatch({ type: "flag", paylode: flagg })
    console.log(true);
}

export const cart = (product) => (dispatch, getstate) => {
    dispatch({ type: "cart", paylode: { data: [...getstate().cart.data, product[0]], error: "" } })
    localStorage.setItem("cart", JSON.stringify(getstate().cart.data))
    console.log("getstate().cart.data", getstate())
}
export const number = (x) => (dispatch, getstate) => {
    dispatch({ type: "number", paylode: getstate().number + x })
    console.log(getstate().number);
    localStorage.setItem("num", JSON.stringify(getstate().number))
    console.log(getstate().number);
}
export const search = (x) => (dispatch, getstate) => {
    dispatch({ type: "search", paylode: { text: `${x}` } })

}
export const submit = (ad, ci, pos, pho, price, qty, token) => async (dispatch, getstate) => {
    try {
        dispatch({ type: "submit", paylode: { data: [], loading: true, error: "" } })
        const { data } = await axios.post(
            "http://kzico.runflare.run/order/submit",
            {
                orderItems: qty,
                shippingAddress: {
                    address: ad,
                    city: ci,
                    postalCode: pos,
                    phone: pho,
                },
                paymentMethod: "cash",
                shippingPrice: "5",
                totalPrice: price,
            },
            {
                headers: {
                    authorization:
                        `Bearer ${token}`,
                },
            }
        )
        console.log(data);
        const help = JSON.parse(JSON.stringify(data))
        dispatch({ type: "submit", paylode: { data: [help], loading: false, error: "" } })
        localStorage.setItem("check", JSON.stringify(help))
    } catch (error) {
        dispatch({ type: "submit", paylode: { data: [], loading: false, error: error.response } })
        console.log(error);

    }
}

