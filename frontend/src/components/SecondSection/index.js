import React from "react";

import "./styles.css";
import img from "../../assets/pc2.webp";

export default function SecondSection() {
  return (
    <section className="second-section">
      <div>
        <span>Conta do Nubank</span>
        <span>
          Nossa conta 100% digital com mais de 20 milhões de clientes em todo o
          Brasil.
        </span>
        <span>Conheça o roxinho com função débito</span>
      </div>
      <img src={img} alt="app" />
    </section>
  );
}
