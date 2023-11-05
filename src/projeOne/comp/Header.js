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

      <button className='DarkLigth' onClick={props.HandleClick}>{props.on ?'LigthMode ':'DarkMode' }</button>
            </div>


    </div>
    </div>
  )
}

export default Header