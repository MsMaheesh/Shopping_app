import React, { useState } from 'react'
import Womendata from '../components/data/womendata'
import './women.css'
import { Link } from 'react-router-dom'

  
function Women() {
  const [selectedProdect,setselectedProdect]=useState([])
  const [state, setstate]=useState(['Park Avenue','U.S. Polo Assn','Zara',])
  const [womenuData,setwomenuData]=useState(true)

  const checkHandler=(comp)=>{
    if(selectedProdect.includes(comp)){
      setselectedProdect(selectedProdect.filter(ite => ite !== comp))
    }else{
      setselectedProdect([...selectedProdect,comp])
    }
  }
  const filterdata=selectedProdect.length===0?
        Womendata: Womendata.filter((onr)=>selectedProdect.includes(onr.companey))

  return (
    <div className='womensection'>
      <div className='womenfilter'>
        <p onClick ={()=>setwomenuData(!womenuData)} className='womenfilter-title'>sort by</p>
        
        {state.map((obj)=>{
          return(
            <div>
              <label className={womenuData?'womenu':null}>
                 <input type='checkbox'
                 checked={selectedProdect.includes(obj)}
                 onChange={()=>checkHandler(obj)}
                 />{obj}
              </label>
            </div>
          )
        })}
      </div>


      <div className='womensection-items' >
        {filterdata.map((item,index)=>{
          return(
            <div key={index} className='womensection-item'>
             <Link to={`/women/${item.id}`}> <img className='womenimg' src={item.img}></img></Link>
              <h3>{item.companey}</h3>
              <p>{item.text}</p>
              <h5>New Price ${item.new_price}</h5>
              <h6>Old Price ${item.old_price}</h6>
              </div>
          )
        })}

      </div>
    </div>
  )
}

export default Women