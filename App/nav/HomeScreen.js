import React, { useState } from 'react';
import { View, StatusBar, ActivityIndicator } from 'react-native';
import Description from '../component/Description';
import Research from '../component/Research';
import styles from "../styles/styles";


export default function HomeScreen ({ navigation }) {
  const [searchText, setsearchText] = useState("");
  const [searchError, setsearchError] = useState("");
  const [isLoading, setisLoading] = useState(false);
  
  if (isLoading) {
    return (
      <View style={styles.app}>
        <StatusBar 
          backgroundColor={'transparent'} 
          translucent={true} 
          barStyle='light-content' 
        />
        <ActivityIndicator color="white" />
      </View>
    );
  }

  return (
    <View style={styles.app}>
      <StatusBar 
        backgroundColor={'transparent'} 
        translucent={true} 
        barStyle='light-content' 
      />
      <Description />
      <Research 
        navigation={navigation} 
        setisLoading={(update) => setisLoading(update)}
        searchText={searchText}
        setsearchText={(update) => setsearchText(update)} 
        searchError={searchError}
        setsearchError={(update) => setsearchError(update)} 
      />
    </View>
  );
}
