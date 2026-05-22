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

    const form = e.currentTarget;

    try {
      const formData = new FormData(form);

      const res = await fetch("/api/quote", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: formData.get("name"),
          email: formData.get("email"),
          message: formData.get("message"),
        }),
      });

      if (!res.ok) throw new Error("Request failed");

      setStatus("success");
      form.reset();
    } catch (err) {
      console.error(err);
      setStatus("error");
    } finally {
      setLoading(false);
    }
  }

  return (
    <main style={{ fontFamily: "Arial", color: "#111" }}>

      {/* HERO (FIXED - NO MORE CROPPING ISSUES) */}
      <section style={{ position: "relative", height: "75vh" }}>

        <img
          src="/images/hero.png"
          alt="Hero"
          style={{
            width: "100%",
            height: "100%",
            objectFit: "cover",
            objectPosition: "top center", // ✅ FIX: keeps top visible
            position: "absolute",
            inset: 0,
          }}
        />

        {/* darker + smoother overlay */}
        <div
          style={{
            position: "absolute",
            inset: 0,
            background:
              "linear-gradient(to bottom, rgba(0,0,0,0.5), rgba(0,0,0,0.6))",
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
          <h1 style={{ fontSize: "46px", fontWeight: "bold", maxWidth: 900 }}>
            Crystal-Clear Windows That Instantly Transform Your Home
          </h1>

          <p style={{ fontSize: "18px", marginTop: "12px" }}>
            Window Washing & Gutter Cleaning in Calgary & Surrounding Areas
          </p>

          <p style={{ marginTop: "12px", fontWeight: "bold" }}>
            Local & Fast • Trusted • Free Estimates
          </p>

          <a
            href="#quote"
            style={{
              marginTop: "22px",
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

      {/* BEFORE / AFTER (SIMPLE + CLEAN) */}
      <section style={{ padding: "60px 20px", textAlign: "center" }}>
        <h2 style={{ fontSize: "32px" }}>Before & After Results</h2>

        <div
          style={{
            display: "flex",
            gap: "20px",
            justifyContent: "center",
            flexWrap: "wrap",
            marginTop: "30px",
          }}
        >
          <div>
            <p style={{ fontWeight: "bold", marginBottom: 10 }}>Before</p>
            <img
              src="/images/before.png"
              style={{
                width: "320px",
                height: "220px",
                objectFit: "cover",
                borderRadius: "10px",
                border: "1px solid #ddd",
              }}
            />
          </div>

          <div>
            <p style={{ fontWeight: "bold", marginBottom: 10 }}>After</p>
            <img
              src="/images/after.png"
              style={{
                width: "320px",
                height: "220px",
                objectFit: "cover",
                borderRadius: "10px",
                border: "1px solid #ddd",
              }}
            />
          </div>
        </div>
      </section>

      {/* SERVICE AREAS */}
      <section style={{ padding: "70px 20px", background: "#f8fafc", textAlign: "center" }}>
        <h2 style={{ fontSize: "40px" }}>Service Areas</h2>

        <p style={{ marginTop: 10 }}>
          Calgary & surrounding areas
        </p>

        <div
          style={{
            marginTop: 25,
            display: "flex",
            flexWrap: "wrap",
            justifyContent: "center",
            gap: 12,
          }}
        >
          {[
            "Calgary",
            "Airdrie",
            "Chestermere",
            "Okotoks",
            "Cochrane",
            "Strathmore",
            "High River",
            "Bragg Creek",
          ].map((area) => (
            <div
              key={area}
              style={{
                padding: "10px 16px",
                background: "white",
                borderRadius: 20,
                boxShadow: "0 2px 6px rgba(0,0,0,0.08)",
              }}
            >
              {area}
            </div>
          ))}
        </div>
      </section>

      {/* QUOTE */}
      <section id="quote" style={{ padding: "70px 20px" }}>
        <h2 style={{ textAlign: "center", fontSize: "40px" }}>
          Get a Free Quote
        </h2>

        {status === "success" && (
          <div style={{
            maxWidth: 500,
            margin: "20px auto",
            padding: 14,
            background: "#dcfce7",
            color: "#166534",
            borderRadius: 10,
            textAlign: "center",
            fontWeight: "bold",
          }}>
            ✅ Quote request sent successfully!
          </div>
        )}

        {status === "error" && (
          <div style={{
            maxWidth: 500,
            margin: "20px auto",
            padding: 14,
            background: "#fee2e2",
            color: "#991b1b",
            borderRadius: 10,
            textAlign: "center",
            fontWeight: "bold",
          }}>
            ❌ Something went wrong. Please try again.
          </div>
        )}

        <form
          onSubmit={handleSubmit}
          style={{
            maxWidth: 500,
            margin: "0 auto",
            display: "flex",
            flexDirection: "column",
            gap: 12,
            padding: 25,
            border: "1px solid #ddd",
            borderRadius: 12,
            background: "white",
          }}
        >
          <input name="name" placeholder="Name" required style={inputStyle} />
          <input name="email" placeholder="Email" required style={inputStyle} />
          <textarea name="message" placeholder="Message" rows={5} required style={inputStyle} />

          <button
            type="submit"
            disabled={loading}
            style={{
              background: "#2563eb",
              color: "white",
              padding: 14,
              borderRadius: 10,
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

const inputStyle = {
  padding: "14px",
  borderRadius: "10px",
  border: "1px solid #ccc",
};