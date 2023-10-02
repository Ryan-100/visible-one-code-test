import React, { useRef } from "react";
import Button from "../UI/Button";
import MotionWrapper from "../UI/Layout";

const About = () => {
  const sectionRef = useRef(null);

  return (
    <MotionWrapper ref={sectionRef}>
      <section className="flex items-center justify-center space-x-40">
        <div className="flex flex-col w-[666px] space-y-[19.5px]">
          <p className="text-[36px]  font-bold">
            ABOUT <span className="text-primary">TRIPPRO</span>
          </p>
          <hr className="bg-primary w-[152px] h-1" />
          <p className="text-[18px] pb-4">
            Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
            nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam
            erat, sed diam voluptua. At vero eos et accusam et justo duo dolores
            et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est
            Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur
            sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore
            et dolore magna aliquyam erat, sed diam voluptua. At vero eos et
            accusam et justo duo dolores et ea rebum. Stet clita
          </p>

          <Button width={280} height={74}>
            TOUR TO WEBSITE
          </Button>
        </div>
        <div className="relative w-[680px] h-fit">
          <img
            src="/img/tablet.png"
            alt="tablet"
            className="w-[368px] h-[490px] absolute left-48 top-16"
          />
          <svg height="620" width="680">
            <circle
              cx="370"
              cy="300"
              r="200"
              stroke="#EA1A25"
              strokeWidth="7"
              fill="none"
              strokeDasharray="130,100"
              d="M5 40 l215 0"
            />
            <circle
              cx="370"
              cy="300"
              r="250"
              stroke="#EA1A25"
              strokeWidth="7"
              fill="none"
              strokeDasharray="170,300"
              d="M5 40 l215 0"
            />
            <circle
              cx="370"
              cy="300"
              r="300"
              stroke="#EA1A25"
              strokeWidth="7"
              fill="none"
              strokeDasharray="200,100"
              d="M5 40 l215 0"
            />
          </svg>
        </div>
      </section>
    </MotionWrapper>
  );
};

export default About;
