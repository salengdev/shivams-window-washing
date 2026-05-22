import React from "react";

export default function Home() {
  return (
    <main className="flex flex-col">

      {/* HERO */}
      <section className="relative w-full h-screen overflow-hidden">

        <img
          src="/gallery/hero.png"
          alt="Window cleaning service"
          className="absolute inset-0 w-full h-full object-cover"
        />

        <div className="absolute inset-0 bg-black/40" />

        <div className="relative z-10 flex flex-col items-center justify-center h-full text-white text-center px-6">

          <h1 className="text-4xl md:text-6xl font-bold mb-4">
            Shivam's Window Washing
          </h1>

          <p className="text-lg md:text-2xl mb-6">
            Professional window cleaning services
          </p>

          <a
            href="#quote"
            className="bg-blue-500 px-6 py-3 rounded-xl"
          >
            Get Quote
          </a>

        </div>
      </section>

      {/* BEFORE / AFTER */}
      <section className="py-16 px-6 text-center">

        <h2 className="text-3xl font-bold mb-10">
          Before & After
        </h2>

        <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">

          <div>
            <img
              src="/gallery/before.png"
              alt="Before cleaning"
              className="w-full rounded-xl shadow"
            />
            <p className="mt-2">Before</p>
          </div>

          <div>
            <img
              src="/gallery/after.png"
              alt="After cleaning"
              className="w-full rounded-xl shadow"
            />
            <p className="mt-2">After</p>
          </div>

        </div>
      </section>

      {/* SERVICES */}
      <section className="py-16 px-6 text-center">

        <h2 className="text-3xl font-bold mb-10">
          Services
        </h2>

        <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">

          <div className="p-6 shadow rounded-xl">
            Residential Cleaning
          </div>

          <div className="p-6 shadow rounded-xl">
            Commercial Cleaning
          </div>

          <div className="p-6 shadow rounded-xl">
            Exterior Wash
          </div>

        </div>
      </section>

      {/* QUOTE */}
      <section id="quote" className="py-16 px-6 bg-gray-100 text-center">

        <h2 className="text-3xl font-bold mb-6">
          Request a Quote
        </h2>

        <p className="mb-6">
          Fast response and affordable pricing
        </p>

        <a
          href="mailto:contact@shivamswindowwashing.com"
          className="bg-black text-white px-6 py-3 rounded-xl"
        >
          Email Us
        </a>

      </section>

    </main>
  );
}