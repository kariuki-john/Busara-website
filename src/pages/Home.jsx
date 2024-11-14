import React from "react";
import heroImg from "../components/assets/images/hero1.jpg";
import heroImgback from "../components/assets/images/hero-shape-purple.png";
import { BsFillLightningChargeFill } from "react-icons/bs";
import { FaBookReader, FaGraduationCap, FaUsers } from "react-icons/fa";
import { About } from "./About";
import { Courses } from "./Courses";
import { ContactUs } from "./ContactUs";
import { Training } from "./Training";


export const Home = () => {
  return (
    <>
      <HomeContent />
      <About />
      <br />
      <br />
      <br />
      <Courses />
      <Training />
      <ContactUs/>      
    </>
  );
};
export const HomeContent = () => {
  return (
    <>
      <section className="bg-backgroundcolor w-full py-10 h-[92vh] md:h-full ">
        <div className="container flex justify-center bg-white rounded-3xl w-[100vw]  h-[70vh]">
          <div className="flex items-center justify-center md:flex-col animate-slide-in-from-right">
            <div className="left w-96 md:w-full">
              <h1 className="text-6xl leading-tight flex align-center justify-center text-red-500 font-semibold">
                Your <br /> Future is
                <br /> Medicine
              </h1>
              <h3 className="text-lg mt-5 flex align-center justify-center text-green-700">
                Your future with us starts today.
              </h3>

              <span className="text-[14px] flex align-center justify-center lowercase text-green-700">
                You`re guaranteed to find something that`s right for you.
              </span>
            </div>
            <div className="right w-1/2 md:w-full relative">
              <div className="images relative">
                <img
                  src={heroImgback}
                  alt=""
                  className=" absolute top-32 left-10 w-96 md:left-10"
                />
                <div className="img h-[85vh] w-full">
                  <img
                    src={heroImg}
                    alt=""
                    className="h-full w-full object-contain z-20 relative bg-none"
                  />
                </div>
              </div>
              <div className="content">
                <button className="bg-white shadow-md absolute top-56 left-0 z-30 p-2 flex items-center rounded-md">
                  <div className="icon w-10 h-10 text-white rounded-full flex items-center justify-center bg-orange-400">
                    <BsFillLightningChargeFill size={25} />
                  </div>
                  <div className="text flex flex-col items-start px-4">
                    <span className="text-sm text-black">Congratulations</span>
                    <span className="text-[12px]">
                      Your admission completed
                    </span>
                  </div>
                </button>
                <button className="bg-white shadow-md absolute bottom-32 left-48 z-30 p-2 flex items-center rounded-md pr-8">
                  <div className="icon w-10 h-10 text-white rounded-full flex items-center justify-center bg-blue-400">
                    <FaGraduationCap size={25} />
                  </div>
                  <div className="text flex flex-col items-start px-4">
                    <span className="text-sm text-black">450K</span>
                    <span className="text-[12px]">Assisted Student</span>
                  </div>
                </button>
                <button className="bg-white shadow-md absolute top-56 -right-32 z-30 p-2  md:top-96 md:-right-5 flex items-center rounded-md">
                  <div className="icon w-10 h-10 text-white rounded-full flex items-center justify-center bg-orange-400">
                    <FaUsers size={25} />
                  </div>
                  <div className="text flex flex-col items-start px-4">
                    <span className="text-sm text-black">
                      User Experience Class
                    </span>
                    <span className="text-[12px]">Tomorrow is our's</span>
                  </div>
                </button>
                <button className="bg-white shadow-md absolute top-32 right-32 z-30 p-2 flex items-center rounded-md">
                  <div className="icon w-10 h-10 text-white rounded-full flex items-center justify-center bg-indigo-400">
                    <FaBookReader size={25} />
                  </div>
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};
