import React from 'react';
import shelfie from '../images/shelfie.png';
import header from './header.css';
export default function Header(props){
        return(

            <div className='header'>
            <img src={shelfie} alt='logo'/>
            SHELFIE           
            </div>
        )

}