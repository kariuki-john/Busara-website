import React from "react";
import aboutImg from "../components/assets/images/about.jpg";
import aboutImgBanner from "../components/assets/images/about-banner.jpg";
import { FaBookDead } from "react-icons/fa";
import { AiOutlineCheck } from "react-icons/ai";


export const About = () => {
  return (
    <>
      <section className="about pb-5 bg-backgroundcolor">
        <div className="container bg-backgroundcolor">
          <div className="heading text-center py-3">
            <h1 className="text-4xl font-extrabold text-white flex align-center justify-center pt-0">
              Your future could start with one of our qualifications
            </h1>
            <span className="text-lg mt-2 block text-white">
              you don't have to struggle alone, you've got our assistance and
              help.
            </span>
          </div>
          <div className="grid grid-cols-4 gap-8 mt-5 md:grid-cols-2 animate-slide-in-from-right">
            <AboutCard
              color="bg-[#2D69F0]"
              icon={<FaBookDead size={100} />}
              title="Pre-Universty & Carrer Preparation"
              desc="Bridge the gap between high school and your dream career. "
            />
            <AboutCard
              color="bg-[#DD246E]"
              icon={<FaBookDead size={100} />}
              title="Health Care Training"
              desc="preparing students for healthcare roles both locally and internationally "
            />
            <AboutCard
              color="bg-[#8007E6]"
              icon={<FaBookDead size={100} />}
              title="Information Technology (IT)"
              desc="offering a more in-depth learning experience "
            />
            <AboutCard
              color="bg-[#0CAE74]"
              icon={<FaBookDead size={100} />}
              title="Business Administration"
              desc="equip individuals with the skills and knowledge needed to succeed in various careers "
            />
          </div>
        </div>
      </section>
      <AboutContent />
     
    </>
  );
};
export const AboutCard = (props) => {
  return (
    <div
      className={`box shadow-md p-5 py-8 rounded-md text-white ${props.color} cursor-pointer transition ease-in-out delay-150 hover:-translate-y-4 duration-300 `}
    >
      <div className="icon">{props.icon}</div>
      <div className="text mt-5">
        <h4 className="text-lg font-semibold my-3">{props.title}</h4>
        <p className="text-sm">{props.desc}</p>
      </div>
    </div>
  );
};

export const AboutContent = () => {
  return (
    <section className="mb-16 mt-20">
      <div className="container flex md:flex-col">
        <div className="left w-1/3 md:w-full mr-8 md:mr-0 relative">
          <img src={aboutImg} alt="aboutImg" className=" rounded-xl" />
          <img
            src={aboutImgBanner}
            alt="aboutImg"
            className="rounded-xl absolute -bottom-14 -left-24 h-56 md:left-80"
          />
        </div>
        <div className="right w-2/3 md:w-full md:mt-16">
          <div className="heading w-4/5 md:w-full">
            <h1 className="text-4xl font-bold text-black">
              ACHIEVE YOUR GOALS WITH BUSARA MEDICAL TRAINING COLLEGE.
            </h1>
            <span className="text-sm mt-2 block leading-6">
              {" "}
              Our course catalogue provides a comprehensive overview of the
              programs and pathways offered at BMTC. We equip individuals with
              the skills and knowledge needed to succeed in various careers. Our
              programs emphasize practical learning experiences, industry
              alignment, and faculty expertise.
            </span>
            <ul className="my-5">
              <li className="text-sm flex items-center gap-5">
                <AiOutlineCheck className="text-green-500" /> Upskill your
                organization.
              </li>
              <li className="text-sm flex items-center gap-5 my-2">
                <AiOutlineCheck className="text-green-500" />
                Gain a foundation understanding of the healthcare industry.
              </li>
              <li className="text-sm flex items-center gap-5">
                <AiOutlineCheck className="text-green-500" />
                Develop advanced patient care skills.
              </li>
              <li className="text-sm flex items-center gap-5 my-2">
                <AiOutlineCheck className="text-green-500" />
                Learn basic care and support skills.
              </li>
            </ul>
            <button className="px-5 py-2 border border-gray-300 rounded-md font-semibold text-lg bg-buttoncolor">
              Apply Now
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};
