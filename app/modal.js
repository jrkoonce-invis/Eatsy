import { StyleSheet, Text, View } from "react-native";
import { Link, useLocalSearchParams } from "expo-router";
import { useEffect } from "react";


export default function Page() {
  const params = useLocalSearchParams();

  return (
    <View style={styles.container}>
      <View style={styles.main}>
        <Text style={styles.title}>Modal Popup for {params.name}</Text>
        <Text style={styles.subtitle}>We can add item info here</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    padding: 24,
  },
  main: {
    flex: 1,
    justifyContent: "center",
    maxWidth: 960,
    marginHorizontal: "auto",
  },
  title: {
    fontSize: 64,
    fontWeight: "bold",
  },
  subtitle: {
    fontSize: 36,
    color: "#38434D",
  },
  link: {
    textDecorationLine: "underline", 
  }
});
