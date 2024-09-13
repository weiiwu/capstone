import React from 'react';
import Basket from '../assets/images/Basket.svg'
import Menu from '../assets/images/Menu.svg'
import Logo from '../assets/images/Logo.svg'
import { Link } from 'react-router-dom';

const Navbar = () => {
    return (
        <>
            <nav className="bg-white">
                <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
                    <div className="flex h-20 items-center justify-between">

                        <div>
                            <a
                                href="/"
                            ><img
                                    className="h-10 w-auto"
                                    src={Menu} alt='Menu'
                                /></a>
                        </div>

                        <Link to='/'>
                            <img src={Logo} />
                        </Link>
                        <div >
                            <div className="flex space-x-2">
                                <a
                                    href="/"
                                ><img
                                        className="h-10 w-auto"
                                        src={Basket} alt='Basket'
                                    /></a>
                            </div>
                        </div>
                    </div>
                </div>
            </nav>
        </>

    )
}

export default Navbar