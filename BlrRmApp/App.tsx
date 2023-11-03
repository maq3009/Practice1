import { NavigationContainer } from '@react-navigation/native';
import List from './app/screens/List';
import Details from './app/screens/Details';
import Inventory from './app/screens/Inventory';
import Chemicals from './app/screens/Chemicals';
import Login_SignUp from './app/screens/Login_SignUp';
import { StyleSheet } from 'react-native';
import { View, Text} from 'react-native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { color } from 'react-native-elements/dist/helpers';


const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator()


const CustomHeaderTitle = () => {
  return (
    <View style={styles.headerTitleContainer}>
      <Text style={styles.headerTitle}>ADD NEW PART</Text>
    </View>
  );
};


const MainStack = () => {
  return (
      <Stack.Navigator>
        <Stack.Screen name="ADD NEW PART" 
        component={List}
        options={{
          headerTitleAlign: 'center',
          headerStyle: {
            backgroundColor: '#787878',
          },

          headerTitle: () => <CustomHeaderTitle />
        }}
      />
      </Stack.Navigator>
  )}

export default function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator>
        <Tab.Screen name="Boiler Room App"
         options={{
          headerTitleAlign: 'center',
        }}
         component={MainStack} />
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
//18:22 