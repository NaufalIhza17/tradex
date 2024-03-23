import React from "react";
import Image from "next/image";
import { SmallBlur, BigBlur } from "~/public";

export default function Fostering() {
  return (
    <section className="w-full text-white p-clamp-120px overflow-hidden">
      <div className="layout flex flex-col gap-20 relative">
        <Image
          src={SmallBlur}
          alt=""
          width={306}
          height={324}
          className="absolute -right-24 -rotate-[30deg] -bottom-5 blur-3xl"
        />
        <Image
          src={BigBlur}
          alt=""
          width={392}
          height={424}
          className="absolute -left-52 rotate-[20deg] -top-32 blur-3xl"
        />
        <div className="flex justify-between items-center relative z-10">
          <p className="text-clamp-56 leading-none font-semibold">
            Fostering a Culture of{" "}
            <span className="bg-clip-text text-transparent gradients-4-br">
              Continuous Innovation.
            </span>
          </p>
          <p className="max-w-[clamp(23.9rem,7.808rem+25.144vw,30.438rem)] font-light text-clamp-lg">
            With our platform facilitating over half of all top-tier VC deals,
            AngelList is a driving force in venture investing. This deep
            involvement grants us the ability to identify market voids and craft
            innovative solutions to address them.
          </p>
        </div>
        <div className="flex justify-between items-center relative z-10">
          <p className="text-clamp-140 font-semibold">$183B</p>
          <div className="grid grid-cols-2 gap-clamp-8">
            <div>
              <p className="text-clamp-80 font-semibold">
                23k
                <span className="bg-clip-text text-transparent gradients-4-br">
                  +
                </span>
              </p>
              <p className="text-clamp-2xl text-[#7E8492]">
                Funds and syndicates
              </p>
            </div>
            <div>
              <p className="text-clamp-80 font-semibold">
                85k
                <span className="bg-clip-text text-transparent gradients-4-br">
                  +
                </span>
              </p>
              <p className="text-clamp-2xl text-[#7E8492]">Active investors</p>
            </div>
            <div>
              <p className="text-clamp-80 font-semibold">
                12k
                <span className="bg-clip-text text-transparent gradients-4-br">
                  +
                </span>
              </p>
              <p className="text-clamp-2xl text-[#7E8492]">Active startups</p>
            </div>
            <div>
              <p className="text-clamp-80 font-semibold">$9B</p>
              <p className="text-clamp-2xl text-[#7E8492]">
                Raised by active startups
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
