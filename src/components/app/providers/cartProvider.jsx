import axios from "axios";
import { useState } from "react";
import { useContext } from "react";
import { useEffect } from "react";
import { createContext } from "react";
import { useAuth } from "./authProvider";

const CartContext = createContext()

const CartProvider = ({ children }) => {

    const [cartItems, setCartItems] = useState([])
    const { loginData } = useAuth()
    console.log(loginData);

    useEffect(() => {
        const getData = async () => {
            if (loginData && loginData.access_token) {

            const options = {
                headers: {
                    Authorization: `Bearer ${loginData.access_token}`
                }
            }
            console.log(options);

            const endpoint = `http://localhost:4000/cart`

            try {
                    const result = await axios.get(endpoint, options)
                    setCartItems(result.data)
                
            } catch (err) {
                console.error(`fejl i kald af cart list: ${err}`);
            }
        }
        }
        getData()
    }, [children, loginData])

    return (
        <CartContext.Provider value={{ cartItems, setCartItems }}>
            {children}
        </CartContext.Provider>
    )
}

const useCartItems = () => useContext(CartContext)

export { CartProvider, useCartItems }