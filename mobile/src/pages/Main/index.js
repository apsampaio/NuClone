import React from "react";

import Header from "../../components/Header";
import Tabs from "../../components/Tabs";
import CardBody from "../../components/CardBody";
import Menu from "../../components/Menu";

import { Container, Center, Card } from "./styles";

import { Animated } from "react-native";
import { PanGestureHandler, State } from "react-native-gesture-handler";

export default function Main() {
  let offset = 0;
  const translateY = new Animated.Value(0);
  const animatedEvent = Animated.event(
    [
      {
        nativeEvent: {
          translationY: translateY
        }
      }
    ],
    { useNativeDriver: true }
  );
  function onHandlerStateChanged(event) {
    let opened = false;
    if (event.nativeEvent.oldState === State.ACTIVE) {
      const { translationY } = event.nativeEvent;

      offset += translationY;

      if (translationY >= 100) {
        opened = true;
      } else {
        translateY.setValue(offset);
        translateY.setOffset(0);
        offset = 0;
      }
      Animated.timing(translateY, {
        toValue: opened ? 400 : 0,
        duration: 200,
        useNativeDriver: true
      }).start(() => {
        offset = opened ? 400 : 0;
        translateY.setOffset(offset);
        translateY.setValue(0);
      });
    }
  }

  return (
    <Container>
      <Header />
      <Center>
        <Menu translateY={translateY} />
        <PanGestureHandler
          onGestureEvent={animatedEvent}
          onHandlerStateChange={onHandlerStateChanged}
        >
          <Card
            style={{
              transform: [
                {
                  translateY: translateY.interpolate({
                    inputRange: [-350, 0, 400],
                    outputRange: [-50, 0, 400],
                    extrapolate: "clamp"
                  })
                }
              ]
            }}
          >
            <CardBody />
          </Card>
        </PanGestureHandler>
      </Center>
      <Tabs translateY={translateY} />
    </Container>
  );
}
