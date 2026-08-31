"use client";

import { useRef, useState, useEffect } from "react";
import Header from "../../components/layout/header";
import {
  Volume2,
  VolumeX,
  ChevronDown,
  Calendar,
  X,
  User,
  Phone,
  Users,
  MapPin,
  Flame,
  Sparkles,
  CheckCircle2,
  AlertCircle,
} from "lucide-react";

// Glassmorphic Custom Dropdown Component
function CustomGlassSelect({
  value,
  onChange,
  placeholder,
  options,
  widthClass = "w-full md:w-36",
  hasError = false,
}: {
  value: string;
  onChange: (val: string) => void;
  placeholder: string;
  options: string[];
  widthClass?: string;
  hasError?: boolean;
}) {
  const [isOpen, setIsOpen] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  // Close menu when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        containerRef.current &&
        !containerRef.current.contains(event.target as Node)
      ) {
        setIsOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <div ref={containerRef} className={`relative ${widthClass}`}>
      <button
        type="button"
        onClick={() => setIsOpen(!isOpen)}
        className={`w-full h-11 border ${
          hasError
            ? "border-red-400/80 bg-red-950/20"
            : "border-white/30 bg-black/20"
        } backdrop-blur-md rounded-lg flex items-center justify-between px-3 text-xs sm:text-[13px] text-white hover:bg-gray-500/20 transition-colors cursor-pointer`}
      >
        <span className={`truncate text-left pr-1 ${value ? "text-white font-medium" : "text-white/70"}`}>
          {value || placeholder}
        </span>
        <ChevronDown
          size={14}
          className={`shrink-0 transition-transform duration-200 ${
            isOpen ? "rotate-180" : ""
          }`}
        />
      </button>

      {/* Transparent Glassmorphic Dropdown Menu */}
      {isOpen && (
        <div className="absolute top-[calc(100%+6px)] left-0 w-full min-w-[160px] z-[100] backdrop-blur-xl bg-black/80 border border-white/20 rounded-lg shadow-2xl py-1.5 max-h-52 overflow-y-auto [scrollbar-width:none] [-ms-overflow-style:none] [&::-webkit-scrollbar]:hidden">
          {options.map((opt) => (
            <div
              key={opt}
              onClick={() => {
                onChange(opt);
                setIsOpen(false);
              }}
              className={`px-3 py-2 text-xs text-white hover:bg-orange-500/30 hover:text-orange-300 transition-colors cursor-pointer ${
                value === opt ? "bg-orange-500/20 text-orange-400 font-semibold" : ""
              }`}
            >
              {opt}
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

// Glassmorphic Custom Date Input Component
function CustomGlassDateInput({
  value,
  onChange,
  widthClass = "w-full md:w-32",
  hasError = false,
}: {
  value: string;
  onChange: (val: string) => void;
  widthClass?: string;
  hasError?: boolean;
}) {
  const inputRef = useRef<HTMLInputElement>(null);

  const formatDateDisplay = (val: string) => {
    if (!val) return "dd-mm-yyyy";
    const [y, m, d] = val.split("-");
    if (y && m && d) return `${d}-${m}-${y}`;
    return val;
  };

  return (
    <div
      onClick={() => {
        try {
          inputRef.current?.showPicker();
        } catch {
          inputRef.current?.focus();
        }
      }}
      className={`relative h-11 border ${
        hasError
          ? "border-red-400/80 bg-red-950/20"
          : "border-white/30 bg-black/20"
      } backdrop-blur-md rounded-lg flex items-center justify-between px-3 text-xs sm:text-[13px] hover:bg-gray-500/20 transition-colors cursor-pointer ${widthClass}`}
    >
      <span className={`truncate text-left pr-1 ${value ? "text-white font-medium" : "text-white/70"}`}>
        {formatDateDisplay(value)}
      </span>

      <Calendar size={14} className="text-white/70 shrink-0 pointer-events-none" />

      <input
        ref={inputRef}
        type="date"
        value={value}
        onChange={(e) => onChange(e.target.value)}
        className="absolute inset-0 opacity-0 w-full h-full cursor-pointer [color-scheme:dark]"
      />
    </div>
  );
}

export default function Hero() {
  const audioRef = useRef<HTMLAudioElement>(null);
  const [isPlaying, setIsPlaying] = useState(true);

  // States for search filters
  const [branch, setBranch] = useState("");
  const [cremationType, setCremationType] = useState("");
  const [ritualService, setRitualService] = useState("");
  const [date, setDate] = useState("");
  const [assistance, setAssistance] = useState("");

  // Validation error state for hero dropdowns
  const [filterError, setFilterError] = useState("");
  const [highlightMissing, setHighlightMissing] = useState(false);

  // Modal states
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  // Modal form inputs
  const [userName, setUserName] = useState("");
  const [userMobile, setUserMobile] = useState("");
  const [userAttendees, setUserAttendees] = useState("");
  const [formErrors, setFormErrors] = useState({
    name: "",
    mobile: "",
    attendees: "",
  });

  // Submitted details state
  const [submittedData, setSubmittedData] = useState({
    branch: "",
    cremationType: "",
    ritualService: "",
    date: "",
    assistance: "",
    name: "",
    mobile: "",
    attendees: "",
    bookingId: "",
  });

  const toggleAudio = async () => {
    const audio = audioRef.current;
    if (!audio) return;

    if (isPlaying) {
      audio.pause();
      setIsPlaying(false);
    } else {
      try {
        await audio.play();
        setIsPlaying(true);
      } catch (error) {
        console.error("Audio playback failed:", error);
      }
    }
  };

  const handleRequestClick = () => {
    // Validate if all dropdowns have been selected
    const missing: string[] = [];
    if (!branch) missing.push("Branch");
    if (!cremationType) missing.push("Cremation Type");
    if (!ritualService) missing.push("Ritual Service");
    if (!date) missing.push("Date");
    if (!assistance) missing.push("Required Assistance");

    if (missing.length > 0) {
      setHighlightMissing(true);
      setFilterError(`Please select: ${missing.join(", ")}`);
      return;
    }

    setHighlightMissing(false);
    setFilterError("");
    setFormErrors({ name: "", mobile: "", attendees: "" });
    setIsSuccess(false);
    setIsModalOpen(true);
  };

  const validateModalForm = () => {
    const errors = { name: "", mobile: "", attendees: "" };
    let isValid = true;

    if (!userName.trim()) {
      errors.name = "Full Name is required";
      isValid = false;
    } else if (!/^[A-Za-z\s]+$/.test(userName.trim())) {
      errors.name = "Please enter a valid name (letters only)";
      isValid = false;
    }

    if (!userMobile.trim()) {
      errors.mobile = "Mobile number is required";
      isValid = false;
    } else if (!/^[6-9]\d{9}$/.test(userMobile.trim())) {
      errors.mobile = "Enter a valid 10-digit mobile number";
      isValid = false;
    }

    if (userAttendees.trim()) {
      const num = Number(userAttendees);
      if (isNaN(num) || num <= 0 || !Number.isInteger(num)) {
        errors.attendees = "Enter a valid number of attendees";
        isValid = false;
      }
    }

    setFormErrors(errors);
    return isValid;
  };

  const handleConfirmBooking = (e: React.FormEvent) => {
    e.preventDefault();

    if (!validateModalForm()) {
      return;
    }

    // Generate Unique Booking Reference ID
    const bookingId = `VM-${new Date().getFullYear()}-${Math.floor(
      10000 + Math.random() * 90000
    )}`;

    setSubmittedData({
      branch,
      cremationType,
      ritualService,
      date,
      assistance,
      name: userName.trim(),
      mobile: userMobile.trim(),
      attendees: userAttendees.trim() || "1",
      bookingId,
    });

    setIsSuccess(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
    if (isSuccess) {
      // Reset form if booking was successful
      setIsSuccess(false);
      setUserName("");
      setUserMobile("");
      setUserAttendees("");
      setBranch("");
      setCremationType("");
      setRitualService("");
      setDate("");
      setAssistance("");
    }
  };

  const formatDisplayDate = (d: string) => {
    if (!d) return "";
    try {
      return new Date(d + "T00:00:00").toLocaleDateString("en-IN", {
        day: "2-digit",
        month: "short",
        year: "numeric",
      });
    } catch {
      return d;
    }
  };

  return (
    <div className="relative">
      <Header />

      {/* ================= AUDIO ================= */}
      <audio ref={audioRef} src="/audio/om.mp3" preload="auto" autoPlay loop />

      {/* ================= AUDIO BUTTON ================= */}
      <button
        type="button"
        onClick={toggleAudio}
        aria-label={isPlaying ? "Turn chanting off" : "Turn chanting on"}
        className="absolute top-43 left-3 sm:top-26.25 sm:left-15 z-50 flex items-center gap-2 rounded-full bg-white/90 px-4 py-2 shadow-lg backdrop-blur-sm transition-all duration-300 hover:bg-white hover:scale-105"
      >
        {isPlaying ? (
          <Volume2 size={20} className="text-orange-500" />
        ) : (
          <VolumeX size={20} className="text-gray-600" />
        )}
      </button>

      {/* ================= HERO ================= */}
      <section
        className="relative min-h-screen md:min-h-screen bg-cover bg-center bg-fixed"
        style={{ backgroundImage: "url('/images/hero/Section.png')" }}
      >
        <div className="absolute inset-0 bg-black/40"></div>

        <div className="relative z-10 flex flex-col items-center justify-center min-h-screen max-sm:pt-10 md:min-h-screen text-center px-6 bg-gradient-to-b from-black/20 to-transparent">
          <h1 className="font-plus-jakarta text-3xl md:text-5xl font-semibold text-white max-w-6xl">
            A Sanctuary of Peace. A Legacy of Dignity.
          </h1>

          <p className="text-white font-manrope text-md mt-8 max-w-4xl">
            Thoughtfully envisioned by Phoenix Foundation, Vaikunta
            Mahaprasthanam offers serene spaces where families can gather,
            reflect, and honour the memories of their loved ones with dignity
            and peace.
          </p>

          {/* Glassmorphism Search Bar Container */}
          <div className="w-fit max-w-[95vw] mt-8 mx-auto">
            <div className="backdrop-blur-xl bg-white/10 border border-white/20 shadow-2xl p-1.5 sm:p-2 rounded-xl inline-block">
              <div className="flex flex-col md:flex-row gap-2 items-center">
                {/* Branch Dropdown */}
                <CustomGlassSelect
                  placeholder="Branch"
                  value={branch}
                  onChange={(val) => {
                    setBranch(val);
                    if (filterError) setFilterError("");
                  }}
                  options={["Jubilee Hills", "Shaikpet", "Panjagutta"]}
                  widthClass="w-full md:w-32 lg:w-36"
                  hasError={highlightMissing && !branch}
                />

                {/* Cremation Type Dropdown */}
                <CustomGlassSelect
                  placeholder="Cremation Type"
                  value={cremationType}
                  onChange={(val) => {
                    setCremationType(val);
                    if (filterError) setFilterError("");
                  }}
                  options={["Electric Pyre", "Wood Pyre", "Gas Pyre"]}
                  widthClass="w-full md:w-34 lg:w-38"
                  hasError={highlightMissing && !cremationType}
                />

                {/* Ritual Service Dropdown */}
                <CustomGlassSelect
                  placeholder="Ritual Service"
                  value={ritualService}
                  onChange={(val) => {
                    setRitualService(val);
                    if (filterError) setFilterError("");
                  }}
                  options={[
                    "Funeral / Last Rites",
                    "Pindam",
                    "Pooja Services",
                    "Post-Cremation Services",
                    "Pedda Karma Pooja",
                    "No Ritual Service",
                  ]}
                  widthClass="w-full md:w-34 lg:w-38"
                  hasError={highlightMissing && !ritualService}
                />

                {/* Date Field */}
                <CustomGlassDateInput
                  value={date}
                  onChange={(val) => {
                    setDate(val);
                    if (filterError) setFilterError("");
                  }}
                  widthClass="w-full md:w-28 lg:w-32"
                  hasError={highlightMissing && !date}
                />

                {/* Required Assistance Dropdown */}
                <CustomGlassSelect
                  placeholder="Required Assistance"
                  value={assistance}
                  onChange={(val) => {
                    setAssistance(val);
                    if (filterError) setFilterError("");
                  }}
                  options={[
                    "No Assistance",
                    "Hearse Van",
                    "Mortuary Van",
                    "Cold Room / Storage",
                    "Funeral Arrangements",
                    "Documentation & Formalities",
                  ]}
                  widthClass="w-full md:w-36 lg:w-40"
                  hasError={highlightMissing && !assistance}
                />

                {/* Request Service Button (Triggers Popup) */}
                <button
                  type="button"
                  onClick={handleRequestClick}
                  className="w-full md:w-32 lg:w-36 h-11 bg-[#F38120] hover:bg-[#e07218] text-white text-xs sm:text-[13px] font-medium rounded-lg flex items-center justify-center transition-all duration-200 shadow-md cursor-pointer whitespace-nowrap active:scale-95 px-3"
                >
                  Request Service
                </button>
              </div>
            </div>

            {/* Validation Notice when fields are missing */}
            {filterError && (
              <div className="mt-2.5 flex items-center justify-center gap-1.5 text-xs text-amber-300 bg-black/60 backdrop-blur-md py-1.5 px-3 rounded-md max-w-xl mx-auto border border-amber-500/30 animate-pulse">
                <AlertCircle size={14} className="text-amber-400 shrink-0" />
                <span>{filterError}</span>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* ========================================================= */}
      {/* ========================================================= */}
      {/* REQUEST SERVICE MODAL POPUP (BALANCED SIZE)               */}
      {/* ========================================================= */}
      {isModalOpen && (
        <div className="fixed inset-0 z-[99999] flex items-center justify-center bg-black/70 backdrop-blur-sm p-4 overflow-y-auto">
          <div className="relative w-full max-w-[440px] bg-white rounded-2xl shadow-2xl overflow-hidden my-auto animate-in fade-in zoom-in-95 duration-200">
            {!isSuccess ? (
              /* --- Step 1: Contact Details & Confirmation Form --- */
              <div>
                {/* Modal Header */}
                <div className="bg-[#F38120] px-5 py-3.5 flex items-center justify-between text-white">
                  <div>
                    <h3 className="text-base sm:text-lg font-bold font-plus-jakarta flex items-center gap-2">
                      <Sparkles size={17} />
                      Request Service
                    </h3>
                    <p className="text-xs text-white/90 font-manrope">
                      Confirm your booking requirements below
                    </p>
                  </div>
                  <button
                    type="button"
                    onClick={handleCloseModal}
                    className="p-1 rounded-full text-white/80 hover:text-white hover:bg-white/20 transition cursor-pointer"
                  >
                    <X size={18} />
                  </button>
                </div>

                {/* Modal Body */}
                <form onSubmit={handleConfirmBooking} className="p-4 sm:p-5 space-y-3">
                  {/* Selected Booking Summary */}
                  <div className="bg-[#F8F6F3] border border-orange-100 rounded-xl p-3 space-y-1.5">
                    <p className="text-[10px] font-semibold text-gray-500 uppercase tracking-wider">
                      Selected Service Summary
                    </p>
                    <div className="grid grid-cols-2 gap-2 text-xs">
                      <div className="flex items-center gap-1.5 text-gray-700">
                        <MapPin size={12} className="text-[#F38120] shrink-0" />
                        <span className="truncate">
                          <strong className="text-gray-900">Branch:</strong> {branch}
                        </span>
                      </div>
                      <div className="flex items-center gap-1.5 text-gray-700">
                        <Flame size={12} className="text-[#F38120] shrink-0" />
                        <span className="truncate">
                          <strong className="text-gray-900">Type:</strong> {cremationType}
                        </span>
                      </div>
                      <div className="flex items-center gap-1.5 text-gray-700 col-span-2">
                        <Sparkles size={12} className="text-[#F38120] shrink-0" />
                        <span className="truncate">
                          <strong className="text-gray-900">Ritual:</strong> {ritualService}
                        </span>
                      </div>
                      <div className="flex items-center gap-1.5 text-gray-700">
                        <Calendar size={12} className="text-[#F38120] shrink-0" />
                        <span>
                          <strong className="text-gray-900">Date:</strong> {formatDisplayDate(date)}
                        </span>
                      </div>
                      <div className="flex items-center gap-1.5 text-gray-700">
                        <Users size={12} className="text-[#F38120] shrink-0" />
                        <span className="truncate">
                          <strong className="text-gray-900">Assistance:</strong> {assistance}
                        </span>
                      </div>
                    </div>
                  </div>

                  {/* Input Fields */}
                  <div className="space-y-2.5">
                    {/* Full Name */}
                    <div>
                      <label className="block text-xs font-semibold text-gray-800 mb-1">
                        Full Name <span className="text-red-500">*</span>
                      </label>
                      <div className="relative">
                        <User size={14} className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-500" />
                        <input
                          type="text"
                          placeholder="e.g. Ramesh Kumar"
                          value={userName}
                          onChange={(e) => {
                            setUserName(e.target.value);
                            if (formErrors.name) setFormErrors({ ...formErrors, name: "" });
                          }}
                          className={`w-full pl-8 pr-3 py-2 text-xs sm:text-sm text-black font-medium bg-white placeholder:text-gray-400 border rounded-lg outline-none transition focus:border-[#F38120] focus:ring-1 focus:ring-[#F38120] ${
                            formErrors.name ? "border-red-500 bg-red-50/30" : "border-gray-300"
                          }`}
                        />
                      </div>
                      {formErrors.name && (
                        <p className="text-red-500 text-[11px] mt-0.5">{formErrors.name}</p>
                      )}
                    </div>

                    {/* Mobile Number */}
                    <div>
                      <label className="block text-xs font-semibold text-gray-800 mb-1">
                        Mobile Number <span className="text-red-500">*</span>
                      </label>
                      <div className="relative">
                        <Phone size={14} className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-500" />
                        <input
                          type="tel"
                          maxLength={10}
                          placeholder="10-digit Mobile Number"
                          value={userMobile}
                          onChange={(e) => {
                            const val = e.target.value.replace(/\D/g, "");
                            setUserMobile(val);
                            if (formErrors.mobile) setFormErrors({ ...formErrors, mobile: "" });
                          }}
                          className={`w-full pl-8 pr-3 py-2 text-xs sm:text-sm text-black font-medium bg-white placeholder:text-gray-400 border rounded-lg outline-none transition focus:border-[#F38120] focus:ring-1 focus:ring-[#F38120] ${
                            formErrors.mobile ? "border-red-500 bg-red-50/30" : "border-gray-300"
                          }`}
                        />
                      </div>
                      {formErrors.mobile && (
                        <p className="text-red-500 text-[11px] mt-0.5">{formErrors.mobile}</p>
                      )}
                    </div>

                    {/* Number of Attendees */}
                    <div>
                      <label className="block text-xs font-semibold text-gray-800 mb-1">
                        Expected Attendees <span className="text-gray-400 font-normal">(optional)</span>
                      </label>
                      <div className="relative">
                        <Users size={14} className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-500" />
                        <input
                          type="number"
                          min={1}
                          placeholder="e.g. 15"
                          value={userAttendees}
                          onChange={(e) => {
                            setUserAttendees(e.target.value);
                            if (formErrors.attendees) setFormErrors({ ...formErrors, attendees: "" });
                          }}
                          className={`w-full pl-8 pr-3 py-2 text-xs sm:text-sm text-black font-medium bg-white placeholder:text-gray-400 border rounded-lg outline-none transition focus:border-[#F38120] focus:ring-1 focus:ring-[#F38120] ${
                            formErrors.attendees ? "border-red-500 bg-red-50/30" : "border-gray-300"
                          }`}
                        />
                      </div>
                      {formErrors.attendees && (
                        <p className="text-red-500 text-[11px] mt-0.5">{formErrors.attendees}</p>
                      )}
                    </div>
                  </div>

                  {/* Actions */}
                  <div className="pt-2 flex gap-2.5">
                    <button
                      type="button"
                      onClick={handleCloseModal}
                      className="flex-1 py-2 px-3 rounded-lg border border-gray-300 text-gray-700 font-medium text-xs sm:text-sm hover:bg-gray-50 transition cursor-pointer"
                    >
                      Cancel
                    </button>
                    <button
                      type="submit"
                      className="flex-1 py-2 px-3 rounded-lg bg-[#F38120] hover:bg-[#e07218] text-white font-semibold text-xs sm:text-sm shadow hover:shadow-md transition cursor-pointer active:scale-95"
                    >
                      Confirm Booking
                    </button>
                  </div>
                </form>
              </div>
            ) : (
              /* --- Step 2: Booking Confirmation Success Popup --- */
              <div>
                {/* Header */}
                <div className="bg-[#F38120] py-4 text-center relative">
                  <button
                    type="button"
                    onClick={handleCloseModal}
                    className="absolute top-3 right-3 p-1 rounded-full text-white/80 hover:text-white hover:bg-white/20 transition cursor-pointer"
                  >
                    <X size={18} />
                  </button>
                  <div className="mx-auto mb-2 flex h-12 w-12 items-center justify-center rounded-full bg-white shadow-md">
                    <CheckCircle2 size={28} className="text-green-500" />
                  </div>
                  <h2 className="text-xl font-bold text-white font-plus-jakarta leading-none">
                    Success!
                  </h2>
                </div>

                {/* Content */}
                <div className="px-5 py-4">
                  <h3 className="text-center text-base sm:text-lg font-bold text-[#1F2937] font-plus-jakarta">
                    Service Requested Successfully
                  </h3>
                  <p className="mt-1 text-center text-xs text-gray-500 leading-normal font-manrope">
                    Your service booking has been confirmed. Our support team will contact you shortly.
                  </p>

                  {/* Details Card */}
                  <div className="mt-3 rounded-xl bg-[#F8F6F3] p-3 text-xs sm:text-sm space-y-1.5 border border-gray-100">
                    <div className="flex justify-between py-1 border-b border-gray-200">
                      <span className="text-gray-500">Branch</span>
                      <span className="font-semibold text-black">{submittedData.branch}</span>
                    </div>

                    <div className="flex justify-between py-1 border-b border-gray-200">
                      <span className="text-gray-500">Cremation Type</span>
                      <span className="font-semibold text-black">{submittedData.cremationType}</span>
                    </div>

                    <div className="flex justify-between py-1 border-b border-gray-200">
                      <span className="text-gray-500">Ritual Service</span>
                      <span className="font-semibold text-black">{submittedData.ritualService}</span>
                    </div>

                    <div className="flex justify-between py-1 border-b border-gray-200">
                      <span className="text-gray-500">Assistance</span>
                      <span className="font-semibold text-black">{submittedData.assistance}</span>
                    </div>

                    <div className="flex justify-between py-1 border-b border-gray-200">
                      <span className="text-gray-500">Name</span>
                      <span className="font-semibold text-black">{submittedData.name}</span>
                    </div>

                    <div className="flex justify-between py-1 border-b border-gray-200">
                      <span className="text-gray-500">Mobile</span>
                      <span className="font-semibold text-black">{submittedData.mobile}</span>
                    </div>

                    <div className="flex justify-between py-1 border-b border-gray-200">
                      <span className="text-gray-500">Date</span>
                      <span className="font-semibold text-black">{formatDisplayDate(submittedData.date)}</span>
                    </div>

                    <div className="flex justify-between py-1">
                      <span className="text-gray-500">Booking ID</span>
                      <span className="font-bold text-[#123B7A] tracking-wider">
                        {submittedData.bookingId}
                      </span>
                    </div>
                  </div>

                  {/* OK Button */}
                  <button
                    type="button"
                    onClick={handleCloseModal}
                    className="mt-4 w-full rounded-full bg-[#064D91] hover:bg-[#043B70] py-2.5 text-sm font-semibold text-white transition cursor-pointer shadow-md active:scale-98"
                  >
                    OK
                  </button>
                </div>
              </div>
            )}
          </div>
        </div>
      )}
    </div>
  );
}