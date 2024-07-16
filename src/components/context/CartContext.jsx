import { createContext, useContext, useState } from "react";


const Cartcontext = createContext()

export const CartProvider = ({children})=>{
    const [cartItems,setcartItems]=useState([])
  
    const addTocart=(item)=>{
         setcartItems([...cartItems,item])
    }

    const removeFromcart = (id)=>{
        setcartItems(cartItems.filter((obj)=>obj.id !== id))
    }


    return(
        <>
        <Cartcontext.Provider value={{cartItems,addTocart,removeFromcart}}>
            {children}
        </Cartcontext.Provider>
       
        </>
    )
}
export const useCart =()=>{
    return useContext(Cartcontext)
}