import React from "react";
import { Feather } from "@expo/vector-icons";

import {
  CardHeader,
  CardContent,
  CardFooter,
  Title,
  Description,
  Annotation
} from "./styles";

export default function CardBody() {
  return (
    <>
      <CardHeader>
        <Feather name="dollar-sign" size={28} color="#666" />
        <Feather name="eye-off" size={28} color="#666" />
      </CardHeader>
      <CardContent>
        <Title>Saldo disponível</Title>
        <Description>R$ 256.652,00</Description>
      </CardContent>
      <CardFooter>
        <Annotation>
          Transferência de R$ 1.000,00 recebida de Fulano de Tal hoje às 15:00h
        </Annotation>
      </CardFooter>
    </>
  );
}
