import { NavigationContainer } from '@react-navigation/native';
import List from './app/screens/List';
import Details from './app/screens/Details'


import { createNativeStackNavigator } from '@react-navigation/native-stack';


const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="My Todos" component={List}/>
        <Stack.Screen name="Details" component={Details}/>
      </Stack.Navigator>
    </NavigationContainer>
  )}

//React Native Todo App with Firebase and <Expo>
//18:22 