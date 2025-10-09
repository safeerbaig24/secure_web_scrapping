"use client";

import { useEffect, useRef, useState } from "react";
import html2canvas from "html2canvas-pro";

import { secureData } from "./data";

export default function SecureViewer() {
  const [currentStep, setCurrentStep] = useState(0);
  const [isRendering, setIsRendering] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [isWide, setIsWide] = useState(false);
  const canvasHostRef = useRef<HTMLDivElement>(null);
  const canvasSlotRef = useRef<HTMLDivElement>(null);
  const captureRef = useRef<HTMLDivElement>(null);

  const totalSteps = secureData.length;
  const atFirst = currentStep === 0;
  const atLast = currentStep === totalSteps - 1;

  useEffect(() => {
    const prevent = (event: Event) => event.preventDefault();
    const handleKeydown = (event: KeyboardEvent) => {
      if (
        (event.ctrlKey && ["u", "s", "c"].includes(event.key.toLowerCase())) ||
        event.key === "F12"
      ) {
        event.preventDefault();
      }
    };

    document.addEventListener("contextmenu", prevent);
    document.addEventListener("copy", prevent);
    document.addEventListener("cut", prevent);
    document.addEventListener("selectstart", prevent);
    document.addEventListener("keydown", handleKeydown);

    return () => {
      document.removeEventListener("contextmenu", prevent);
      document.removeEventListener("copy", prevent);
      document.removeEventListener("cut", prevent);
      document.removeEventListener("selectstart", prevent);
      document.removeEventListener("keydown", handleKeydown);
    };
  }, []);

  useEffect(() => {
    const source = captureRef.current;
    const host = canvasHostRef.current;
    const slot = canvasSlotRef.current;
    if (!source || !host || !slot) return;

    let cancelled = false;
    setIsRendering(true);
    setError(null);

    const timer = window.setTimeout(() => {
      void html2canvas(source, {
        backgroundColor: "#ffffff",
        scale: window.devicePixelRatio > 1 ? 2 : 1.5,
        useCORS: true,
        logging: false,
      })
        .then((canvas) => {
          if (cancelled) return;
          canvas.style.display = "block";
          canvas.style.width = "100%";
          canvas.style.height = "auto";
          slot.replaceChildren(canvas);
        })
        .catch((cause) => {
          if (cancelled) return;
          console.error("Failed to render secure canvas", cause);
          slot.replaceChildren();
          setError("Unable to render secure content.");
        })
        .finally(() => {
          if (!cancelled) {
            setIsRendering(false);
          }
        });
    }, 60);

    return () => {
      cancelled = true;
      window.clearTimeout(timer);
    };
  }, [currentStep]);

  const goNext = () => {
    if (!atLast) {
      setCurrentStep((index) => Math.min(index + 1, totalSteps - 1));
    }
  };

  const goPrev = () => {
    if (!atFirst) {
      setCurrentStep((index) => Math.max(index - 1, 0));
    }
  };

  useEffect(() => {
    const updateLayout = () => {
      setIsWide(window.innerWidth >= 1024);
    };
    updateLayout();
    window.addEventListener("resize", updateLayout);
    return () => window.removeEventListener("resize", updateLayout);
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
      <div style={{ width: "100%", maxWidth: "1160px" }}>
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            gap: "28px",
          }}
        >
          <section
            style={{
              flex: 1,
              backgroundColor: "#ffffff",
              borderRadius: "16px",
              boxShadow: "0 16px 40px rgba(15, 23, 42, 0.04)",
              padding: "28px",
            }}
          >
            <h3
              style={{
                marginTop: 0,
                marginBottom: "20px",
                fontSize: "1.125rem",
                fontWeight: 700,
                color: "#0f172a",
              }}
            >
              Reference View (HTML)
            </h3>
            {secureData[currentStep].content}
          </section>

          <section
            style={{
              flex: 1,
              backgroundColor: "#ffffff",
              borderRadius: "16px",
              boxShadow: "0 24px 60px rgba(15, 23, 42, 0.08)",
              padding: "28px",
              display: "flex",
              flexDirection: "column",
              gap: "20px",
            }}
          >
            <h3
              style={{
                margin: 0,
                fontSize: "1.125rem",
                fontWeight: 700,
                color: "#0f172a",
              }}
            >
              Protected View (Canvas)
            </h3>
            <div
              ref={canvasHostRef}
              style={{
                position: "relative",
                flex: 1,
                backgroundColor: "#ffffff",
                borderRadius: "12px",
                overflow: "hidden",
                minHeight: "360px",
              }}
            >
              <div
                ref={canvasSlotRef}
                style={{
                  width: "100%",
                  minHeight: "360px",
                  display: "flex",
                  alignItems: "stretch",
                  justifyContent: "center",
                }}
              />
              {isRendering && (
                <div
                  style={{
                    position: "absolute",
                    inset: 0,
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    background:
                      "linear-gradient(180deg, #f8fafc 0%, #eef2ff 100%)",
                    color: "#1d4ed8",
                    fontWeight: 600,
                    letterSpacing: "0.02em",
                    pointerEvents: "none",
                  }}
                >
                  Preparing secure content...
                </div>
              )}
              {error && !isRendering && (
                <div
                  style={{
                    position: "absolute",
                    inset: 0,
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    color: "#ef4444",
                    fontWeight: 600,
                    padding: "40px",
                    textAlign: "center",
                    backgroundColor: "rgba(255,255,255,0.92)",
                  }}
                >
                  {error}
                </div>
              )}
            </div>
          </section>
        </div>

        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            gap: "16px",
            marginTop: "32px",
          }}
        >
          <span style={{ color: "#64748b", fontWeight: 600 }}>
            Step {currentStep + 1} of {totalSteps}
          </span>
          <div style={{ display: "flex", gap: "12px" }}>
            <button
              type="button"
              onClick={goPrev}
              disabled={atFirst || isRendering}
              style={{
                padding: "10px 18px",
                borderRadius: "999px",
                border: "1px solid",
                borderColor: atFirst || isRendering ? "#cbd5f5" : "#1d4ed8",
                backgroundColor: "#ffffff",
                color: atFirst || isRendering ? "#cbd5f5" : "#1d4ed8",
                fontWeight: 600,
                cursor: atFirst || isRendering ? "not-allowed" : "pointer",
                transition: "all 0.2s ease",
              }}
            >
              Back
            </button>
            <button
              type="button"
              onClick={goNext}
              disabled={atLast || isRendering}
              style={{
                padding: "10px 22px",
                borderRadius: "999px",
                border: "none",
                backgroundColor: atLast || isRendering ? "#cbd5f5" : "#1d4ed8",
                color: "#ffffff",
                fontWeight: 600,
                cursor: atLast || isRendering ? "not-allowed" : "pointer",
                transition: "background-color 0.2s ease",
              }}
            >
              Next
            </button>
          </div>
        </div>

        <div
          ref={captureRef}
          aria-hidden="true"
          style={{
            position: "fixed",
            top: "-10000px",
            left: "-10000px",
            width: "920px",
            backgroundColor: "#ffffff",
            padding: "32px",
            borderRadius: "16px",
            boxShadow: "0 24px 60px rgba(15, 23, 42, 0.08)",
          }}
        >
          {secureData[currentStep].content}
        </div>
      </div>
    </main>
  );
}
