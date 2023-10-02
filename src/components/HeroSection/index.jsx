import React from "react";

const Hero = () => {
  return (
    <section className="h-[1080px] relative">
      <div className="relative">
        <div className="absolute w-full">
          <img
            src="/img/hero/hero.png"
            alt="hero"
            className=" h-[637px] w-full object-cover"
          />
        </div>
        <div className="text-center bg-gray-800 backdrop-filter backdrop-blur-[2px] bg-opacity-50 h-[637px] text-white flex flex-col space-y-6 pt-16">
          <p className="text-[60px] font-[300]">
            TRIPPRO - AN ECOMMERCE SOLUTION
          </p>
          <p className="text-[18px] mx-[20rem]">
            Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
            nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam
            erat, sed diam voluptua. At vero eos et accusam et justo duo dolores
            et ea rebum.
          </p>
          <div className="flex self-center items-center space-x-6 pb-[63.81px]">
            <div className="flex items-center space-x-5">
              <p className="text-[24px] font-semibold">Built for:</p>
              <img src="/img/hero/responsive.svg" alt="responsive" />
            </div>
            <hr className="w-1 h-14 bg-white rounded-lg" />
            <div className="flex items-center space-x-5">
              <p className="text-[24px]">
                Technologies:{" "}
                <span className="font-semibold block">Wordpress</span>
              </p>
              <img src="/img/hero/wordpress.svg" alt="wordpress" />
            </div>
            <hr className="w-1 h-14 bg-white rounded-lg" />

            <div className="flex items-center space-x-5">
              <p className="text-[24px]">
                Industry: <span className="font-semibold block">Ecommerce</span>
              </p>
              <img src="/img/hero/shopping-cart.svg" alt="shopping-cart" />
            </div>
          </div>
          <div className="relative self-center ">
            <img
              src="/img/hero/laptop.png"
              alt="laptop"
              className="w-[850px] h-[484px]"
            />
            <img
              src="/img/hero/screen.png"
              alt="laptop"
              className="w-[644px] h-[404px] absolute top-[28.65px] left-[102.53px]"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
