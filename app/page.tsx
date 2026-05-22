"use client";

import { useState } from "react";

export default function Home() {
  const [loading, setLoading] = useState(false);
  const [status, setStatus] = useState<null | "success" | "error">(null);
  const [slider, setSlider] = useState(50);

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

      {/* HERO */}
      <section style={{ position: "relative", height: "70vh" }}>
        <img
          src="/images/hero.png"
          style={{
            width: "100%",
            height: "100%",
            objectFit: "cover",
            position: "absolute",
          }}
        />

        <div style={{
          position: "absolute",
          inset: 0,
          background: "rgba(0,0,0,0.5)"
        }} />

        <div style={{
          position: "relative",
          zIndex: 2,
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          textAlign: "center",
          color: "white",
          padding: 20
        }}>
          
          {/* 🔥 STRONG HEADLINE */}
          <h1 style={{ fontSize: 52, fontWeight: "bold", maxWidth: 900 }}>
            Crystal-Clear Windows That Transform Your Home Instantly
          </h1>

          <p style={{ fontSize: 18, marginTop: 10 }}>
            Professional Window Washing & Gutter Cleaning in Calgary & Surrounding Areas
          </p>

          <p style={{ marginTop: 10, fontWeight: "bold" }}>
            Local & Fast • Trusted Service • Free Estimates
          </p>

          <a
            href="#quote"
            style={{
              marginTop: 20,
              background: "#22c55e",
              padding: "12px 18px",
              borderRadius: 8,
              color: "white",
              fontWeight: "bold",
              textDecoration: "none"
            }}
          >
            Get Free Quote
          </a>
        </div>
      </section>

      {/* BEFORE / AFTER SLIDER */}
      <section style={{ padding: "70px 20px", textAlign: "center" }}>
        <h2 style={{ fontSize: 40 }}>Before & After Results</h2>

        <p style={{ color: "#555", marginTop: 10 }}>
          Drag the slider to see the transformation
        </p>

        <div style={{
          position: "relative",
          maxWidth: 700,
          margin: "30px auto",
          overflow: "hidden",
          borderRadius: 12
        }}>

          {/* AFTER IMAGE */}
          <img
            src="/images/after.png"
            style={{
              width: "100%",
              display: "block"
            }}
          />

          {/* BEFORE IMAGE (overlay) */}
          <div style={{
            position: "absolute",
            top: 0,
            left: 0,
            width: `${slider}%`,
            height: "100%",
            overflow: "hidden"
          }}>
            <img
              src="/images/before.png"
              style={{
                width: "100%",
                height: "100%",
                objectFit: "cover"
              }}
            />
          </div>

          {/* SLIDER CONTROL */}
          <input
            type="range"
            min="0"
            max="100"
            value={slider}
            onChange={(e) => setSlider(Number(e.target.value))}
            style={{
              width: "100%",
              marginTop: 15
            }}
          />
        </div>
      </section>

      {/* SERVICE AREAS */}
      <section style={{ padding: "70px 20px", background: "#f8fafc", textAlign: "center" }}>
        <h2 style={{ fontSize: 40 }}>Service Areas</h2>

        <p style={{ marginTop: 10 }}>
          Calgary & surrounding areas
        </p>

        <p style={{ marginTop: 10, fontWeight: "bold" }}>
          Local & Fast Service You Can Rely On
        </p>

        <div style={{
          marginTop: 25,
          display: "flex",
          flexWrap: "wrap",
          justifyContent: "center",
          gap: 12
        }}>
          {[
            "Calgary",
            "Airdrie",
            "Chestermere",
            "Okotoks",
            "Cochrane",
            "Strathmore",
            "High River",
            "Bragg Creek"
          ].map(a => (
            <div key={a} style={{
              padding: "10px 16px",
              background: "white",
              borderRadius: 20,
              boxShadow: "0 2px 6px rgba(0,0,0,0.08)"
            }}>
              {a}
            </div>
          ))}
        </div>
      </section>

      {/* QUOTE */}
      <section id="quote" style={{ padding: "70px 20px" }}>
        <h2 style={{ textAlign: "center", fontSize: 40 }}>
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
            fontWeight: "bold"
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
            fontWeight: "bold"
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
            background: "white"
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
              fontWeight: "bold"
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
  border: "1px solid #ccc"
};