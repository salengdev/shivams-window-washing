import QuoteForm from "../components/QuoteForm";

export default function Home() {
  return (
    <main className="min-h-screen bg-white text-gray-900">

      {/* TOP BAR */}
      <div className="bg-blue-600 text-white text-center py-2 text-sm font-medium">
        Call now for a free quote:{" "}
        <a href="tel:+16040000000" className="underline font-bold">
          (604) 000-0000
        </a>
      </div>

      {/* NAVBAR */}
      <header className="flex items-center justify-between p-6 shadow-sm bg-white sticky top-0 z-20">
        <h1 className="text-2xl font-bold">Shivam's Window Washing</h1>

        <nav className="space-x-6 text-sm font-medium">
          <a href="#services" className="hover:text-blue-600">Services</a>
          <a href="#gallery" className="hover:text-blue-600">Results</a>
          <a href="#contact" className="hover:text-blue-600">Contact</a>
        </nav>
      </header>

      {/* HERO */}
      <section className="relative h-[85vh] flex items-center justify-center text-center text-white">
        <img
          src="/gallery/hero.png"
          alt="Window cleaning service in Calgary"
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/55"></div>

        <div className="relative z-10 px-6">
          <h2 className="text-4xl md:text-6xl font-bold mb-4">
            Crystal Clear Homes Start Here
          </h2>

          <p className="text-lg md:text-xl mb-6">
            Residential window washing & gutter cleaning in Calgary and surrounding areas
          </p>

          <div className="flex flex-col md:flex-row gap-4 justify-center">
            <a
              href="#contact"
              className="bg-blue-600 hover:bg-blue-700 px-6 py-3 rounded-lg font-semibold"
            >
              Get Free Quote
            </a>

            <a
              href="tel:+16040000000"
              className="bg-white text-black px-6 py-3 rounded-lg font-semibold"
            >
              Call Now
            </a>
          </div>
        </div>
      </section>

      {/* SERVICES */}
      <section id="services" className="p-12 text-center bg-gray-50">
        <h3 className="text-3xl font-bold mb-8">Services</h3>

        <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
          <div className="p-8 bg-white border rounded-lg shadow-sm">
            <h4 className="text-xl font-semibold mb-2">Window Washing</h4>
            <p className="text-gray-600">
              Interior & exterior residential window cleaning.
            </p>
          </div>

          <div className="p-8 bg-white border rounded-lg shadow-sm">
            <h4 className="text-xl font-semibold mb-2">Gutter Cleaning</h4>
            <p className="text-gray-600">
              Safe gutter clearing to protect your home.
            </p>
          </div>
        </div>
      </section>

      {/* BEFORE / AFTER GALLERY */}
      <section id="gallery" className="p-12 text-center">
        <h3 className="text-3xl font-bold mb-8">Before & After Results</h3>

        <div className="max-w-4xl mx-auto grid md:grid-cols-2 gap-6">

          <div>
            <p className="font-semibold mb-2">Before</p>
            <img
              src="/gallery/window_before.png"
              alt="Dirty window before cleaning"
              className="rounded-lg shadow"
            />
          </div>

          <div>
            <p className="font-semibold mb-2">After</p>
            <img
              src="/gallery/window_after.png"
              alt="Clean window after washing"
              className="rounded-lg shadow"
            />
          </div>

        </div>
      </section>

      {/* SERVICE AREA */}
      <section className="p-12 bg-gray-50 text-center">
        <h3 className="text-3xl font-bold mb-6">Service Area</h3>

        <p className="text-gray-600 mb-6">
          Calgary and surrounding areas
        </p>

        <iframe
          className="w-full max-w-4xl mx-auto h-80 rounded-lg shadow"
          loading="lazy"
          src="https://www.google.com/maps?q=Calgary,+AB,+Canada&output=embed"
        />
      </section>

      {/* CONTACT */}
      <section id="contact" className="p-12 text-center">
        <h3 className="text-3xl font-bold mb-4">Get a Free Quote</h3>

        <p className="text-gray-600 mb-8">
          Fast response — residential window & gutter cleaning
        </p>

        <QuoteForm />
      </section>

      {/* FOOTER */}
      <footer className="p-6 text-center text-sm text-gray-500 border-t">
        © {new Date().getFullYear()} Shivam's Window Washing
      </footer>

    </main>
  );
}