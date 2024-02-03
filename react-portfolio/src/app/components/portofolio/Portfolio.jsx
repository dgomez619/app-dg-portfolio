import React from 'react'

import crptapp from '../../../../public/crptapp.png'
import hpd2  from '../../../../public/hpd2.png'
import hrath from '../../../../public/hrath.png'
import univ from '../../../../public/univ.png'
import stockmarket from '../../../../public/stockmarket.png'
import coast2 from '../../../../public/coast2.png'

import BlurImage from '../BlurImage'

const Portfolio = () => {
    const blurImageItems = [
        {
          id: 1,
          image: crptapp,
          buttonUrl: " https://dgomez619.github.io/cryptoapp/",
          buttonUrl2: "https://github.com/dgomez619/cryptoapp",
        },
        {
          id: 2,
          image: hpd2,
          buttonUrl: "https://hospedajespordia.com",
          buttonUrl2: "https://github.com/dgomez619/WpHpd",
        },
        {
          id: 3,
          image: hrath,
          buttonUrl: "https://dgomez619.github.io/hrathletes/",
          buttonUrl2: "https://github.com/dgomez619/hrathletes",
        },
        {
          id: 4,
          image: univ,
          buttonUrl: "https://dgomez619.github.io/universidad-replica/",
          buttonUrl2: "https://github.com/dgomez619/universidad-replica",
        },
        {
          id: 5,
          image: stockmarket,
          buttonUrl: "https://maxreinmueller.github.io/Stock-View/",
          buttonUrl2: "https://github.com/MaxReinmueller/Stock-View",
        },
        {
          id: 6,
          image: coast2,
          buttonUrl: "https://dgomez619.github.io/pacific-trail/index.html",
          buttonUrl2: "https://github.com/dgomez619/pacific-trail",
        },  
      ];  
  return (
    <section id='portfolio'>
        <div>
          <h3 className='text-3xl py-1'>Portfolio</h3>          
        </div>

        <div className='flex flex-col gap-10 py-10 lg:flex-row lg:flex-wrap'>
          
          {blurImageItems.map((item) => (
          <div className='basis-1/4 flex-1'  key={item.id}>
            <BlurImage            
            className='rounded-lg object-cover'            
            layout='responsive'            
            image={item.image} 
            buttonUrl={item.buttonUrl}
            buttonUrl2={item.buttonUrl2} />
          </div>
          ))}          
          
        </div>
      </section>  )
}

export default Portfolio