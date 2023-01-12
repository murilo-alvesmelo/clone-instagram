import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import Header from './src/components/Header';
import Post from './src/components/Post';
import Story from './src/components/Storys';
import Feed from './src/screens/Feed';

export default function App() {
  const comments = [{
    email: 'talesmelquiades@hotmail.com',
    nickname: 'Tales',
    comment: 'Top dms'
  },{
    email: 'wedertito8@gmail.com',
    nickname: 'Tito',
    comment: 'Show!'
  },{
    email: 'marcelodasilvalisboa1@gmail.com',
    nickname: 'Marcelo',
    comment: 'Massa!'
  }]
  return (
    <View style={{flex: 1}}>
      <Feed/>
    </View>
  );
}