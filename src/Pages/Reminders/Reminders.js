import React from "react";
import { Button, Text , View } from "react-native";

import styles from "./Reminders.styles"

function Reminders({navigation}){
    function switchPage(){
        navigation.navigate("ReportsPage")
    }
    return(
        <View>
            <Text>Reminders Page</Text>
            <Button title="goToReports" onPress={switchPage}/>
        </View>
    )
}

export default Reminders;