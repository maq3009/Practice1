import React, { useState, useEffect } from 'react';
import { View, Text, FlatList, StyleSheet } from 'react-native';
import { FIRESTORE_DB } from '../../firebaseConfig'; // Make sure to provide the correct path to your firebaseConfig
import { getDocs, collection, DocumentData, QueryDocumentSnapshot } from 'firebase/firestore';
import { Card, Button } from 'react-native-paper';
import { black } from 'react-native-paper/lib/typescript/styles/themes/v2/colors';


interface InventoryItem {
  id: string;
  [key: string]: any;
}

const Inventory: React.FC = () => {
  const [inventoryData, setInventoryData] = useState<InventoryItem[]>([]);

  useEffect(() => {
    // Fetch data from Firestore and update the state
    const fetchData = async () => {
      const querySnapshot = await getDocs(collection(FIRESTORE_DB, 'Inventory'));
      const data: InventoryItem[] = [];
      querySnapshot.forEach((doc: QueryDocumentSnapshot<DocumentData>) => {
        data.push({ id: doc.id, ...doc.data() });
      });
      setInventoryData(data);
    };
    fetchData();
  }, []);

  return (
    <View style={styles.container}>
      {inventoryData.map((item) => (
        <Card key={item.id} style={styles.card}>
          <Card.Content>
            {Object.keys(item).map((key) => {
              if (key !== 'id') {
                return (
                  <View key={key} style={styles.fieldContainer}>
                    <Text style={styles.label}>{key}:</Text>
                    <Text style={styles.value}>{item[key]}</Text>
                  </View>
                );
              }
              return null;
            })}
          </Card.Content>
          <Card.Actions>
            <Button
              onPress={() => {
                // Handle button press here, e.g., navigate to details screen
              }}
            >
              View Details
            </Button>
          </Card.Actions>
        </Card>
      ))}
    </View>
  );
};


export default Inventory;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#4E03CB',
  },
  PageTitle: {
    fontSize: 28,
    justifyContent: 'center',
  },
  itemContainer: {
    flexDirection: 'column',
    paddingTop: 30,
    paddingLeft: 0,
    marginLeft: 0,
    padding: 30,
    borderBottomWidth: 2,
    borderBottomColor: 'black',
  },
  fieldContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 5,
  },
  label: {
    fontSize: 18,
    fontWeight: 'bold',
    marginRight: 10,
  },
  value: {
    fontSize: 18,
  },
  card: {
    width: 400,
    margin: 10,
    backgroundColor: '#ADD8E6',
  },
});
