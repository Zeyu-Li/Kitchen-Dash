import React, { Component, useEffect, useState } from "react";
import { Container, Header, Content,Card,CardItem,Text,Body,Item,Icon,Input,AppRegistry} from "native-base";
import { firebase, db } from "../../../src/firebase/config.js";
import { Image, View, StyleSheet, TextInput } from "react-native";

import {styles} from './styles.js';

// test data is array of recipe objects
const test_data = [{
  recipeName: "Celery",
  img: 'https://cdn.pixabay.com/photo/2016/12/26/17/28/food-1932466_1280.jpg',
  description: "Very very crunchy",
  ingredients:{"name":{"mg": 5}},
  instructions:["Add water", " put in soil", "grow"],
  rating: 3,
}]

export default function HomeScreen() {
  // search
  const [ready, readyChange] = useState(false);
  const [search, searchOnChange] = useState('');
  const [items, changeItem] = useState(test_data);
  // number of results
  const [resultsNum, changeResultNum] = useState(test_data.length);
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
  

  // const RecCol = db
  //   .collection("Recipe")
  //   .get()
  //   .then((querySnapshot) => {
  //     const data = querySnapshot.docs.map((doc) => doc.data());
  //     console.log(data);
  //   });

  // number of results
  let current = -1
  const renderNext = (data) => {
    current++;
    let stars = [];
    let i;
    for (i = 0; i< data.rating; i++) {
      stars.push(1);
    }
    for (i = data.rating; i< 5; i++) {
      stars.push(0);
    }
    return (
      <Card>
        <CardItem header button onPress={() => {
          // TODO: nav to item uid
          // alert("Accessing " + stars)
          alert("Accessing " + data.recipeName)
        }}>
          <Image source={{uri: data.img}} style={styles.image} />
        </CardItem>
        <CardItem header button onPress={() => {
          // TODO: nav to item uid
          alert("Accessing " + data.recipeName)
        }}>
          <Text style={styles.title}>{data.recipeName+ ': '}</Text>
          <Text>{data.description}</Text>
        </CardItem>
        <CardItem>
          {/* <Image style={styles.star} source={require('@expo/../../img/star_full.png')} /> */}
          {stars.map((stater) => <Image style={styles.star} source={stater ? require(`@expo/../../img/star_full.png`) : require(`@expo/../../img/star_empty.png`)}/>)}
        </CardItem>
      </Card>
    )
  }

  // renders all the items in items
  const renderAll = () => {
    return items.map(element => {
      return renderNext(element);
    })
  }

  // when search term is changed
  useEffect(()=> {
    // TODO: search via firebase query?
    console.log(search)
  }, [search]);
  return (
    <Container>
    <Header searchBar>
      <Item>
        <Icon name="ios-search" />
        <Input placeholder="Search Foods" onChangeText={text => searchOnChange(text)} value={search} />
      </Item>
    </Header>
    <Content padder>
      {renderAll()}
    </Content>
    </Container>
  );
}
