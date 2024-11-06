import React, { useState } from "react";
import { Alert, Text , View , FlatList } from "react-native";

import Button from "../../Components/Button";
import Input from "../../Components/Input";

import styles from "./Reminders.styles"

function Reminders({navigation}){


    const [reminderText , setReminderText] = useState("")
    const [reminder , setReminder] = useState([])

    function AddReminder(){
        if(reminderText.trim()===""){
            Alert.alert("Lütfen bir hatırlatıcı metni girin");
            return;
        }

        const newReminder = {
            id: Math.random().toString(),
            text: reminderText ,
            time: new Date().toLocaleTimeString(),
        }

        setReminder((prevReminder) => [...prevReminder , newReminder])
        setReminderText("");
    }

        const deleteReminder = (id) => {
            setReminder((prevReminder) => prevReminder.filter((reminder) => reminder.id !==id))
        }
        return (
            <View style={styles.container}>
              <Text style={styles.title}>Yemek Hatırlatıcıları</Text>
              <Input
                value={reminderText}
                onChangeText={setReminderText}
                placeholder="Hatırlatıcı metnini girin"
              />
              <Button title="Hatırlatıcı Ekle" onPress={AddReminder} />
        
              <FlatList
                data={reminder}
                keyExtractor={(item) => item.id}
                renderItem={({ item }) => (
                  <View style={styles.reminderItem}>
                    <Text style={reminderText}>{item.text} - {item.time}</Text>
                    <Button title="Sil" onPress={() => deleteReminder(item.id)} />
                  </View>
                )}
              />
            </View>
          );
        
}

export default Reminders;