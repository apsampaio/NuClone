import React from "react";

import QRCode from "react-native-qrcode-svg";

import { Feather } from "@expo/vector-icons";

import {
  Container,
  Code,
  Nav,
  NavItems,
  NavText,
  SignOutButton,
  SignOutButtonText
} from "./styles";

export default function Menu({ translateY }) {
  return (
    <Container
      style={{
        opacity: translateY.interpolate({
          inputRange: [0, 150],
          outputRange: [0, 1]
        })
      }}
    >
      <Code>
        <QRCode
          value="https://github.com/apsampaio"
          size={100}
          color="#8B10AE"
        />
      </Code>
      <Nav>
        <NavItems>
          <Feather name="help-circle" size={20} color="#FFF" />
          <NavText>Me ajuda</NavText>
        </NavItems>
        <NavItems>
          <Feather name="user" size={20} color="#FFF" />
          <NavText>Perfil</NavText>
        </NavItems>
        <NavItems>
          <Feather name="credit-card" size={20} color="#FFF" />
          <NavText>Configurar cartão</NavText>
        </NavItems>
        <NavItems>
          <Feather name="smartphone" size={20} color="#FFF" />
          <NavText>Configurações do app</NavText>
        </NavItems>
      </Nav>
      <SignOutButton onPress={() => {}}>
        <SignOutButtonText>SAIR DO APP</SignOutButtonText>
      </SignOutButton>
    </Container>
  );
}
