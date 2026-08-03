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

    <footer className="bg-[#072B44] text-white">
      {/* Contact Section */}
      <div className="max-w-[1100px] mx-auto  px-6">
        <div className=" relative -top-13 bg-[#0B3049] shadow-xl">
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
                <h3 className="text-[#F78B1F] text-md font-semibold ">
                  Give Us A Call
                </h3>
                <p className="text-md mt-2 text-gray-300">(91+) 9703153111</p>
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
                <h3 className="text-[#F78B1F] text-md font-semibold">
                  Send Us A Message
                </h3>
                <p className="text-md mt-2 text-gray-300">
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
                <h3 className="text-[#F78B1F] text-md font-semibold">
                  Office Location
                </h3>
                <p className="text-md  mt-2 text-gray-300">
                  Hyderabad, Telangana
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Footer Content */}
        <div className="grid lg:grid-cols-4 gap-15 pb-16">
          {/* Logo */}
          <div>
            <Image
              src="/images/hero/vaikunta.png"
              alt="Logo"
              width={350}
              height={150}
            />

            <div className="flex gap-5 mt-12">
              <div className="w-14 h-10 rounded-full bg-[#F78B1F] flex items-center justify-center">
                <Image
                  src="/images/hero/f.png"
                  alt="Facebook"
                  width={35}
                  height={35}
                />
              </div>

              <div className="w-14 h-10 rounded-full bg-[#F78B1F] flex items-center justify-center">
                <Image
                  src="/images/hero/t.png"
                  alt="Twitter"
                  width={22}
                  height={22}
                />
              </div>

              <div className="w-14 h-10 rounded-full bg-[#F78B1F] flex items-center justify-center">
                <Image
                  src="/images/hero/i.png"
                  alt="Instagram"
                  width={35}
                  height={35}
                />
              </div>

              <div className="w-14 h-10 rounded-full bg-[#F78B1F] flex items-center justify-center">
                <Image
                  src="/images/hero/l.png"
                  alt="LinkedIn"
                  width={35}
                  height={35}
                />
              </div>
            </div>
          </div>

          {/* Locations */}
          <div>
            <h2 className="text-[#F78B1F] text-xl font-semibold mb-5">
              Our Locations
            </h2>

            <h3 className="text-[#F78B1F] text-md font-semibold mb-4">
              Jubilee Hills
            </h3>

            <p className="text-gray-400 text-sm ">
              Near Whisper Valley,
              Film Nagar,
              Jubilee Hills,
              Shaikpet,
              Hyderabad,
              Telangana 500104
            </p>
          </div>

          <div className="lg:pt-10">
            <h3 className="text-[#F78B1F] text-lg font-semibold mb-4">
              Punjagutta
            </h3>

            <p className="text-gray-400 text-sm ">
              CCFW+W7M,
              Nagarjuna Circle Road,
              Dwarakapuri,
              Punjagutta,
              Hyderabad,
              Telangana 500082
            </p>
          </div>

          <div className="lg:pt-10">
            <h3 className="text-[#F78B1F] text-lg font-semibold mb-3">
              Begumpet
            </h3>

            <p className="text-gray-400 text-sm   ">
              Begumpet,
              Hyderabad,
              Telangana 500018
            </p>
          
          </div>
          {/* Copyright Section */}
          <div className="col-span-full border-t border-gray-900 pt-4 flex flex-col md:flex-row justify-between items-center gap-2"> 
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