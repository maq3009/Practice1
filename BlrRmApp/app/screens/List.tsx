import React from 'react';
import { View, Text, TextInput, Button, StyleSheet } from 'react-native'
import { useState, useEffect } from 'react';
import { FIRESTORE_DB } from '../../firebaseConfig';
import { addDoc, collection } from 'firebase/firestore';



const List = ({ navigation }: any) => {
  const [PartNames, setPartNames] = useState<any[]>([]);
  const [PartName, setPartName] = useState('');
  const [PartNumbers, setPartNumbers] = useState<any[]>([]);
  const [PartNumber, setPartNumber] = useState('');
  const [Locations, setLocations] = useState<any[]>([]);
  const [Location, setLocation] = useState('');
  const [Manufacturers, setManufacturers] = useState<any[]>([]);
  const [Manufacturer, setManufacturer] = useState('');
  const [Quantities, setQuantities] = useState<any[]>([]);
  const [Quantity, setQuantity] = useState('');
  
  useEffect(() => {
  },[]);

  const addPartName = async () => {
    const doc = await addDoc(collection(FIRESTORE_DB, 'PartNames'), {
       Part_Name: PartName, 
       Out_of_Stock: false})
    setPartName('');
  };
  const addPartNumber = async () => {
    const doc = await addDoc(collection(FIRESTORE_DB, 'PartNumbers'), {
       Part_Number: PartNumber, 
       Out_of_Stock: false})
    setPartNumber('');
  };
  const addLocation = async () => {
    const doc = await addDoc(collection(FIRESTORE_DB, 'Locations'), {
       Part_Location: Location, 
       Out_of_Stock: false})
    setLocation('');
  };
  const addManufacturer = async () => {
    const doc = await addDoc(collection(FIRESTORE_DB, 'Manufacturers'), {
       Part_Manufacturer: Manufacturer, 
       Out_of_Stock: false})
    setManufacturer('');
  };
  const addQuantity = async () => {
    const doc = await addDoc(collection(FIRESTORE_DB, 'Quantities'), {
       Part_Quantity: Quantity, 
       Out_of_Stock: false})
    setQuantity('');
  };


  return (
    <View style={styles.container}>
      <View>
        <Text style={styles.TopText}>ADD PART</Text>
        <TextInput style={styles.input} placeholder='Part Name'
        onChangeText={(text: string) => setPartName(text)}
        value={PartName}/>
        <TextInput style={styles.input} placeholder='Part Number'
        onChangeText={(text: string) => setPartNumber(text)}
        value={PartNumber}/>
        <TextInput style={styles.input} placeholder='Location'
        onChangeText={(text: string) => setLocation(text)}
        value={Location}/>
        <TextInput style={styles.input} placeholder='Manufacturer'
        onChangeText={(text: string) => setManufacturer(text)}
        value={Manufacturer}/>
        <TextInput style={styles.input} placeholder='Quantity'
        onChangeText={(text: string) => setQuantity(text)}
        value={Quantity}/>
        <Button onPress={() => [addPartName(), addPartNumber(), addLocation(), addManufacturer(), addQuantity()]} title="Add Part" />
      </View>
    </View>
  );
};

export default List;


const styles = StyleSheet.create({
  container: {

  },
  TopText: {
    flex: 1,
    justifyContent: "center",
    fontSize: 20,
  },
  input: {
    fontSize: 26,
    padding: 20,
    borderBottomWidth: 1,
  }
})