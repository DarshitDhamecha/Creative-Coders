import React from 'react'

const Introduction = () => {
    return (
        <>
            <section className='main-section mt-10 mx-auto'>
                <div className='text-center'>
                    <h2 className='lg:text-[60px] text-4xl font-bold'>Introduction</h2>
                    <p className='text-[18px] tx-d-gray lg:w-[70%] mx-auto mt-2'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione consectetur atque corrupti eveniet facere expedita animi minus suscipit ea, natus, laborum tenetur dolorum numquam pariatur fugit voluptates labore sed ex.</p>
                </div>
                <div className='grid lg:grid-cols-2 gap-5 mt-5 items-center'>
                    <div>
                        <div className='border-2 border-[#2E5077] py-3 px-5 rounded-xl'>
                            <p className='flex gap-2 items-start'><span><i class="fa-solid fa-circle-dot"></i></span>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor molestias animi sunt nostrum assumenda, eius blanditiis numquam, eveniet libero maiores non ex? Cumque minus ipsam exercitationem quam quos, nam magni.</p>
                        </div>
                        <div className='border-2 border-[#2E5077] py-3 px-5 rounded-xl my-5'>
                            <p className='flex gap-2 items-start'><span><i class="fa-solid fa-circle-dot"></i></span>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor molestias animi sunt nostrum assumenda, eius blanditiis numquam, eveniet libero maiores non ex? Cumque minus ipsam exercitationem quam quos, nam magni.</p>
                        </div>
                        <div className='border-2 border-[#2E5077] py-3 px-5 rounded-xl'>
                            <p className='flex gap-2 items-start'><span><i class="fa-solid fa-circle-dot"></i></span>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor molestias animi sunt nostrum assumenda, eius blanditiis numquam, eveniet libero maiores non ex? Cumque minus ipsam exercitationem quam quos, nam magni.</p>
                        </div>
                        <div className='border-2 border-[#2E5077] py-3 px-5 rounded-xl my-5'>
                            <p className='flex gap-2 items-start'><span><i class="fa-solid fa-circle-dot"></i></span>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor molestias animi sunt nostrum assumenda, eius blanditiis numquam, eveniet libero maiores non ex? Cumque minus ipsam exercitationem quam quos, nam magni.</p>
                        </div>
                        <div className='border-2 border-[#2E5077] py-3 px-5 rounded-xl'>
                            <p className='flex gap-2 items-start'><span><i class="fa-solid fa-circle-dot"></i></span>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor molestias animi sunt nostrum assumenda, eius blanditiis numquam, eveniet libero maiores non ex? Cumque minus ipsam exercitationem quam quos, nam magni.</p>
                        </div>
                    </div>
                    <div>
                        <img src="/images/intro-home.jpg" alt="" className='rounded-xl object-cover lg:h-[580px] h-[250px] w-[100%]'/>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Introduction
