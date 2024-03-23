import Image from "next/image";
import {
  ChevronRight,
  EmailDesign,
  WebsiteDesign,
  EmailSignature,
  DavidAvatar,
  JerryAvatar,
  ArrowRight,
  SmallBlur,
  BigBlur,
} from "~/public";

export default function Articles() {
  return (
    <div className="px-clamp-120px py-clamp-20 text-white">
      <div className="layout relative">
        <Image
          src={SmallBlur}
          alt=""
          width={306}
          height={324}
          className="absolute -right-40 -rotate-[30deg] -bottom-44 blur-3xl"
        />
        <Image
          src={BigBlur}
          alt=""
          width={392}
          height={424}
          className="absolute -left-40 rotate-[20deg] -top-32 blur-3xl"
        />
        {/* TOP */}
        <div className="flex justify-between items-end mb-clamp-16 relative z-10">
          <div className="grid gap-clamp-8 w-[clamp(38.6rem,14.846rem+37.115vw,48.25rem)]">
            <div className="grid gap-clamp-6">
              <h1 className="font-medium text-clamp-56">Articles</h1>
              <p className="text-clamp-xl">
                Get better at web design and email marketing: articles,
                inspiration, examples, and tutorials. Learn how to create
                websites and email newsletters.
              </p>
            </div>
            <div className="max-w-fit rounded-full gradients-4-br p-[1px] text-white mb-clamp-8">
              <div className="flex items-center justify-center bg-[#191931] py-clamp-5 px-clamp-10 rounded-[90px] text-clamp-18 font-light">
                Browse all articles
              </div>
            </div>
          </div>
          <div className="flex gap-clamp-5 h-fit">
            <div className="max-w-fit rounded-full gradients-4-br p-[1px] text-white mb-clamp-8">
              <div className="flex items-center justify-center bg-[#191931] p-clamp-4 rounded-[90px]">
                <Image
                  src={ChevronRight}
                  alt=""
                  width={32}
                  height={32}
                  className="rotate-180"
                />
              </div>
            </div>
            <div className="max-w-fit rounded-full gradients-4-br p-[1px] text-white mb-clamp-8">
              <div className="flex items-center justify-center bg-[#191931] p-clamp-4 rounded-[90px]">
                <Image src={ChevronRight} alt="" width={32} height={32} />
              </div>
            </div>
          </div>
        </div>
        {/* BOTTOM */}
        <div className="grid grid-cols-3 gap-clamp-5 relative z-10">
          <div className="grid justify-center">
            <Image src={EmailDesign} alt="" width={374} height={246} />
            <div className="grid gap-clamp-6 pt-clamp-6 max-w-[374px]">
              <div className="grid gap-5">
                <p className="bg-[#2F80ED] px-4 py-2 rounded-full font-medium text-clamp-sm w-fit">
                  Email Design
                </p>
                <div className="grid gap-3">
                  <div className="flex justify-center items-center gap-2 w-fit">
                    <Image
                      src={DavidAvatar}
                      alt=""
                      width={24}
                      height={24}
                      className="border border-white rounded-full"
                    />
                    <p className="font-medium text-clamp-bs">Nataly Birch</p>
                  </div>
                  <p className="font-medium text-clamp-2xl">
                    mail Design: An Extensive Guide Featuring Illustrative
                    Examples
                  </p>
                </div>
              </div>
              <button className="flex gap-[10px] items-center">
                <p className="text-clamp-bs">Read More</p>
                <Image src={ArrowRight} alt="" width={20} height={20} />
              </button>
            </div>
          </div>
          <div className="grid justify-center">
            <Image src={WebsiteDesign} alt="" width={374} height={246} />
            <div className="grid gap-6 pt-6 max-w-[374px]">
              <div className="grid gap-5">
                <p className="bg-[#27AE60] px-4 py-2 rounded-full font-medium text-clamp-sm w-fit">
                  Website Design
                </p>
                <div className="grid gap-3">
                  <div className="flex justify-center items-center gap-2 w-fit">
                    <div className="flex -space-x-2">
                      <Image
                        src={DavidAvatar}
                        alt=""
                        width={24}
                        height={24}
                        className="border border-white rounded-full"
                      />
                      <Image
                        src={JerryAvatar}
                        alt=""
                        width={24}
                        height={24}
                        className="border border-white rounded-full"
                      />
                    </div>
                    <p className="font-medium text-clamp-bs">
                      Nataly Birch & Andrian Valeanu
                    </p>
                  </div>
                  <p className="font-medium text-clamp-2xl">
                    Website Design: A Comprehensive Guide with Illustrative
                    Examples
                  </p>
                </div>
              </div>
              <button className="flex gap-[10px] items-center">
                <p className="text-clamp-sm">Read More</p>
                <Image src={ArrowRight} alt="" width={20} height={20} />
              </button>
            </div>
          </div>
          <div className="grid justify-center">
            <Image src={EmailSignature} alt="" width={374} height={246} />
            <div className="grid gap-6 pt-6 max-w-[374px]">
              <div className="grid gap-5">
                <p className="bg-[#5C51E0] px-4 py-2 rounded-full font-medium text-clamp-sm w-fit">
                  Email Signature
                </p>
                <div className="grid gap-3">
                  <div className="flex justify-center items-center gap-2 w-fit">
                    <div className="flex -space-x-2">
                      <Image
                        src={DavidAvatar}
                        alt=""
                        width={24}
                        height={24}
                        className="border border-white rounded-full"
                      />
                      <Image
                        src={JerryAvatar}
                        alt=""
                        width={24}
                        height={24}
                        className="border border-white rounded-full"
                      />
                    </div>
                    <p className="font-medium text-clamp-bs">
                      Nataly Birch & Andrian Valeanu
                    </p>
                  </div>
                  <p className="font-medium text-clamp-2xl">
                    Guide to Email Signature Design: Best Practices and
                    Illustrative
                  </p>
                </div>
              </div>
              <button className="flex gap-[10px] items-center">
                <p className="text-clamp-bs">Read More</p>
                <Image src={ArrowRight} alt="" width={20} height={20} />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
