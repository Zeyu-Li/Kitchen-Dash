import React, { Component, useState, TouchableOpacity } from "react";
import { Container, Content, Form, Textarea, Button } from "native-base";
import { db } from "../../../src/firebase/config.js";
import { ScrolView, View, StyleSheet, TextInput, Text } from "react-native";
import styles from "./styles.js";
import DropDownPicker from "react-native-dropdown-picker";

export default function Add() {
  const RecCol = db.collection("Recipe"); // ref to the collection in firbase

  // hooks to build the object to be stored
  const [RecipeName, SetRecipeName] = useState("");
  const [Description, SetDescription] = useState("");
  const [Instructions, SetInstruction] = useState("");
  const ingredientList = [];

  // add the object to firebase
  const onAddButtonPress = () => {
    const data = { user: "afaq@yahoo.com", name: RecipeName, desc: Description, instruc: Instructions };
    RecCol.add(data);
  };

  // col.add({name: "Afaq Nabi" , address: "102"});
  return (
    // Form
    <View style={styles.formContainer}>
      <TextInput
        placeholder="Give your recipe a name"
        style={styles.inputTitle}
        onChangeText={(text) => SetRecipeName(text)}
      />

      <TextInput
        multiline={true}
        placeholder="Brief Description"
        style={styles.inputDescription}
        onChangeText={(text) => SetDescription(text)}
      />
      <View style={styles.ingredientContainer}>

        <DropDownPicker
          items={[
            { label: "lbs", value: "item1" },
            { label: "Tablespoon", value: "item2" },
          ]}
          defaultNull
          placeholder="Units"
          defaultIndex={1}
          containerStyle={{ height: '100%', width: '30%' }}
          onChangeItem={(item) => console.log(item.label, item.value)}
        />
        <TextInput placeholder="Ingredient" style={styles.ingredientInput} />
      </View>
      <TextInput
        placeholder="Instructions"
        style={styles.inputInstruction}
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
