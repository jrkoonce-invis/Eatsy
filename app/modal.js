import { StyleSheet, Text, View, ScrollView } from "react-native";
import { Link, useLocalSearchParams } from "expo-router";
import { useEffect } from "react";
import App from '../components/maps.js';

export default function Page(){
  const params = useLocalSearchParams();

  return (
    <ScrollView style={styles.container}
    contentContainerStyle={{
      flexGrow: 1,
      flexDirection: "column",
      gap: 15,
      alignItems: "center",
      paddingBottom: 50,
      paddingTop: 60,
    }}>
      <View style={styles.main}>
        <Text style={styles.title}>Modal Popup for {params.name}</Text>
        <Text style={styles.subtitle}>We can add item info here</Text>
      </View>
      <View>
        <Text style={{margin: 100}}>
          <Text style={styles.nutrients}>
            Calories: 800
            Fat (g): 50
            Protein (g): 10
            Carbs (g): 12
          </Text>
        </Text>
        <Text style={{margin: 100}}>
          <Text style={styles.nutrients}>
            Calories: 800, Fat (g): 50, Protein (g): 10, Carbs (g): 12
          </Text>
        </Text>
        <Text style={{margin: 100}}>
          <Text style={styles.nutrients}>
            Calories: 800, Fat (g): 50, Protein (g): 10, Carbs (g): 12
          </Text>
        </Text>
        <Text style={{margin: 200}}>
          <App></App>
        </Text>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {

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
  },
  nutrients: {
    fontSize: 20,
    color: "#38434D",
  }
});
