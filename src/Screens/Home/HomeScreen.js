import React, { Component, useEffect, useState } from "react";
import {
  Container,
  Header,
  Content,
  Card,
  CardItem,
  Text,
  Body,
  Item,
  Icon,
  Input,
} from "native-base";
import { firebase, db } from "../../../src/firebase/config.js";
import { ScrolView, View, StyleSheet, TextInput } from "react-native";
// import { Card } from "@paraboly/react-native-card";
{
  /* <Content>
        <Card>
          <CardItem header>
            <Text>Recipe Name</Text>
          </CardItem>
          <CardItem>
            <Body>
              <Text>Breif description of recipe</Text>
            </Body>
          </CardItem>
          <CardItem footer>
            <Text>comment</Text>
          </CardItem>
        </Card>
      </Content> */
}
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
  RecipeRef = db.collection("Recipe").get();
  function fetchdata() {
    RecipeRef.then((querySnapshot) => {
      const data = querySnapshot.docs.map((doc) => doc.data());
      return data;
    });
  }
  console.log(fetchdata)
  // const RecCol = db
  //   .collection("Recipe")
  //   .get()
  //   .then((querySnapshot) => {
  //     const data = querySnapshot.docs.map((doc) => doc.data());
  //     console.log(data);
  //   });

  function card() {
    return pass;
  }
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
        <Card>
          <CardItem header button onPress={() => alert("This is Card Header")}>
            <Text>NativeBase</Text>
          </CardItem>
          <CardItem button onPress={() => alert("This is Card Body")}>
            <Body>
              <Text>Click on any carditem</Text>
            </Body>
          </CardItem>
          <CardItem footer button onPress={() => alert("This is Card Footer")}>
            <Text>GeekyAnts</Text>
          </CardItem>
        </Card>
      </Content>
    </Container>
  );
}
