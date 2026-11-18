
import React from "react";
import "./Home.css";

function Home() {
    return (
        <section className="hero" id="home">

            <div className="hero-content">
                <p className="hero-subtitle">
                    ELEGANCE IN EVERY DETAIL
                </p>

                <h1>
                    Carry Your <br />
                    Style With <span>Grace.</span>
                </h1>

                <p className="hero-description">
                    Discover our exclusive collection of stylish
                    handbags designed to make every moment special.
                </p>

                <a href="#shop" className="hero-btn">
                    Shop Now →
                </a>
            </div>
            <div className="hero-image">
                <img
                    src="https://media.istockphoto.com/id/1193383767/photo/colourful-pink-handbag-with-girls-hand-yellow-manicured-finger-nails.jpg?s=612x612&w=0&k=20&c=sT1vCW8kmExmyo5ORx1OL8KAVb7S-BFIcH2e9iiUtwU="
                    alt="Elegant luxury handbag"
                />
            </div>


        </section>
    );
}

export default Home;
