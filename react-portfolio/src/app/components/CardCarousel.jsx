import React from 'react';
import RadialProgressBar from './CircularBar'

const CardCarousel = () => {
  const progressEndValue = 80;
  const progressEndValue2 = 90;      


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
      description: <RadialProgressBar progressEndValue={progressEndValue} />,
    },
    {
      id: 4,
      title: 'BOOTSTRAP',
      description: <RadialProgressBar progressEndValue={progressEndValue2} />,
    },
    {
      id: 5,
      title: 'REDUX',
      description: <RadialProgressBar progressEndValue={progressEndValue} />,
    },
    {
      id: 5,
      title: 'REACT',
      description: <RadialProgressBar progressEndValue={progressEndValue} />,
     },
     {
      id: 6,
      title: 'REDUX',
      description: <RadialProgressBar progressEndValue={progressEndValue} />,
       },
    
  ];

  return (
    <div className="flex items-center justify-center w-screen ">
      
      <div
        className="overflow-hidden"
      >
        {cards.map((card) => (
          <div
            key={card.id}
            className="inline-block max-w-sm mx-2 bg-white shadow-lg rounded-lg overflow-hidden w-40"
          >
            <div className="p-4 ">
              <h3 className=" text-center text-xs font-bold">{card.title}</h3>
              <p >{card.description}</p>
            </div>
          </div>
        ))}
      </div>
      
    </div>
  );
};

export default CardCarousel;
