import { useState } from "react";
import { Text, View, TextInput, TouchableOpacity, ScrollView } from 'react-native';
import { MaterialIcons, Feather, Fontisto, FontAwesome5 } from '@expo/vector-icons';

const Home = ({ navigation }) => {
const [ departure, set_departure ] = useState("");
const [ location, set_location ] = useState("");
const [ date, set_date ] = useState("");

  return(
    <View style = { styles.container }>
      <View style={ styles.header }>
        <Feather name="menu" size={24} color="white" />
        <Text style = { styles.title }>Hiling.id</Text>
        <FontAwesome5 name="user" size={24} color="white" />
      </View>
      
      <ScrollView style = { styles.card }>
        <Text style = { styles.head_sec }>Departure Location</Text>
        <View style = { styles.input_place }>
          <MaterialIcons name="flight-takeoff" size={24} color="#5CA454" />
          <TextInput
            style = { styles.input }
            onChangeText = { set_departure }
            value = { departure }
            placeholder = "Enter The Departure Location"
            selectTextOnFocus = { false }
          />
        </View>

        <Text style = { styles.head_sec }>Destination</Text>
        <View style = { styles.input_place }>
          <MaterialIcons name="flight-land" size={24} color="#5CA454" />
          <TextInput
            style = { styles.input }
            onChangeText = { set_location }
            value = { location }
            placeholder = "Enter The Destination"
          />
        </View>

        <Text style = { styles.head_sec }>Date Of Departure</Text>
          <View style = { styles.input_place }>
              <Fontisto name="date" size={24} color="#5CA454" />
            <TextInput
              style = { styles.input }
              onChangeText = { set_date }
              value = { date }
              placeholder = "Enter The Departure Date"
            />
          </View>

        <TouchableOpacity onPress = {() => navigation.navigate('Detail')}><Text style = { styles.search }
        >Find</Text></TouchableOpacity>

        <TouchableOpacity onPress = {() => navigation.navigate('Edit')}><Text style = { styles.search }
        >Setting</Text></TouchableOpacity>
      </ScrollView>
      
      <View style = { styles.footer }>
        <Text style = { styles.copyright }>Dinda Sela Listiana - 120140078</Text>
      </View>
    </View>
  );
}

import styles from './style';

export default Home;