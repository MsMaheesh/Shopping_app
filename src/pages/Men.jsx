import React, { useState } from 'react'
import Mendata from'../components/data/mendata'
import './men.css'
import { Link } from 'react-router-dom'

function Men() {
  const [selectedProdect,setselectedProdect]=useState([])
  const [state, setstate]=useState(['Adidas','Allen Solly','H&M',"Levi's",])
  const [menuData,setmenuData]=useState(true)

  const checkHandler=(comp)=>{
    if(selectedProdect.includes(comp)){
      setselectedProdect(selectedProdect.filter(ite => ite !== comp))
    }else{
      setselectedProdect([...selectedProdect,comp])
    }
  }
  const filterdata=selectedProdect.length==0?
        Mendata: Mendata.filter((onr)=>selectedProdect.includes(onr.companey))
  
  return (
    <div className='mensection'>
      <div className='menfilter'>
        <p onClick ={()=>setmenuData(!menuData)}className='menfilter-title'>sort by</p>
        {state.map((obj)=>{
          return(
            <div>
              <label className={menuData?'menu':null} >
                 <input type='checkbox'
                 checked={selectedProdect.includes(obj)}
                 onChange={()=>checkHandler(obj)}
                 />{obj}
              </label>
            </div>
          )
        })}

       
      </div>
      <div className='mensection-items' >
        {filterdata.map((item,index)=>{
          return(
            <div key={index} className='mensection-item'>
              <Link to={`/men/${item.id}`}><img className='menimg' src={item.img}></img></Link>
              <h3>{item.companey}</h3>
              <p>{item.text}</p>
              <h5>New price ${item.new_price}</h5>
              <h6>Old Price ${item.old_price}</h6>
              </div>
          )
        })}
      </div>
    </div>
  )
}

export default Men