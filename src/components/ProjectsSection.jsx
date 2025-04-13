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
                    autoplay: true,

                }
            },
            {
                breakpoint: 767, // under 768px (mobile)
                settings: {
                    slidesToShow: 1,
                    autoplay: true,
                }
            }
        ]
    };

    const slides = [
        
        {
            id: 1,
            img: "/images/ecommerce.jpg",
            title: "DNK Clothing",
            content: "A modern clothing website template built with React JS, styled using Bootstrap for a fast & responsive.",
            link: "https://e-commerce-clothing-darshit.netlify.app/",
        },
        {
            id: 2,
            img: "/images/decorfurniture.webp",
            title: "Decore Furniture",
            content: "A sleek, user-friendly furniture store built with WordPress for smooth shopping and full e-commerce features.",
            link: "http://decorfurniture.rf.gd/",
        },
        {
            id: 3,
            img: "/public/images/restaurantwebsite.jpg",
            title: "Restaurant Website",
            content: "A user-friendly restaurant website built with React.js & Tailwind CSS, offering an informative experience",
            link: "https://restaurantwebsite-darshit.netlify.app/",
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
                                        <img src={slide.img} height="280" width="100%" class="rounded-xl h-[280px] w-[100%] object-cover " alt="" />
                                    </div>
                                    <div class="w-[60%] px-4">
                                        <h2 class="font-bold lg:text-[22px] text-[18px]">{slide.title}</h2>
                                        <p class="my-2 md:text-[16px] text-[14px]">{slide.content}</p>
                                        <a href={slide.link}>
                                            <button class="bg-[#2E5077] text-white px-5 py-2 rounded-md md:text-[16px] cursor-pointer">View</button>
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </>
                    ))}
                </Slider>
            </section>
        </>
    )
}

export default ProjectsSection
