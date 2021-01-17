import React, { Component, useEffect, useState } from "react";
import { Container, Header, Content,Card,CardItem,Text,Body,Item,Icon,Input,AppRegistry} from "native-base";
import { firebase, db } from "../../../src/firebase/config.js";
import { Image, View, StyleSheet, TextInput } from "react-native";
// import { Card } from "@paraboly/react-native-card";
import {styles} from './styles.js';
// import {renderNext} from './new_card.js';

const test_data = [{
  recipeName: "Celery",
  img: 'https://cdn.pixabay.com/photo/2016/12/26/17/28/food-1932466_1280.jpg',
  description: "Very very crunchy",
  ingredients:{"name":{"mg": 5}},
  instructions:["Add water", " put in soil", "grow"]
}]

export default function HomeScreen() {
  // const x = db
  //   .collection("Recipe")
  //   .where("user", "==", "afaq@yahoo.com")
  //   .get()
  //   .then((doc) => {
  //     // console.log(doc);
  //   });
  // x;
  // console.log(x);
  // RecipeRef = db.collection("Recipe").get();
  // function fetchdata() {
  //   RecipeRef.then((querySnapshot) => {
  //     const data = querySnapshot.docs.map((doc) => doc.data());
  //     return data;
  //   });
  // }

  // number of results
  let current = -1
  let result = 3
  const renderNext = (test_data) => {
    current++;
    return (
      <Card>
        <CardItem header button onPress={() => {
          // TODO: nav to item uid
          alert("Accessing " + test_data[current].recipeName)
        }}>
          <Image source={{uri: test_data[current].img}} style={styles.image} />
          <Text style={styles.title}>{test_data[current].recipeName+ ': '}</Text>
          <Text>{test_data[current].description}</Text>
        </CardItem>
      </Card>
    )
  }

  // const RecCol = db
  //   .collection("Recipe")
  //   .get()
  //   .then((querySnapshot) => {
  //     const data = querySnapshot.docs.map((doc) => doc.data());
  //     console.log(data);
  //   });

  // scroll end?
  useEffect(() => {});
  return (
    <Container>
    <Header searchBar>
      <Item>
        <Icon name="ios-search" />
        <Input placeholder="Find yummy foods" />
      </Item>
    </Header>
    <Content padder>
      {renderNext(test_data)}
    </Content>
    </Container>
  );
}
