import { Animated } from "react-native";
import styled from "styled-components/native";
import Constants from "expo-constants"; /* statusBarHeight */

export const Card = styled(Animated.View)`
  flex: 1;
  background: #fff;
  border-radius: 4px;
  margin: 0 20px;
  height: 100%;
  position: absolute;
  left: 0;
  right: 0;
  top: 0;
`;
export const Container = styled.View`
  flex: 1;
  background: #8b10ae;
  padding-top: ${Constants.statusBarHeight}px;
  justify-content: center;
`;

export const Center = styled.View`
  flex: 1;
  max-height: 400px;
  z-index: 5;
`;
