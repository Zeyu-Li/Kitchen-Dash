import React, { Component, useState } from "react";
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

export default function HomeScreen() {
  const x = db
    .collection("Recipe")
    .where("user", "==", "afaq@yahoo.com")
    .get()
    .then((doc) => {
      console.log(doc);
    });
  // x;
  // console.log(x);
  const RecCol = db
    .collection("Recipe")
    .get()
    .then((querySnapshot) => {
      const data = querySnapshot.docs.map((doc) => doc.data());
      console.log(data);
    });

  function card() {

    return (
      <Content>
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
      </Content>
    );
  }

  return (
    <Container>
      <Header searchBar>
        <Item>
          <Icon name="ios-search" />
          <Input placeholder="Find yummy foods" />
        </Item>
      </Header>
    </Container>
  );
}
