"use client";

import Image from "next/image";

export default function Home() {
  return (
    <main style={{ fontFamily: "sans-serif", color: "#111" }}>

      {/* HERO */}
      <section
        style={{
          position: "relative",
          width: "100%",
          height: "70vh",
          overflow: "hidden"
        }}
      >
        <Image
          src="/gallery/hero.png"
          alt="Hero"
          fill
          priority
          unoptimized
          style={{
            objectFit: "cover"
          }}
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
            textAlign: "center",
            color: "white",
            padding: "20px"
          }}
        >
          <h1
            style={{
              fontSize: "48px",
              fontWeight: "bold",
              marginBottom: "10px"
            }}
          >
            Shivam's Window Washing
          </h1>

          <p
            style={{
              fontSize: "18px",
              marginBottom: "20px"
            }}
          >
            Professional residential window washing & gutter cleaning
          </p>

          <a
            href="#quote"
            style={{
              background: "#22c55e",
              color: "white",
              padding: "12px 20px",
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
      <section
        style={{
          padding: "60px 20px",
          textAlign: "center"
        }}
      >
        <h2
          style={{
            fontSize: "32px",
            marginBottom: "40px"
          }}
        >
          Before & After
        </h2>

        <div
          style={{
            display: "flex",
            gap: "20px",
            justifyContent: "center",
            flexWrap: "wrap"
          }}
        >
          {/* BEFORE */}
          <div>
            <p
              style={{
                marginBottom: "10px",
                fontWeight: "bold"
              }}
            >
              Before
            </p>

            <Image
              src="/gallery/before.png"
              alt="Before"
              width={350}
              height={350}
              unoptimized
              style={{
                objectFit: "cover",
                border: "3px solid red",
                borderRadius: "10px"
              }}
            />
          </div>

          {/* AFTER */}
          <div>
            <p
              style={{
                marginBottom: "10px",
                fontWeight: "bold"
              }}
            >
              After
            </p>

            <Image
              src="/gallery/after.png"
              alt="After"
              width={350}
              height={350}
              unoptimized
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
      <section
        style={{
          padding: "60px 20px",
          background: "#f8fafc",
          textAlign: "center"
        }}
      >
        <h2
          style={{
            fontSize: "32px",
            marginBottom: "40px"
          }}
        >
          Services
        </h2>

        <div
          style={{
            display: "flex",
            gap: "20px",
            justifyContent: "center",
            flexWrap: "wrap"
          }}
        >
          <div
            style={{
              background: "white",
              padding: "25px",
              borderRadius: "12px",
              width: "300px",
              boxShadow: "0 4px 12px rgba(0,0,0,0.08)"
            }}
          >
            <h3>Residential Window Washing</h3>
            <p>
              Interior & exterior streak-free cleaning for homes.
            </p>
          </div>

          <div
            style={{
              background: "white",
              padding: "25px",
              borderRadius: "12px",
              width: "300px",
              boxShadow: "0 4px 12px rgba(0,0,0,0.08)"
            }}
          >
            <h3>Gutter Cleaning</h3>
            <p>
              Debris removal and water flow protection.
            </p>
          </div>
        </div>
      </section>

      {/* QUOTE */}
      <section
        id="quote"
        style={{
          padding: "60px 20px",
          textAlign: "center"
        }}
      >
        <h2
          style={{
            fontSize: "32px",
            marginBottom: "20px"
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
            maxWidth: "500px",
            margin: "0 auto",
            display: "flex",
            flexDirection: "column",
            gap: "12px",
            background: "white",
            padding: "25px",
            borderRadius: "12px",
            border: "1px solid #ddd",
            boxShadow: "0 4px 12px rgba(0,0,0,0.08)"
          }}
        >
          <input
            placeholder="Name"
            required
            style={{
              padding: "12px",
              border: "1px solid #ccc",
              borderRadius: "8px"
            }}
          />

          <input
            placeholder="Email"
            required
            style={{
              padding: "12px",
              border: "1px solid #ccc",
              borderRadius: "8px"
            }}
          />

          <textarea
            placeholder="Message"
            required
            rows={5}
            style={{
              padding: "12px",
              border: "1px solid #ccc",
              borderRadius: "8px"
            }}
          />

          <button
            type="submit"
            style={{
              background: "#2563eb",
              color: "white",
              padding: "14px",
              border: "none",
              borderRadius: "8px",
              fontWeight: "bold",
              cursor: "pointer"
            }}
          >
            Send Quote Request
          </button>
        </form>
      </section>

    </main>
  );
}