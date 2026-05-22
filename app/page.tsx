import React from "react";

export default function Home() {
  return (
    <main className="min-h-screen">

      {/* HERO SECTION */}
      <section className="relative w-full h-screen overflow-hidden">

        {/* Background Image */}
        <img
          src="/gallery/hero.png"
          alt="Window cleaning service in Calgary"
          className="absolute inset-0 w-full h-full object-cover"
        />

        {/* Overlay */}
        <div className="absolute inset-0 bg-black/40" />

        {/* Content */}
        <div className="relative z-10 flex flex-col items-center justify-center text-center text-white h-full px-6">

          <h1 className="text-4xl md:text-6xl font-bold mb-4">
            Shivam's Window Washing
          </h1>

          <p className="text-lg md:text-2xl mb-6 max-w-2xl">
            Professional residential & commercial window cleaning
          </p>

          <a
            href="#quote"
            className="bg-blue-500 hover:bg-blue-600 px-6 py-3 rounded-xl text-lg"
          >
            Get a Free Quote
          </a>

        </div>
      </section>

      {/* BEFORE / AFTER SECTION */}
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
            <p className="mt-2 font-medium">Before</p>
          </div>

          <div>
            <img
              src="/gallery/after.png"
              alt="After cleaning"
              className="w-full rounded-xl shadow"
            />
            <p className="mt-2 font-medium">After</p>
          </div>

        </div>
      </section>

      {/* SERVICES SECTION */}
      <section className="py-16 px-6 text-center bg-white">

        <h2 className="text-3xl font-bold mb-10">
          Our Services
        </h2>

        <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">

          <div className="p-6 shadow rounded-xl">
            Residential Window Cleaning
          </div>

          <div className="p-6 shadow rounded-xl">
            Commercial Window Cleaning
          </div>

          <div className="p-6 shadow rounded-xl">
            Exterior Washing
          </div>

        </div>
      </section>

      {/* QUOTE SECTION */}
      <section
        id="quote"
        className="py-16 px-6 bg-gray-100 text-center"
      >

        <h2 className="text-3xl font-bold mb-6">
          Request a Quote
        </h2>

        <p className="mb-6">
          Fast response. Affordable pricing. Professional service.
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