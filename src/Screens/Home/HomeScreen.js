import React, { Component, useEffect, useState } from "react";
import { collection, getDocs } from "firebase/firestore";
import { db } from "../../../src/firebase/config.js";
import {
  Image,
  Pressable,
  ScrollView,
  Text,
  TextInput,
  View,
} from "react-native";
import { styles } from "./styles.js";

export default function HomeScreen() {
  // search
  // const [ready, readyChange] = useState(false);
  const [search, searchOnChange] = useState("");
  const [items, changeItem] = useState([]);
  const [searchfood, SetSearch] = useState([]);
  // load the recipes once; fetching in the render body re-ran the query on every re-render
  useEffect(() => {
    getDocs(collection(db, "Recipe")).then(function (querySnapshot) {
      const data = querySnapshot.docs.map((doc) => doc.data());
      changeItem(data);
    });
  }, []);
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
      <View style={styles.card} key={current}>
        <Pressable
          style={styles.cardItem}
          onPress={() => {
            // TODO: nav to item uid
            // alert("Accessing " + stars)
            alert("Accessing " + data.name);
          }}
        >
          <Image source={{ uri: data.img }} style={styles.image} />
        </Pressable>
        <Pressable
          style={styles.cardItem}
          onPress={() => {
            // TODO: nav to item uid
            alert("Accessing " + data.name);
          }}
        >
          <Text style={styles.title}>{data.name + ": "}</Text>
        </Pressable>

        <Pressable
          style={styles.cardItem}
          onPress={() => {
            // TODO: nav to item uid
            alert("Accessing " + data.name);
          }}
        >
          <Text>{data.desc}</Text>
        </Pressable>
        <View style={[styles.cardItem, styles.stars]}>
          {/* <Image style={styles.star} source={require('@expo/../../img/star_full.png')} /> */}
          {stars.map((stater, index) => (
            <Image
              key={index}
              style={styles.star}
              source={
                stater
                  ? require(`@expo/../../img/star_full.png`)
                  : require(`@expo/../../img/star_empty.png`)
              }
            />
          ))}
        </View>
      </View>
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
    if (search === "") {
      SetSearch(items);
    } else {
      SetSearch(
        items.filter((item) => {
          return item.name.includes(search);
        })
      );
      // console.log(items)
    }
    console.log(search);
  }, [search]);
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <View style={styles.searchItem}>
          <Text style={styles.searchIcon}>🔍</Text>
          <TextInput
            style={styles.searchInput}
            placeholder="Search Foods"
            onChangeText={(text) => searchOnChange(text)}
            value={search}
          />
        </View>
      </View>
      <ScrollView contentContainerStyle={styles.content}>{renderAll()}</ScrollView>
    </View>
  );
}
