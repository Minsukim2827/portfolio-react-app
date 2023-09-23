import React from 'react';
import photo from '../img/photo2.png';

function About() {
  return (
    <section className="about-me" id="about">
      <h2 className="section__title section__title--about">Who I am</h2>
      <p className="section__subtitle section__subtitle--about">Software developer student seeking an entry level role</p>
      <div className="about-me__body">
        <p>Kia ora! I'm Minsu, a 2nd year (penultimate) BCIS student from Auckland University of Technology! Specializing in both front-end and back-end 
            development, I have a strong understanding of Object-Oriented Programming, Data Structures, and Algorithms. 
            These skills have been honed through academic courses, personal projects, and hobbyist endeavours. I thrive in 
            team environments, valuing collaboration, knowledge-sharing, and effective communication.</p>
      </div>
      <img src={photo}alt="Minsu with scenery" className="about-me__img" />
    </section>
  );
}

export default About;
