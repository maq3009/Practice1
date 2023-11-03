import React from 'react';
import { View, Text, FlatList, StyleSheet } from 'react-native';



const Inventory = ({ route }: any) => {
    const PartName = route.params?.PartName || '';
    const PartNumber = route.params?.PartNumber || '';
    const Location = route.params?.Location || '';
    const Manufacturer = route.params?.Manufacturer || '';
    const Quantity = route.params?.Quantity || '';

  const data = [{ 
        label: 'Part Name',
        value: PartName, 
        id: 1 
    },
    {
        label: 'Part Number',
        value: PartNumber,
        id: 2
    },
    {
        Label: 'Location',
        value: Location,
        id: 3
    },
    {
        label: 'Manufacturer',
        value: Manufacturer, 
        id: 4 
    },
    {
        label: 'Quantity',
        value: Quantity,
        id: 5
    },
  ];

  return (
    <View style={styles.container}>
      <Text style={styles.PageTitle}>Inventory</Text>

      <FlatList
        data={data}
        keyExtractor={(item) => [item.label, item.value]}
        renderItem={({ item }) => (
          <View style={styles.itemContainer}>
            <Text style={styles.label}>{item.label}:</Text>
            <Text style={styles.value}>{item.value}</Text>
          </View>
        )}
      />
    </View>
  );
};

export default Inventory;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  PageTitle: {
    fontSize: 28,
    justifyContent: 'center',
  },
  itemContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    paddingTop: 5,
    padding: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
  },
  label: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  value: {
    fontSize: 18,
  },
  item: {
    marginTop: 10,
    padding: 20,
  }
});