import { StyleSheet, Text, View, Dimensions, ScrollView } from "react-native";
import { Link } from "expo-router";
import { React } from "react";

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

const styles = StyleSheet.create({
  container: {

  },
  main: {
    flex: 1,
    justifyContent: "center",
    maxWidth: 350,
    marginHorizontal: "auto",
    marginBottom: 40,
    marginTop: 40,
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
  card: {
    backgroundColor: "white",
    width: windowWidth * .85,
    height: 150,
    borderRadius: 20,
    justifyContent: "center",
    alignItems: "center",
    shadowColor: "black",
    shadowColor: 'black',
    shadowOffset: {width: -2, height: 4},
    shadowOpacity: 0.05,
    shadowRadius: 2,

  },
  cardText: {
    fontSize: 20,
  },
  cardContainer: {
    flex: 1,
    gap: 15
  }
});

let foods = ["Burger", "Sammy", "Cookie", "Coffee", "Housekeys", "Peanuts"]

let cards = [];
foods.forEach((food, index) => {
  cards.push(
    <Link href={{
      pathname: "/modal",
      params: { name: food },
    }}
    key={index}>
      <View style={styles.card}>
        <Text style={styles.cardText}>{food}</Text>
      </View>
    </Link>
  );
});

export default function Page() {

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
        <Text style={styles.title}>Home</Text>
        <Text style={styles.subtitle}>Welcome to your home page</Text>
      </View>

      <View style={styles.cardContainer}>
        {cards}
      </View>
      
      
    </ScrollView>
  );
}

