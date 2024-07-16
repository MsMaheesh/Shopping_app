import React,{useState} from 'react'
import Kidsdata from '../components/data/kidsdata'
import './kids.css'
import { Link } from 'react-router-dom'

function Kids() {
  const [selectedProdect,setselectedProdect]=useState([])
  const [state, setstate]=useState(['Louis Philippe','Allen Solly','Nike','H&M'])
  const [kidsmenuData,setkidsmenuData]=useState(true)

  const checkHandler=(comp)=>{
    if(selectedProdect.includes(comp)){
      setselectedProdect(selectedProdect.filter(ite => ite !== comp))
    }else{
      setselectedProdect([...selectedProdect,comp])
    }
  }
  const filterdata=selectedProdect.length==0?
        Kidsdata: Kidsdata.filter((onr)=>selectedProdect.includes(onr.companey))


  return (
    <div className='kidssection'>
      <div className='kidsfilter'>
        <p onClick ={()=>setkidsmenuData(!kidsmenuData)} className='kidsfilter-title'>sort by</p>
        
        {state.map((obj)=>{
          return(
            <div>
              <label className={kidsmenuData?'kidsmenu':null}>
                 <input type='checkbox'
                 checked={selectedProdect.includes(obj)}
                 onChange={()=>checkHandler(obj)}
                 />{obj}
              </label>
            </div>
          )
        })}
      </div>

      <div className='kidssection-items' >
        {filterdata.map((item,index)=>{
          return(
            <div key={index} className='kidssection-item'>
              <Link to={`/kids/${item.id}`}><img className='kidsimg' src={item.img}></img></Link>
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

export default Kids