import { NavigationContainer } from '@react-navigation/native';
import List from './app/screens/List';
import Details from './app/screens/Details';
import Inventory from './app/screens/Inventory';
import Chemicals from './app/screens/Chemicals';
import Login from './app/screens/Login_SignUp';
import { StyleSheet } from 'react-native';
import { View, Text} from 'react-native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { color } from 'react-native-elements/dist/helpers';


const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator()


const MainStack = () => {
  return (
      <Stack.Navigator initialRouteName= 'Login'>
        <Stack.Screen name="Login/SignUp" 
        component={Login}
        options={{
          headerTitleAlign: 'center',
          headerStyle: {
            backgroundColor: '#787878',
          },
        }}
      />
      </Stack.Navigator>
  )}

export default function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator>
        <Tab.Screen name='BOILER ROOM APP'
          options={{
            headerTitleAlign: 'center',
            headerTitleStyle: {
              fontWeight: '900',
            }
        }}
         component={MainStack} />
        <Tab.Screen name="Add Part" component={List} 
          options={{
            headerTitleAlign: "center",
            headerTitleStyle: styles.BlackText,
        }}
        />
        <Tab.Screen name="Chemicals" component={Chemicals} />
        <Tab.Screen name="Inventory" component={Inventory} 
          options={{
            headerTitleAlign: "center",
            headerTitleStyle: styles.BlackText,
          }}
        />
      </Tab.Navigator>
    </NavigationContainer>
  )
}

  const styles = StyleSheet.create({
    headerTitleContainer: {
      paddingBottom: 10, // Add a bottom padding of 18px
    },
    headerTitle: {
      fontSize: 28,
      fontWeight: 'bold' // Add a bottom padding of 18px
    },
    BlackText: {
      fontSize: 30,
      marginBottom: 15,
    },
    PageTitle: {
      fontSize: 28,
      justifyContent: "center",
    },
  })



//React Native Todo App with Firebase and <Expo>
//18:22 Simon Grimm
//PR
//6:01 / 22:28
//Super Easy React Native AUTHENTICATION with Firebase 