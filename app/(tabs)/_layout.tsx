import { MaterialIcons } from '@expo/vector-icons';
import { Tabs } from 'expo-router';

export default function tabLayout(){

    return(
    <Tabs>
<Tabs.Screen name="index" options={{title:"Home",
     tabBarIcon:() =>(
        <MaterialIcons name="home" size={24} color="black"/>
    )}}/>
<Tabs.Screen name="about" options={{title:"Sobre nos",
 tabBarIcon:() =>(
    <MaterialIcons name="info" size={24} color="black"/>
)}}/>

</Tabs>
)
}