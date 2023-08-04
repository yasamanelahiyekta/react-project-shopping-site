import axios from 'axios'
import React from 'react'

const Test = () => {
    async function oneorder() {
        try {
            const token = localStorage.getItem("token")

            const { data } = await axios.get(`http://kzico.runflare.run/order/6478a1fb735379f41daf967e`, {
                headers: {
                    authorization:
                        `Bearer ${token}`,
                },
            })
            localStorage.setItem("oneorder", JSON.stringify(data))
            const help = JSON.parse(JSON.stringify(data))
            console.log(help);

        } catch (error) {

            console.log(error);
        }
    };
    return (
        <div><button onClick={ oneorder } >press</button></div>
    )
}

export default Test