"use client";

import { useEffect, useRef } from "react";
import html2canvas from "html2canvas-pro";

export default function SecureViewer() {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const node = ref.current;
    if (!node) return;
    setTimeout(() => {
      html2canvas(node, {
        backgroundColor: "#ffffff",
        scale: 2,
        useCORS: true,
        logging: false,
      }).then((canvas) => {
        node.innerHTML = "";
        node.appendChild(canvas);
      });
    }, 300);
    const prevent = (e: Event) => e.preventDefault();
    document.addEventListener("contextmenu", prevent);
    document.addEventListener("copy", prevent);
    document.addEventListener("cut", prevent);
    document.addEventListener("selectstart", prevent);
    document.addEventListener("keydown", (e) => {
      if (
        (e.ctrlKey && ["u", "s", "c"].includes(e.key.toLowerCase())) ||
        e.key === "F12"
      )
        e.preventDefault();
    });

    return () => {
      document.removeEventListener("contextmenu", prevent);
      document.removeEventListener("copy", prevent);
      document.removeEventListener("cut", prevent);
      document.removeEventListener("selectstart", prevent);
    };
  }, []);

  return (
    <main
      style={{
        backgroundColor: "#f9fafb",
        minHeight: "100vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        padding: "40px",
      }}
    >
      <div
        ref={ref}
        style={{
          maxWidth: "800px",
          background: "#ffffff",
          padding: "32px",
          borderRadius: "12px",
          boxShadow: "0 0 30px rgba(0,0,0,0.1)",
        }}
      >
        <h1
          style={{
            fontSize: "2rem",
            fontWeight: 700,
            marginBottom: "1rem",
            color: "#111827",
          }}
        >
          Advanced Cybersecurity Concepts
        </h1>

        <p style={{ fontSize: "1.125rem", lineHeight: 1.8, color: "#374151" }}>
          Welcome to this confidential instructional module. All material shown
          below is protected by forensic watermarking and anti-piracy controls.
        </p>

        <p
          style={{
            fontSize: "1.125rem",
            lineHeight: 1.8,
            marginTop: "1rem",
            color: "#374151",
          }}
        >
          In this lesson, you'll explore encryption algorithms, secure
          communications, and zero-trust network design principles critical for
          modern enterprise defense.
        </p>

        <table
          style={{
            marginTop: "1.5rem",
            borderCollapse: "collapse",
            width: "100%",
            color: "#111827",
          }}
        >
          <thead style={{ backgroundColor: "#f3f4f6" }}>
            <tr>
              <th style={{ padding: 10, border: "1px solid #d1d5db" }}>
                Topic
              </th>
              <th style={{ padding: 10, border: "1px solid #d1d5db" }}>
                Description
              </th>
              <th style={{ padding: 10, border: "1px solid #d1d5db" }}>
                Level
              </th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td style={{ padding: 10, border: "1px solid #d1d5db" }}>
                Encryption
              </td>
              <td style={{ padding: 10, border: "1px solid #d1d5db" }}>
                Overview of AES, RSA, and ECC algorithms.
              </td>
              <td style={{ padding: 10, border: "1px solid #d1d5db" }}>
                Intermediate
              </td>
            </tr>
            <tr>
              <td style={{ padding: 10, border: "1px solid #d1d5db" }}>
                Zero Trust
              </td>
              <td style={{ padding: 10, border: "1px solid #d1d5db" }}>
                Framework for access verification at every step.
              </td>
              <td style={{ padding: 10, border: "1px solid #d1d5db" }}>
                Advanced
              </td>
            </tr>
          </tbody>
        </table>

        <p style={{ fontSize: "1rem", marginTop: "2rem", color: "#6b7280" }}>
          🔒 Each session is uniquely watermarked and monitored. Copying or
          distribution is strictly prohibited.
        </p>
      </div>
    </main>
  );
}
