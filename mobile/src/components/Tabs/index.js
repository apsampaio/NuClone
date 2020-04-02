import { Animated } from "react-native";
import React from "react";

import { Container, TabsContainer, TabItem, TabText } from "./styles";
import { Feather } from "@expo/vector-icons";

export default function Tabs({ translateY }) {
  return (
    <Container
      style={{
        transform: [
          {
            translateY: translateY.interpolate({
              inputRange: [0, 380],
              outputRange: [0, 30],
              extrapolate: "clamp"
            })
          }
        ],
        opacity: translateY.interpolate({
          inputRange: [0, 380],
          outputRange: [1, 0.3],
          extrapolate: "clamp"
        })
      }}
    >
      <TabsContainer>
        <TabItem>
          <Feather name="user-plus" size={24} color={"#FFF"} />
          <TabText>Indicar amigos</TabText>
        </TabItem>
        <TabItem>
          <Feather name="message-square" size={24} color={"#FFF"} />
          <TabText>Cobrar</TabText>
        </TabItem>
        <TabItem>
          <Feather name="arrow-down" size={24} color={"#FFF"} />
          <TabText>Depositar</TabText>
        </TabItem>
        <TabItem>
          <Feather name="arrow-up" size={24} color={"#FFF"} />
          <TabText>Transferir</TabText>
        </TabItem>
        <TabItem>
          <Feather name="lock" size={24} color={"#FFF"} />
          <TabText>Bloquear cartão</TabText>
        </TabItem>
      </TabsContainer>
    </Container>
  );
}
