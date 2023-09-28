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
        <div className="portfolio__item">
          <img src={snapvote} alt="" className="portfolio__img" />
          <div className="portfolio__btn-container">
            <a href="https://snapvote-11223.web.app/" className="portfolio__btn">Website</a>
            <a href="https://github.com/Minsukim2827/SnapVote" className="portfolio__btn">Github</a>
          </div>
        </div>
        <div className="portfolio__item">
          <img src={spotifyDiscordBot} alt="" className="portfolio__img" />
          <div className="portfolio__btn-container">
            <a href="https://github.com/Minsukim2827/DiscordSpotifyBot" className="portfolio__btn">Github</a>
           
          </div>
        </div>
        <div className="portfolio__item">
          <img src={portfolio} alt="" className="portfolio__img" />
          <div className="portfolio__btn-container">
            <a href="https://www.min-su.me/" className="portfolio__btn">Website</a>
            <a href="https://github.com/Minsukim2827/portfolio-react-app" className="portfolio__btn">Github</a>
          </div>
        </div>

      </div>
    </section>
  );
}

export default Work;
