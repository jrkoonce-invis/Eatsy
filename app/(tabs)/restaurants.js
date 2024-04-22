import React, { useState } from "react";
import { StyleSheet, Text, View, Dimensions, ScrollView, TouchableOpacity, TouchableWithoutFeedback, TextInput } from "react-native";
import RestaurantCard from "../../components/RestaurantCard";

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff'
  },
  searchContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 20,
    position: 'absolute',
    top: 50,
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

const restaurants = [
  {
    name: "Wendy's",
    cuisine: "Fastfood: Burgers, fries, and drinks",
    photo: "", 
    rating: 4,
    price: "$",
    description: "A fast food restaurant known for its quick and easy eats.",
  },
  {
    name: "Subway",
    cuisine: "Sandwiches",
    photo: "", 
    rating: 4,
    price: "$",
    description: "A fast food restaurant known for its submarine sandwiches and salads.",
  },
  {
    name: "McDonald's",
    cuisine: "Fast Food",
    photo: "", 
    rating: 3,
    price: "$",
    description: "A global fast food chain known for its hamburgers, fries, and chicken products.",
  },
  {
    name: "Jimmy John's",
    cuisine: "Sandwiches",
    photo: "", 
    rating: 4,
    price: "$",
    description: "A sandwich shop offering gourmet sandwiches and subs made with high-quality ingredients.",
  },
  {
    name: "Raising Cane's",
    cuisine: "Chicken Fingers",
    photo: "", 
    rating: 4,
    price: "$",
    description: "A fast food restaurant known for its fresh, never frozen chicken fingers and signature sauce.",
  },
  {
    name: "Domino's",
    cuisine: "Pizza",
    photo: "", 
    rating: 4,
    price: "$",
    description: "A pizza delivery chain known for its wide selection of pizzas, pasta, and other Italian-American dishes.",
  },
  {
    name: "Papa John's",
    cuisine: "Pizza",
    photo: "", 
    rating: 3,
    price: "$",
    description: "A pizza delivery chain offering a variety of pizzas, sides, and desserts.",
  },
  {
    name: "Insomnia Cookies",
    cuisine: "Desserts",
    photo: "", 
    rating: 4,
    price: "$", 
    description: "A dessert shop specializing in warm cookies, brownies, and ice cream sandwiches.",
  },
];

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

  const handleSearchBarPress = () => {
    toggleDropdown();
  };

  const handlePressOutsideDropdown = () => {
    setDropdownVisible(false);
  };

  let r_cards = [];
  restaurants.forEach((r, index) => {
    r_cards.push(
      <RestaurantCard key={index} photo={""} rating={Math.floor(Math.random(5)*5)} price="price" restaurant={r} />
    );
  });

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
          contentContainerStyle={{ flexGrow: 1, alignItems: 'center', gap: 15, marginTop: 100, marginBottom: 100 }}
        >
          {r_cards}
        </ScrollView>
      </View>
    </TouchableWithoutFeedback>
  );
}