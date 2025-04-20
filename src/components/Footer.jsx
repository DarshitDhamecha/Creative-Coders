import React from 'react'

const Footer = () => {
    return (
        <footer className='py-2 bg-[#2E5077]'>
            <div className='main-section p-2 mx-auto flex items-center justify-between'>
                <p className='tx-white text-lg font-bold'>© 2025 creativecodrs. All Rights Reserved</p>
                <div className='flex tx-white gap-3.5 text-2xl'>
                    <i class="fa-brands fa-instagram"></i>
                    <i class="fa-brands fa-facebook"></i>
                    <i class="fa-brands fa-linkedin"></i>
                </div>
            </div>
        </footer>
    )
}

export default Footer
