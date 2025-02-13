import React from 'react'

const Header = () => {
    return (
        <header className='w-[100%] pt-3'>
            <div className='bg-[#2E5077] flex items-center justify-between w-[95%] mx-auto max-w-[110rem] ps-3 pe-8 rounded-2xl'>
                <div>
                    <a href="/">
                        <img src="/images/logo.png" alt="" className='h-[90px]' />
                    </a>
                </div>
                <nav>
                    <ul className='flex gap-8 text-white text-xl items-center'>
                        <li><a href="#">Services</a></li>
                        <li><a href="#">About Us</a></li>
                        <li><a href="#">Contact Us</a></li>
                    </ul>
                </nav>
                <div className='text-white gap-5 flex text-xl items-center'>
                    <i class="fa-brands fa-instagram"></i>
                    <i class="fa-brands fa-facebook"></i>
                    <i class="fa-brands fa-linkedin"></i>
                </div>
            </div>
        </header>
    )
}

export default Header
