import React from "react";
import {Button, Text , View} from "react-native"

import styles from "./DietProgram.styles"

function DietProgram({navigation}){
    function switchPage(){
        navigation.navigate("MealMenuPage")
    }
   
    return(
        <View>
            <Text>DietProgram Page</Text>
            <Button title="goTOmealMenu" onPress={switchPage}/>
        </View>
    )
}

export default DietProgram;