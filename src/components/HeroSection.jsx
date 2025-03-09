import React from 'react'

const HeroSection = () => {
    return (
        <section className='bg-l-gray py-5 px-12 mt-5 mx-auto rounded-xl main-section'>
            <div className='flex w-[100%] items-center justify-center'>
                <div className='flex-1'>
                    <h1 className='text-6xl font-bold leading-18'>Exquisite design <br /> combined with <br /> functionalities</h1>
                    <p className='text-[18px] tx-d-gray my-8'>Lorem Ipsum is simply dummy text of the printing and <br /> typesetting industry. Lorem Ipsum has been the industry's <br /> standard dummy text ever since the 1500s, </p>
                    <button className='bg-d-blue text-white px-5 py-3 rounded-md cursor-pointer'>Get In Touch</button>
                </div>
                <div className='flex-1'>
                    <div className='flex gap-8'>
                        <div className='hero-first-bg h-[520px] w-[50%] rounded-xl p-3 tx-white'>
                            <div className='bg-l-blue px-5 py-3 w-fit rounded-md'>
                                <h5 className='font-medium'>Wordpress</h5>
                            </div>
                        </div>
                        <div className='w-[50%] flex-col gap-5 flex'>
                            <div className='hero-second-bg h-[250px] rounded-xl p-3 tx-white'>
                                <div className='bg-l-blue px-5 py-3 w-fit rounded-md'>
                                    <h5 className='font-medium'>React JS</h5>
                                </div>
                            </div>
                            <div className='hero-third-bg h-[250px] rounded-xl p-3 tx-white'>
                                <div className='bg-l-blue px-5 py-3 w-fit rounded-md'>
                                    <h5 className='font-medium'>Html Template</h5>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default HeroSection
