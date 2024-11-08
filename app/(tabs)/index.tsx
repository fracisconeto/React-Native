import { useState } from "react";
import { Text, ScrollView, View, StyleSheet, Pressable} from "react-native";


export default function Index() {
  const [tasks,setTasks]= useState([
    {id: 1, title:"Estudar nunca", done:false},
    {id: 2, title:"Estudar nunca nunca ", done:false},
    {id: 3, title:"Estudar nunca nunca nunca ", done:false},
    {id: 4, title:"Estudar nunca nunca nunca nunca " , done:false},
    {id: 5, title:"Estudar nunca nunca nunca nunca " , done:false},
    {id: 6, title:"Estudar nunca nunca nunca nunca " , done:false},
    {id: 7, title:"Estudar nunca nunca nunca nunca " , done:false},
  ]
  )
const updateTask = (id : number) =>{
  const task = tasks.find(task => task.id == id)
  if(task){
    task.done = !task.done
    setTasks([...tasks])
  }}

  return (
    <View
      style={style.container}>
      <View>
  <Text style={style.Minhas}>
    Minhas Tarefas  em React
  </Text>
  <ScrollView style={style.scroll}>
    {tasks.map(tasks =>(
      <Text style={style.lista} onPress={() => updateTask(tasks.id)}>
        
        {tasks.done? '🖕': '👍'}
        {tasks.title}</Text>
    ))}
  </ScrollView>
  <Pressable 
  style={style.button}  >
    <Text style={style.ButtonText}>Alternar</Text>
  </Pressable>
      </View>    
  </View>
  );
}

const style = StyleSheet.create({
  container:{
      flex: 1,
      backgroundColor:"#fff",
      justifyContent:"space-between",
      alignItems:"center", 
      width:"100%",
 
  },
  button:{
    backgroundColor:"black",
    padding: 20,
    justifyContent:"center",
    marginBottom:20,
    borderRadius:10
    
  },
  ButtonText:{
  color:"white",
  fontSize:10,
  },
  Minhas:{
    fontSize:10,

  },
  lista:{
  fontSize:10
  }
  

  
})