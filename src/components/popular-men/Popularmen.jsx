import React from 'react'
import Mendata from '../data/mendata'
import './popularmen.css'
function Popularmen() {
  const first_five=Mendata.slice(0,5)
  console.log(first_five)
  return (
   
    <div className='men-container'>
         <h2>POPULAR IN MEN</h2>
         <hr/> 
         <div className='menitems'>
         {
          first_five.map((item,index)=>{
              return(
                <div key={index} className='menitem'>
                  <img className='menimg' src={item.img}></img>
                  <p> {item.text}</p>
                  <h5>${item.new_price}</h5>
                  <h6>${item.old_price}</h6>
                </div>
              )
          })
         }
         </div>
    </div>
  )
}

export default Popularmen