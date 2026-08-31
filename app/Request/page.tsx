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
  const [showSuccess, setShowSuccess] = useState(false);
  const [submittedDetails, setSubmittedDetails] = useState({
  location: "",
  service: "",
  name: "",
  mobile: "",
  date: "",
  attendees: "",
  bookingId: "",
});

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

    // Generate booking ID
    const bookingId = `VM-${new Date().getFullYear()}-${Math.floor(
      10000 + Math.random() * 90000
    )}`;

    // Save submitted details
    setSubmittedDetails({
      location,
      service,
      name,
      mobile,
      date,
      attendees,
      bookingId,
    });

    // Show success popup
    setShowSuccess(true);

    return true;
  }

  return false;
};

return (
  <div className="min-h-screen">
    <Header />

    <section
      className="relative min-h-screen bg-cover bg-center bg-no-repeat"
      style={{
        backgroundImage: "url('/images/hero/Sections.png')",
      }}
    >
      {/* Background Overlay */}
      <div className="absolute inset-0 bg-black/40"></div>

      {/* MAIN CONTENT */}
      <div className="relative z-10 w-full max-w-7xl mx-auto px-5 sm:px-8 md:px-10 lg:px-14 pt-28 sm:pt-32 md:pt-36 lg:pt-40 pb-10">
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 xl:gap-16 items-center">

          {/* ================= LEFT CONTENT ================= */}
          <div className="text-white text-center lg:text-left">
            
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-5xl xl:text-6xl font-bold leading-tight">
              Arrange a Dignified
              <br className="hidden sm:block" />
              Farewell
            </h1>

            <p className="text-sm sm:text-base md:text-lg mt-6 sm:mt-8 lg:mt-10 max-w-xl mx-auto lg:mx-0 leading-relaxed font-manrope text-white/90">
              Begin the arrangements with ease. Share your requirements
              with our team and we will guide you through the appropriate
              rituals, services and arrangements.
            </p>

          </div>


          {/* ================= FORM ================= */}
          <div className="w-full bg-white rounded-xl p-5 sm:p-6 md:p-7 lg:p-6 xl:p-8 shadow-2xl">

            <h2 className="text-center font-manrope text-black text-base sm:text-lg md:text-xl font-semibold mb-5 sm:mb-6">
              BOOK A SERVICE
            </h2>

            {/* FORM GRID */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-5">

              {/* LOCATION */}
              <div className="relative w-full">
                <select
                  value={location}
                  onChange={(e) => setLocation(e.target.value)}
                  className="border border-gray-300 text-gray-700 rounded-lg appearance-none focus:outline-none  w-full h-11 sm:h-12 px-3 sm:px-4 text-sm sm:text-base bg-[#F8F6F3]"
                >
                  <option value="" disabled>
                    Enter Location
                  </option>

                  <option value="Jubilee Hills">
                    Jubilee Hills
                  </option>

                  <option value="Panjagutta">
                    Panjagutta
                  </option>

                  <option value="Begumpet">
                    Begumpet
                  </option>
                </select>

                {errors.location && (
                  <p className="text-red-500 text-xs sm:text-sm mt-1">
                    {errors.location}
                  </p>
                )}

                <div className="absolute right-3 top-1/2 -translate-y-1/2 pointer-events-none">
                  <Image
                    src="/images/hero/Group.png"
                    alt="Dropdown"
                    width={16}
                    height={16}
                  />
                </div>
              </div>


              {/* SERVICE */}
              <div className="relative w-full">
                <select
                  value={service}
                  onChange={(e) => setService(e.target.value)}
                  className="border border-gray-300 text-gray-700 rounded-lg appearance-none focus:outline-none  w-full h-11 sm:h-12 px-3 sm:px-4 text-sm sm:text-base bg-[#F8F6F3]"
                >
                  <option value="" disabled>
                    Select Services
                  </option>

                  <option value="Rituals & Last Rites">
                    Rituals & Last Rites
                  </option>

                  <option value="Cremation Service">
                    Cremation Service
                  </option>

                  <option value="Complete Funeral Assistance">
                    Complete Funeral Assistance
                  </option>

                  <option value="Other Requirements">
                    Other Requirements
                  </option>
                </select>

                {errors.service && (
                  <p className="text-red-500 text-xs sm:text-sm mt-1">
                    {errors.service}
                  </p>
                )}

                <div className="absolute right-3 top-1/2 -translate-y-1/2 pointer-events-none">
                  <Image
                    src="/images/hero/Group.png"
                    alt="Dropdown"
                    width={16}
                    height={16}
                  />
                </div>
              </div>


              {/* NAME */}
              <div className="w-full">
                <input
                  type="text"
                  placeholder="Enter Name"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  className="border border-gray-300 text-black placeholder:text-gray-500 rounded-lg w-full h-11 sm:h-12 px-3 sm:px-4 text-sm sm:text-base focus:outline-none "
                />

                {errors.name && (
                  <p className="text-red-500 text-xs sm:text-sm mt-1">
                    {errors.name}
                  </p>
                )}
              </div>


              {/* MOBILE */}
              <div className="w-full">
                <input
                  type="tel"
                  placeholder="Enter Mobile Number"
                  value={mobile}
                  onChange={(e) => setMobile(e.target.value)}
                  maxLength={10}
                  className="border border-gray-300 text-black placeholder:text-gray-500 rounded-lg w-full h-11 sm:h-12 px-3 sm:px-4 text-sm sm:text-base focus:outline-none"
                />

                {errors.mobile && (
                  <p className="text-red-500 text-xs sm:text-sm mt-1">
                    {errors.mobile}
                  </p>
                )}
              </div>


              {/* DATE */}
              <div className="w-full">
                <input
                  type="date"
                  value={date}
                  onChange={(e) => setDate(e.target.value)}
                  className="border border-gray-300 text-gray-700 rounded-lg w-full h-11 sm:h-12 px-3 sm:px-4 text-sm sm:text-base focus:outline-none bg-white"
                />

                {errors.date && (
                  <p className="text-red-500 text-xs sm:text-sm mt-1">
                    {errors.date}
                  </p>
                )}
              </div>


              {/* ATTENDEES */}
              <div className="w-full">
                <input
                  type="number"
                  min="1"
                  placeholder="No. of attendees"
                  value={attendees}
                  onChange={(e) => setAttendees(e.target.value)}
                  className="border border-gray-300 text-black placeholder:text-gray-500 rounded-lg w-full h-11 sm:h-12 px-3 sm:px-4 text-sm sm:text-base focus:outline-none"
                />

                {errors.attendees && (
                  <p className="text-red-500 text-xs sm:text-sm mt-1">
                    {errors.attendees}
                  </p>
                )}
              </div>

            </div>


            {/* BUTTON */}
            <button
              onClick={handleSubmit}
              className="w-full h-11 sm:h-12 mt-5 sm:mt-6 bg-[#E88A18] hover:bg-[#D97706] active:scale-[0.99] text-white rounded-full text-sm sm:text-base font-semibold font-plus-jakarta transition-all duration-200"
            >
              Request Assistance
            </button>

          </div>
        </div>
      </div>


      {/* ================================================= */}
      {/* SUCCESS POPUP */}
      {/* ================================================= */}

      
  {showSuccess && (
  <div className="fixed inset-0 z-[99999] flex items-center justify-center bg-black/60 backdrop-blur-sm p-4">
    <div className="w-full max-w-[500px] rounded-2xl bg-white shadow-2xl overflow-hidden">

      {/* Header */}
      <div className="bg-[#F38120] py-5 text-center relative">
        <div className="mx-auto mb-2 flex h-14 w-14 items-center justify-center rounded-full bg-white shadow-md">
          <span className="text-3xl text-green-500">✓</span>
        </div>

        <h2 className="text-2xl font-bold text-white">
          Success!
        </h2>
      </div>

      {/* Content */}
      <div className="px-5 py-4">

        <h3 className="text-center text-xl font-bold text-[#1F2937]">
          Form Submitted Successfully
        </h3>

        <p className="mt-2 text-center text-sm text-gray-500 leading-6">
          Your service booking has been confirmed.
        </p>

        {/* Details */}
        <div className="mt-4 rounded-xl bg-[#F8F6F3] px-4 py-2">

          <div className="flex justify-between py-2 border-b border-gray-200">
            <span className="text-gray-500 text-sm">Venue</span>
            <span className="font-semibold text-sm text-black">
              {submittedDetails.location}
            </span>
          </div>

          <div className="flex justify-between py-2 border-b border-gray-200">
            <span className="text-gray-500 text-sm">Service</span>
            <span className="font-semibold text-sm text-black">
              {submittedDetails.service}
            </span>
          </div>

          <div className="flex justify-between py-2 border-b border-gray-200">
            <span className="text-gray-500 text-sm">Name</span>
            <span className="font-semibold text-sm text-black">
              {submittedDetails.name}
            </span>
          </div>

          <div className="flex justify-between py-2 border-b border-gray-200">
            <span className="text-gray-500 text-sm">Mobile</span>
            <span className="font-semibold text-sm text-black">
              {submittedDetails.mobile}
            </span>
          </div>

          <div className="flex justify-between py-2 border-b border-gray-200">
            <span className="text-gray-500 text-sm">Attendees</span>
            <span className="font-semibold text-sm text-black">
              {submittedDetails.attendees}
            </span>
          </div>

          <div className="flex justify-between py-2 border-b border-gray-200">
            <span className="text-gray-500 text-sm">Date</span>
            <span className="font-semibold text-sm text-black">
              {submittedDetails.date
                ? new Date(
                    submittedDetails.date + "T00:00:00"
                  ).toLocaleDateString("en-IN", {
                    day: "2-digit",
                    month: "short",
                    year: "numeric",
                  })
                : ""}
            </span>
          </div>

          <div className="flex justify-between py-2">
            <span className="text-gray-500 text-sm">Booking ID</span>
            <span className="font-bold text-sm text-[#123B7A]">
              {submittedDetails.bookingId}
            </span>
          </div>

        </div>

        {/* Button */}
        <button
          onClick={() => {
            setShowSuccess(false);
            router.push("/Front");
          }}
          className="mt-5 w-full rounded-full bg-[#064D91] py-3 text-base font-semibold text-white hover:bg-[#043B70]"
        >
          OK
        </button>

      </div>
    </div>
  </div>
)}
    </section>
  </div>
);
}
