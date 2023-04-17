import { View, TouchableOpacity, Text, ScrollView } from 'react-native';
import { AntDesign, FontAwesome5 } from '@expo/vector-icons';
import Counter from './redux_saga/view';
import {Provider} from 'react-redux';
import { store } from './redux_saga/store';

const Detail = ({ navigation }) => {
  return (
    <Provider store={store}>
      <View style = { styles.container_1 }>
        <View style = { styles.header_1 }>
            <View style = { styles.top }>
              <TouchableOpacity
                style = { styles.button }
                onPress={ () => navigation.goBack()}>
              <AntDesign name="arrowleft" size={24} color="white" />
              </TouchableOpacity>
              <Text style = { styles.heading }>Hiling.id</Text>
              <FontAwesome5 name="user" size={24} color="white" />
            </View>
            <Text style = { styles.heading2 }>Flight Search Result</Text>
        </View>
        <ScrollView>
          <Counter/>
        </ScrollView>
        <Text style = {styles.copyright_1}>Copyright Dinda Sela Listiana - 120140078</Text>
      </View>
    </Provider>
  );
}

export default Detail;