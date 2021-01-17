import React, { Component, useState, TouchableOpacity } from "react";
import { db } from "../../../src/firebase/config.js";
import { ScrolView, View, StyleSheet, TextInput, Text, Button } from "react-native";
import styles from "./styles.js";
import DropDownPicker from "react-native-dropdown-picker";

export default function Add() {
  const RecCol = db.collection("Recipe"); // ref to the collection in firbase

  // hooks to build the object to be stored

  const [RecipeName, SetRecipeName] = useState("");
  const [Description, SetDescription] = useState("");
  const [Instructions, setInstruction] = useState("");
  const [Quantity, setQuantity] = useState(0);
  const [Ingredient, setIngredient] = useState('');
  const [Unit, setUnit] = useState('');
  const [ingredientList, setIngredientList] = useState([]);

  // add the object to firebase
  const onAddButtonPress = () => {

    let ingredients = ingredientList.reduce((acc, [q, i, key]) => Object.assign(acc, { [key]: [q, i] }), {})
    const data = { user: "afaq@yahoo.com", name: RecipeName, desc: Description, ingredients: ingredients, instruc: Instructions };
    RecCol.add(data);
    setQuantity(0)
    setIngredient('')
    setInstruction('')
    setUnit('')
    setIngredientList([])
  };

  // quantity setter
  const quantityInputHandler = (enteredText) => {
    setQuantity(enteredText);
  }
  const instructionInputHandler = (enteredText) => {
    setInstruction(enteredText);
  }
  // unit setter
  const unitInputHandler = (enteredText) => {
    setUnit(enteredText.label);
  }
  // ingredient setter
  const ingredientInputHandler = (enteredText) => {
    setIngredient(enteredText);
  }

  const addToIngredientList = () => {
    setIngredientList(ingredientList => [...ingredientList, [Quantity, Unit, Ingredient]])
    setQuantity(0)
    setIngredient('')
    setUnit('')
  }
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
        <TextInput
          placeholder="#"
          style={styles.ingredientCount}
          onChangeText={quantityInputHandler}
          value={Quantity}
        />
        <DropDownPicker
          items={[
            { label: "lbs", value: "item1" },
            { label: "Tablespoon", value: "item2" },
          ]}
          defaultNull
          placeholder="Units"
          defaultIndex={1}
          containerStyle={{ height: '100%', width: '25%' }}
          onChangeItem={unitInputHandler}
          value={Unit}
        />

        <TextInput
          placeholder="Ingredient"
          style={styles.ingredientInput}
          onChangeText={ingredientInputHandler}
          value={Ingredient}

        />
        <Button
          title='+'
          style={{ width: 40, height: '100%' }}
          onPress={addToIngredientList}
        />
      </View>

      <TextInput
        placeholder="Instructions"
        multiline={true}
        style={styles.inputInstruction}
        onChangeText={instructionInputHandler}
        value={Instructions}
      />

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
