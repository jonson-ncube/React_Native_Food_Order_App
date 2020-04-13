import React from "react";
import {
  View,
  StyleSheet,
  Image,
  TouchableOpacity,
  Dimensions,
} from "react-native";

import { Text, Badge, Button } from "react-native-elements";

const deviceWidth = Math.round(Dimensions.get("window").width);

const CartItem = ({ data, onAddItem, onRemoveItem }) => {
  const { name, image, description, price } = data.item;

  return (
    <View style={styles.smallCard}>
      <View style={styles.productInfo}>
        <Text style={styles.title}>{name}</Text>
        <Text style={styles.resturentTitle}>Western Foods</Text>
        <Text style={styles.foodDescription}>
          Spring Onion, Crispy Chicken, Chees, baby Corn
        </Text>
      </View>
      <View style={styles.priceView}>
        <Text style={styles.price}>$ 2.99</Text>
        <View style={styles.countView}>
          <Button title="-" type="outline" onPress={() => onAddItem(data)} />
          <Text h4 style={{ alignSelf: "center", margin: 5 }}>
            2
          </Text>
          <Button title="+" type="outline" onPress={() => onRemoveItem(data)} />
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  root: {
    flex: 1,
    height: "100%",
    display: "flex",
    flexDirection: "column",
    justifyContent: "flex-start",
    alignItems: "center",
    margin: 10,
  },
  smallCard: {
    flex: 1,
    minHeight: 100,
    display: "flex",
    flexDirection: "row",
    justifyContent: "flex-start",
    backgroundColor: "white",
    borderColor: "#E5E5E5",
    borderWidth: 1,
    padding: 10,
    borderRadius: 10,
    margin: 10,
  },

  title: {
    fontSize: 22,
    fontWeight: "600",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  resturentTitle: {
    fontSize: 18,
    fontWeight: "600",
    display: "flex",
    color: "#565555",
  },
  foodDescription: {
    fontSize: 16,
    fontWeight: "300",
    display: "flex",
    color: "#565555",
  },
  price: {
    fontSize: 18,
    fontWeight: "600",
    display: "flex",
    color: "#EA5656",
    alignSelf: "center",
  },
  foodImageSmall: {
    borderRadius: 10,
    height: 99,
    width: 99,
    justifyContent: "flex-start",
    alignItems: "center",
    backgroundColor: "#581845",
    alignSelf: "center",
  },
  rating: {
    alignSelf: "flex-start",
  },
  productInfo: {
    flex: 9,
    justifyContent: "space-around",
  },

  priceView: {
    flex: 3,
    justifyContent: "space-around",
    alignItems: "flex-start",
  },
  countView: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    width: "100%",
    flex: 8,
  },
  badge: {
    backgroundColor: "green",
  },
});

export default CartItem;
