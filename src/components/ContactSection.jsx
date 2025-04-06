import { useForm } from '@formspree/react';
import React from 'react'

const ContactSection = () => {

    return (
        <section className='main-section mx-auto my-28'>
            <div className='contact-bg h-[600px] w-[100%] rounded-xl relative'>
                <div className='bg-[#0000006e] p-5 absolute right-36 top-[-50px] w-[600px] rounded-xl'>
                    <h2 className='tx-white text-4xl font-semibold text-center'>Let's Connect</h2>
                    <p className='tx-white text-lg text-center mt-3'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sed obcaecati modi eos dignissimos dolorem fugiat illum ex vero</p>
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
