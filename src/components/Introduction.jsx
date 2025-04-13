import React from 'react'

const Introduction = () => {
    return (
        <>
            <section className='main-section mt-10 mx-auto'>
                <div className='text-center'>
                    <h2 className='lg:text-[60px] text-4xl font-bold'>Who We Are</h2>
                    <p className='text-[18px] tx-d-gray lg:w-[70%] mx-auto mt-2'>We are a passionate web development team crafting modern websites that help businesses stand out online. From clean code to smooth design, we focus on delivering quality and performance.</p>
                </div>
                <div className='grid lg:grid-cols-2 gap-5 mt-5 items-center'>
                    <div>
                        <div className='border-2 border-[#2E5077] py-3 px-5 rounded-xl'>
                            <p className='flex gap-2 items-start'><span><i class="fa-solid fa-circle-dot"></i></span><span><b className='text-lg'>Tailored Web Solutions</b> <br /> Custom-built websites designed to fit your business goals perfectly.</span></p>
                        </div>
                        <div className='border-2 border-[#2E5077] py-3 px-5 rounded-xl my-5'>
                            <p className='flex gap-2 items-start'><span><i class="fa-solid fa-circle-dot"></i></span><span><b className='text-lg'>Expert WordPress Sites</b> <br /> From blogs to business sites, we build powerful WordPress platforms.</span></p>
                        </div>
                        <div className='border-2 border-[#2E5077] py-3 px-5 rounded-xl'>
                            <p className='flex gap-2 items-start'><span><i class="fa-solid fa-circle-dot"></i></span><span><b className='text-lg'>Modern React JS Web Apps</b> <br /> High-speed, scalable, and interactive apps using the latest React stack.</span></p>
                        </div>
                        <div className='border-2 border-[#2E5077] py-3 px-5 rounded-xl my-5'>
                            <p className='flex gap-2 items-start'><span><i class="fa-solid fa-circle-dot"></i></span><span><b className='text-lg'>Clean & Responsive Design</b> <br /> Look great on every device with mobile-first, responsive design.</span></p>
                        </div>
                        <div className='border-2 border-[#2E5077] py-3 px-5 rounded-xl my-5'>
                            <p className='flex gap-2 items-start'><span><i class="fa-solid fa-circle-dot"></i></span><span><b className='text-lg'>Ongoing Support</b> <br /> We don’t disappear after launch—get regular updates and support. </span></p>
                        </div>
                        <div className='border-2 border-[#2E5077] py-3 px-5 rounded-xl'>
                            <p className='flex gap-2 items-start'><span><i class="fa-solid fa-circle-dot"></i></span><span><b className='text-lg'>Clean & Responsive Design</b> <br />Websites that look great and work smoothly on all screen sizes.</span></p>
                        </div>
                    </div>
                    <div>
                        <img src="/images/intro-home.webp" alt="" height="580" width="100%" className='rounded-xl object-cover lg:h-[580px] h-[250px] w-[100%]' />
                    </div>
                </div>
            </section>
        </>
    )
}

export default Introduction
