import React from "react";
import { TestimonialCard } from "..";
import {
  DavidAvatar,
  JerryAvatar,
  MeganAvatar,
  StevanoAvatar,
  TangAvatar,
  YanbuAvatar,
} from "~/public/index";

export default function Testimonial() {
  return (
    <section className="bg-[#191931] overflow-hidden text-white px-clamp-10 rounded-[20px] m-10">
      <div className="layout flex items-center justify-between">
        <div className="max-w-[clamp(32.5rem,12.5rem+31.25vw,40.625rem)] h-fit flex gap-[clamp(0.625rem,-3.99rem+7.212vw,2.5rem)] relative">
          <div className="absolute w-full h-32 bg-gradient-to-b from-[#191932] to-transparent top-0"></div>
          <div className="absolute w-full h-32 bg-gradient-to-b to-[#191932] from-transparent bottom-0"></div>
          <div className="flex flex-col gap-[clamp(0.625rem,-2.76rem+5.288vw,2rem)]">
            <TestimonialCard
              avatar={MeganAvatar}
              name="Megan"
              position="Student at New York University"
              comment="“This cup is fantastic! It is so well insulated. I live in the desert, and it keeps my cold drinks cold in the heat. Fits in my car cupholders (with 2 side by side).”"
            />
            <TestimonialCard
              avatar={DavidAvatar}
              name="David K."
              position="Recent graduate, Marketing at Sweatpals"
              comment="“One of AngelList’s biggest benefits is its all-in-one software-first approach to admin, legal and tax services.”"
            />
            <TestimonialCard
              avatar={JerryAvatar}
              name="Jerry Tang"
              position="Recent graduate, Marketing at Sweatpals"
              comment="“I love the color. It’s even better in person. I love that iron flask gives you multiple lids as well. It’s sturdy.”"
            />
          </div>
          <div className="flex flex-col gap-[clamp(0.625rem,-2.76rem+5.288vw,2rem)]">
            <TestimonialCard
              avatar={YanbuAvatar}
              name="Yanbu"
              position="Student at New York University"
              comment="“No other platform combines the power, flexibility, reach, and network effects.”"
            />
            <TestimonialCard
              avatar={StevanoAvatar}
              name="Stevano"
              position="Recent graduate, Marketing at Sweatpals"
              comment="“TRADEX takes the complexity and hassle out of launching a new investment vehicle so we can focus on picking the companies we want to invest in and supporting the founders”"
            />
            <TestimonialCard
              avatar={TangAvatar}
              name="Jerry Tang"
              position="Recent graduate, Marketing at Sweatpals"
              comment="“Joining Mate community is the best thing I have ever done. The projects I worked on gave me the experience I needed in content Marketing”"
            />
          </div>
        </div>
        <div className="flex flex-col max-w-[500px]">
          <div className="max-w-fit rounded-full gradients-4-br to-yellow-500 p-[1px] text-white mb-8">
            <div className="flex items-center justify-center bg-[#191931] py-2 px-4 rounded-[90px] font-light text-clamp-bs">
              Testimonial
            </div>
          </div>
          <div className="flex flex-col gap-7">
            <p className="text-clamp-56 font-medium max-w-[95%] uppercase leading-[1.2]">
              More than 100,000{" "}
              <span className="bg-clip-text text-transparent gradients-3-br">
                people trust us.
              </span>
            </p>
            <p className="text-clamp-22 font-light text-[#CFD5E2] max-w-[92%]">
              Building Trust, One Satisfied Customer at a Time: Experience the
              Assurance and Quality That Over 100,000 People Have Come to Trust
              in Our Brand.
            </p>
            <button className="gradients-4-br rounded-full px-20 py-4 font-extralight text-white max-w-fit text-clamp-bs">
              See All Testimonials
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
