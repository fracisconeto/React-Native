import { StyleSheet,Text, View } from "react-native";
import { red } from "react-native-reanimated/lib/typescript/reanimated2/Colors";

export default function About() {
  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center", 
   
        
      }}
    >
      <Text>sobre nos</Text>
    </View>
  );
}
const style = StyleSheet.create({
    container:{
        flex: 1,
        justifyContent: "center",
        alignItems: "center", 
   
    }
    
})