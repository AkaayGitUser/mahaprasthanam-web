import Image from "next/image";

export default function Footer() {
  return ( 
      <>
      {/* Top Image */}
      <div className="w-full">
        <Image
          src="/images/hero/map.png"
          alt="Map"
          width={1920}
          height={350}
          className="w-full h-[250px] object-cover"
        />
      </div>

    <footer className="bg-[#0E2B3E] text-white ">
      {/* Contact Section */}
      <div className="max-w-[1100px] mx-auto  px-6 mt-5">
        <div className=" relative -top-13 bg-[#0E2B3E] shadow-xl">
          <div className="grid grid-cols-1 md:grid-cols-3">
            {/* Call */}
            <div className="flex items-center gap-6 px-10 py-8 border-r border-[#123C56]">
              <Image
                src="/images/hero/p.png"
                alt="Call"
                width={25}
                height={25}
              />

              <div>
                <h3 className="text-[#F78B1F] text-md font-semibold font-plus-jakarta ">
                  Give Us A Call
                </h3>
                <p className="text-sm mt-2 text-gray-300 font-manrope">(91+) 9703153111</p>
              </div>
            </div>

            {/* Mail */}
            <div className="flex items-center gap-6 px-10 py-8 border-r border-[#123C56]">
              <Image
                src="/images/hero/mail.png"
                alt="Mail"
                width={25}
                height={25}
              />

              <div>
                <h3 className="text-[#F78B1F] text-md font-semibold font-plus-jakarta">
                  Send Us A Message
                </h3>
                <p className="text-sm mt-2 text-gray-300 font-manrope">
                  info@mahaprasthanam.com
                </p>
              </div>
            </div>

            {/* Location */}
            <div className="flex items-center gap-6 px-10 py-8">
              <Image
                src="/images/hero/m.png"
                alt="Location"
                width={25}
                height={25}
              />

              <div>
                <h3 className="text-[#F78B1F] text-md font-semibold font-plus-jakarta">
                  Office Location
                </h3>
                <p className="text-sm  mt-2 text-gray-300 font-manrope">
                  JL. Raya Puputan No 142
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Footer Content */}
        <div className="grid lg:grid-cols-4 gap-20 ">
          {/* Logo */}
          <div>
            <Image
              src="/images/hero/vaikunta.png"
              alt="Logo"
              width={300}
              height={150}
            />

            <div className="flex gap-4 mt-12">
              <div className="w-10 h-9.5 rounded-full bg-[#F78B1F] flex items-center justify-center">
                <Image
                  src="/images/hero/f.png"
                  alt="Facebook"
                  width={33}
                  height={33}
                />
              </div>

              <div className="w-10 h-9.5 rounded-full bg-[#F78B1F] flex items-center justify-center">
                <Image
                  src="/images/hero/t.png"
                  alt="Twitter"
                  width={33}
                  height={33}
                />
              </div>

              <div className="w-10 h-9.5 rounded-full bg-[#F78B1F] flex items-center justify-center">
                <Image
                  src="/images/hero/i.png"
                  alt="Instagram"
                  width={33}
                  height={33}
                />
              </div>

              <div className="w-10 h-9.5 rounded-full bg-[#F78B1F] flex items-center justify-center">
                <Image
                  src="/images/hero/l.png"
                  alt="LinkedIn"
                  width={33}
                  height={33}
                />
              </div>
            </div>
          </div>

          {/* Locations */}
          <div>
            <h2 className="text-[#F78B1F] text-xl font-semibold mb-4 font-plus-jakarta">
              Our Locations
            </h2>

            <h3 className="text-[#F78B1F] text-sm font-medium mb-3 font-plus-jakarta">
              Jubilee Hills
            </h3>

            <p className="text-gray-400 text-sm font-manrope ">
              Near Whisper Valley,
              Film Nagar,
              Jubilee Hills,
              Shaikpet,
              Hyderabad,
              Telangana 500104
            </p>
          </div>

          <div className="lg:pt-12">
            <h3 className="text-[#F78B1F] text-sm font-medium mb-3 font-plus-jakarta">
              Punjagutta
            </h3>

            <p className="text-gray-400 text-sm font-manrope">
              CCFW+W7M,
              Nagarjuna Circle Road,
              Dwarakapuri,
              Punjagutta,
              Hyderabad,
              Telangana 500082
            </p>
          </div>

          <div className="lg:pt-12">
            <h3 className="text-[#F78B1F] text-sm font-medium mb-3 font-plus-jakarta">
              Begumpet
            </h3>

            <p className="text-gray-400 text-sm font-manrope">
              Begumpet,
              Hyderabad,
              Telangana 500018
            </p>
          
          </div>
          {/* Copyright Section */}
          <div className="col-span-full border-t border-gray-900 pt-4 mb-6 flex flex-col md:flex-row justify-between items-center gap-2"> 
            <p className="text-gray-400 text-xs">
              Copyright © Vaikunta Mahaprasthanam Crematorium.   
            </p>
            <p className="text-gray-400 text-xs text-right">
              Copyright © 2021 . All Rights Reserved.   
            </p>
          </div>
        </div>
      </div>
    </footer>
    </>
  );
}