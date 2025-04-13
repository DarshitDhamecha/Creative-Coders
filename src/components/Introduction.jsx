import React from 'react'

const Introduction = () => {

    const info = [
        {
            id: 1,
            title: "Tailored Web Solutions",
            desription: "Custom-built websites designed to fit your business goals perfectly.",
        },
        {
            id: 2,
            title: "Expert WordPress Sites",
            desription: "From blogs to business sites, we build powerful WordPress platforms.",
        },
        {
            id: 3,
            title: "Modern React JS Web Apps",
            desription: "High-speed, scalable, and interactive apps using the latest React stack.",
        },
        {
            id: 4,
            title: "Clean & Responsive Design",
            desription: "Look great on every device with mobile-first, responsive design.",
        },
        {
            id: 5,
            title: "Ongoing Support",
            desription: "We don’t disappear after launch—get regular updates and support.",
        },
        {
            id: 6,
            title: "Ongoing Support",
            desription: "Websites that look great and work smoothly on all screen sizes.",
        },
    ]

    return (
        <>
            <section className='main-section mt-10 mx-auto'>
                <div className='text-center'>
                    <h2 className='lg:text-[60px] text-4xl font-bold'>Who We Are</h2>
                    <p className='text-[18px] tx-d-gray lg:w-[70%] mx-auto mt-2'>We are a passionate web development team crafting modern websites that help businesses stand out online. From clean code to smooth design, we focus on delivering quality and performance.</p>
                </div>
                <div className='grid lg:grid-cols-2 gap-5 mt-5 items-center'>
                    <div>
                        {
                        info.map((items) => (
                            <div className='border-2 border-[#2E5077] py-3 px-5 rounded-xl my-5 shadow-xl inset-ring-blue-500/50'>
                                <p className='flex gap-2 items-start'><span><i class="fa-solid fa-circle-dot"></i></span><span><b className='text-lg'>{items.title}</b> <br />{items.desription}</span></p>
                            </div>
                        ))
                    }
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
