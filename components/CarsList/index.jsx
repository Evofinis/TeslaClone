import { View, Text, FlatList, Dimensions } from "react-native";
import React from "react";
import CarItem from "../CarItem";

import styles from "./styles";
import cars from "./cars";

export default function CarsList(props) {
  return (
    <View style={styles.container}>
      <FlatList
        data={cars}
        renderItem={({ item }) => <CarItem car={item} />}
        showsVerticalScrollIndicator={false}
        snapToAlignment={"start"}
        decelerationRate={"fast"}
        snapToInterval={Dimensions.get("window").height}
      />
    </View>
  );
}
