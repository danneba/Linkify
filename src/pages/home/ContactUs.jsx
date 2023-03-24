import { useState, useEffect } from "react";
import { TiTick } from "react-icons/ti";
import Select from "react-select";
import { useQuery, useMutation, gql } from "@apollo/client";
import category from "../../queries/category.js";
import { insertTicket } from "../../queries/Ticket";
import AsyncSelect from "react-select/async";
import Async, { useAsync } from "react-select/async";
import { UilSpinner, UilAngleRight } from "@iconscout/react-unicons";
import { AddEvent } from "../../queries/Event";
import photoMain from "../../assets/photo.jpg";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
import {
  UilUser,
  UilSignOutAlt,
  UilArrowGrowth,
  UilBookmark,
  UilHeadphones,
  UilEnvelopeOpen,
  UilPlusCircle,
} from "@iconscout/react-unicons";
function Contact() {
  return (
    <div className="flex flex-col gap-2 mt-32 w-full">
      <div className="flex flex-col gap-2 justify-center w-full items-center">
        <h1 className="text-5xl font-semibold  ">Contact us</h1>
        <p className="text-xl font-normal">
          Have any questions? We would love to hear from you.
        </p>
      </div>
      <div className="flex mt-14 justify-center gap-8">
        <div className="flex flex-col gap-8 bg-gray-300 shadow-xl hover:shadow-2xl px-8 py-8 rounded-lg">
          <h1 className="text-3xl flex justify-center font-medium">
            Contact Information
          </h1>
          <p>Fill out the form and our team will get back to you soon</p>
          <div className="flex flex-col gap-y-4 ">
            {/* <div className="bg-photo-pic w-32 bg-mainRed"></div> */}
           <img src={photoMain} className="flex w-full px-0" alt="contact"/>
            <span className="flex gap-4">
              <UilHeadphones className="text-mainRed" />
              <p className="text-xl">+2519000000</p>
            </span>
            <span className="flex gap-4">
              <UilEnvelopeOpen className="text-mainRed" />
              <p className="text-xl">contact@eventlinkify.com</p>
            </span>
            <span className="flex gap-2">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="32"
                height="32"
                viewBox="0 0 32 32"
                fill="none"
              >
                <path
                  d="M27.2458 11.6779H20.6023V4.74957C20.6086 3.75711 20.2171 2.80353 19.5152 2.10186C18.8124 1.39091 17.8526 0.993833 16.853 1.00007H4.7495C3.75533 1.00137 2.80236 1.39696 2.09964 2.09971C1.3967 2.80265 1.00127 3.75562 1 4.74957V12.8182C1.00129 13.8122 1.39667 14.7651 2.09964 15.4678C2.80241 16.1708 3.75533 16.5662 4.7495 16.5675H5.01998V18.8722C5.01718 19.2208 5.12007 19.562 5.31484 19.8509C5.50983 20.1399 5.78766 20.3629 6.11188 20.4909C6.31809 20.5724 6.53767 20.6151 6.75943 20.6164C7.21995 20.6162 7.66083 20.4298 7.98182 20.0996L11.364 16.7174V23.4818C11.3601 24.4837 11.7566 25.4457 12.465 26.1543C13.1735 26.8628 14.1356 27.2591 15.1377 27.2552H20.4814L24.0133 30.7679C24.3373 31.1039 24.7835 31.294 25.2503 31.2944C25.4721 31.2931 25.6914 31.2504 25.8977 31.1689C26.2178 31.0392 26.4915 30.8166 26.6834 30.5298C26.8756 30.2431 26.9772 29.9051 26.9753 29.56V27.2553H27.2458C28.2406 27.2553 29.1948 26.8603 29.8987 26.1573C30.6027 25.4544 30.9987 24.5008 31 23.5059V15.4274C30.9987 14.4325 30.6027 13.4787 29.8987 12.7757C29.1948 12.0728 28.2406 11.6778 27.2458 11.6778L27.2458 11.6779ZM10.7214 15.3306L6.95269 19.0704C6.87957 19.1547 6.7605 19.1821 6.65805 19.1381C6.54868 19.0965 6.47837 18.9893 6.48398 18.8724V15.8429C6.48398 15.4428 6.15956 15.1181 5.75923 15.1181H4.74954C4.13954 15.1181 3.55454 14.8759 3.12317 14.4445C2.69198 14.0133 2.44955 13.4284 2.44955 12.8184V4.74974C2.44955 4.13973 2.692 3.55474 3.12317 3.12337C3.55457 2.69218 4.13954 2.44975 4.74954 2.44975H16.853C17.4628 2.4491 18.0474 2.69284 18.4764 3.12618C18.9099 3.55521 19.1535 4.13995 19.1528 4.74974V12.8184C19.1528 13.4284 18.9106 14.0134 18.4792 14.4445C18.0478 14.8759 17.4628 15.1181 16.853 15.1181H11.224C11.0318 15.1184 10.8476 15.1947 10.7117 15.3308L10.7214 15.3306ZM29.565 23.4964V23.4966C29.5663 24.1111 29.3221 24.7009 28.8866 25.1344C28.4511 25.5682 27.8603 25.81 27.2458 25.8061H26.2311C25.8308 25.8061 25.5064 26.1305 25.5064 26.5309V29.5603C25.5117 29.6775 25.4425 29.7853 25.3336 29.8289C25.2247 29.8725 25.1 29.8423 25.0232 29.7536L21.2689 26.0187C21.1343 25.8839 20.9521 25.8076 20.7616 25.8061H15.1375C14.5271 25.8061 13.9415 25.5638 13.5095 25.1327C13.0774 24.7015 12.8341 24.1167 12.8328 23.5063V16.568H16.8528C17.793 16.5665 18.6983 16.2121 19.3901 15.5752C20.0816 14.9382 20.5089 14.0648 20.5877 13.1278H27.2455C27.8559 13.1278 28.4413 13.3701 28.8733 13.8012C29.3056 14.2324 29.5489 14.8174 29.5502 15.4278L29.565 23.4964Z"
                  fill="#EA4C89"
                  stroke="#EA4C89"
                  stroke-width="0.5"
                ></path>
                <path
                  d="M23.5397 17.0621L20.1864 20.4442L18.8144 19.043C18.6722 18.9007 18.4792 18.8209 18.2781 18.8209C17.859 18.8209 17.5195 19.1604 17.5195 19.5793C17.5195 19.7805 17.5996 19.9733 17.7417 20.1157L19.6744 22.0484C19.8161 22.1916 20.0094 22.2716 20.2108 22.2705C20.4205 22.2736 20.6226 22.1916 20.7712 22.0434L24.6365 18.1781C24.7823 18.0338 24.8643 17.8373 24.8643 17.6321C24.8643 17.427 24.7823 17.2305 24.6365 17.0862C24.3376 16.7829 23.8518 16.7724 23.5397 17.0621Z"
                  fill="#EA4C89"
                  stroke="#EA4C89"
                  stroke-width="0.5"
                ></path>
                <path
                  d="M10.5896 4.5C10.4011 4.5 10.1837 4.53386 9.96626 4.57248H9.96648C9.4721 4.65983 9.01461 4.89193 8.65221 5.23919C8.48374 5.40204 8.38452 5.62357 8.37568 5.85759C8.36662 6.09163 8.44837 6.32027 8.60389 6.49543C8.86489 6.79504 9.25145 6.79007 9.66686 6.49543C9.6921 6.47192 9.71949 6.45078 9.74904 6.43266C10.0458 6.20769 10.4177 6.10566 10.7878 6.1475C11.095 6.14923 11.3687 6.34206 11.4738 6.63067C11.562 6.90914 11.4556 7.21241 11.213 7.37486C11.1004 7.46999 10.9826 7.55864 10.8603 7.64061C10.5197 7.87723 10.2598 8.2124 10.1155 8.60114C9.97142 8.98984 9.94964 9.41347 10.0534 9.81486C10.1548 10.1967 10.3336 10.3994 10.5704 10.3994C10.8073 10.3994 10.9714 10.2159 11.0778 9.83905C11.1752 9.4592 11.392 9.12054 11.6962 8.87271C11.9474 8.66974 12.2179 8.49092 12.4692 8.28816C12.8452 8.00689 13.103 7.59577 13.1923 7.1348C13.2816 6.67384 13.1959 6.19629 12.9524 5.79485C12.4354 4.87683 11.5995 4.54832 10.5896 4.5Z"
                  fill="#EA4C89"
                  stroke="#EA4C89"
                  stroke-width="0.5"
                ></path>
                <path
                  d="M10.7214 11.0349C10.4703 11.0118 10.2216 11.0996 10.0407 11.2752C9.85947 11.4505 9.76413 11.6964 9.77923 11.948C9.76283 12.2023 9.85408 12.4516 10.0305 12.6354C10.2067 12.8192 10.4522 12.9203 10.707 12.9143C10.9673 12.9285 11.2214 12.8312 11.4056 12.6468C11.59 12.4624 11.6873 12.2083 11.6733 11.948C11.6854 11.6954 11.5876 11.4499 11.4052 11.2748C11.2227 11.0996 10.9733 11.0122 10.7214 11.0349Z"
                  fill="#EA4C89"
                  stroke="#EA4C89"
                  stroke-width="0.5"
                ></path>
              </svg>
              <p className="text-xl">Help Center</p>
            </span>
          </div>
        </div>
        <div className="flex flex-col gap-4 py-8 px-8 bg-gray-300 shadow-xl hover:shadow-2xl rounded-lg">
          <div className="flex gap-12 w-full">
            <div className="flex gap-2 flex-col">
              <label>First Name*</label>
              <input
                type="text"
                className="rounded-lg outline-none h-12 w-full px-4"
                placeholder="First Name"
              />
            </div>
            <div className="flex gap-2 flex-col">
              <label>Last Name*</label>
              <input
                type="text"
                className="rounded-lg outline-none h-12 w-full px-4"
                placeholder="Last Name"
              />
            </div>
          </div>
          <div className="flex gap-12 w-full">
            <div className="flex gap-2 flex-col">
              <label>Email*</label>
              <input
                type="text"
                className="rounded-lg outline-none h-12 w-full px-4"
                placeholder="Last Name"
              />
            </div>
            <div className="flex gap-2 flex-col">
              <label>Phone Number</label>
              <input
                type="number"
                className="rounded-lg outline-none h-12 w-full px-4"
                placeholder="Phone number"
              />
            </div>
          </div>
          <div className="flex flex-col gap-2 w-full">
            <label>Subject*</label>
            <input
              type="text"
              className="rounded-lg outline-none h-12 w-full px-4"
              placeholder="subject"
            />
          </div>
          <div className="flex flex-col gap-2 w-full">
            <label>Message*</label>
            <textarea
              type="text"
              className="rounded-lg outline-none h-36 w-full py-2 px-4"
              placeholder="your text here..."
            />
          </div>
          <div className="flex justify-end  w-full">
            <button className="flex  bg-mainRed px-8 py-2 rounded-xl hover:shadow-lg ">
              Submit
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
export default Contact;
