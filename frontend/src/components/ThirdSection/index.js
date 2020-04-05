import React from "react";

import "./styles.css";

import hand from "../../assets/pc3.webp";

export default function ThirdSection() {
  return (
    <section className="third-section">
      <div>
        <span>Cartão de Crédito</span>
        <span>
          Moderno, simples, gratuito. E tudo que você precisa pelo app.
        </span>
        <span>Saiba mais.</span>
      </div>
      <img src={hand} alt="hand" />
    </section>
  );
}
