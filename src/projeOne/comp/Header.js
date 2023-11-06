import React from 'react'

const Header = (props) => {


  return (
    <div className={props.on?'dark header-dark':'ligth header-ligth'}>
    <div className='main-header '>

            <div className='div-header-one '>
    <img className='logo-header' src='./logo512.png'/>
    <h2 className='h2-header'>ReactFacts</h2>
            </div>
            
            <div>
      <h3 className='header-h3'> React Course-Project 1</h3>



<div className='dügme'>


<label className={ props.on ? 'label-ligth' :'label-ligth label-ligth-gray'}>Ligth</label>
<div className='div-DarkLigth'>
      <button className= {props.on ?'DarkLigth' :'LigthDark'}
      onClick={props.HandleClick}></button>

</div>
<label className={ props.on ? 'label-dark label-ligth-gray' :'label-dark'}>Dark</label>
</div>
            </div>


    </div>
    </div>
  )
}

export default Header