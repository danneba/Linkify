import { Link } from "react-router-dom";
import footerBG from "../../assets/footerBG.png";
import eph from "../../assets/eph.jpg";
import dan from "../../assets/dan.jpg";
import community from "../../assets/images/community.png";
import concert from "../../assets/images/concert.png";
import easy from "../../assets/images/easy.png";
import customerService from "../../assets/images/customer-service.png";
import debitCard from "../../assets/images/credit-card.png";
import questionMark from "../../assets/images/question-mark.png";

import { UilReact } from "@iconscout/react-unicons";
function About() {
  return (
    <div className="flex flex-col bg-mainRed">
      <div className="flex relative h-[300px] bg-white">
        <img
          src={footerBG}
          className="h-[400px] absolute w-full top-0 rotate-180"
          alt=""
        />
        <div className="flex flex-col gap-4 justify-center items-center relative w-full">
          <h1 className="flex text-white text-6xl font-semibold">
            About Linkify Events:
          </h1>
          <p className="text-white font-semibold text-6xl mb-12">
            Your trusted event ticketing partner
          </p>
          {/* <div className="flex absolute -bottom-1/4">
            <img src={event} className="flex h-96 rounded-lg w-[1000px]" />
          </div> */}
        </div>
      </div>
      <div className="flex flex-col pt-44 gap-8 justify-center items-center bg-white">
        <p className="flex text-pretify font-semibold text-7xl ">Our Mission</p>
        <p className="flex text-pretify font-semibold text-4xl w-[60%] text-center">
          Our mission is to provide a seamless and convenient ticketing
          experience for all of our users.
        </p>
      </div>
      <div className="flex flex-col bg-white justify-center gap-4 items-center">
        <div className="flex flex-wrap justify-evenly w-[95%] lg:w-[80%] py-20 gap-10 gap-y-20">
          <div
            className="flex flex-col justify-center items-center text-center
          w-[70%] sm:w-[50%] md:w-[30%] border-2 hover:bg-primary cursor-pointer hover:text-white px-10 py-5 rounded-lg shadow-md gap-5 font-semibold "
          >
            <img
              src={concert}
              alt="easy.png"
              className="w-24 bg-gradient-to-tr from-blue-500 to-blue-600 rounded-full p-3"
            />
            <p>
              We strive to make the process of purchasing tickets as easy and
              hassle-free as possible.
            </p>
          </div>
          <div
            className="flex flex-col justify-center items-center text-center
          w-[70%] sm:w-[50%] md:w-[30%] border-2  hover:bg-primary cursor-pointer hover:text-white px-10 py-5 rounded-lg shadow-md gap-5 font-semibold "
          >
            <img src={easy} alt="easy.png" className="w-24" />

            <p>
              Our website is designed to be user-friendly, with clear and
              concise information about each event, including the venue, date,
              time, and ticket prices.
            </p>
          </div>
          <div
            className="flex flex-col justify-center items-center text-center
          w-[70%] sm:w-[50%] md:w-[30%] border-2  hover:bg-primary cursor-pointer hover:text-white px-10 py-5 rounded-lg shadow-md gap-5 font-semibold "
          >
            <img src={debitCard} alt="easy.png" className="w-24" />

            <p>
              We also offer various payment options and secure checkout, giving
              you peace of mind when making a purchase.
            </p>
          </div>
          <div
            className="flex flex-col justify-center items-center text-center
          w-[70%] sm:w-[50%] md:w-[30%] border-2  hover:bg-primary cursor-pointer hover:text-white px-10 py-5 rounded-lg shadow-md gap-5 font-semibold "
          >
            <img
              src={customerService}
              alt="easy.png"
              className="w-24 bg-gradient-to-tr from-purple-500 to-pink-500 rounded-full p-3"
            />

            <p>
              Our team is dedicated to providing excellent customer service and
              support.
            </p>
          </div>
          <div
            className="flex flex-col justify-center items-center text-center
          w-[70%] sm:w-[50%] md:w-[30%] border-2  hover:bg-primary cursor-pointer hover:text-white px-10 py-5 rounded-lg shadow-md gap-5 font-semibold "
          >
            <img
              src={questionMark}
              alt="easy.png"
              className="w-24 bg-white rounded-full"
            />

            <p>
              If you have any questions or concerns, we are always available to
              assist you.
            </p>
          </div>
          <div
            className="flex flex-col justify-center items-center text-center
          w-[70%] sm:w-[50%] md:w-[30%] border-2  hover:bg-primary cursor-pointer hover:text-white px-10 py-5 rounded-lg shadow-md gap-5 font-semibold "
          >
            <img
              src={community}
              alt="easy.png"
              className="w-24 bg-white rounded-full"
            />

            <p>
              We aim to create a community of event-goers who share their
              experiences and feedback with us, allowing us to improve our
              services and offerings continuously.
            </p>
          </div>
        </div>
        <div className="flex justify-center items-center mt-16">
          <p className="flex text-pretify font-semibold text-4xl w-[60%] text-center whitespace-nowrap">
            Ready to get started?
          </p>
        </div>
        <div className="flex mt-12  ml-16">
          <Link
            to="/login"
            className="flex py-4 px-8 bg-about text-white text-lg font-semibold justify-center items-center"
          >
            Create Event
          </Link>
        </div>
        <div className="flex justify-center items-center mt-16">
          <p className="flex text-Primary font-Lobster font-semibold text-4xl w-[60%] text-center whitespace-nowrap">
            The Team
          </p>
        </div>
        <div className="flex flex-col md:flex-row justify-between gap-x-20 gap-y-10 xl:gap-x-44 my-8 mb-20">
          <a
            href="https://www.linkedin.com/in/daniel-kassahun/"
            className="flex flex-col cursor-pointer relative shadow-sm hover:shadow-xl py-14 rounded-lg border px-6 items-center justify-center bg-primary text-white"
          >
            <img
              src={dan}
              className="rounded-full h-44 shadow-2xl  mb-6 bg-cover"
            />
            <p className="flex ml-6 mt-4 text-2xl font-semibold text-mainRed ">
              Daniel Kassahun
            </p>
            <p className="flex  text-lg text-gray-500 font-Lobster">
              Co-founder
            </p>
            <p className="w-64 text-center">
              Responsible for Operating, designing, developing and testing
              Linkify Events.
            </p>
            <UilReact className="w-10 absolute top-5 right-5 text-sky-400" />
          </a>
          <a
            href="https://www.linkedin.com/in/ephremdemlew/"
            className="flex flex-col cursor-pointer relative shadow-sm hover:shadow-xl py-14 rounded-lg border px-6 items-center justify-center bg-primary text-white"
          >
            <img
              src={eph}
              className="rounded-full shadow-2xl w-44 h-44  mb-6"
            />
            <p className="flex ml-6 mt-4 text-2xl font-semibold text-mainRed ">
              Ephrem Demlew
            </p>
            <p className="flex  text-lg text-gray-500 font-Lobster">
              Co-founder
            </p>
            <p className="w-64 text-center">
              Responsible for Operating, designing, developing and testing
              Linkify Events.
            </p>
            <UilReact className="w-10 absolute top-5 right-5 text-sky-400" />
          </a>
        </div>
      </div>
      <div className="flex flex-col w-full bg-mainRed py-14 justify-center items-center mt-32 -mb-56 pb-40 font-Lobster">
        <p className="text-white text-2xl font-bold ">
          Event ticketing just got easier
        </p>
        <p className="text-white text-5xl font-semibold ">
          Create your events in <span className="text-primary">2 minutes</span>
        </p>
        <div className="flex mt-12  ">
          <Link
            to="/login"
            className="flex py-4 px-8 bg-primary rounded text-white text-lg font-semibold justify-center items-center"
          >
            Create Event
          </Link>
        </div>
      </div>
    </div>
  );
}
export default About;
