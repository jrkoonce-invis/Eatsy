import React from 'react';
import { View, Text, Image, StyleSheet, Dimensions, ScrollView, TouchableOpacity } from 'react-native';
import { Link } from "expo-router";
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { faStar } from '@fortawesome/free-solid-svg-icons';
import { faStar as faStarOutline } from '@fortawesome/free-regular-svg-icons';

const windowWidth = Dimensions.get('window').width;

const RestaurantCard = ({ restaurant }) => {
    let stars = []
    for (let i = 0; i < restaurant.rating; i++) {
      stars.push(
        <FontAwesomeIcon key={i} icon={faStar} size={14} color="gold" />
        );
    }
    for (let i = 0; i < 5 - restaurant.rating; i++) {
        stars.push(
          <FontAwesomeIcon key={5-i} icon={faStarOutline}  size={14} color="gold" />
          );
      }
    return (
            <Link href={{
                pathname: "/modal",
                params: { name: restaurant.name },
            }}>
                <View style={styles.card}>
                    <Image style={styles.cardImage} source={restaurant.photo ? { uri: restaurant.photo } : require("../images/wendy.jpg")} />
                    <View style={styles.cardTextContainer}>
                        <Text style={styles.cardText}>{restaurant.name}</Text>
                        <Text style={styles.cardSubText}>Cuisine: {restaurant.cuisine}</Text>
                        <Text style={styles.cardSubText}>{restaurant.description}</Text>
                        <Text style={styles.cardSubText}>Price: {restaurant.price}</Text>
                        <Text style= {styles.rating}>{stars}</Text>
                    </View>
                </View>
            </Link>
    )
}

const styles = StyleSheet.create({
    rating: {
        flexDirection:"row"
    },
    cardImage: {
        width: 120,
        height: 120,
        borderRadius: 10,
        paddingLeft: 10,
    },
    card: {
        backgroundColor: "white",
        width: windowWidth * .9,
        height: 200,
        borderRadius: 20,
        shadowColor: "black",
        shadowOffset: {width: -2, height: 4},
        shadowOpacity: 0.05,
        shadowRadius: 2,
        flexDirection: "row",
        alignItems: "center",
        paddingLeft: 15
      },
      cardText: {
        fontSize: 20,
        fontWeight: "bold",
        marginBottom: 5,
      },
      cardSubText: {
        fontSize: 14,
        color: "#666",
      },
      cardTextContainer: {
        flex: 1,
        marginLeft: 15,
        marginRight: 10,
        gap: 5,
      }
      
});

export default RestaurantCard;