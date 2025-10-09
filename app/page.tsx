"use client";

import { useEffect, useRef } from "react";
import html2canvas from "html2canvas-pro";

import { secureData } from "./data";

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
        {secureData}
      </div>
    </main>
  );
}
