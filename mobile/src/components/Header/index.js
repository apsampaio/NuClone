import React from "react";
import { Container, Top, Logo, Title } from "./styles";
import { Feather } from "@expo/vector-icons";
import logo from "../../assets/Nubank_Logo.png";

export default function Header() {
  return (
    <Container>
      <Top>
        <Logo source={logo} />
        <Title>Andre</Title>
      </Top>
      <Feather name="chevron-down" size={20} color={"#FFF"} />
    </Container>
  );
}
