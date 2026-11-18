
import React from "react";
import "./About.css";

function About() {
  return (
    <section className="about" id="about">


      <div className="about-image">
        <img
          src="https://images.unsplash.com/photo-1591561954557-26941169b49e?w=900"
          alt="Luxury handbag collection"
        />
      </div>
      <div className="about-content">

        <p className="about-subtitle">
          ABOUT LUXEBAGS
        </p>

        <h2>
          More Than a Bag, <span>It's a Statement.</span>
        </h2>

        <p>
          At LuxeBags, we believe every handbag tells a story.
          Our collection combines timeless elegance, modern
          designs, and everyday functionality.
        </p>

        <p>
          From casual outings to special occasions, we bring
          you beautiful handbags that complement your style
          and make every moment memorable.
        </p>

        <a href="#shop" className="about-btn">
          Explore Collection →
        </a>

      </div>

    </section>
  );
}

export default About;
