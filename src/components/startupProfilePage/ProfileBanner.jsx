"use client";
import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";
import { FaSquareFacebook } from "react-icons/fa6";
import { FaFacebookMessenger } from "react-icons/fa6";
import { FaRegBookmark } from "react-icons/fa";
import { IoIosShareAlt } from "react-icons/io";
import { FaBookmark } from "react-icons/fa";
import { ImLinkedin } from "react-icons/im";
import companyLogo from "../../assets/company-logo.png";

const ProfileBanner = () => {
  const [bookmark, setBookmark] = useState(false);
  return (
    <div>
      {/* profile banner */}
      <div className="startup-profile-banner lg:h-[230px] md:h-[180px] h-[150px]">
        <div className="container relative h-full">
          <div className="flex justify-end items-end h-full">
            <div className="mb-7 flex items-center gap-4">
              <FaSquareFacebook
                className="cursor-pointer text-white"
                size={36}
              />
              <ImLinkedin className="cursor-pointer text-white" size={36} />
            </div>
          </div>
        </div>
      </div>
      <div className="container">
        {/* profile image part */}
        <div className="flex justify-between  flex-col lg:flex-row md:flex-row">
          <div className="flex items-end gap-4 lg:-mt-[101px]  z-50">
            <div className="lg:w-[203px] lg:h-[203px] md:w-[145px] md:h-[145px] w-[100px] h-[100px] relative">
              <Image
                src={"https://i.ibb.co/9qWJdkH/6.jpg"}
                alt="profile image"
                fill
                className=" rounded-md"
              />
            </div>
            <div>
              <h2 className="text-main font-semibold lg:text-3xl md:text-xl text-[18px]">
                Kim Jun Qung
              </h2>
              <h6 className="text-text font-normal lg:text-xl md:text-[18px] text-base mt-2">
                Founder and CEO at infosys
              </h6>
            </div>
          </div>
          <div className="flex items-center gap-4 mt-5 lg:mt-0">
            <Link href="/message">
              <FaFacebookMessenger size={30} className="text-secondary " />
            </Link>
            <div onClick={() => setBookmark(!bookmark)}>
              {bookmark ? (
                <FaBookmark
                  size={30}
                  className="text-secondary cursor-pointer"
                />
              ) : (
                <FaRegBookmark
                  size={30}
                  className="text-secondary cursor-pointer"
                />
              )}
            </div>
          </div>
        </div>

        <div className="flex items-center justify-between mt-7">
          <div>
            <Image
              src={companyLogo}
              alt="compnay logo"
              width={60}
              height={40}
            />
            <h2 className="lg:text-2xl text-[18px] font-bold text-main mt-4">
              Infosys Technology
            </h2>
          </div>
          <div className="bg-primary px-3 py-1 flex items-center gap-2 rounded-md cursor-pointer">
            <span className="text-base font-normal text-white">Share</span>
            <IoIosShareAlt size={18} className="text-white" />
          </div>
        </div>
        <p className="text-xl font-medium text-main mt-5 w-1/2">
          Making the power of Computer Vision accessible to everyone
        </p>
        <div className="mt-4 mb-6">
          <span className="px-3 py-1 text-sm rounded-md bg-green-100 text-main font-normal mx-1">
            Ai Vision
          </span>
          <span className="px-3 py-1 text-sm rounded-md bg-green-100 text-main font-normal mx-1">
            Software
          </span>
          <span className="px-3 py-1 text-sm rounded-md bg-green-100 text-main font-normal mx-1">
            B2B
          </span>
        </div>
      </div>
    </div>
  );
};

export default ProfileBanner;
