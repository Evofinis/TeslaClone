import { View, Text, ImageBackground } from "react-native";
import React from "react";
import styles from "./styles";

import StyledButton from "../StyledButton";

export default function CarItem() {
  return (
    <View style={styles.carContainer}>
      <ImageBackground
        source={require("../../assets/images/ModelX.jpeg")}
        style={styles.imageBG}
      />
      <View style={styles.titles}>
        <Text style={styles.title}>Model S</Text>
        <Text style={styles.subtitle}>Starting at $69,420</Text>
      </View>
      <StyledButton type="primary" text="custom order" />
      <StyledButton type="secondary" text="more details" />
    </View>
  );
}
