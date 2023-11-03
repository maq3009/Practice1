import React from 'react';
import { View, Text, TextInput, FlatList, Button, StyleSheet } from 'react-native';
import { useState } from 'react';
import { FIRESTORE_DB } from '../../firebaseConfig';
import { addDoc, collection, getDocs, query } from 'firebase/firestore';

const List = ({ navigation }: any) => {
  const [PartName, setPartName] = useState('');
  const [PartNumber, setPartNumber] = useState('');
  const [Location, setLocation] = useState('');
  const [Manufacturer, setManufacturer] = useState('');
  const [Quantity, setQuantity] = useState('');

  const addPart = async () => {
    const doc = await addDoc(collection(FIRESTORE_DB, 'Inventory'), {
      PartName,
      PartNumber,
      Location,
      Manufacturer,
      Quantity,
    });

    // Clear input fields after adding the part
    setPartName('');
    setPartNumber('');
    setLocation('');
    setManufacturer('');
    setQuantity('');
  };

  return (
    <View style={styles.container}>
      <View>
        <Text style={styles.TopText}>ADD PART</Text>
        <TextInput
          style={styles.input}
          placeholder="Part Name"
          onChangeText={(text: string) => setPartName(text)}
          value={PartName}
        />
        <TextInput
          style={styles.input}
          placeholder="Part Number"
          onChangeText={(text: string) => setPartNumber(text)}
          value={PartNumber}
        />
        <TextInput
          style={styles.input}
          placeholder="Location"
          onChangeText={(text: string) => setLocation(text)}
          value={Location}
        />
        <TextInput
          style={styles.input}
          placeholder="Manufacturer"
          onChangeText={(text: string) => setManufacturer(text)}
          value={Manufacturer}
        />
        <TextInput
          style={styles.input}
          placeholder="Quantity"
          onChangeText={(text: string) => setQuantity(text)}
          value={Quantity}
        />
        <Button onPress={addPart} title="Add Part" />
      </View>
      <Button
        title="Go to Inventory"
        onPress={() => {
          // Pass the input values to the Inventory screen using params
          navigation.navigate('Inventory', {
            PartName,
            PartNumber,
            Location,
            Manufacturer,
            Quantity,
          });
        }}
      />
    </View>
  );
};

export default List;

const styles = StyleSheet.create({
  container: {},
  TopText: {
    flex: 1,
    justifyContent: 'center',
    fontSize: 20,
  },
  input: {
    fontSize: 26,
    padding: 20,
    borderBottomWidth: 1,
  },
});