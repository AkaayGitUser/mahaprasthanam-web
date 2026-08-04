"use client";

import Header from "../../components/layout/header";
import Image from "next/image";
import { useState } from "react";
import { useRouter } from "next/navigation";

export default function BookPage() {
  const initialErrors = {
    location: "",
    service: "",
    name: "",
    mobile: "",
    date: "",
    attendees: "",
  };
  const router = useRouter();
  const [location, setLocation] = useState("");
  const [service, setService] = useState("");
  const [name, setName] = useState("");
  const [mobile, setMobile] = useState("");
  const [date, setDate] = useState("");
  const [attendees, setAttendees] = useState("");

  const [errors, setErrors] = useState({ ...initialErrors });

  const validate = () => {
    const newErrors = { ...initialErrors };

    if (!location || location === "") {
      newErrors.location = "Please select a location";
    }

    if (!service || service === "") {
      newErrors.service = "Please select a service";
    }

    if (!name.trim()) {
      newErrors.name = "Name is required";
    } else if (!/^[A-Za-z\s]+$/.test(name)) {
      newErrors.name = "Please Enter a valid Name";
    }

    if (!mobile.trim()) {
      newErrors.mobile = "Mobile number is required";
    } else if (!/^[6-9]\d{9}$/.test(mobile)) {
      newErrors.mobile = "Enter a valid 10-digit mobile number";
    }

    if (!date) {
      newErrors.date = "Date is required";
    }

    if (!attendees || attendees === "") {
      newErrors.attendees = "Number of attendees is required";
    } else if (Number(attendees) <= 0 || !Number.isInteger(Number(attendees))) {
      newErrors.attendees = "Please enter a valid number of attendees";
    }

    setErrors(newErrors);
    return !Object.values(newErrors).some(Boolean);
  };

  const handleSubmit = (): boolean => {
    if (validate()) {
      alert("Form Submitted Successfully");

      setLocation("");
      setService("");
      setName("");
      setMobile("");
      setDate("");
      setAttendees("");
      setErrors({ ...initialErrors });

      router.push("/Front");
      return true; // Indicate successful submission
    }
    return false; // Indicate validation failure
  };

  return (
    <div>
      <Header />

      <section
        className="relative min-h-screen bg-cover bg-center"
        style={{
          backgroundImage: "url('/images/hero/Sections.png')",
        }}
      >
        {/* Overlay */}
        <div className="absolute inset-0 bg-black/40"></div>

        <div className="relative z-10 max-w-7xl mx-auto px-14 pt-40">
          <div className="grid lg:grid-cols-2 gap-10 items-center">
            {/* Left Side */}
            <div>
              <h1 className="text-5xl font-bold leading-tight">
                Arrange a Dignified
                <br />
                Farewell
              </h1>

              <p className="text-md mt-10 max-w-md leading-relaxed font-manrope">
                Begin the arrangements with ease. Share your requirements with
                our team and we will guide you through the appropriate rituals,
                services and arrangements.
              </p>
            </div>

            {/* Right Side Form */}
            <div className="bg-white rounded-md p-6 shadow-xl">
              <h2 className="text-center font-manrope text-black text-lg font-semibold mb-4">
                BOOK A SERVICE
              </h2>

              <div className="grid grid-cols-2 gap-5">
                {/* Location */}
                <div className="relative w-full">
                  <select
                    onChange={(e) => setLocation(e.target.value)}
                    className="border border-gray-300 text-gray-700 rounded-md appearance-none focus:outline-none focus:ring-0 focus:border-gray-300 w-full h-10 px-3"
                    defaultValue=""
                  >
                    <option value="" disabled hidden>
                      {" "}
                      Enter Location{" "}
                    </option>{" "}
                    <option className="bg-[#F8F6F3] text-black" value="Jubilee Hills">
                      {" "}
                      Jubilee Hills{" "}
                    </option>{" "}
                    <option className="bg-[#F8F6F3] text-black" value="Panjagutta">
                      {" "}
                      Panjagutta{" "}
                    </option>{" "}
                    <option className="bg-[#F8F6F3] text-black" value="Begumpet">
                      Begumpet
                    </option>{" "}
                  </select>
                  {errors.location && (
                    <p className="text-red-500 text-sm mt-1">
                      {errors.location}
                    </p>
                  )}

                  <div className="absolute inset-y-0 right-3 flex items-center pointer-events-none">
                    <Image
                      src="/images/hero/Group.png"
                      alt="Dropdown"
                      width={16}
                      height={16}
                    />
                  </div>
                </div>

                {/* Services */}
                <div className="relative w-full">
                  <select
                    onChange={(e) => setService(e.target.value)}
                    className="border border-gray-300 text-gray-700 rounded-md appearance-none focus:outline-none focus:ring-0 focus:border-gray-300 w-full h-10 px-3"
                    defaultValue=""
                  >
                    <option value="" disabled hidden>
                      {" "}
                      Select Services{" "}
                    </option>{" "}
                    <option className="bg-[#F8F6F3]  text-black" value="Rituals & Last Rites">
                      {" "}
                      Rituals & Last Rites{" "}
                    </option>{" "}
                    <option className="bg-[#F8F6F3] text-black" value="Cremation Service">
                      {" "}
                      Cremation Service{" "}
                    </option>{" "}
                    <option className="bg-[#F8F6F3] text-black" value="Complete Funeral Assistance">
                      {" "}
                      Complete Funeral Assistance{" "}
                    </option>{" "}
                    <option className="bg-[#F8F6F3] text-black" value="Other Requirements">
                      {" "}
                      Other Requirements{" "}
                    </option>{" "}
                  </select>

                  {errors.service && (
                    <p className="text-red-500 text-sm mt-1">
                      {errors.service}
                    </p>
                  )}

                  <div className="absolute inset-y-0 right-3 flex items-center pointer-events-none">
                    <Image
                      src="/images/hero/Group.png"
                      alt="Dropdown"
                      width={16}
                      height={16}
                    />
                  </div>
                </div>

                {/* Name */}
                <div>
                  <input
                    type="text"
                    placeholder="Enter Name"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    className="border border-gray-300 text-black placeholder:text-gray-700 rounded-md w-full h-10 px-3 focus:outline-none focus:ring-0 focus:border-gray-300"
                    required
                  />

                  {errors.name && (
                    <p className="text-red-500 text-sm mt-1">{errors.name}</p>
                  )}
                </div>

                {/* Mobile */}
                <div>
                  <input
                    type="tel"
                    placeholder="Enter Mobile Number"
                    value={mobile}
                    onChange={(e) => setMobile(e.target.value)}
                    maxLength={10}
                    className="border border-gray-300 text-black placeholder:text-gray-700 rounded-md w-full h-10 px-3 focus:outline-none focus:ring-0 focus:border-gray-300"
                  />

                  {errors.mobile && (
                    <p className="text-red-500 text-sm mt-1">{errors.mobile}</p>
                  )}
                </div>

                {/* Date */}
                <div>
                  <div className="relative w-full">
                    <input
                      type="date"
                      value={date}
                      onChange={(e) => setDate(e.target.value)}
                      className="border border-gray-300 text-gray-700 rounded-md w-full h-10 px-3 focus:outline-none focus:ring-0 focus:border-gray-300"
                    />

                    {/* <div className="absolute inset-y-0 right-3 flex items-center pointer-events-none">
                      <Image
                        src="/images/hero/date.png"
                        alt="Calendar"
                        width={16}
                        height={16}
                      />
                    </div> */}
                  </div>

                  {errors.date && (
                    <p className="text-red-500 text-sm mt-1">{errors.date}</p>
                  )}
                </div>

                {/* Attendees */}
                <div>
                  <input
                    type="text"
                    placeholder="No. of attendees"
                    value={attendees}
                    onChange={(e) => setAttendees(e.target.value)}
                    className="border border-gray-300 text-black placeholder:text-gray-700 rounded-md w-full h-10 px-3 focus:outline-none focus:ring-0 focus:border-gray-300"
                  />
                  {errors.attendees && (
                    <p className="text-red-500 text-sm mt-1">
                      {errors.attendees}
                    </p>
                  )}
                </div>
              </div>
              <button
                onClick={handleSubmit}
                className="w-full h-10 mt-6 bg-orange-400 text-white rounded-full text-md font-semibold font-plus-jakarta"
              >
                Request Assistance
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
