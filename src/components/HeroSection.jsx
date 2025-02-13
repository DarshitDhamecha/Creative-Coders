import React from 'react'

const HeroSection = () => {
    return (
        <section className='bg-[#EEF4F5] py-5 px-12 mt-5 mx-auto rounded-xl max-w-[110rem] w-[95%]'>
            <div className='flex w-[100%] items-center justify-center'>
                <div className='flex-1'>
                    <h1 className='text-6xl font-bold leading-18'>Exquisite design <br /> combined with <br /> functionalities</h1>
                    <p className='text-[18px] text-[#5c5b5b] my-8'>Lorem Ipsum is simply dummy text of the printing and <br /> typesetting industry. Lorem Ipsum has been the industry's <br /> standard dummy text ever since the 1500s, </p>
                    <button className='bg-[#2E5077] text-[#fff] px-5 py-3 rounded-md cursor-pointer'>Get In Touch</button>
                </div>
                <div className='flex-1'>
                    <div className='flex gap-8'>
                        <div className='hero-first-bg h-[520px] w-[50%] rounded-xl p-3 text-white'>
                            <div className='bg-[#2e50777e] px-5 py-3 w-fit rounded-md'>
                                <h5 className='font-medium'>Wordpress</h5>
                                <p>$70</p>
                            </div>
                        </div>
                        <div className='w-[50%] flex-col gap-5 flex'>
                            <div className='hero-second-bg h-[250px] rounded-xl p-3 text-white'>
                                <div className='bg-[#2e50777e] px-5 py-3 w-fit rounded-md'>
                                    <h5 className='font-medium'>React JS</h5>
                                    <p>$115</p>
                                </div>
                            </div>
                            <div className='hero-third-bg h-[250px] rounded-xl p-3 text-white'>
                                <div className='bg-[#2e50777e] px-5 py-3 w-fit rounded-md'>
                                    <h5 className='font-medium'>Html Template</h5>
                                    <p>$50</p>
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
