import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import Header from './src/components/Header';
import Post from './src/components/Post';
import Story from './src/components/Storys';
import Feed from './src/screens/Feed';
import Navigation from './src/Navigation';
import { Provider } from 'react-redux';
import storeConfig from './src/store/storeConfig';

export default function App() {

  const store = storeConfig()
  function Redux(){
    return(
        <Provider store={store}>
          <Navigation/>
        </Provider>
      )
  }

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
      <Redux/>
    </View>
  );
}