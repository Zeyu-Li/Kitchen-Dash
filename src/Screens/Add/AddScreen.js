import React, { Component, useState, TouchableOpacity } from "react";
import { Container, Content, Form, Textarea, Button } from "native-base";
import { db } from "../../../src/firebase/config.js";
import { ScrolView, View, StyleSheet, TextInput, Text } from "react-native";
import styles from "./styles.js";
import DropDownPicker from "react-native-dropdown-picker";

export default function Add() {
  const RecCol = db.collection("Recipe");
  const [RecipeName, SetRecipeName] = useState("");
  const [Description, SetDescription] = useState("");
  const [Instructions, SetInstruction] = useState("");
  const ingredientList = [];
  const onAddButtonPress = () => {
    const data = { user:"afaq@yahoo.com",name: RecipeName, desc: Description, instruc: Instructions };
    RecCol.add(data);
  };
  // col.add({name: "Afaq Nabi" , address: "102"});
  return (
    <View style={styles.formContainer}>
      <TextInput
        placeholder="Give your recipe a Name"
        style={styles.input}
        onChangeText={(text) => SetRecipeName(text)}
      />
      <TextInput
        placeholder="Breif Description"
        style={styles.input}
        onChangeText={(text) => SetDescription(text)}
      />
      <DropDownPicker
        items={[
          { label: "lbs", value: "item1" },
          { label: "Tablespoon", value: "item2" },
        ]}
        defaultNull
        placeholder="Unit of measurment"
        defaultIndex={1}
        containerStyle={{ height: 40, width: 200 }}
        onChangeItem={(item) => console.log(item.label, item.value)}
      />
      <Container>
        <Content padder>
          <Form>
            <Textarea
              rowSpan={5}
              bordered
              placeholder="Write Instructions"
              onChangeText={(text) => SetInstruction(text)}
            />
          </Form>
        </Content>
      </Container>
      <View>
        <Button
          title="Add"
          color="#788eec"
          onPress={onAddButtonPress}
          style={styles.button}
        />
      </View>
    </View>
  );
}
