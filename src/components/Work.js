import React from 'react';
import snapvote from '../img/snapvote.png';
import portfolio from '../img/portfolio.png';
import spotifyDiscordBot from '../img/spotifyDiscordBot.png';

function Work() {
  return (
    <section className="my-work" id="work">
      <h2 className="section__title section__title--work">Personal Projects</h2>
      <p className="section__subtitle section__subtitle--work">A selection of my range of work</p>
      <div className="portfolio">
        <a href="#" className="portfolio__item">
          <img src={snapvote} alt="" className="portfolio__img" />
        </a>
        <a href="#" className="portfolio__item">
          <img src={portfolio} alt="" className="portfolio__img" />
        </a>
        <a href="#" className="portfolio__item">
          <img src={spotifyDiscordBot} alt="" className="portfolio__img" />
        </a>
      </div>
    </section>
  );
}

export default Work;
