import React from 'react'
import Slider from 'react-slick';

const ProjectsSection = () => {
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 3500,
        arrows: false,
        responsive: [
            {
                breakpoint: 1024, // under 1024px (tablet and below)
                settings: {
                    slidesToShow: 2,
                    autoplay: false,

                }
            },
            {
                breakpoint: 767, // under 768px (mobile)
                settings: {
                    slidesToShow: 1,
                    autoplay: false,
                }
            }
        ]
    };

    const slides = [
        {
            id: 1,
            img: "/images/decorfurniture.webp",
            title: "Decore Furniture",
            content: "Lorem, ipsum dolor sit amet consectetur adipisicing elit Lorem, ipsum dolor sit amet consectetur adipisicing elit",
            btnText: "Learn More",
        },
        {
            id: 2,
            img: "/images/decorfurniture.webp",
            title: "Decore Furniture",
            content: "Lorem, ipsum dolor sit amet consectetur adipisicing elit Lorem, ipsum dolor sit amet consectetur adipisicing elit",
            btnText: "Learn More",
        },
        {
            id: 3,
            img: "/images/decorfurniture.webp",
            title: "Decore Furniture",
            content: "Lorem, ipsum dolor sit amet consectetur adipisicing elit Lorem, ipsum dolor sit amet consectetur adipisicing elit",
            btnText: "Learn More",
        }
    ];
    return (
        <>
            <section className='main-section mx-auto mt-10' id='projects'>
                <h2 className='lg:text-[60px] text-4xl font-bold text-center'>Our Projects</h2>
                <Slider {...settings}>
                    {slides.map((slide) => (
                        <>
                            <div key={slide.id} className='flex items-center justify-center w-[100%] h-[350px]'>
                                <div class="flex bg-[#EEF4F5] relative rounded-xl w-[100%] gap-4 items-center justify-end py-3 mx-[10px] border-1">
                                    <div class="w-[40%] absolute left-0 border-1 rounded-xl">
                                        <img src={slide.img} class="rounded-xl h-[280px] w-[100%] object-cover " alt="" />
                                    </div>
                                    <div class="w-[60%] px-4">
                                        <h2 class="font-bold lg:text-[22px] text-[20px]">{slide.title}</h2>
                                        <p class="my-2">{slide.content}</p>
                                        <button class="bg-[#2E5077] text-white px-5 py-2 rounded-md md:text-[16px]">View</button>
                                    </div>
                                </div>
                            </div>
                        </>
                    ))}
                </Slider>
            </section>
            {/* <section className='main-section mx-auto py-10'>
                <div className='flex'>
                    <div className='w-[30%] relative'>
                        <img src="/images/decorfurniture.webp" className='w-[100%] absolute border-1 rounded-xl h-[250px] object-cover' alt="" />
                    </div>
                    <div className='bg-l-gray p-3 w-[70%]'>
                        <h2>Lorem ipsum dolor sit amet.</h2>
                        <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ut, nostrum.</p>
                    </div>
                </div>
            </section> */}
        </>
    )
}

export default ProjectsSection
