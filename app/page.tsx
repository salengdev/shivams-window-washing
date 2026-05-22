"use client";

export default function Home() {
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
            display: "block",
          }}
        />

        {/* Overlay */}
        <div
          style={{
            position: "absolute",
            inset: 0,
            background: "rgba(0,0,0,0.45)",
          }}
        />

        {/* Hero Content */}
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
          <h1
            style={{
              fontSize: "clamp(36px, 6vw, 64px)",
              fontWeight: "bold",
              marginBottom: "16px",
            }}
          >
            Shivam&apos;s Window Washing
          </h1>

          <p
            style={{
              fontSize: "clamp(18px, 2vw, 24px)",
              maxWidth: "700px",
              lineHeight: 1.5,
            }}
          >
            Professional residential window washing & gutter cleaning
          </p>

          <a
            href="#quote"
            style={{
              marginTop: "28px",
              background: "#22c55e",
              color: "white",
              padding: "14px 22px",
              borderRadius: "10px",
              textDecoration: "none",
              fontWeight: "bold",
              fontSize: "18px",
            }}
          >
            Get Free Quote
          </a>
        </div>
      </section>

      {/* BEFORE / AFTER */}
      <section
        style={{
          padding: "70px 20px",
          textAlign: "center",
          background: "#ffffff",
        }}
      >
        <h2
          style={{
            fontSize: "40px",
            marginBottom: "50px",
          }}
        >
          Before & After
        </h2>

        <div
          style={{
            display: "flex",
            gap: "30px",
            justifyContent: "center",
            flexWrap: "wrap",
          }}
        >
          {/* BEFORE */}
          <div>
            <p
              style={{
                fontWeight: "bold",
                marginBottom: "14px",
                fontSize: "20px",
              }}
            >
              Before
            </p>

            <img
              src="/images/before.png"
              alt="Dirty window before cleaning"
              style={{
                width: "350px",
                maxWidth: "90vw",
                height: "350px",
                objectFit: "cover",
                borderRadius: "14px",
                border: "4px solid #ef4444",
                display: "block",
              }}
            />
          </div>

          {/* AFTER */}
          <div>
            <p
              style={{
                fontWeight: "bold",
                marginBottom: "14px",
                fontSize: "20px",
              }}
            >
              After
            </p>

            <img
              src="/images/after.png"
              alt="Clean window after washing"
              style={{
                width: "350px",
                maxWidth: "90vw",
                height: "350px",
                objectFit: "cover",
                borderRadius: "14px",
                border: "4px solid #22c55e",
                display: "block",
              }}
            />
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
        <h2
          style={{
            fontSize: "40px",
            marginBottom: "50px",
          }}
        >
          Services
        </h2>

        <div
          style={{
            display: "flex",
            gap: "24px",
            justifyContent: "center",
            flexWrap: "wrap",
          }}
        >
          <div
            style={{
              background: "white",
              padding: "30px",
              borderRadius: "16px",
              width: "320px",
              boxShadow: "0 4px 16px rgba(0,0,0,0.08)",
            }}
          >
            <h3 style={{ marginBottom: "14px", fontSize: "24px" }}>
              Residential Window Washing
            </h3>

            <p style={{ lineHeight: 1.6 }}>
              Interior & exterior streak-free cleaning for homes.
            </p>
          </div>

          <div
            style={{
              background: "white",
              padding: "30px",
              borderRadius: "16px",
              width: "320px",
              boxShadow: "0 4px 16px rgba(0,0,0,0.08)",
            }}
          >
            <h3 style={{ marginBottom: "14px", fontSize: "24px" }}>
              Gutter Cleaning
            </h3>

            <p style={{ lineHeight: 1.6 }}>
              Debris removal and water flow protection.
            </p>
          </div>
        </div>
      </section>

      {/* QUOTE */}
      <section
        id="quote"
        style={{
          padding: "70px 20px",
          textAlign: "center",
          background: "#ffffff",
        }}
      >
        <h2
          style={{
            fontSize: "40px",
            marginBottom: "24px",
          }}
        >
          Get a Free Quote
        </h2>

        <form
          onSubmit={(e) => {
            e.preventDefault();
            alert("Quote request sent!");
          }}
          style={{
            maxWidth: "520px",
            margin: "0 auto",
            display: "flex",
            flexDirection: "column",
            gap: "16px",
            background: "white",
            padding: "32px",
            borderRadius: "16px",
            border: "1px solid #ddd",
            boxShadow: "0 4px 16px rgba(0,0,0,0.08)",
          }}
        >
          <input
            placeholder="Name"
            required
            style={{
              padding: "14px",
              borderRadius: "10px",
              border: "1px solid #ccc",
              fontSize: "16px",
            }}
          />

          <input
            placeholder="Email"
            required
            style={{
              padding: "14px",
              borderRadius: "10px",
              border: "1px solid #ccc",
              fontSize: "16px",
            }}
          />

          <textarea
            placeholder="Message"
            required
            rows={5}
            style={{
              padding: "14px",
              borderRadius: "10px",
              border: "1px solid #ccc",
              fontSize: "16px",
              resize: "vertical",
            }}
          />

          <button
            type="submit"
            style={{
              background: "#2563eb",
              color: "white",
              padding: "16px",
              border: "none",
              borderRadius: "10px",
              fontWeight: "bold",
              fontSize: "16px",
              cursor: "pointer",
            }}
          >
            Send Quote Request
          </button>
        </form>
      </section>
    </main>
  );
}