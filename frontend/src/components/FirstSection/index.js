import React from "react";

import "./styles.css";
import appImg from "../../assets/pc1.webp";

export default function FirstSection() {
  return (
    <section className="first-section">
      <div>
        <span>Ser Nubank é reinventar sua vida financeira.</span>
        <span>
          Conta com rendimento acima da poupança, cartão de crédito sem anuidade
          e o melhor: resolva tudo pelo app.
        </span>
        <button>Quero ser Nubank</button>
      </div>
      <img src={appImg} alt="app" />
    </section>
  );
}
