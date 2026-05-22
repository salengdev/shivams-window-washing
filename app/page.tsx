"use client";

import { useState } from "react";

export default function Home() {
  const [loading, setLoading] = useState(false);

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setLoading(true);

    const formData = new FormData(e.currentTarget);

    const data = {
      name: formData.get("name"),
      email: formData.get("email"),
      message: formData.get("message"),
    };

    try {
      const res = await fetch("/api/quote", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });

      if (!res.ok) {
        throw new Error("Request failed");
      }

      await res.json().catch(() => ({}));

      alert("Quote request sent!");
      e.currentTarget.reset();
    } catch (err) {
      console.error("Form error:", err);
      alert("Something went wrong. Please try again.");
    } finally {
      setLoading(false);
    }
  }

  return (
    <main
      style={{
        fontFamily: "Arial, sans-serif",
        color: "#111",
        margin: 0,
        padding: 0,
        overflowX: "hidden",
      }}
    >
      {/* HERO */}
      <section
        style={{
          position: "relative",
          width: "100%",
          height: "70vh",
          minHeight: "500px",
        }}
      >
        <img
          src="/images/hero.png"
          alt="Window Washing Hero"
          style={{
            width: "100%",
            height: "100%",
            objectFit: "cover",
            position: "absolute",
            inset: 0,
          }}
        />

        <div
          style={{
            position: "absolute",
            inset: 0,
            background: "rgba(0,0,0,0.45)",
          }}
        />

        <div
          style={{
            position: "relative",
            zIndex: 2,
            height: "100%",
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
            textAlign: "center",
            color: "white",
            padding: "20px",
          }}
        >
          <h1 style={{ fontSize: "clamp(36px,6vw,64px)", fontWeight: "bold" }}>
            Shivam&apos;s Window Washing
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
              padding: "14px 20px",
              borderRadius: "10px",
              textDecoration: "none",
              fontWeight: "bold",
            }}
          >
            Get Free Quote
          </a>
        </div>
      </section>

      {/* GALLERY */}
      <section style={{ padding: "80px 20px", textAlign: "center" }}>
        <h2 style={{ fontSize: "40px", marginBottom: "10px" }}>
          Gallery
        </h2>

        <p style={{ color: "#666", marginBottom: "40px" }}>
          Real results from professional window cleaning
        </p>

        <div
          style={{
            display: "flex",
            gap: "30px",
            justifyContent: "center",
            flexWrap: "wrap",
          }}
        >
          <div
            style={{
              width: "360px",
              borderRadius: "16px",
              overflow: "hidden",
              boxShadow: "0 8px 20px rgba(0,0,0,0.08)",
              background: "#fff",
            }}
          >
            <img
              src="/images/before.png"
              alt="Before cleaning"
              style={{
                width: "100%",
                height: "340px",
                objectFit: "cover",
              }}
            />
            <div style={{ padding: "20px" }}>
              <h3>Before</h3>
              <p style={{ color: "#666" }}>Dirty, streaked windows</p>
            </div>
          </div>

          <div
            style={{
              width: "360px",
              borderRadius: "16px",
              overflow: "hidden",
              boxShadow: "0 8px 20px rgba(0,0,0,0.08)",
              background: "#fff",
            }}
          >
            <img
              src="/images/after.png"
              alt="After cleaning"
              style={{
                width: "100%",
                height: "340px",
                objectFit: "cover",
              }}
            />
            <div style={{ padding: "20px" }}>
              <h3>After</h3>
              <p style={{ color: "#666" }}>Crystal clear shine</p>
            </div>
          </div>
        </div>
      </section>

      {/* SERVICES */}
      <section
        style={{
          padding: "70px 20px",
          background: "#f8fafc",
          textAlign: "center",
        }}
      >
        <h2 style={{ fontSize: "40px", marginBottom: "40px" }}>
          Services
        </h2>

        <div
          style={{
            display: "flex",
            gap: "20px",
            justifyContent: "center",
            flexWrap: "wrap",
          }}
        >
          <div
            style={{
              background: "#fff",
              padding: "25px",
              borderRadius: "14px",
              width: "300px",
              boxShadow: "0 4px 12px rgba(0,0,0,0.08)",
            }}
          >
            <h3>Window Washing</h3>
            <p>Interior & exterior cleaning</p>
          </div>

          <div
            style={{
              background: "#fff",
              padding: "25px",
              borderRadius: "14px",
              width: "300px",
              boxShadow: "0 4px 12px rgba(0,0,0,0.08)",
            }}
          >
            <h3>Gutter Cleaning</h3>
            <p>Safe debris removal</p>
          </div>
        </div>
      </section>

      {/* QUOTE */}
      <section
        id="quote"
        style={{ padding: "70px 20px", textAlign: "center" }}
      >
        <h2 style={{ fontSize: "40px", marginBottom: "20px" }}>
          Get a Free Quote
        </h2>

        <form
          onSubmit={handleSubmit}
          style={{
            maxWidth: "500px",
            margin: "0 auto",
            display: "flex",
            flexDirection: "column",
            gap: "12px",
            padding: "25px",
            border: "1px solid #ddd",
            borderRadius: "12px",
            boxShadow: "0 4px 12px rgba(0,0,0,0.08)",
            background: "white",
          }}
        >
          <input
            name="name"
            placeholder="Name"
            required
            style={{
              padding: "14px",
              borderRadius: "10px",
              border: "1px solid #ccc",
              outline: "none",
              fontSize: "16px",
            }}
          />

          <input
            name="email"
            placeholder="Email"
            required
            style={{
              padding: "14px",
              borderRadius: "10px",
              border: "1px solid #ccc",
              outline: "none",
              fontSize: "16px",
            }}
          />

          <textarea
            name="message"
            placeholder="Message"
            rows={5}
            required
            style={{
              padding: "14px",
              borderRadius: "10px",
              border: "1px solid #ccc",
              outline: "none",
              fontSize: "16px",
              resize: "vertical",
            }}
          />

          <button
            type="submit"
            disabled={loading}
            style={{
              background: "#2563eb",
              color: "white",
              padding: "14px",
              border: "none",
              borderRadius: "10px",
              fontWeight: "bold",
              cursor: "pointer",
            }}
          >
            {loading ? "Sending..." : "Send Quote Request"}
          </button>
        </form>
      </section>
    </main>
  );
}