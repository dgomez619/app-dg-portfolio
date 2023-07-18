"use client";

import React from 'react'
import Head from 'next/head'
import {GiMoon} from 'react-icons/gi'
import {
  AiFillGithub,
  AiFillLinkedin,
  AiFillInstagram,
} from 'react-icons/ai'


import Image  from 'next/image';
import dg from '../../public/dg.png'
import design from '../../public/design.png'
import code from '../../public/code.png'
import consulting from '../../public/consulting.png'

// images for portfolio 

import crptapp from "../../public/crptapp.png"
import hpd2 from "../../public/hpd2.png"
import hrath from "../../public/hrath.png"
import univ from "../../public/univ.png"
import stockmarket from "../../public/stockmarket.jpg"
import coast2 from "../../public/coast2.png"

import BlurImage from '../app/components/BlurImage'
import CardCarousel from '../app/components/CardCarousel';
import RadialProgressBar from '../app/components/CircularBar'

// dark mode

import { useState } from 'react';


export default function Home() {
  const progressEndValue = 80;
  const progressEndValue2 = 90;


  const [darkMode, setDarkMode] = useState(false)
  return (
   <div className={darkMode ? "dark" : ""}>
    <Head>
      <title>Daniel Gomez Portfolio</title>
        <meta name='react-portfolio' content=''></meta>
    </Head>

    <main className=' bg-white px-10 md:px-20 lg:px-40 dark:bg-gray-900 dark:text-cyan-50'>
      <section className='min-h-screen dark:text-cyan-50'>
      <nav className='py-10 mb-12 flex justify-between'>
        <h1 className='text-xl font-burtons'>DG</h1>
          <ul className='flex items-center'>
            <li>
              <GiMoon onClick={()=> setDarkMode(!darkMode)} className='cursor-pointer text-xl'/>
            </li>
            <li><a className='bg-gradient-to-r from-cyan-500 to-teal-500 text-white px-4 py-2 rounded-md ml-8' href="https://docs.google.com/document/d/e/2PACX-1vT9cMYGLE6eaTzbpvzoTV1IGtbpmTNSWl64T_mOZvYkX8272NDGO9v1BDRKBoheBSUvKAdJFcUu3ucN/pub"  target="_blank">Resume</a></li>        
          
          </ul>
        
      </nav>
      <div className='text-center p-10 py-10'>
        <h2 className='text-5xl py-2 text-teal-600 font-medium md:text-6xl'>Daniel Gomez</h2>       
        <h3 className='text-2xl py-2 md:text-3xl'>Developer and designer.</h3>
        <p className='text-md py-5 leading-8 text-gray-800 md:text-lg max-w-xl mx-auto dark:text-cyan-50 '>Tech enthusiast with a passion for crafting seamless digital experiences. Armed with expertise in 
        <span className='text-teal-500'> HTML</span>,
        <span className='text-teal-500'> CSS</span>,
        <span className='text-teal-500'> JavaScript </span>
         and cutting-edge front-end technologies like 
         <span className='text-teal-500'> Tailwind </span>
         and
         <span className='text-teal-500'> Ant Design</span>. Proficient in 
        <span className='text-teal-500'> MERN </span>
         stack development, I thrive on building efficient systems that empower users. Let&apos;s create impactful solutions together!          
        </p>
      </div>

        {/* skill cards */}
        <CardCarousel />
        {/* skill cards */}


      {/* Social Icons */}
      <div className='text-5xl flex justify-center gap-16 py-3 text-gray-600'>
      <a href="https://github.com/dgomez619" target='_blank'><AiFillGithub/></a>
      <a  href='www.linkedin.com/in/dan-gomez1' target='_blank'><AiFillLinkedin /></a>
      <a href="https://www.instagram.com/dgwav/" target='_blank'><AiFillInstagram /></a>
      </div>

      {/* avatar */}
      <div className="relative mx-auto bg-gradient-to-b from-teal-500 rounded-full w-80 h-80 mt-20 overflow-hidden md:h-96 md:w-96">
        <Image alt={''} src={dg} layout='fill' objectFit='cover'  />
      </div>
      </section>
      {/* second section */}

   

      <section>
        <div>
          <h3 className='text-3xl py-1'>Relevant skills  </h3>
          <p className='text-md py-2 leading-8 text-gray-800 dark:text-cyan-50'>

          Mastering the art of web development with a touch of creativity. Implementing cutting-edge methods like <span className=' text-teal-500'>Redux</span>, <span className=' text-teal-500'>Vite </span> and <span className=' text-teal-500'> Next.js </span> to craft visually stunning, lightning-fast portals. Proficient in <span className=' text-teal-500'> Bootstrap</span>, <span className=' text-teal-500'> WordPress</span>, and adept at unleashing the full potential of graphic design tools like <span className=' text-teal-500'> Photoshop</span>, <span className=' text-teal-500'> Gimp</span>, and <span className=' text-teal-500'> Axure</span>. Ready bring your digital vision to life!               
          </p>
          
        </div>
          {/* cards */}
        <div className='lg:flex gap-10'>
          <div className=' text-center shadow-lg p-10 rounded-xl my-10 '>
            <Image alt={''} src={design} width={100} height={100}/>  
              <h3 className='text-lg font-medium pt-8 pb-2'>Designs</h3>     
              <p className='py-2'>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ipsum consequatur, corporis placeat velit a omnis iusto odit itaque aliquam pariatur libero non optio sed ab corrupti eaque fugiat officia in.
              </p>  
              <h4 className='py-4 text-teal-600'>Skills</h4>   
              <p className='text-gray-800 py-1 dark:text-cyan-50'>Photoshop</p>
              <p className='text-gray-800 py-1 dark:text-cyan-50'>Axure</p>
              <p className='text-gray-800 py-1 dark:text-cyan-50'>Gimp</p>
              <p className='text-gray-800 py-1 dark:text-cyan-50'>Premier Pro</p>
          </div>
          <div className=' text-center shadow-lg p-10 rounded-xl my-10 '>
            <Image alt={''} src={code} width={100} height={100}/>  
              <h3 className='text-lg font-medium pt-8 pb-2'>Designs</h3>     
              <p className='py-2'>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ipsum consequatur, corporis placeat velit a omnis iusto odit itaque aliquam pariatur libero non optio sed ab corrupti eaque fugiat officia in.
              </p>  
              <h4 className='py-4 text-teal-600'>Skills</h4>   
              <RadialProgressBar className='text-center' progressEndValue={progressEndValue2} />
              <p className='text-gray-800 py-1 dark:text-cyan-50'>Photoshop</p>
              <p className='text-gray-800 py-1 dark:text-cyan-50'>Axure</p>
              <p className='text-gray-800 py-1 dark:text-cyan-50'>Gimp</p>
              <p className='text-gray-800 py-1 dark:text-cyan-50'>Premier Pro</p>
          </div>
          <div className=' text-center shadow-lg p-10 rounded-xl my-10 '>
            <Image alt={''} src={consulting} width={100} height={100}/>  
              <h3 className='text-lg font-medium pt-8 pb-2'>Designs</h3>     
              <p className='py-2'>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ipsum consequatur, corporis placeat velit a omnis iusto odit itaque aliquam pariatur libero non optio sed ab corrupti eaque fugiat officia in.
              </p>  
              <h4 className='py-4 text-teal-600'>Skills</h4>   
              <p className='text-gray-800 py-1 dark:text-cyan-50'>Photoshop</p>
              <p className='text-gray-800 py-1 dark:text-cyan-50'>Axure</p>
              <p className='text-gray-800 py-1 dark:text-cyan-50'>Gimp</p>
              <p className='text-gray-800 py-1 dark:text-cyan-50'>Premier Pro</p>
          </div>          
        </div>
      </section>

      {/* dark mode activate */}
      <section>
        <div>
          <h3 className='text-3xl py-1'>Portofolio</h3>
          <p className='text-md py-2 leading-8 text-gray-800 dark:text-cyan-50'>
            Lorem ipsum, dolor sit <span className=' text-teal-500'>voluptatum</span> amet consectetur adipisicing elit. Asperiores eum culpa amet laudantium sit soluta error ad non molestias magnam quam esse aspernatur reprehenderit <span className=' text-teal-500'>voluptatum</span> quidem voluptatem tempore debitis, nobis sed!    
          </p>
          <p className='text-md py-2 leading-8 text-gray-800 dark:text-cyan-50'>
            Lorem ipsum, dolor sit <span className=' text-teal-500'>voluptatum</span> amet consectetur adipisicing elit. Asperiores eum culpa amet laudantium sit soluta error ad non molestias magnam quam esse aspernatur reprehenderit <span className=' text-teal-500'>voluptatum</span> quidem voluptatem tempore debitis, nobis sed!    
          </p>
        </div>
        <div className='flex flex-col gap-10 py-10 lg:flex-row lg:flex-wrap'>
          <div className='basis-1/3 flex-1'>

          <BlurImage  className='rounded-lg object-cover' width={'100%'} height={'100%'} layout='responsive'  image={crptapp} />

          </div>

          <div className='basis-1/3 flex-1'>

          <BlurImage  className='rounded-lg object-cover' width={'100%'} height={'100%'} layout='responsive'  image={hpd2} />

          </div>

          <div className='basis-1/3 flex-1'>

          <BlurImage  className='rounded-lg object-cover' width={'100%'} height={'100%'} layout='responsive'  image={hrath} />

          </div>

          <div className='basis-1/3 flex-1'>

          <BlurImage  className='rounded-lg object-cover' width={'100%'} height={'100%'} layout='responsive'  image={univ} />

          </div>

          <div className='basis-1/3 flex-1'>

          <BlurImage  className='rounded-lg object-cover' width={'100%'} height={'100%'} layout='responsive'  image={stockmarket} />

          </div>

          <div className='basis-1/3 flex-1'>

          <BlurImage  className='rounded-lg object-cover' width={'100%'} height={'100%'} layout='responsive'  image={coast2} />

          </div>






          
        </div>
      </section>

    </main>    
   </div>
  );
}
