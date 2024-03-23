import React, { useState } from "react";
import Image from "next/image";
import {
  VentureImage,
  Checked,
  CardBlue,
  CardOrange,
  CardWhite,
  GraphUp,
} from "~/public";
import { VentureDatas, VentureActiveDatas } from "@/data/staticData";

export default function Venture() {
  const [isClicked, setIsClicked] = useState(0);

  const changeClickedValue = (z: number) => {
    if (isClicked === z) {
      setIsClicked(0);
    } else {
      setIsClicked(z);
    }
  }

  return (
    <section className="bg-[#191931] py-20 px-[70px] rounded-[20px] m-10 overflow-hidden">
      <div className="layout flex flex-col items-center justify-center">
        <div className="max-w-fit rounded-full gradients-4-br p-[1px] text-white mb-8">
          <div className="flex items-center justify-center bg-[#191931] py-2 px-4 rounded-[90px] text-clamp-bs">
            Venture & private equity software
          </div>
        </div>
        <h1 className="text-white text-clamp-56 leading-[1.1] text-center mb-16 font-medium tracking-tight">
          Maximize opportunities for venture and private equity firms with our
          software,{" "}
          <span className="bg-clip-text text-transparent gradients-3-br">
            ensuring seamless growth at any stage or provider.
          </span>
        </h1>
        <div className="border-y border-white/60 text-white/60 w-full flex flex-col divide-y divide-white/60">
          {VentureDatas.map((data, index) => (
            <>
              <div
                key={index}
                className="flex justify-between items-center py-8"
                onClick={() => changeClickedValue(data.id)}
              >
                <div className="flex items-center gap-3">
                  <p className={`font-semibold text-clamp-bs ${isClicked === index+1 && 'bg-clip-text text-transparent gradients-4-br'}`}>{data.no}</p>
                  <p className={`text-clamp-28 font-light ${isClicked === index+1 && 'text-white'}`}>{data.title}</p>
                </div>
                <p className={`text-lg max-w-[476px] font-light ${isClicked === index+1 && 'text-white'}`}>{data.desc}</p>
              </div>
              {VentureActiveDatas.map(
                (dataActive, idx) =>
                  dataActive.for === index+1 && isClicked === dataActive.for && (
                    <div key={idx} className="py-8 flex gap-0 relative">
                      <div className="absolute bg-[#302D47] rounded-full p-[30px] bottom-[58px] left-[26px]">
                        <Image src={GraphUp} alt="" width={48} height={48} />
                      </div>
                      <Image
                        src={VentureImage}
                        alt=""
                        width={569}
                        height={439}
                        className="rounded-l-[20px]"
                      />
                      <div className="bg-[#302D47] rounded-r-[20px] min-h-full w-full py-[47px] px-[24px] flex flex-col justify-between">
                        <div className="w-full h-fit grid divide-y divide-white/30 text-white border-y border-white/30">
                          {dataActive.pair.map((dataPair, idx2) => (
                            <div
                              key={idx2}
                              className="flex justify-between py-3 items-center"
                            >
                              <div className="flex gap-4 items-center">
                                <Image
                                  src={Checked}
                                  alt=""
                                  width={24}
                                  height={24}
                                />
                                <p className="font-medium text-clamp-xl">
                                  {dataPair.left}
                                </p>
                              </div>
                              <p className="font-medium text-clamp-xl">
                                {dataPair.right}
                              </p>
                            </div>
                          ))}
                        </div>
                        <div className="flex justify-between h-fit items-center">
                          <div className="flex gap-[6px]">
                            <Image
                              src={CardWhite}
                              alt=""
                              width={32}
                              height={32}
                            />
                            <Image
                              src={CardOrange}
                              alt=""
                              width={32}
                              height={32}
                            />
                            <Image
                              src={CardBlue}
                              alt=""
                              width={32}
                              height={32}
                            />
                          </div>
                          <p className="font-medium text-clamp-xl">
                            Documents reviewed
                          </p>
                        </div>
                      </div>
                    </div>
                  )
              )}
            </>
          ))}
        </div>
        <div className="flex flex-col justify-center items-center gap-4 pt-10 text-clamp-bs">
          <p className="font-extralight text-white/60">
            Secure, branded document sharing for LPs.
          </p>
          <button className="gradients-4-br rounded-full px-40 py-4 font-extralight text-white">
            Explore Date Rooms
          </button>
        </div>
      </div>
    </section>
  );
}
