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
  //const ingredientList = [];

  // add the object to firebase
  const onAddButtonPress = () => {
    let ingredients = []
    for (let i = 0; i < ingredientList.length; i++)
    {
      ingredients.push(ingredientList[i].join(' '))
    }
    const data = { user: "afaq@yahoo.com", name: RecipeName, desc: Description, ingredients: ingredients, instruc: Instructions };
    RecCol.add(data);
    setQuantity(0)
    setIngredient('')
    SetInstruction('')
    setUnit('')
    setIngredientList([])
  };

  //list of ingredients so far to display using a stack

  const [Quantity, setQuantity] = useState(0);
  const [Ingredient, setIngredient] = useState('');
  const [Unit, setUnit] = useState('');
  const [ingredientList, setIngredientList] = useState([]);
  // quantity setter
  const quantityInputHandler = (enteredText) => {
    setQuantity(enteredText);
  }
  const instructionInputHandler = (enteredText) => {
    SetInstruction(enteredText);
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
      <View>
        {ingredientList.map((goal) => <Text>{goal[0] + ' ' + goal[1] + ' ' + goal[2]}</Text>)}
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
