import React from "react";
import { Button as RNButton} from "react-native";

import styles from "./Button.styles"

function Button({title , onPress}){
    return(
       
            <RNButton style={styles.button}
             title={title} 
             onPress={onPress}/>
      
    )
}

export default Button;