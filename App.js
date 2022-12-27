import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import Header from './src/components/Header';
import Post from './src/components/Post';

export default function App() {
  return (
    <View style={{flex: 1}}>
      <Header/>
      <Post image={require('./assets/imgs/fence.jpg')}/>
    </View>
  );
}