export default function Home() {
  return (
    <main className="min-h-screen bg-white text-gray-900">

      {/* HERO */}
      <section className="text-center py-16 px-6 bg-blue-50">
        <h1 className="text-4xl font-bold mb-4">
          Shivam's Window Washing
        </h1>
        <p className="text-lg text-gray-600">
          Professional window cleaning services
        </p>
      </section>

      {/* BEFORE / AFTER */}
      <section className="py-16 px-6 max-w-5xl mx-auto">
        <h2 className="text-3xl font-semibold text-center mb-10">
          Before & After
        </h2>

        <div className="grid md:grid-cols-2 gap-10">

          {/* BEFORE */}
          <div className="text-center">
            <p className="mb-3 font-medium">Before</p>
            <img
              src="/gallery/before.png"
              alt="Dirty window before cleaning"
              className="rounded-xl shadow-lg w-full object-cover"
            />
          </div>

          {/* AFTER */}
          <div className="text-center">
            <p className="mb-3 font-medium">After</p>
            <img
              src="/gallery/after.png"
              alt="Clean window after washing"
              className="rounded-xl shadow-lg w-full object-cover"
            />
          </div>

        </div>
      </section>

      {/* QUOTE SECTION */}
      <section className="bg-gray-100 py-16 px-6">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-2xl font-semibold mb-6">
            Get a Free Quote
          </h2>

          <p className="text-gray-600 mb-6">
            Reliable, affordable, and streak-free results every time.
          </p>

          <a
            href="mailto:shivam@example.com"
            className="inline-block bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700"
          >
            Request Quote
          </a>
        </div>
      </section>

    </main>
  );
}