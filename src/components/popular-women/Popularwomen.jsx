import React from 'react'
import Womendata from '../data/womendata'
import './popularwomen.css'

function Popularwomen() {
    const firstfiveimg=Womendata.slice(0,5)
  return (
    <div className='women-container'>
        <h2  >POPULAR IN WOMEN</h2>
        <hr />
            <div className='womenitems'>
                {firstfiveimg.map((obj,index)=>{
                    return(
                        <div key={index} className='womenitem'>
                            <img className='womenimg'src={obj.img}/>
                            <p>{obj.text}</p>
                            <h5>${obj.new_price}</h5>
                            <h6>${obj.old_price}</h6>
                        </div>
                    )
                })}

            </div>
        </div>
  )
}

export default Popularwomen