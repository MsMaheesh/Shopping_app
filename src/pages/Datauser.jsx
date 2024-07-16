import React from 'react'
import './datauser.css'

function Datauser({data}) {
  if(data.name == null   ){
    return(
      <h1 style={{textAlign:'center'}}> user not logined</h1>
    )
  }else{
  return (
    <div className='data_section'>
      <h1> User details</h1>
      <hr/>
      <div className='data_container'> 
      <h1>name:{data.name}</h1>
      <h1>email:{data.email}</h1>
      <h1>password:{data.pass}</h1>
      </div>
      </div>
      
  )
  }
}

export default Datauser