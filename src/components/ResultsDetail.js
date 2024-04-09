import { StyleSheet, Text, View, Image } from "react-native";
import React from "react";

export default function ResultsDetail({ result }) {
  const { name, image_url, rating, review_count } = result;
  return (
    <View style={styles.container}>
      <Image source={{ uri: image_url }} style={styles.image} />
      <Text style={styles.name}>{name}</Text>
      <Text>
        {rating} Stars, {review_count} Reviews
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginLeft: 15,
  },
  image: {
    width: 250,
    height: 120,
    borderRadius: 4,
    marginBottom: 5,
  },
  name: {
    fontWeight: "bold",
  },
});
