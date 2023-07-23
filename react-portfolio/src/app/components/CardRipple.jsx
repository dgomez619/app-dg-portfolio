import React from 'react';

class Card extends React.Component {
  handleMouseMove = (e) => {
    const btn = e.currentTarget;
    const x = e.pageX - btn.offsetLeft;
    const y = e.pageY - btn.offsetTop;

    btn.style.setProperty('--x', x + 'px');
    btn.style.setProperty('--y', y + 'px');
  };

  render() {
    return (
        <div className="group relative inline-flex px-8 py-4 bg-gray-800 text-white font-semibold tracking-wider overflow-hidden" onMouseMove={this.handleMouseMove}>
          <span>CARD</span>
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-0 h-0 rounded-full bg-blue-500 transition-all duration-500 group-hover:w-96 group-hover:h-96"></div>
        </div>
    );
  }
}

export default Card;