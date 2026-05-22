"use client";

import Image from "next/image";

export default function Home() {
  return (
    <main style={{ fontFamily: "sans-serif", color: "#111" }}>

      {/* HERO */}
      <section style={{ position: "relative", width: "100%", height: "70vh" }}>

        <Image
          src="/gallery/hero.png"
          alt="Hero"
          fill
          priority
          style={{ objectFit: "cover" }}
        />

        <div
          style={{
            position: "absolute",
            inset: 0,
            background: "rgba(0,0,0,0.45)"
          }}
        />

        <div
          style={{
            position: "absolute",
            inset: 0,
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
            color: "white",
            textAlign: "center",
            padding: "20px"
          }}
        >
          <h1 style={{ fontSize: "42px", fontWeight: "bold" }}>
            Shivam's Window Washing
          </h1>

          <p style={{ fontSize: "18px", marginTop: "10px" }}>
            Professional residential window washing & gutter cleaning
          </p>

          <a
            href="#quote"
            style={{
              marginTop: "20px",
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
      <section style={{ padding: "60px 20px", textAlign: "center" }}>
        <h2 style={{ fontSize: "28px", marginBottom: "30px" }}>
          Before & After
        </h2>

        <div style={{ display: "flex", gap: "20px", justifyContent: "center", flexWrap: "wrap" }}>

          {/* BEFORE */}
          <div>
            <p>Before</p>
            <Image
              src="/gallery/before.png"
              alt="Before"
              width={300}
              height={300}
              style={{
                objectFit: "cover",
                border: "3px solid red",
                borderRadius: "10px"
              }}
            />
          </div>

          {/* AFTER */}
          <div>
            <p>After</p>
            <Image
              src="/gallery/after.png"
              alt="After"
              width={300}
              height={300}
              style={{
                objectFit: "cover",
                border: "3px solid green",
                borderRadius: "10px"
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
            width: "280px",
            padding: "20px",
            border: "1px solid #ddd",
            borderRadius: "10px"
          }}>
            <h3>Window Washing</h3>
            <p>Interior & exterior streak-free cleaning.</p>
          </div>

          <div style={{
            width: "280px",
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
      <section
        id="quote"
        style={{
          padding: "60px 20px",
          background: "#f5f5f5",
          textAlign: "center"
        }}
      >
        <h2>Get a Free Quote</h2>

        <form
          onSubmit={(e) => {
            e.preventDefault();
            alert("Quote request sent!");
          }}
          style={{
            display: "flex",
            flexDirection: "column",
            gap: "10px",
            maxWidth: "400px",
            margin: "20px auto"
          }}
        >
          <input placeholder="Name" required style={{ padding: "10px" }} />
          <input placeholder="Email" required style={{ padding: "10px" }} />
          <textarea placeholder="Message" required style={{ padding: "10px" }} />

          <button
            type="submit"
            style={{
              background: "#2563eb",
              color: "white",
              padding: "12px",
              borderRadius: "8px",
              border: "none",
              fontWeight: "bold"
            }}
          >
            Send Quote
          </button>
        </form>
      </section>

    </main>
  );
}