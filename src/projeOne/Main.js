import React, { useState } from 'react'
import Header from './comp/Header'
import Body from './comp/Body'
import './app.css'



const Main = () => {
  const[ on ,SetON] =useState(false)
   
  const HandleClick = ()=>{
    SetON(pre=>!pre)

  }
  
    return (
    <div>
<Header 
on ={on}
HandleClick = {()=>HandleClick()}
 />
<Body
on ={on}
HandleClick = {()=>HandleClick()}

/>



    </div>
  )
}

export default Main