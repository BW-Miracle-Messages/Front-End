import React from 'react';
import {NavLink,Link} from 'react-router-dom';



const HeaderNav = () => {
    return (
        <nav className="nav-wrapper blue darken-2">
            <div className='container'>
                <Link to='/'>Home</Link>
                <SignedInLink />
                <SignedOutLink />
            </div>
        </nav>
    )
}

export default HeaderNav;

const SignedInLink = () =>{
    return (
        <ul className ="right">
            <li><NavLink to='/'>Cases</NavLink></li>
            <li><NavLink to='/'>Log Out</NavLink></li>
            <li><NavLink to='/' class='btn btn-floating pink lighten-1'>BX</NavLink></li>
        </ul>
    )
}


const SignedOutLink = () =>{
    return (
        <ul className ="right">
            <li><NavLink to='/login'>Log In</NavLink></li>
            <li><NavLink to='/signup'>Sign Up</NavLink></li>
        </ul>
    )
}