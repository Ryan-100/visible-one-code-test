import { useState } from "react";
import { motion } from "framer-motion";
import styled from "styled-components";

const OldWebsite = () => {
  const [open, setOpen] = useState(true);

  return (
    <section className=" w-full h-[553px] ">
      <motion.div
        className="flex items-center justify-between h-full"
        initial={{ opacity: 0, x: -1500 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: false }}
        transition={{ ease: "easeIn", duration: 1 }}
      >
        {open ? (
          <div className=" w-[679px] h-full flex bg-white transition-all -translate-x-[356.2056884765625px] z-[20]">
            <img
              src="/img/old/overflow.png"
              className="w-[631px] h-[360px]"
              alt="overflow"
            />
            <div className=" w-[679px] ">
              <div className="flex justify-center items-center w-[679px] h-[405px] border-[20px] border-bg-grey-2 rounded-t-3xl bg-bg-grey-2 ">
                <img
                  src="/img/old/screen.png"
                  className="w-[651px] h-[366px]"
                  alt="screen"
                />
              </div>
              <div className=" w-[680px] h-[62px] flex justify-center items-center  rounded-b-3xl  bg-bg-grey-1 ">
                <div className="w-[24px] h-[24px] bg-bg-grey-2 rounded-full" />
              </div>
              <div className=" w-[172px] h-[72px]  bg-bg-grey-2 mx-auto polygon" />
              <div className=" w-[233px] h-[8px]  bg-bg-grey-1 mx-auto standPolygon" />
              <div className="w-[233px] h-[6px]  bg-bg-grey-2 mx-auto" />
            </div>
          </div>
        ) : (
          <div className="flex items-center z-[20] bg-white w-[480px]  appear-left active h-full">
            <img
              src="/img/old/1.png"
              className="w-[240px] h-[407px] -ml-[77.74249267578125px]"
              alt="1"
            />
            <img
              src="/img/old/2.png"
              className="w-[240px] h-[407px] "
              alt="2"
            />
            <img
              src="/img/old/3.png"
              className="w-[240px] h-[407px]  "
              alt="3"
            />

            <div className="relative w-[265px] h-[553px] flex flex-col border-2 rounded-[3.13rem]  border-bg-grey-2  bg-bg-grey">
              <div className=" w-[265px] h-[60px] ">
                <div className="rounded-full bg-black w-[5px] h-[5px] mx-auto mt-3" />
                <div className=" flex justify-center my-4">
                  <div className="rounded-full  w-[7px] h-[7px] bg-black " />
                  <div className=" ml-5 me-5 rounded-full w-[45px] h-[3px] bg-bg-grey-2 " />
                </div>
              </div>
              <div className=" w-[265px] h-[426px] ">
                <img
                  src="/img/old/4.png"
                  className=" w-[239px] h-[416px] absolute right-3  "
                  alt="4"
                />
              </div>
              <div className=" w-[265px]  flex h-[70px]  justify-center">
                <div className="w-[38px] h-[38px]  border-2 border-bg-grey-2 bg-white rounded-full mt-3" />
              </div>
            </div>
          </div>
        )}
        <div
          className={`pr-10 ${
            open ? "w-[1381px]" : "w-[1198px]"
          } h-full flex justify-end items-end bg-gradient-r `}
        >
          <div className=" text-white space-y-12 w-[740px] ">
            <p className="text-[36px]  font-bold">
              Their Old Website & Problems
            </p>
            <div className="space-y-4">
              <CustomLi>
                Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed
                diam nonumy eirmod tempor invidunt ut labore et dolore magna
                aliquyam erat, sed diam
              </CustomLi>
              <CustomLi>
                Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed
                diam nonumy eirmod tempor invidunt ut labore et dolore magna
                aliquyam erat, sed diam
              </CustomLi>
              <CustomLi>
                Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed
                diam nonumy eirmod tempor invidunt ut labore et dolore magna
                aliquyam erat, sed diam
              </CustomLi>
            </div>
            <div className="flex items-center space-x-[21.93px]">
              <img
                src="/img/left.svg"
                className=" w-[10px] h-[16px]"
                alt="left-icon"
              />
              <img
                src="/img/right.svg"
                className=" w-[10px] h-[16px]"
                alt="right-icon"
              />
            </div>
            <div
              className="w-[231px] h-[47px] bg-gradient rounded-full border border-white flex items-center cursor-pointer"
              onClick={() => setOpen((p) => !p)}
            >
              <div
                className={`flex items-center space-x-6 px-4 ${
                  open ? "translate-x-20" : ""
                } transition-all`}
              >
                {open ? (
                  <>
                    <p className="font-bold text-[18px]">Desktop</p>
                    <span className="bg-white rounded-full w-[26px] h-[26px] inline-block" />
                  </>
                ) : (
                  <>
                    <span className="bg-white rounded-full w-[26px] h-[26px] inline-block" />
                    <span className=" flex items-center space-x-4">
                      <img src="/img/mobile.svg" alt="mobile icon" />
                      <p className="font-bold text-[18px]">Mobile</p>
                    </span>
                  </>
                )}
              </div>
            </div>
          </div>
        </div>
      </motion.div>
    </section>
  );
};

export default OldWebsite;

const CustomLi = styled.li`
  list-style: none;
  background-image: url(/img/right-arrow.svg);
  background-repeat: no-repeat;
  background-position: left center;
  padding-left: 30px;
  font-size: 18px;
`;
