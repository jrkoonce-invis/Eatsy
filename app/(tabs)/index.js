import { StyleSheet, Text, View, Dimensions, ScrollView, TouchableOpacity, TouchableWithoutFeedback} from "react-native";
import { Link } from "expo-router";
import { React, useState, useRef } from "react";
import { TextInput } from 'react-native';

import MenuItemCard from "../../components/MenuItemCard";

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff'

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
  cardContainer: {
    flex: 1,
    gap: 15,
    alignItems: "center",
    marginTop: 100,
    marginBottom: 100,
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
  searchContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 20,
    position: 'absolute',
    top: 0,
    paddingTop: 60,
    left: 0,
    right: 0,
    zIndex: 1,
    elevation: 1,
    backgroundColor: '#fff',
    borderBottomWidth: 1,
    borderBottomColor: '#ddd',
  },
  searchBar: {
    fontSize: 20,
    paddingHorizontal: 10,
    paddingVertical: 8,
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 10,
    marginBottom: 10,
    width: windowWidth - 40,
  },
  dropdown: {
    width: windowWidth - 40,
    backgroundColor: 'white',
    padding: 10,
    position: "absolute",
    borderRadius: 10,
    shadowColor: 'black',
    shadowOffset: {width: 0, height: 2},
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 2,
    top: 90, 
  },
  dropdownInput: {
    fontSize: 18,
    paddingHorizontal: 10,
    paddingVertical: 8,
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 10,
    marginTop: 5,
  },
});

let foods = ["Burger", "Sammy", "Cookie", "Coffee", "Housekeys", "Peanuts"]
let cards = [];
foods.forEach((food, index) => {
  cards.push(
    // <MenuItemCard name="Bacon Burger" rating="4.5" restaurant="Wendy's" photo="https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.allrecipes.com%2Fwendys-pretzel-baconator-launch-8404167&psig=AOvVaw1rQWDpu3zchWqURMPf7HSR&ust=1713900433927000&source=images&cd=vfe&opi=89978449&ved=0CBIQjRxqFwoTCPiNyc3H1oUDFQAAAAAdAAAAABAE" description="A half-pound* of fresh British beef, American cheese, 6 pieces of crispy Applewood smoked bacon, Heinz ketchup, and Heinz mayo. Carnivores rejoice!"></MenuItemCard>
    <MenuItemCard key={index} photo={""} rating={Math.floor(Math.random(5)*5)} name={food} price = "$9.50" restaurant={"Wendy's"}></MenuItemCard>
  );
});

export default function Page() {
  const [searchQuery, setSearchQuery] = useState('');
  const [maxPrice, setMaxPrice] = useState('');
  const [isDropdownVisible, setDropdownVisible] = useState(false);

  const toggleDropdown = () => {
    setDropdownVisible(!isDropdownVisible);
  };
  const dismissDropdown = () => {
    setDropdownVisible(false);
  };
  const dropdownRef = useRef(null);
  const handleSearchBarPress = () => {
    toggleDropdown()
  }
  const handlePressOutsideDropdown = () => {
    setDropdownVisible(false);
  };
  return (
    <TouchableWithoutFeedback onPress={handlePressOutsideDropdown}>
      <View style={styles.container}>
        <View style={styles.searchContainer}>
          <TouchableOpacity onPress={handleSearchBarPress}>
            <TextInput
              style={styles.searchBar}
              onChangeText={setSearchQuery}
              value={searchQuery}
              placeholder="Search food items..."
              onFocus={handleSearchBarPress}
            />
          </TouchableOpacity>
          {isDropdownVisible && (
            <View style={styles.dropdown}>
              <TextInput
                style={styles.dropdownInput}
                keyboardType="numeric"
                onChangeText={setMaxPrice}
                value={maxPrice}
                placeholder="Max Price?"
              />
            </View>
          )}
        </View>
        <ScrollView
          style={{ flex: 1 }}
          contentContainerStyle={{ flexGrow: 1, alignItems: 'center', gap: 15, paddingBottom: 50, paddingTop: 150 }}
        >
          {cards}
        </ScrollView>
      </View>
    </TouchableWithoutFeedback>
  );
}

