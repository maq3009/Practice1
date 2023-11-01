import React from 'react';
import { View, Text, Button } from 'react-native'
import { useEffect } from 'react';
import { FIRESTORE_DB } from '../../firebaseConfig';
import { addDoc, collection } from 'firebase/firestore';



const List = ({ navigation }: any) => {
  useEffect(() => {
  },[]);

  const addTodo = async () => {
    console.log('ADD');

    const doc = addDoc(collection(FIRESTORE_DB, 'todos'), { title: 'I am a test', done: false})
    console.log(' ~ file: List.tsx:12 ~ addTodo ~ doc:', doc);
  };


  return (
    <View>
        <Text>List</Text>
        <Button onPress={() => addTodo()} title="Add Todo" />
    </View>
  );
};

export default List;
