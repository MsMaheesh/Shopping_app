import React from 'react'
import { useParams } from 'react-router-dom'
import Kidsdata from '../data/kidsdata'
import './single.css'
import { useCart } from '../context/CartContext'


function Kidssingle() {
  
    const {id} = useParams()
    const {addTocart,cartItems}=useCart()
    const prodect = Kidsdata.find((item)=>item.id == id)
    
  return (
    <div className='ind-page'>
      <div className='ind-page-left'>
         <img src={prodect.img}></img>
      </div>
      <div className='ind-page-right'>
        <ul >
          <li >{prodect.companey}</li>
          <li>{prodect.text}</li>
          <li>Price ${prodect.new_price}</li>
          
        </ul>
        <button onClick={()=>{addTocart(prodect)}}>add to cart</button>
      </div>
       
    </div>
  )
}


export default Kidssingle