import { useForm } from '@formspree/react';
import React from 'react'

const ContactSection = () => {

    return (
        <section className='main-section mx-auto md:my-28 my-5' id='contact'>
            <div className='contact-bg w-[100%] rounded-xl relative'>
                <div className='bg-[#0000006e] p-5 absolute lg:right-36 right-0 lg:top-[-50px] lg:w-[600px] w-[100%] rounded-xl'>
                    <h2 className='tx-white text-4xl font-semibold text-center'>Let's Connect</h2>
                    <p className='tx-white text-lg text-center mt-3'>Have a project in mind? Let’s build something amazing together—reach out today!</p>
                    <div className='mt-8'>
                        <form className='flex flex-col justify-center items-center' action="https://formspree.io/f/mqapgaka" method='POST'>
                            <input type="text" name='name' placeholder='Name*' required />
                            <input type="email" name='email' placeholder='Email*' required />
                            <input type="number" name='phone-number' placeholder='Phone Number' />
                            <select name="services" required>
                                <option value="" disabled selected>---Select Service*---</option>
                                <option value="wordpress">Wordpress</option>
                                <option value="react">React.JS</option>
                                <option value="html">Html, Css, JS</option>
                            </select>
                            <textarea name="message" placeholder='Message' rows="5"></textarea>
                            <input type="submit" value="Submit" />
                        </form>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default ContactSection
