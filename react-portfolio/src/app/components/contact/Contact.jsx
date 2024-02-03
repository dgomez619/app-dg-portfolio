import React, { useRef, useState } from 'react'
import emailjs from '@emailjs/browser';
import './contact.css'
import { MdOutlineMailOutline } from "react-icons/md";
import { BsWhatsapp } from 'react-icons/bs'
import { FaGithub } from "react-icons/fa";
import { FaInstagramSquare } from "react-icons/fa";

const Contact = () => {

    const form = useRef();
    const [submissionMessage, setSubmissionMessage] = useState(null);


    const sendEmail = (e) => {
        e.preventDefault();

        emailjs.sendForm('service_ooprlrs', 'template_pd8sn4f', form.current, 'Sfscmxos6YxpsQrKo')
            .then((result) => {
                console.log(result.text);
                setSubmissionMessage('Su mensaje fue enviado exitosamente.');

            }, (error) => {
                console.log(error.text);
                setSubmissionMessage('Ocurrió un error, por favor vuelva a intentar.');
            });
        e.target.reset()
    };


    return (
        <section id='contact'>
            <h3 className='text-3xl py-1'>Contact</h3>

            <div className=" mx-auto my-4 px-4 lg:px-20">

                <form ref={form} onSubmit={sendEmail} className='w-full p-8 my-4 md:px-12 lg:w-9/12 lg:pl-20 lg:pr-40 mr-auto rounded-2xl shadow-2xl'>
                    {submissionMessage && <div className="text-green-500 pb-5">{submissionMessage}</div>}

                    <div>
                        <div className="flex">
                            <h1 className="font-bold uppercase text-5xl">Lets <br /> Connect</h1>
                        </div>
                        <div className="grid grid-cols-1 gap-5 md:grid-cols-2 mt-5">

                            <input className="w-full bg-gray-100 text-gray-900 mt-2 p-3 rounded-lg focus:outline-none focus:shadow-outline"
                                type="text"  name='user_name' placeholder="Name*" required />

                            <input className="w-full bg-gray-100 text-gray-900 mt-2 p-3 rounded-lg focus:outline-none focus:shadow-outline"
                                type="email" name='user_email' placeholder="Email*" required />
                        </div>
                        <div className="my-4">
                            <textarea placeholder="Message*"   name='message' className="w-full h-32 bg-gray-100 text-gray-900 mt-2 p-3 rounded-lg focus:outline-none focus:shadow-outline"></textarea>
                        </div>
                        <div className="my-2 w-1/2 lg:w-1/4">
                            <button  type="submit" className="uppercase text-sm font-bold tracking-wide bg-teal-500 text-black p-3 rounded-lg w-full 
              focus:outline-none focus:shadow-outline">
                                Send Message
                            </button>
                        </div>
                    </div>

                </form>



                <div className="w-full lg:-mt-96 lg:w-2/6 px-8 py-12 ml-auto bg-teal-500 rounded-2xl">
                    <div className="flex flex-col text-white">
                        <h1 className="font-bold uppercase text-4xl my-4">Socials</h1>


                        <div className="grid-cols-1 sm:grid md:grid-cols-2 gap-3 ">
                            <div
                                className="mx-3 mt-6 flex flex-col items-center rounded-lg sm:shrink-0 sm:grow sm:basis-0 hover:shadow-[0_4px_0px_rgb(0,0,0)] ease-out hover:translate-y-1 transition-all">
                                <a href="mailto:gomez.d@live.com">
                                    <MdOutlineMailOutline style={{ color: "black", fontSize: "5rem" }} />                                </a>

                            </div>
                            <div
                                className="mx-3 mt-6 flex flex-col items-center align-middle rounded-lg sm:shrink-0 sm:grow sm:basis-0 hover:shadow-[0_4px_0px_rgb(0,0,0)] ease-out hover:translate-y-1 transition-all">
                                <a href="https://api.whatsapp.com/send?phone=16194322363" target='_blank'>
                                    <BsWhatsapp style={{ color: "black", fontSize: "5rem" }} />
                                </a>

                            </div>
                            <div
                                className="mx-3 mt-6 flex flex-col items-center rounded-lg sm:shrink-0 sm:grow sm:basis-0 hover:shadow-[0_4px_0px_rgb(0,0,0)] ease-out hover:translate-y-1 transition-all">
                                <a href="https://github.com/dgomez619" target='_blank'>
                                    <FaGithub style={{ color: "black", fontSize: "5rem" }} />
                                </a>

                            </div>
                            <div
                                className="mx-3 mt-6 flex flex-col items-center rounded-lg sm:shrink-0 sm:grow sm:basis-0 hover:shadow-[0_4px_0px_rgb(0,0,0)] ease-out hover:translate-y-1 transition-all">
                                <a href="https://www.instagram.com/dgwav/" target='_blank'>
                                    <FaInstagramSquare style={{ color: "black", fontSize: "5rem" }} />
                                </a>

                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </section>)
}

export default Contact