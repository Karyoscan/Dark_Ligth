import React from 'react'

const Body = (props) => {
  return (
    <div className={props.on ? 'dark':'ligth'}>
    <div className='div-main'>
<h1>Fun facts about React</h1>
        
<ul>
<li>Lorem ipsum dolor sit amet.</li>
<li>Lorem ipsum dolor sit amet consectetur.</li>
<li>Lorem ipsum dolor sit amet consectetur adipisicing.</li>
<li>Lorem ipsum dolor sit, amet consectetur adipisicing elit.</li>
<li>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem.</li>


</ul>

    </div>
    </div>
  )
}

export default Body