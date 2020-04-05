import React from "react";

import "./styles.css";

import img from "../../assets/pc4.webp";

export default function FourthSection() {
  return (
    <section className="fourth-section">
      <div>
        <span>Rewards</span>
        <span>Um programa de ponstos justo e fácil de usar.</span>
        <span>Saiba mais</span>
      </div>
      <img src={img} alt="app" />
    </section>
  );
}
