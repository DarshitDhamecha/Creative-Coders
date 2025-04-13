import React, { useState } from 'react'

const Header = () => {

    const [isMobileMenu, setIsMobileMenu] = useState(false);

    const toggleMenu = () =>{
        setIsMobileMenu(!isMobileMenu);
    }

    return (
        <>
            <header className='w-[100%] pt-3'>
                <div className='bg-d-blue flex items-center justify-between main-section mx-auto ps-3 pe-8 rounded-2xl'>
                    <div>
                        <a href="/">
                            <img src="/images/logo.webp" alt="" height="90" width="90" className='h-[90px]' />
                        </a>
                    </div>
                    <nav className='md:block hidden'>
                        <ul className='flex gap-8 text-white text-xl items-center'>
                            <li><a href="#technology">Technology</a></li>
                            <li><a href="#projects">Projects</a></li>
                            <li><a href="#contact">Contact Us</a></li>
                        </ul>
                    </nav>
                    <div className='text-white gap-5 md:flex hidden text-xl items-center'>
                        <i class="fa-brands fa-instagram"></i>
                        <i class="fa-brands fa-facebook"></i>
                        <i class="fa-brands fa-linkedin"></i>
                    </div>
                    <div className='md:hidden block' onClick={toggleMenu}>
                        <i class="fa-solid fa-bars tx-white text-3xl"></i>
                    </div>
                </div>
                {/* mobile menu */}
                <div className={`md:hidden block mobile-menu border-1 border-black w-[95%] bg-l-gray tx-d-blue text-xl rounded-xl mx-auto py-5 px-3 mt-3 transition-all duration-300 ${isMobileMenu ? 'active' : 'hidden'}`}>
                    <nav>
                        <ul>
                            <li><a href="#technology">Technology</a></li>
                            <hr className='my-2' />
                            <li><a href="#projects">Projects</a></li>
                            <hr className='my-2' />
                            <li><a href="#contact">Contact Us</a></li>
                        </ul>
                    </nav>
                    <hr className='my-2' />
                    <div className='gap-5 flex text-2xl items-center mt-3'>
                        <i class="fa-brands fa-instagram"></i>
                        <i class="fa-brands fa-facebook"></i>
                        <i class="fa-brands fa-linkedin"></i>
                    </div>
                </div>
            </header>

        </>
    )
}

export default Header
