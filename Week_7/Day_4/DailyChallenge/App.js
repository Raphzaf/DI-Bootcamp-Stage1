import React from 'react';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';

function App() {
  return (
    <div style={{ maxWidth: '600px', margin: '0 auto' }}>
      <Carousel showThumbs={true} infiniteLoop useKeyboardArrows autoPlay>
        <div>
          <img src="https://plus.unsplash.com/premium_photo-1661887262365-1d6a1cf3da22?fm=jpg&q=60&w=3000&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8aG9uZyUyMGtvbmd8ZW58MHx8MHx8fDA%3D" alt="Hong Kong" />
          <p className="legend">Hong Kong</p>
        </div>
        <div>
          <img src="https://t4.ftcdn.net/jpg/06/43/46/99/360_F_643469939_nRKrjPXSvw5UMt6W5puAZCYalYDpQA82.jpg" alt="Macao" />
          <p className="legend">Macao</p>
        </div>
        <div>
          <img src="https://cdn.artphotolimited.com/images/5dca98b2bd40b8720ecc2c73/1000x1000/fujiyoshida-chureito-pagoda.jpg" alt="Japan" />
          <p className="legend">Japan</p>
        </div>
        <div>
          <img src="hhttps://www.wildnatureimages.com/images/640/130226-048-Las-Vegas-Strip.jpg" alt="Las Vegas" />
          <p className="legend">Las Vegas</p>
        </div>
      </Carousel>
    </div>
  );
}

export default App;
