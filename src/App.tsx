import React from "react";

import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import DietProgram from "./Pages/DietProgram";
import MealMenu from "./Pages/MealMenu";
import Reminders from "./Pages/Reminders";
import Reports from "./Pages/Reports";


const Stack = createNativeStackNavigator(); 

function App(){
  return(
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="DietMenuPage" component={DietProgram}/>
        <Stack.Screen name="MealMenuPage" component={MealMenu}/>
        <Stack.Screen name="RemindersPage" component={Reminders}/>
        <Stack.Screen name="ReportsPage" component={Reports}/>
      </Stack.Navigator>
    </NavigationContainer>
  )
}

export default App;