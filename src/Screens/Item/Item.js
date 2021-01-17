import React, { Component, useEffect, useState } from "react";
import { Image, View, Text } from "react-native";

import { styles } from "./styles.js";

export const Item = (uid) => {
    // get item UID from database
    const item = {
        name: "Celery",
        img: "https://cdn.pixabay.com/photo/2016/12/26/17/28/food-1932466_1280.jpg",
        description: "Very very crunchy",
        ingredients: { name: { mg: 5 } },
        instructions: ["Add water", " put in soil", "grow"],
        rating: 3,
    }
    const addStars = () => {
        let stars = [];
        let i;
        for (i = 0; i < item.rating; i++) {
          stars.push(1);
        }
        for (i = item.rating; i < 5; i++) {
          stars.push(0);
        }
        return stars.map((stater) => {
            return <Image
            style={styles.star}
            source={
                stater
                ? require(`@expo/../../img/star_full.png`)
                : require(`@expo/../../img/star_empty.png`)
            }
            />
        })
    }
    return (
        <View>
            <Image source={{ uri: item.img }} style={styles.image} />
            <Text style={styles.title}>{item.name}</Text>
            <Text>{item.desc}</Text>
            {/* break */}
            <View
                style={styles.break}
            />
            <View>
                {addStars()}
            </View>
        </View>
    )
    ;
}