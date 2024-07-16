import React, { useEffect, useState } from 'react'
import './cartpage.css'
import { useCart } from '../components/context/CartContext'
function Cartpage() {

const {cartItems,addTocart,removeFromcart}=useCart()

 if(cartItems.length == 0){
  return(
    <h1 style={{textAlign:'center'}}>your cart is empty</h1>
  )
 }else{
  return (
    <div>
      
      {cartItems.map((item)=>{
        return(
          <>
          <div className='cart_section'>
            <div className='cart_img'>
                <img src={item.img}></img>
            </div>
            <div className='cart_details'>
              <h3>{item.companey}</h3>
              <h3>price:${item.new_price}</h3>
            </div>
             <button onClick={()=>{removeFromcart(item.id)}}>remove</button>
          </div>
          
          </>
      )
      })}
      
    </div>
    
  )
    }
}

export default Cartpage