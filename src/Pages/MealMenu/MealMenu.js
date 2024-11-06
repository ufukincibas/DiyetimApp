import React from "react";
import { Button, Text , View } from "react-native";

import styles from "./MealMenu.styles";

function MealMenu({navigation}){
    function switchPage(){
        navigation.navigate("RemindersPage")
    }
    return(
        <View>
            <Text>MealMenu Page</Text>
            <Button title="goToReminders" onPress={switchPage}/>
        </View>
    )
}

export default MealMenu;