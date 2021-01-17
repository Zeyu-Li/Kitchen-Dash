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
  AppRegistry,
} from "native-base";
import { firebase, db } from "../../../src/firebase/config.js";
import { Image, View, StyleSheet, TextInput } from "react-native";
import { styles } from "./styles.js";

const test_data = [
  {
    name: "Celery",
    img: "https://cdn.pixabay.com/photo/2016/12/26/17/28/food-1932466_1280.jpg",
    description: "Very very crunchy",
    ingredients: { name: { mg: 5 } },
    instructions: ["Add water", " put in soil", "grow"],
    rating: 3,
  },
  {
    name: "Frog",
    img: "https://cdn.pixabay.com/photo/2016/12/26/17/28/food-1932466_1280.jpg",
    description: "Very very crunchy",
    ingredients: { name: { mg: 5 } },
    instructions: ["Add water", " put in soil", "grow"],
    rating: 3,
  },
  {
    name: "Celery",
    img: "https://cdn.pixabay.com/photo/2016/12/26/17/28/food-1932466_1280.jpg",
    description: "Very very crunchy",
    ingredients: { name: { mg: 5 } },
    instructions: ["Add water", " put in soil", "grow"],
    rating: 3,
  },
];

export default function HomeScreen() {
  // search
  const [ready, readyChange] = useState(false);
  const [search, searchOnChange] = useState("");
  const [items, changeItem] = useState([]);
  let all_items;
  const RecCol = db
    .collection("Recipe")
    .get()
    .then(function (querySnapshot) {
      const data = querySnapshot.docs.map((doc) => doc.data());
      all_items = data;
      changeItem(all_items);
    });
  let current = -1;
  const renderNext = (data) => {
    current++;
    let stars = [];
    let i;
    for (i = 0; i < data.rating; i++) {
      stars.push(1);
    }
    for (i = data.rating; i < 5; i++) {
      stars.push(0);
    }
    return (
      <Card>
        <CardItem
          header
          button
          onPress={() => {
            // TODO: nav to item uid
            // alert("Accessing " + stars)
            alert("Accessing " + data.name);
          }}
        >
          <Image source={{ uri: data.img }} style={styles.image} />
        </CardItem>
        <CardItem
          header
          button
          onPress={() => {
            // TODO: nav to item uid
            alert("Accessing " + data.name);
          }}
        >
          <Text style={styles.title}>{data.name + ": "}</Text>
          <Text>{data.desc}</Text>
        </CardItem>
        <CardItem>
          {/* <Image style={styles.star} source={require('@expo/../../img/star_full.png')} /> */}
          {stars.map((stater) => (
            <Image
              style={styles.star}
              source={
                stater
                  ? require(`@expo/../../img/star_full.png`)
                  : require(`@expo/../../img/star_empty.png`)
              }
            />
          ))}
        </CardItem>
      </Card>
    );
  };

  // renders all the items in items

  const renderAll = () => {
    return items.map((element) => {
      return renderNext(element);
    });
  };

  // when search term is changed
  useEffect(() => {
    // TODO: search via firebase query?
    // const x = db
    //   .collection("Recipe")
    //   .where("user", "==", user)
    //   .get()
    //   .then((doc) => {
    //     // console.log(doc);
    //   });
    // x;
    if (search == '') {
      changeItem(all_items);
    } else {
      changeItem(all_items.filter((item)=>{
          return item.name.includes(search)
        })
      )
      // console.log(items)
    }
    console.log(search);
  }, [search]);
  return (
    <Container>
      <Header searchBar>
        <Item>
          <Icon name="ios-search" />
          <Input
            placeholder="Search Foods"
            onChangeText={(text) => searchOnChange(text)}
            value={search}
          />
        </Item>
      </Header>
      <Content padder>{renderAll()}</Content>
    </Container>
  );
}
