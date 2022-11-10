import React from 'react'
import logo from  '../images/logo.svg'
import logodark from  '../images/logodark.svg'
import cart from '../images/icon-cart.svg'
import cartdark from '../images/icon-cartdark.svg'
import menu from '../images/icon-menu.svg'
import menudark from '../images/icon-menudark.svg'
import LightModeIcon from '@mui/icons-material/LightMode';
import NightlightIcon from '@mui/icons-material/Nightlight';
import avatar from '../images/image-avatar.png'
import Sidebar from "../components/Sidebar";



const Header = ({toggleTheme,theme,setShow, show, quan, inCart}) => {

  return (
    <header>
        <input type="checkbox" id='checkbox' />
        <label htmlFor='checkbox'><img className='menu' src={theme==='light-theme'?(menu) : (menudark)} alt="Menu"/></label>
        <img className='logo' src={theme==='light-theme'?(logo) : (logodark)} alt="Sneakers"/>
        <div className='head_list'>
          <div>
            <ul className='header_list'>
              <li className='list_items'>Collections</li>
              <li className='list_items'>Men</li>
              <li className='list_items'>Women</li>
              <li className='list_items'>About</li>
              <li className='list_items'>Contact</li>
            </ul> 
          </div>
          <div className='header_right'>
            <div className='cart-container'>
            {theme==='light-theme'?(<img className='cart' src={cart} alt="cart" onClick={ !show ? (()=>setShow(true)) : (()=>setShow(false)) } />) : (<img className='cart' src={cartdark} alt="cart" onClick={ !show ? (()=>setShow(true)) : (()=>setShow(false)) }/>)}
            {quan !== 0 && inCart === true ? (<sup className='cartnum'>{quan}</sup>) : (null)}
            </div>
            <img className='avatar' src={avatar} alt="avatar" onClick={ !show ? (()=>setShow(true)) : (()=>setShow(false)) }/>
            <div className="theme" onClick={toggleTheme}>
              {theme==='light-theme'?(<NightlightIcon className='theme_icon'/>) : (<LightModeIcon className='theme_icon'/>)}
              <p>{theme==='light-theme'?('Dark Mode') : ('Light Mode')}</p>
            </div>
          </div>
        </div>
        <Sidebar/>
    </header>
  )
}

export default Header