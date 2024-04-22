import React from 'react';
import { View, Text, Image, StyleSheet, Dimensions, ScrollView } from 'react-native';
import { Link } from "expo-router";
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { faStar } from '@fortawesome/free-solid-svg-icons';
import { faStar as faStarOutline } from '@fortawesome/free-regular-svg-icons';

const windowWidth = Dimensions.get('window').width;

const RestaurantCard = ({ restaurant }) => {
    return (
        <ScrollView contentContainerStyle={styles.scrollView}>
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
                        <View style={styles.rating}>
                            {Array.from({ length: 5 }, (_, i) => (
                                <FontAwesomeIcon key={i} icon={i < restaurant.rating ? faStar : faStarOutline} size={14} color="gold" />
                            ))}
                        </View>
                    </View>
                </View>
            </Link>
        </ScrollView>
    )
}

const styles = StyleSheet.create({
    scrollView: {
        alignItems: 'center',
        paddingVertical: 15,
    },
    cardImage: {
        width: 100,
        height: 100,
        borderRadius: 10,
    },
    card: {
        backgroundColor: "white",
        width: windowWidth * 0.9,
        borderRadius: 20,
        shadowColor: "black",
        shadowOffset: { width: -2, height: 4 },
        shadowOpacity: 0.05,
        shadowRadius: 2,
        flexDirection: "row",
        alignItems: "center",
        marginBottom: 20,
        paddingHorizontal: 20,
        paddingVertical: 15,
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
    },
    rating: {
        flexDirection: "row",
    },
});

export default RestaurantCard;