import React from 'react'
import close from '../images/icon-close.svg';

const Sidebar = () => {
  return (
    <section className='sidebar'>
        <label htmlFor='checkbox'><img src={close} alt="close" className='close-icon'/></label>
        <ul>
            <li>Collections</li>
            <li>Men</li>
            <li>Women</li>
            <li>About</li>
            <li>Contact</li>
        </ul>
    </section>
  )
}

export default Sidebar