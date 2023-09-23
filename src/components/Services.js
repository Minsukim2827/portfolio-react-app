import React from 'react';

function Services() {
  return (
    <section className="my-services" id="services">
      <h2 className="section__title section__title--services">My values</h2>
      <div className="services">
        <div className="service">
          <h3>Problem Solving</h3>
          <p>Won 3rd place in the CSEA x Maps Coding Competition among 80 university peers, excelling in data structures and algorithms.</p>
        </div>
        <div className="service">
          <h3>Leadership</h3>
          <p>Led a five-person team to win New Zealand's top League of Legends tournament, Clash of the Taniwha NZ, handling scheduling and conflict resolution. </p>
        </div>
        <div className="service">
          <h3>Communication & Teamwork</h3>
          <p>Built teamwork skills through sports and improved them in professional settings at Gallagher and New World, focusing on proactive communication and alignment towards goals.</p>
        </div>
      </div>
      <a href="#work" className="btn">My Work</a>
    </section>
  );
}

export default Services;
