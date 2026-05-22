"use client";

import { useState } from "react";

export default function Home() {
  const [loading, setLoading] = useState(false);
  const [status, setStatus] = useState<null | "success" | "error">(null);

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();

    if (loading) return;

    setLoading(true);
    setStatus(null);

    try {
      const formData = new FormData(e.currentTarget);

      await fetch("/api/quote", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name: formData.get("name"),
          email: formData.get("email"),
          message: formData.get("message"),
        }),
      });

      // IMPORTANT: assume success if request completes
      setStatus("success");
      e.currentTarget.reset();
    } catch (err) {
      console.error(err);
      setStatus("error");
    } finally {
      setLoading(false);
    }
  }

  return (
    <main style={{ fontFamily: "Arial", color: "#111" }}>

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
          alt="Hero"
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
          <h1 style={{ fontSize: "48px", fontWeight: "bold" }}>
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
              padding: "12px 18px",
              borderRadius: "8px",
              textDecoration: "none",
              fontWeight: "bold",
            }}
          >
            Get Free Quote
          </a>
        </div>
      </section>

      {/* GALLERY */}
      <section style={{ padding: "70px 20px", textAlign: "center" }}>
        <h2 style={{ fontSize: "40px" }}>Gallery</h2>

        <div
          style={{
            display: "flex",
            gap: "20px",
            justifyContent: "center",
            flexWrap: "wrap",
            marginTop: "30px",
          }}
        >
          <img src="/images/before.png" width="320" />
          <img src="/images/after.png" width="320" />
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
        <h2 style={{ fontSize: "40px" }}>Services</h2>

        <div
          style={{
            display: "flex",
            gap: "20px",
            justifyContent: "center",
            flexWrap: "wrap",
            marginTop: "30px",
          }}
        >
          <div
            style={{
              padding: "20px",
              background: "white",
              borderRadius: "12px",
              boxShadow: "0 4px 10px rgba(0,0,0,0.08)",
            }}
          >
            Window Washing
          </div>

          <div
            style={{
              padding: "20px",
              background: "white",
              borderRadius: "12px",
              boxShadow: "0 4px 10px rgba(0,0,0,0.08)",
            }}
          >
            Gutter Cleaning
          </div>
        </div>
      </section>

      {/* QUOTE */}
      <section id="quote" style={{ padding: "70px 20px" }}>
        <h2 style={{ textAlign: "center", fontSize: "40px" }}>
          Get a Free Quote
        </h2>

        {/* STATUS BANNER */}
        {status === "success" && (
          <div
            style={{
              maxWidth: "500px",
              margin: "20px auto",
              padding: "14px",
              background: "#dcfce7",
              color: "#166534",
              borderRadius: "10px",
              textAlign: "center",
              fontWeight: "bold",
            }}
          >
            ✅ Quote request sent successfully!
          </div>
        )}

        {status === "error" && (
          <div
            style={{
              maxWidth: "500px",
              margin: "20px auto",
              padding: "14px",
              background: "#fee2e2",
              color: "#991b1b",
              borderRadius: "10px",
              textAlign: "center",
              fontWeight: "bold",
            }}
          >
            ❌ Something went wrong. Please try again.
          </div>
        )}

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
            }}
          />

          <button
            type="submit"
            disabled={loading}
            style={{
              background: "#2563eb",
              color: "white",
              padding: "14px",
              borderRadius: "10px",
              border: "none",
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