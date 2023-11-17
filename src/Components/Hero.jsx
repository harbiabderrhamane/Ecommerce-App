import React from "react";
import HeroBanner from "../assets/images/woman_hero.png";
import { Link } from "react-router-dom";
function Hero() {
  return (
    <section className=" bg-amber-50 h-[800px] bg-no-repeat bg-cover bg-center py-24">
      <div className="container mx-auto flex items-center justify-around h-full">
        <div className="flex flex-col justify-center">
          <div className="font-semibold flex items-center uppercase">
            <div className="w-10 bg-red-500 mr-3 h-[3px]"></div> New Trend
          </div>

          <h1 className="text-[70px] leading-[1.1] font-light">
            Autumn Sale Stylish <br />
            <span className="font-semibold">Womens</span>
          </h1>
          <Link
            to="/"
            className="self-start uppercase font-semibold border-b-2 border-purple-900"
          >
            Discover More
          </Link>
        </div>
        <div className="hidden lg:block">
          <img src={HeroBanner} alt="" />
        </div>
      </div>
    </section>
  );
}

export default Hero;
