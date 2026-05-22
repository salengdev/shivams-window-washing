"use client";

import { useState } from "react";

export default function QuoteForm() {
  const [loading, setLoading] = useState(false);

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setLoading(true);

    const form = e.currentTarget;

    const name = (form.elements.namedItem("name") as HTMLInputElement).value;
    const email = (form.elements.namedItem("email") as HTMLInputElement).value;
    const message = (form.elements.namedItem("message") as HTMLTextAreaElement).value;

    const res = await fetch("/api/quote", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ name, email, message }),
    });

    if (res.ok) {
      alert("Quote request sent!");
      form.reset();
    } else {
      alert("Something went wrong. Try again.");
    }

    setLoading(false);
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-4 max-w-md mx-auto">

      <input
        name="name"
        className="w-full p-3 border rounded"
        placeholder="Your Name"
        required
      />

      <input
        name="email"
        className="w-full p-3 border rounded"
        placeholder="Your Email"
        type="email"
        required
      />

      <textarea
        name="message"
        className="w-full p-3 border rounded"
        placeholder="What do you need cleaned?"
        rows={4}
        required
      />

      <button
        type="submit"
        className="w-full bg-black text-white p-3 rounded hover:bg-gray-800"
        disabled={loading}
      >
        {loading ? "Sending..." : "Get Quote"}
      </button>

    </form>
  );
}