import { useEffect, useState } from "react";
import Particles, { initParticlesEngine } from "@tsparticles/react";
import { loadFull } from "tsparticles";

export default function Particle() {
    const [init, setInit] = useState(false);

    useEffect(() => {
        initParticlesEngine(async (engine) => {
            await loadFull(engine);
        }).then(() => {
            setInit(true);
        });
    }, []);

    return (
        <>
            <section className="main-section mx-auto">
                <div className="particles-section mt-5 rounded-xl relative h-[600px] bg-l-gray flex items-center justify-center text-center">
                    {init && (
                        <Particles
                            id="tsparticles"
                            options={{
                                fullScreen: { enable: false }, // ✅ Restrict particles to section only
                                fpsLimit: 120,
                                interactivity: {
                                    events: {
                                        onClick: { enable: true, mode: "push" },
                                        onHover: { enable: true, mode: "bubble" }, // 🔴 Change mode to "bubble"
                                        resize: true,
                                    },
                                    modes: {
                                        push: { quantity: 4 },
                                        bubble: { // 🔴 Bubble effect settings
                                            distance: 200, // The distance at which the bubble effect happens
                                            duration: 2, // How long the effect lasts
                                            size: 50, // The size of the bubbles when hovered
                                            opacity: 0.8, // Bubble opacity
                                        },
                                    },
                                },
                                particles: {
                                    color: { value: "#2E5077" },
                                    links: {
                                        color: "#000",
                                        distance: 150,
                                        enable: true,
                                        opacity: 0.5,
                                        width: 1,
                                    },
                                    move: {
                                        enable: true,
                                        speed: 1.2,
                                        outModes: { default: "bounce" },
                                    },
                                    number: {
                                        density: { enable: true, area: 800 },
                                        value: 300,
                                    },
                                    opacity: { value: 0.5 },
                                    shape: { type: "circle" },
                                    size: { value: { min: 1, max: 5 } },
                                },
                                detectRetina: true,
                            }}
                        />
                    )}
                    <div className="content flex flex-col items-center">
                        <h1 className='text-6xl font-bold leading-18 tx-black w-[60%]'>Exquisite design combined with functionalities</h1>
                        <p className='text-[22px] tx-black my-8 w-[70%]'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, </p>
                        <button className='bg-d-blue text-white px-5 py-3 rounded-md cursor-pointer'>Get In Touch</button>
                    </div>
                </div>
            </section>
        </>
    );
}
