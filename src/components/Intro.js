import React from 'react';
import photo from '../img/photo.png';

function Intro() {
  return (
    <section className="intro" id="home">
      <h1 className="section__title section__title--intro">
        Hi, I am <strong>Minsu Kim</strong>
      </h1>
      <p className="section__subtitle section__subtitle--intro">Software Developer</p>
      <img src={photo} alt="a picture of Minsu Kim" className="intro__img" />
    </section>
  );
}

export default Intro;
