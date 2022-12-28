import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import Header from './src/components/Header';
import Post from './src/components/Post';

export default function App() {
  const comments = [{
    email: 'talesmelquiades@hotmail.com',
    nickname: 'Tales',
    comment: 'Top dms'
  },{
    email: 'wedertito8@gmail.com',
    nickname: 'Tito',
    comment: 'Show!'
  }]
  return (
    <View style={{flex: 1}}>
      <Header/>
      <Post image={require('./assets/imgs/fence.jpg')} comments={comments}/>
    </View>
  );
}