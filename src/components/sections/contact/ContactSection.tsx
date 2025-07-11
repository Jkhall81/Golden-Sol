"use client";
import { useState } from "react";
import { DayPicker } from "react-day-picker";
import "react-day-picker/dist/style.css";
import { format } from "date-fns";

export const ContactSection = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [date, setDate] = useState<Date | undefined>();
  const [time, setTime] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const allowedDays = [1, 2, 3, 6]; // Mon–Wed, Sat

  const getTimeOptions = () => {
    if (!date) return [];
    const day = date.getDay();
    const startHour = day === 6 ? 8 : 10;
    const endHour = 17;

    return Array.from({ length: endHour - startHour + 1 }, (_, i) => {
      const hour = startHour + i;
      const suffix = hour >= 12 ? "PM" : "AM";
      const displayHour = hour % 12 === 0 ? 12 : hour % 12;
      return `${displayHour}:00 ${suffix}`;
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!name || !email || !phone || !date || !time) {
      alert("Please fill out all fields.");
      return;
    }

    try {
      const res = await fetch("/api/book", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name,
          email,
          phone,
          date: format(date, "yyyy-MM-dd"),
          time,
        }),
      });

      const data = await res.json();
      alert(data.message || "Appointment submitted!");
      setSubmitted(true);
    } catch (err) {
      console.error(err);
      alert("Error submitting appointment.");
    }
  };

  return (
    <section className="bg-stone-100 dark:bg-stone-800 min-h-screen mt-14 py-24 px-6 md:px-12 relative overflow-hidden">
      <div className="absolute inset-0 opacity-10 dark:opacity-20 bg-gradient-to-br from-amber-300 via-white to-transparent pointer-events-none" />

      <div className="relative z-10 max-w-2xl mx-auto">
        <h2 className="text-4xl font-bold text-center text-amber-300 mb-6">
          Book Your Glow
        </h2>
        <hr className="w-16 border-amber-300 mx-auto mb-12" />

        {submitted ? (
          <p className="text-xl text-center text-green-600 dark:text-green-400">
            Thank you! We&apos;ll be in touch soon.
          </p>
        ) : (
          <>
            <p className="text-center text-stone-700 dark:text-white/80 text-lg mb-10">
              Fill out the form below to request your spray tan appointment.
            </p>

            <form
              onSubmit={handleSubmit}
              className="space-y-8 text-left max-w-xl mx-auto bg-stone-200 dark:bg-stone-900 p-8 rounded-xl shadow-lg"
            >
              <div>
                <label className="block mb-2 text-sm font-medium text-stone-700 dark:text-white/80">
                  Name
                </label>
                <input
                  type="text"
                  className="w-full px-4 py-3 text-lg rounded border border-stone-300 bg-white text-black"
                  placeholder="Your name"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                />
              </div>

              <div>
                <label className="block mb-2 text-sm font-medium text-stone-700 dark:text-white/80">
                  Email
                </label>
                <input
                  type="email"
                  className="w-full px-4 py-3 text-lg rounded border border-stone-300 bg-white text-black"
                  placeholder="you@example.com"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
              </div>

              <div>
                <label className="block mb-2 text-sm font-medium text-stone-700 dark:text-white/80">
                  Phone
                </label>
                <input
                  type="tel"
                  className="w-full px-4 py-3 text-lg rounded border border-stone-300 bg-white text-black"
                  placeholder="(123) 456-7890"
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                />
              </div>

              <div>
                <label className="block mb-2 text-sm font-medium text-stone-700 dark:text-white/80">
                  Select Date
                </label>
                <div className="flex justify-center mt-2">
                  <div className="bg-white rounded-xl shadow p-4">
                    <DayPicker
                      mode="single"
                      selected={date}
                      onSelect={setDate}
                      disabled={(date) => !allowedDays.includes(date.getDay())}
                      className="text-black"
                    />
                  </div>
                </div>
              </div>

              {date && (
                <div>
                  <label className="block mb-2 text-sm font-medium text-stone-700 dark:text-white/80">
                    Select Time
                  </label>
                  <select
                    value={time}
                    onChange={(e) => setTime(e.target.value)}
                    className="w-full px-4 py-3 text-lg rounded border border-stone-300 bg-white text-black"
                  >
                    <option value="">Choose time</option>
                    {getTimeOptions().map((t) => (
                      <option key={t} value={t}>
                        {t}
                      </option>
                    ))}
                  </select>
                </div>
              )}

              <button
                type="submit"
                className="bg-amber-400 hover:bg-amber-500 text-white font-bold py-4 px-6 rounded-xl w-full transition"
              >
                Confirm Appointment
              </button>
            </form>
          </>
        )}
      </div>
    </section>
  );
};
