import React from 'react';
import { View, Text, TextInput, Button, StyleSheet } from 'react-native'
import { useState, useEffect } from 'react';
import { FIRESTORE_DB } from '../../firebaseConfig';
import { addDoc, collection } from 'firebase/firestore';



const List = ({ navigation }: any) => {
  const [todos, setTodos] = useState<any[]>([]);
  const [todo, setTodo] = useState('');
  
  
  useEffect(() => {
  },[]);

  const addTodo = async () => {
    const doc = await addDoc(collection(FIRESTORE_DB, 'todos'), { title: todo, done: false})
    setTodo('');
  };


  return (
    <View style={styles.container}>
      <View>
        <TextInput style={styles.input} placeholder='Add new todo'
        onChangeText={(text: string) => setTodo(text)}
        value={todo}
        />
        <Button onPress={() => addTodo()} title="Add Todo" />
      </View>
    </View>
  );
};

export default List;


const styles = StyleSheet.create({
  container: {

  },
  input: {

  }
})