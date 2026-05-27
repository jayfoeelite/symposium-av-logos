import { useState } from "react";
import { Link } from "react-router-dom";
import emailjs from "@emailjs/browser";
import acdLogo from "./ACD Logo White.svg";

export default function Discovery() {
  const [formData, setFormData] = useState({
    firstImpression: "",
    artMeaning: [],
    logosRespect: "",
    dayToDay: "",
    businessCards: [],
    symbols: "",
    colors: "",
    logoPlacement: [],
    onRightTrack: "",
    brandPerson: "",
  });

  const [submitting, setSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const firstImpressionOptions = [
    "Trust & authority",
    "Innovation & edge",
    "Prestige & luxury",
    "Energy & excitement",
  ];

  const artMeaningOptions = [
    "Hand-crafted illustration",
    "Abstract concept",
    "Strong visual metaphor",
    "Typographic artistry",
  ];

  const businessCardOptions = [
    "Clients",
    "Venues",
    "Event planners",
    "Corporate contacts",
    "Industry peers",
    "Vendors/suppliers",
  ];

  const placementOptions = [
    "Business cards",
    "Event signage",
    "Website",
    "Equipment",
    "Uniforms",
    "Social media",
    "Proposals/documents",
  ];

  const handleSubmit = async (e) => {
    e.preventDefault();
    setSubmitting(true);

    // Format the data for email
    const emailContent = `
Brand Discovery Questionnaire - Symposium Audiovisual

First Impression Feeling:
${formData.firstImpression || "Not answered"}

What "the art must be art" means:
${formData.artMeaning.length > 0 ? formData.artMeaning.join(", ") : "Not answered"}

Three logos they respect and why:
${formData.logosRespect || "Not answered"}

What Symposium Audiovisual does day to day:
${formData.dayToDay || "Not answered"}

Who they're handing business cards to:
${formData.businessCards.length > 0 ? formData.businessCards.join(", ") : "Not answered"}

Symbols or visuals connected to the brand:
${formData.symbols || "Not answered"}

Color preferences or dealbreakers:
${formData.colors || "Not answered"}

Where the logo will live:
${formData.logoPlacement.length > 0 ? formData.logoPlacement.join(", ") : "Not answered"}

What was on the right track:
${formData.onRightTrack || "Not answered"}

Brand as a person walking into a room:
${formData.brandPerson || "Not answered"}
    `.trim();

    // Try EmailJS first, fallback to mailto
    try {
      // EmailJS configuration - replace with your actual IDs
      await emailjs.send(
        "YOUR_SERVICE_ID", // Replace with your EmailJS service ID
        "YOUR_TEMPLATE_ID", // Replace with your EmailJS template ID
        {
          to_email: "aboriginalcreatives@gmail.com",
          subject: "Brand Discovery Questionnaire - Symposium Audiovisual",
          message: emailContent,
        },
        "YOUR_PUBLIC_KEY" // Replace with your EmailJS public key
      );
      setSubmitted(true);
    } catch (error) {
      console.error("EmailJS failed, using mailto fallback:", error);
      // Mailto fallback
      const mailtoLink = `mailto:aboriginalcreatives@gmail.com?subject=${encodeURIComponent(
        "Brand Discovery Questionnaire - Symposium Audiovisual"
      )}&body=${encodeURIComponent(emailContent)}`;
      window.location.href = mailtoLink;
      setSubmitted(true);
    } finally {
      setSubmitting(false);
    }
  };

  const toggleMultiSelect = (field, value) => {
    setFormData((prev) => ({
      ...prev,
      [field]: prev[field].includes(value)
        ? prev[field].filter((v) => v !== value)
        : [...prev[field], value],
    }));
  };

  if (submitted) {
    return (
      <div style={{ minHeight: "100vh", background: "#0D0F14", display: "flex", alignItems: "center", justifyContent: "center", padding: "40px 24px" }}>
        <div style={{ maxWidth: 600, textAlign: "center" }}>
          <div style={{ fontSize: 48, marginBottom: 24 }}>✓</div>
          <div style={{ fontSize: 24, fontWeight: 700, color: "#E8EDF5", marginBottom: 12 }}>
            Thank you!
          </div>
          <div style={{ fontSize: 14, color: "#8A9BB0", marginBottom: 32, lineHeight: 1.6 }}>
            Your brand discovery responses have been sent to Aboriginal Creative Design. We'll be in touch soon.
          </div>
          <Link
            to="/"
            style={{
              display: "inline-block",
              padding: "12px 24px",
              background: "#00C2FF",
              color: "#000",
              textDecoration: "none",
              borderRadius: 4,
              fontSize: 12,
              fontWeight: 600,
              letterSpacing: "0.06em",
              textTransform: "uppercase",
            }}
          >
            Back to Logo Explorer
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div style={{ minHeight: "100vh", background: "#0D0F14", fontFamily: "'Helvetica Neue', Helvetica, Arial, sans-serif", color: "#E8EDF5" }}>
      {/* Header */}
      <div style={{
        borderBottom: "1px solid #1A1D24",
        padding: "0 32px",
        height: 64,
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        background: "#080A0E",
      }}>
        <a
          href="https://aboriginalcreatives.com"
          target="_blank"
          rel="noopener noreferrer"
          style={{ display: "block", opacity: 0.9, transition: "opacity 0.2s" }}
        >
          <img src={acdLogo} alt="Aboriginal Creative Design" style={{ height: 28, display: "block" }} />
        </a>
        <Link
          to="/"
          style={{
            fontSize: 11,
            letterSpacing: "0.1em",
            color: "#4A6080",
            textDecoration: "none",
            textTransform: "uppercase",
            transition: "color 0.2s",
          }}
          onMouseEnter={(e) => e.currentTarget.style.color = "#8A9BB0"}
          onMouseLeave={(e) => e.currentTarget.style.color = "#4A6080"}
        >
          ← Logo Explorer
        </Link>
      </div>

      {/* Form */}
      <div style={{ padding: "60px 24px" }}>
        <div style={{ maxWidth: 720, margin: "0 auto" }}>
          <div style={{ marginBottom: 48 }}>
            <div style={{ fontSize: 11, letterSpacing: "0.35em", color: "#4A6080", textTransform: "uppercase", marginBottom: 8 }}>
              BRAND DISCOVERY
            </div>
            <div style={{ fontSize: 28, fontWeight: 700, letterSpacing: "-0.01em", color: "#E8EDF5", marginBottom: 12 }}>
              Symposium Audiovisual Questionnaire
            </div>
            <div style={{ fontSize: 14, color: "#8A9BB0", lineHeight: 1.6 }}>
              Help us understand your vision. Your responses will guide the final logo direction.
            </div>
          </div>

          <form onSubmit={handleSubmit} style={{ display: "flex", flexDirection: "column", gap: 48 }}>
            {/* First Impression */}
            <div>
              <label style={{ display: "block", fontSize: 14, fontWeight: 600, color: "#E8EDF5", marginBottom: 16 }}>
                First impression feeling
              </label>
              <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
                {firstImpressionOptions.map((option) => (
                  <label
                    key={option}
                    style={{
                      display: "flex",
                      alignItems: "center",
                      padding: "16px 20px",
                      background: formData.firstImpression === option ? "#1A1D24" : "#12151B",
                      border: `2px solid ${formData.firstImpression === option ? "#00C2FF" : "#1A1D24"}`,
                      borderRadius: 6,
                      cursor: "pointer",
                      transition: "all 0.2s",
                    }}
                  >
                    <input
                      type="radio"
                      name="firstImpression"
                      value={option}
                      checked={formData.firstImpression === option}
                      onChange={(e) => setFormData({ ...formData, firstImpression: e.target.value })}
                      style={{ marginRight: 12, accentColor: "#00C2FF" }}
                    />
                    <span style={{ fontSize: 14, color: "#E8EDF5" }}>{option}</span>
                  </label>
                ))}
              </div>
            </div>

            {/* Art Meaning */}
            <div>
              <label style={{ display: "block", fontSize: 14, fontWeight: 600, color: "#E8EDF5", marginBottom: 8 }}>
                What "the art must be art" means to them
              </label>
              <div style={{ fontSize: 12, color: "#8A9BB0", marginBottom: 16 }}>Select all that apply</div>
              <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))", gap: 12 }}>
                {artMeaningOptions.map((option) => (
                  <div
                    key={option}
                    onClick={() => toggleMultiSelect("artMeaning", option)}
                    style={{
                      padding: "20px",
                      background: formData.artMeaning.includes(option) ? "#1A1D24" : "#12151B",
                      border: `2px solid ${formData.artMeaning.includes(option) ? "#00C2FF" : "#1A1D24"}`,
                      borderRadius: 6,
                      cursor: "pointer",
                      transition: "all 0.2s",
                      textAlign: "center",
                    }}
                  >
                    <div style={{ fontSize: 13, color: "#E8EDF5", lineHeight: 1.4 }}>{option}</div>
                  </div>
                ))}
              </div>
            </div>

            {/* Logos Respect */}
            <div>
              <label style={{ display: "block", fontSize: 14, fontWeight: 600, color: "#E8EDF5", marginBottom: 16 }}>
                Three logos they respect and why
              </label>
              <textarea
                value={formData.logosRespect}
                onChange={(e) => setFormData({ ...formData, logosRespect: e.target.value })}
                placeholder="List 3 logos you admire and explain what makes them effective..."
                style={{
                  width: "100%",
                  minHeight: 120,
                  padding: "16px",
                  background: "#12151B",
                  border: "1px solid #1A1D24",
                  borderRadius: 6,
                  color: "#E8EDF5",
                  fontSize: 14,
                  fontFamily: "inherit",
                  resize: "vertical",
                }}
              />
            </div>

            {/* Day to Day */}
            <div>
              <label style={{ display: "block", fontSize: 14, fontWeight: 600, color: "#E8EDF5", marginBottom: 16 }}>
                What Symposium Audiovisual does day to day
              </label>
              <textarea
                value={formData.dayToDay}
                onChange={(e) => setFormData({ ...formData, dayToDay: e.target.value })}
                placeholder="Describe the daily operations, services, and work environment..."
                style={{
                  width: "100%",
                  minHeight: 120,
                  padding: "16px",
                  background: "#12151B",
                  border: "1px solid #1A1D24",
                  borderRadius: 6,
                  color: "#E8EDF5",
                  fontSize: 14,
                  fontFamily: "inherit",
                  resize: "vertical",
                }}
              />
            </div>

            {/* Business Cards */}
            <div>
              <label style={{ display: "block", fontSize: 14, fontWeight: 600, color: "#E8EDF5", marginBottom: 8 }}>
                Who they're handing business cards to
              </label>
              <div style={{ fontSize: 12, color: "#8A9BB0", marginBottom: 16 }}>Select all that apply</div>
              <div style={{ display: "flex", flexWrap: "wrap", gap: 8 }}>
                {businessCardOptions.map((option) => (
                  <div
                    key={option}
                    onClick={() => toggleMultiSelect("businessCards", option)}
                    style={{
                      padding: "8px 16px",
                      background: formData.businessCards.includes(option) ? "#00C2FF" : "#1A1D24",
                      color: formData.businessCards.includes(option) ? "#000" : "#8A9BB0",
                      borderRadius: 20,
                      cursor: "pointer",
                      fontSize: 13,
                      fontWeight: 500,
                      transition: "all 0.2s",
                    }}
                  >
                    {option}
                  </div>
                ))}
              </div>
            </div>

            {/* Symbols */}
            <div>
              <label style={{ display: "block", fontSize: 14, fontWeight: 600, color: "#E8EDF5", marginBottom: 16 }}>
                Symbols or visuals connected to the brand
              </label>
              <textarea
                value={formData.symbols}
                onChange={(e) => setFormData({ ...formData, symbols: e.target.value })}
                placeholder="Any imagery, icons, or visual themes that resonate with the brand..."
                style={{
                  width: "100%",
                  minHeight: 100,
                  padding: "16px",
                  background: "#12151B",
                  border: "1px solid #1A1D24",
                  borderRadius: 6,
                  color: "#E8EDF5",
                  fontSize: 14,
                  fontFamily: "inherit",
                  resize: "vertical",
                }}
              />
            </div>

            {/* Colors */}
            <div>
              <label style={{ display: "block", fontSize: 14, fontWeight: 600, color: "#E8EDF5", marginBottom: 16 }}>
                Color preferences or dealbreakers
              </label>
              <textarea
                value={formData.colors}
                onChange={(e) => setFormData({ ...formData, colors: e.target.value })}
                placeholder="Colors you love, colors to avoid, or any color-related thoughts..."
                style={{
                  width: "100%",
                  minHeight: 100,
                  padding: "16px",
                  background: "#12151B",
                  border: "1px solid #1A1D24",
                  borderRadius: 6,
                  color: "#E8EDF5",
                  fontSize: 14,
                  fontFamily: "inherit",
                  resize: "vertical",
                }}
              />
            </div>

            {/* Logo Placement */}
            <div>
              <label style={{ display: "block", fontSize: 14, fontWeight: 600, color: "#E8EDF5", marginBottom: 8 }}>
                Where the logo will live
              </label>
              <div style={{ fontSize: 12, color: "#8A9BB0", marginBottom: 16 }}>Select all that apply</div>
              <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(160px, 1fr))", gap: 12 }}>
                {placementOptions.map((option) => (
                  <div
                    key={option}
                    onClick={() => toggleMultiSelect("logoPlacement", option)}
                    style={{
                      padding: "16px",
                      background: formData.logoPlacement.includes(option) ? "#1A1D24" : "#12151B",
                      border: `2px solid ${formData.logoPlacement.includes(option) ? "#00C2FF" : "#1A1D24"}`,
                      borderRadius: 6,
                      cursor: "pointer",
                      transition: "all 0.2s",
                      textAlign: "center",
                    }}
                  >
                    <div style={{ fontSize: 13, color: "#E8EDF5" }}>{option}</div>
                  </div>
                ))}
              </div>
            </div>

            {/* On Right Track */}
            <div>
              <label style={{ display: "block", fontSize: 14, fontWeight: 600, color: "#E8EDF5", marginBottom: 16 }}>
                What if anything was on the right track in the previous concepts
              </label>
              <textarea
                value={formData.onRightTrack}
                onChange={(e) => setFormData({ ...formData, onRightTrack: e.target.value })}
                placeholder="Any elements from the 4 concepts shown that resonated with you..."
                style={{
                  width: "100%",
                  minHeight: 100,
                  padding: "16px",
                  background: "#12151B",
                  border: "1px solid #1A1D24",
                  borderRadius: 6,
                  color: "#E8EDF5",
                  fontSize: 14,
                  fontFamily: "inherit",
                  resize: "vertical",
                }}
              />
            </div>

            {/* Brand Person */}
            <div>
              <label style={{ display: "block", fontSize: 14, fontWeight: 600, color: "#E8EDF5", marginBottom: 16 }}>
                If the brand were a person walking into a room, describe them
              </label>
              <textarea
                value={formData.brandPerson}
                onChange={(e) => setFormData({ ...formData, brandPerson: e.target.value })}
                placeholder="What do they wear? How do they carry themselves? What's their energy?"
                style={{
                  width: "100%",
                  minHeight: 120,
                  padding: "16px",
                  background: "#12151B",
                  border: "1px solid #1A1D24",
                  borderRadius: 6,
                  color: "#E8EDF5",
                  fontSize: 14,
                  fontFamily: "inherit",
                  resize: "vertical",
                }}
              />
            </div>

            {/* Submit */}
            <div style={{ paddingTop: 24, borderTop: "1px solid #1A1D24" }}>
              <button
                type="submit"
                disabled={submitting}
                style={{
                  width: "100%",
                  padding: "16px",
                  background: submitting ? "#1A1D24" : "#00C2FF",
                  color: submitting ? "#8A9BB0" : "#000",
                  border: "none",
                  borderRadius: 6,
                  fontSize: 14,
                  fontWeight: 700,
                  letterSpacing: "0.08em",
                  textTransform: "uppercase",
                  cursor: submitting ? "not-allowed" : "pointer",
                  transition: "all 0.2s",
                }}
              >
                {submitting ? "Submitting..." : "Submit Questionnaire"}
              </button>
            </div>
          </form>
        </div>
      </div>

      {/* Footer */}
      <div style={{
        borderTop: "1px solid #1A1D24",
        padding: "24px 32px",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}>
        <a
          href="https://aboriginalcreatives.com"
          target="_blank"
          rel="noopener noreferrer"
          style={{ opacity: 0.4, transition: "opacity 0.2s", display: "block" }}
          onMouseEnter={(e) => e.currentTarget.style.opacity = "0.7"}
          onMouseLeave={(e) => e.currentTarget.style.opacity = "0.4"}
        >
          <img src={acdLogo} alt="Aboriginal Creative Design" style={{ height: 18, display: "block" }} />
        </a>
      </div>
    </div>
  );
}
