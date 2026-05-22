"use client";

export default function Home() {
  return (
    <main style={{ fontFamily: "sans-serif", color: "#111" }}>

      {/* HERO */}
      <section
        style={{
          position: "relative",
          width: "100%",
          height: "70vh",
          minHeight: "450px",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          textAlign: "center",
          color: "white",
          overflow: "hidden"
        }}
      >

        <img
          src="/gallery/hero.png"
          alt="Hero background"
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            width: "100%",
            height: "100%",
            objectFit: "cover",
            objectPosition: "center top",
            zIndex: 0
          }}
        />

        <div
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            width: "100%",
            height: "100%",
            background: "rgba(0,0,0,0.45)",
            zIndex: 1
          }}
        />

        <div style={{ position: "relative", zIndex: 2 }}>

          <h1 style={{ fontSize: "48px", fontWeight: "bold", marginBottom: "10px" }}>
            Shivam's Window Washing
          </h1>

          <p style={{ fontSize: "18px", marginBottom: "25px" }}>
            Professional residential window washing & gutter cleaning
          </p>

          <a
            href="#quote"
            style={{
              background: "#22c55e",
              color: "white",
              padding: "12px 18px",
              borderRadius: "8px",
              textDecoration: "none",
              fontWeight: "bold"
            }}
          >
            Call / Get Quote
          </a>

        </div>
      </section>

      {/* BEFORE / AFTER */}
      <section style={{ maxWidth: "1100px", margin: "0 auto", padding: "60px 20px" }}>

        <h2 style={{ textAlign: "center", fontSize: "28px", marginBottom: "40px" }}>
          Before & After
        </h2>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
            gap: "20px"
          }}
        >

          {/* BEFORE */}
          <div
            style={{
              background: "#fff",
              padding: "12px",
              borderRadius: "12px",
              boxShadow: "0 4px 15px rgba(0,0,0,0.08)",
              textAlign: "center"
            }}
          >
            <p style={{ marginBottom: "10px", fontWeight: "600" }}>Before</p>
            <img
              src="/gallery/before.png"
              alt="Before cleaning"
              style={{
                width: "100%",
                height: "320px",
                objectFit: "cover",
                borderRadius: "10px"
              }}
            />
          </div>

          {/* AFTER */}
          <div
            style={{
              background: "#fff",
              padding: "12px",
              borderRadius: "12px",
              boxShadow: "0 4px 15px rgba(0,0,0,0.08)",
              textAlign: "center"
            }}
          >
            <p style={{ marginBottom: "10px", fontWeight: "600" }}>After</p>
            <img
              src="/gallery/after.png"
              alt="After cleaning"
              style={{
                width: "100%",
                height: "320px",
                objectFit: "cover",
                borderRadius: "10px"
              }}
            />
          </div>

        </div>
      </section>

      {/* SERVICES */}
      <section style={{ maxWidth: "1100px", margin: "0 auto", padding: "60px 20px" }}>

        <h2 style={{ textAlign: "center", fontSize: "28px", marginBottom: "40px" }}>
          Services
        </h2>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))",
            gap: "20px"
          }}
        >

          {/* WINDOW WASHING */}
          <div
            style={{
              background: "#fff",
              padding: "20px",
              borderRadius: "12px",
              boxShadow: "0 4px 15px rgba(0,0,0,0.08)"
            }}
          >
            <h3 style={{ fontSize: "18px", marginBottom: "10px" }}>
              Residential Window Washing
            </h3>
            <p style={{ color: "#666", fontSize: "14px", lineHeight: "1.5" }}>
              Professional streak-free window cleaning for homes. Interior and exterior glass cleaned safely and efficiently.
            </p>
          </div>

          {/* GUTTER CLEANING */}
          <div
            style={{
              background: "#fff",
              padding: "20px",
              borderRadius: "12px",
              boxShadow: "0 4px 15px rgba(0,0,0,0.08)"
            }}
          >
            <h3 style={{ fontSize: "18px", marginBottom: "10px" }}>
              Gutter Cleaning
            </h3>
            <p style={{ color: "#666", fontSize: "14px", lineHeight: "1.5" }}>
              Full gutter debris removal and flushing to prevent water damage, leaks, and roof issues.
            </p>
          </div>

        </div>
      </section>

      {/* QUOTE */}
      <section
        id="quote"
        style={{ background: "#f5f5f5", padding: "60px 20px" }}
      >

        <div style={{ maxWidth: "600px", margin: "0 auto", textAlign: "center" }}>

          <h2 style={{ fontSize: "24px", marginBottom: "15px" }}>
            Get a Free Quote
          </h2>

          <p style={{ color: "#666", marginBottom: "25px" }}>
            Fill out the form and we’ll get back to you.
          </p>

          <form
            onSubmit={async (e) => {
              e.preventDefault();

              const form = e.target as HTMLFormElement;

              const data = {
                name: (form.elements.namedItem("name") as HTMLInputElement).value,
                email: (form.elements.namedItem("email") as HTMLInputElement).value,
                message: (form.elements.namedItem("message") as HTMLTextAreaElement).value,
              };

              const res = await fetch("/api/quote", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(data),
              });

              if (res.ok) {
                alert("Quote request sent!");
                form.reset();
              } else {
                alert("Something went wrong. Try again.");
              }
            }}
            style={{ display: "flex", flexDirection: "column", gap: "10px" }}
          >

            <input
              name="name"
              type="text"
              placeholder="Your Name"
              required
              style={{ padding: "10px", borderRadius: "6px", border: "1px solid #ccc" }}
            />

            <input
              name="email"
              type="email"
              placeholder="Your Email"
              required
              style={{ padding: "10px", borderRadius: "6px", border: "1px solid #ccc" }}
            />

            <textarea
              name="message"
              placeholder="What do you need cleaned?"
              required
              rows={4}
              style={{ padding: "10px", borderRadius: "6px", border: "1px solid #ccc" }}
            />

            <button
              type="submit"
              style={{
                background: "#2563eb",
                color: "white",
                padding: "12px",
                borderRadius: "8px",
                border: "none",
                cursor: "pointer",
                fontWeight: "bold"
              }}
            >
              Send Quote Request
            </button>

          </form>

        </div>
      </section>

    </main>
  );
}