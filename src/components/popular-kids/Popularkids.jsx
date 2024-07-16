import React from 'react'
import Kidsdata  from '../data/kidsdata'
import './popularkids.css'
function Popularkids() {
    const firsrtfiveimg=Kidsdata.slice(0,5)
  return (
    <div className='kids-container'>
        <h2>POPULAR IN KIDS</h2> 
        <hr/>
        <div className='kidsitems'>
            {firsrtfiveimg.map((item,index)=>{
                return(
                    <div className='kidsitem'>
                        <img className='kidsimg' src={item.img}></img>
                        <p>{item.text}</p>
                        <h5>${item.new_price}</h5>
                        <h6>${item.old_price}</h6>
                    </div>
                )
            })}
        </div>  
    </div>
  )
}

export default Popularkids