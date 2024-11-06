import React from "react";
import { TextInput, View } from "react-native";

import styles from "./Input.styles"

function Input({value , onChangeText , placeholder}){
    return(
   
        <TextInput 
        style={styles.input}
        value={value} 
        onChangeText={onChangeText}
        placeholder={placeholder}
        placeholderTextColor="#888"/>
   
    )
}

export default Input;