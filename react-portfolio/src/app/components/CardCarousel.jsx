import React from 'react';
import RadialProgressBar from './CircularBar';

const CardCarousel = () => {
  // Dummy data for cards
  const cards = [
      {
          id: 1,
          title: 'HTML',
          progressEndValue: 80,
      },
      {
          id: 2,
          title: 'CSS',
          progressEndValue: 80,
      },
      {
          id: 3,
          title: 'JS',
          progressEndValue: 70,
      },
      {
          id: 4,
          title: 'BOOTSTRAP',
          progressEndValue: 80,
      },
      {
          id: 5,
          title: 'REDUX',
          progressEndValue: 60,
      },
      {
          id: 6,
          title: 'REACT',
          progressEndValue: 70,
      },
      {
          id: 7,
          title: 'MONGODB',
          progressEndValue: 60,
      },
      {
          id: 8,
          title: 'PHOTOSHOP',
          progressEndValue: 80,
      },
      {
          id: 9,
          title: 'AXURE',
          progressEndValue: 80,
      }     
    // Add more items as needed...
  ];

  return (
    <div className="flex items-center justify-center w-full">
      <div className="overflow-hidden">
        {cards.map((card) => (
          <div
            key={card.id}
            className="inline-block max-w-sm mx-2 bg-white shadow-lg rounded-lg overflow-hidden w-20"
          >
            <div className="p-4">
              <p className="text-center text-[9px] font-bold text-black">{card.title}</p>
              {typeof window !== 'undefined' && (
                <RadialProgressBar progressEndValue={card.progressEndValue} />
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CardCarousel;

