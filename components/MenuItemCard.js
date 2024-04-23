import React from 'react';
import { View, Text, Image, StyleSheet, Dimensions } from 'react-native';
import { Link } from "expo-router";
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome'
import { faStar } from '@fortawesome/free-solid-svg-icons'
import { faStar as faStarOutline } from '@fortawesome/free-regular-svg-icons/faStar'

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

const MenuItemCard = ({name, photo, restaurant, rating, price, description}) => {

    let stars = []
    for (let i = 0; i < rating; i++) {
      stars.push(
        <FontAwesomeIcon key={i} icon={faStar} size={14} color="maroon" />
        );
    }
    for (let i = 0; i < 5 - rating; i++) {
        stars.push(
          <FontAwesomeIcon key={5 - i} icon={faStarOutline}  size={14} color="maroon" />
          );
      }

    return (
        <Link href={{
            pathname: "/modal",
            params: { name: name },
          }}>
            <View style={styles.card}>
                <Image style={styles.cardImage} source={require("../images/wendy.jpg")}></Image>
                <View style={styles.cardTextContainer}>
                    <Text style={styles.cardText}>{name}</Text>
                    <Text style={styles.cardSubText}>{restaurant}</Text>
                    <Text style= {styles.cardSubText}>{price}</Text>
                    <Text style= {styles.rating}>{stars}</Text>
                </View>
            </View>
        </Link>
    )
}

const styles = StyleSheet.create({
    rating: {

    },
    cardImage: {
        width: 120,
        height: 120,
        borderRadius: 10,
    },
    card: {
        backgroundColor: "white",
        width: windowWidth * .85,
        height: 150,
        borderRadius: 20,
        shadowColor: "black",
        shadowOffset: {width: -2, height: 4},
        shadowOpacity: 0.05,
        shadowRadius: 2,
        display: "flex",
        flexDirection: "row",
        gap: 10,
        alignItems: "center",
        justifyContent: "left",
        paddingLeft: 15
      },
      cardText: {
        fontSize: 25,
      },
      cardSubText: {
        fontSize: 15,
        color: "#38434D",
      },
      cardTextContainer: {
        display: "flex",
        flexDirection: "column",
        gap: 5
      }
      
});

export default MenuItemCard;
