"use client";

export default function Home() {
  return (
    <main style={{ fontFamily: "sans-serif", color: "#111" }}>

      {/* HERO (SIMPLIFIED - NO LAYERS ISSUES) */}
      <section style={{ width: "100%" }}>

        <img
          src="/gallery/hero.png"
          alt="Hero"
          style={{
            width: "100%",
            height: "60vh",
            objectFit: "cover",
            display: "block"
          }}
        />

        <div style={{ textAlign: "center", padding: "30px" }}>
          <h1 style={{ fontSize: "40px", fontWeight: "bold" }}>
            Shivam's Window Washing
          </h1>

          <p style={{ fontSize: "18px", color: "#555" }}>
            Professional residential window washing & gutter cleaning
          </p>

          <a
            href="#quote"
            style={{
              display: "inline-block",
              marginTop: "15px",
              background: "#22c55e",
              color: "white",
              padding: "12px 18px",
              borderRadius: "8px",
              textDecoration: "none"
            }}
          >
            Call / Get Quote
          </a>
        </div>
      </section>

      {/* BEFORE / AFTER (CLEAN TEST VERSION) */}
      <section style={{ padding: "60px 20px", textAlign: "center" }}>

        <h2 style={{ fontSize: "28px", marginBottom: "30px" }}>
          Before & After
        </h2>

        <div style={{ display: "flex", gap: "20px", justifyContent: "center", flexWrap: "wrap" }}>

          <div>
            <p>Before</p>
            <img
              src="/gallery/before.png"
              alt="Before"
              style={{
                width: "300px",
                height: "300px",
                objectFit: "cover",
                border: "3px solid red"
              }}
            />
          </div>

          <div>
            <p>After</p>
            <img
              src="/gallery/after.png"
              alt="After"
              style={{
                width: "300px",
                height: "300px",
                objectFit: "cover",
                border: "3px solid green"
              }}
            />
          </div>

        </div>
      </section>

      {/* SERVICES */}
      <section style={{ padding: "60px 20px", textAlign: "center" }}>

        <h2 style={{ fontSize: "28px", marginBottom: "30px" }}>
          Services
        </h2>

        <div style={{ display: "flex", gap: "20px", justifyContent: "center", flexWrap: "wrap" }}>

          <div style={{
            width: "300px",
            padding: "20px",
            border: "1px solid #ddd",
            borderRadius: "10px"
          }}>
            <h3>Window Washing</h3>
            <p>Streak-free interior & exterior cleaning.</p>
          </div>

          <div style={{
            width: "300px",
            padding: "20px",
            border: "1px solid #ddd",
            borderRadius: "10px"
          }}>
            <h3>Gutter Cleaning</h3>
            <p>Debris removal and water flow protection.</p>
          </div>

        </div>
      </section>

      {/* QUOTE */}
      <section id="quote" style={{ padding: "60px 20px", background: "#f5f5f5" }}>

        <div style={{ maxWidth: "500px", margin: "0 auto", textAlign: "center" }}>

          <h2>Get a Free Quote</h2>

          <form
            onSubmit={(e) => {
              e.preventDefault();
              alert("Quote request sent!");
            }}
            style={{ display: "flex", flexDirection: "column", gap: "10px" }}
          >

            <input placeholder="Name" required
              style={{ padding: "10px" }} />

            <input placeholder="Email" required
              style={{ padding: "10px" }} />

            <textarea placeholder="Message" required
              style={{ padding: "10px" }} />

            <button
              type="submit"
              style={{
                background: "#2563eb",
                color: "white",
                padding: "12px",
                border: "none",
                borderRadius: "8px"
              }}
            >
              Send Quote
            </button>

          </form>

        </div>
      </section>

    </main>
  );
}