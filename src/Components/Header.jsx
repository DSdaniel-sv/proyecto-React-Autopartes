import React, { useState } from 'react'
import { Link, NavLink } from 'react-router-dom'
import '../Components/Header.css'
import styled from 'styled-components';
import Ham from './Ham';
import HamI from './HamI';
// import HamI from '../Components/HamI.css'
import imgLogo from '../assets/img/logo/logo.png'
import { useTranslation} from "react-i18next"


const Header = () => {
    const [t, i18n] = useTranslation("global");

    const [clicked, setClicked] = useState(false);

    const handleClick = () =>{
        setClicked(!clicked);
    }

    const [clickedI, setClickedI] = useState(false);

    const handleClickI = () =>{
        setClickedI(!clickedI);
    }

    return (
        <header className='header'>
            <div className='nav__superior'>
                <nav className='nav__1'>
                    <div className='box__logo'>
                        <Link to='/'><img src={imgLogo} alt="logo" /></Link>
                    </div>
                    <div className='box__icons-nav1'>
                        <Link className='link-ico'><i className="fa-solid fa-circle-user"></i>{t('Sign-in')}</Link>
                        <Link className='link-ico'><i className="fa-solid fa-right-to-bracket"></i>{t('Log-in')}</Link>
                        <Link className='link-ico'><i class="fa-solid fa-cart-shopping"></i></Link>
                        <Link className='link-ico'><i class="fa-solid fa-heart"></i></Link>
                    </div>
                </nav>
            </div>

            <div className='nav__inferior'>
                <nav className='nav__2'>
                    <div className={`links ${clicked ? 'active' : ''}`} id='menu-links'>
                        <li><NavLink className='nav-link link-1' to='/' activeclassname='active'><span>Inicio</span> </NavLink></li>
                        <li><NavLink className='nav-link link-3' to='/contacto' activeclassname='active'><span>Ofertas</span></NavLink></li>
                        <li><NavLink className='nav-link link-4' to='/ofertas' activeclassname='active'><span>Contacto</span></NavLink></li>
                        <form action="" className='frm__search1'>
                            <input type="search" placeholder='¿Que desea buscar?' className='search1'/>
                        </form>
                    </div>

                    <form action="" className='frm__search2'>
                        <input type="search2" placeholder='¿Que desea buscar?' className='search2'/>
                    </form>

                    <div className='ham-burger'>
                        <Ham clicked={clicked} handleClick={handleClick}/>
                    </div>

                    <div className={`linksI ${clickedI ? 'active' : ''}`} id='menu-linksI'>
                        <Link className='link-ico'><i className="fa-solid fa-circle-user"></i>Sign in</Link>
                        <Link className='link-ico'><i className="fa-solid fa-right-to-bracket"></i>Log in</Link>
                        <Link className='link-ico'><i class="fa-solid fa-cart-shopping"></i></Link>
                        <Link className='link-ico'><i class="fa-solid fa-heart"></i></Link>
                    </div>

                    <div className='ham-burgerI'>
                        <HamI clickedI={clickedI} handleClickI={handleClickI}/>
                    </div>
                </nav>
            </div>
        </header>
    )
}

export default Header