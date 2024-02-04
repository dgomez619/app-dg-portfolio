"use client";

import React from 'react'
import Head from 'next/head'
import { GiMoon } from 'react-icons/gi'
import {
  AiFillGithub,
  AiFillLinkedin,
  AiFillInstagram,
} from 'react-icons/ai'


import Image from 'next/image';
import dg from '../../public/dg.png'
import design from '../../public/design.png'
import code from '../../public/code.png'
import consulting from '../../public/consulting.png'

// images for portfolio 

// import crptapp from "../../public/crptapp.png"
// import hpd2 from "../../public/hpd2.png"
// import hrath from "../../public/hrath.png"
// import univ from "../../public/univ.png"
// import stockmarket from "../../public/stockmarket.png"
// import coast2 from "../../public/coast2.png"

// import BlurImage from '../app/components/BlurImage'
import CardCarousel from '../app/components/CardCarousel';
import Card from './components/CardRipple';

// dark mode

import { useState } from 'react';
import NavBar from './components/navbar/NavBar';
import About from './components/about/About';
import Portfolio from './components/portofolio/Portfolio';
import Contact from './components/contact/Contact';


export default function Home() {

  const [darkMode, setDarkMode] = useState(false)
  return (
    <div  className={darkMode ? "dark" : ""}>
      <Head>
        <title>Daniel Gomez Portfolio</title>
        <meta name='react-portfolio' content=''></meta>
      </Head>

      <main className=' mainDiv bg-white px-10 md:px-20 lg:px-40 dark:bg-gray-900 dark:text-cyan-50'>
        <section className='min-h-screen dark:text-cyan-50'>
          <nav className='py-10 mb-12 flex justify-between'>
            <h1 className='text-xl font-burtons'>DG</h1>
            <ul className='flex items-center'>
              <li>
                <GiMoon onClick={() => setDarkMode(!darkMode)} className='cursor-pointer text-xl' />
              </li>
              <li><a className='bg-gradient-to-r from-cyan-500 to-teal-500 text-white px-4 py-2 rounded-md ml-8' href="https://docs.google.com/document/d/e/2PACX-1vT9cMYGLE6eaTzbpvzoTV1IGtbpmTNSWl64T_mOZvYkX8272NDGO9v1BDRKBoheBSUvKAdJFcUu3ucN/pub" target="_blank">Resume</a></li>

            </ul>

          </nav>
          <div className='text-center '>
            <h2 className='text-5xl py-2 text-teal-600 font-medium md:text-6xl'>Daniel Gomez</h2>
          </div>

          {/* avatar */}
          <div className="relative mx-auto bg-gradient-to-b from-teal-500 rounded-full w-80 h-80 mt-20 overflow-hidden md:h-96 md:w-96">
            <Image alt={''} src={dg} layout='fill' objectFit='cover' />
          </div>
          {/* avatar */}

          {/* floating navbar */}
          <NavBar />

          {/* About Section */}
          <About />



          {/* skill cards */}
          <CardCarousel />
          {/* skill cards */}

          <div>
            <h3 className='text-3xl py-4 mt-4 tex'>Relevant skills  </h3>
            <p className='text-md text-justify py-2 px-40 leading-8 text-gray-800 dark:text-cyan-50'>

              Mastering the art of web development with a touch of creativity. Implementing cutting-edge methods like <span className=' text-teal-500'>Redux</span>, <span className=' text-teal-500'>Vite </span> and <span className=' text-teal-500'> Next.js </span> to craft  visually stunning, lightning-fast portals. Proficient in <span className=' text-teal-500'> Bootstrap</span>, <span className=' text-teal-500'> WordPress</span>, and adept at unleashing the full potential of graphic design tools  like <span className=' text-teal-500'> Photoshop</span>, <span className=' text-teal-500'> Illustrator</span>, and <span className=' text-teal-500'> Figma</span>. Ready to bring your digital vision to life!
            </p>

          </div>





          {/* Social Icons */}
          <div className='text-5xl flex justify-center gap-16 py-3 text-gray-600'>
            <a href="https://github.com/dgomez619" target='_blank'><AiFillGithub /></a>
            <a href='https://linkedin.com/in/dan-gomez1' target='_blank'><AiFillLinkedin /></a>
            <a href="https://www.instagram.com/dgwav/" target='_blank'><AiFillInstagram /></a>
          </div>
        </section>
        {/* second section */}



        <section>
          {/* cards */}

          {/* <Card/> */}

          <div className='lg:flex justify-center gap-10'>
            <div className=' text-center shadow-lg p-10 rounded-xl my-10 '>
              <Image alt={''} src={design} width={100} height={100} />
              <h3 className='text-lg font-medium pt-8 pb-2'>Designs</h3>

            </div>
            <div className=' text-center shadow-lg p-10 rounded-xl my-10 '>
              <Image alt={''} src={code} width={100} height={100} />
              <h3 className='text-lg font-medium pt-8 pb-2'>Code</h3>

            </div>
            <div className=' text-center shadow-lg p-10 rounded-xl my-10 '>
              <Image alt={''} src={consulting} width={100} height={100} />
              <h3 className='text-lg font-medium pt-8 pb-2'>Deploy</h3>

            </div>
          </div>
        </section>

        {/* dark mode activate */}

        {/* Portfolio */}
        <Portfolio />

        {/* contact form */}

        <Contact/>


      </main>
    </div>
  );
}
