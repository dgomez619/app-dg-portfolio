import React from 'react';
import RadialProgressBar from './CircularBar'

const CardCarousel = () => {
  const progressEndValue = 80;
  const progressEndValue2 = 80; 
  const progressEndValue3 = 70;
  const progressEndValue4 = 80;
  const progressEndValue5 = 60;
  const progressEndValue6 = 70;
  const progressEndValue7 = 60;
  const progressEndValue8 = 80;
  const progressEndValue9 = 80;


  // Dummy data for cards
  const cards = [
    {
      id: 1,
      title: 'HTML',
      description: <RadialProgressBar progressEndValue={progressEndValue} />,
    },
    {
      id: 2,
      title: 'CSS',
      description: <RadialProgressBar progressEndValue={progressEndValue2} />,
    },
    {
      id: 3,
      title: 'JS',
      description: <RadialProgressBar progressEndValue={progressEndValue3} />,
    },
    {
      id: 4,
      title: 'BOOTSTRAP',
      description: <RadialProgressBar progressEndValue={progressEndValue4} />,
    },
    {
      id: 5,
      title: 'REDUX',
      description: <RadialProgressBar progressEndValue={progressEndValue5} />,
    },
    {
      id: 6,
      title: 'REACT',
      description: <RadialProgressBar progressEndValue={progressEndValue6} />,
     },
     {
      id: 7,
      title: 'MONGODB',
      description: <RadialProgressBar progressEndValue={progressEndValue7} />,
     },
     {
      id: 8,
      title: 'PHOTOSHOP',
      description: <RadialProgressBar progressEndValue={progressEndValue8} />,
     },
     {
      id: 9,
      title: 'AXURE',
      description: <RadialProgressBar progressEndValue={progressEndValue9} />,
     },     
    
  ];

  return (
    <div className="flex items-center justify-center w-full ">
      
      <div
        className="overflow-hidden "
      >
        {cards.map((card) => (
          <div
            key={card.id}
            className="inline-block max-w-sm mx-2 bg-white  shadow-lg rounded-lg overflow-hidden w-20 " 
          >
            <div className="p-4 ">
              <p className=" text-center text-[9px] font-bold text-black">{card.title}</p>
              <p>{card.description}</p>
            </div>
          </div>
        ))}
      </div>
      
    </div>
  );
};

export default CardCarousel;
