import React, { useState } from 'react';
import { Platform, View } from 'react-native';
import { SearchBar, Button } from 'react-native-elements';
import ErrorMessage from './ErrorMessage'
import styles from "../styles/styles";
const GetTide = require('../API/GetTide');

export default function Research(props) {
  let errorComponent = null;
  if (props.searchError != "") {
    errorComponent = <ErrorMessage text={props.searchError} />;
  }

  return (
    <View style={styles.container}>
      <SearchBar
        platform={Platform.OS === 'ios' ? "ios" : "android"}
        placeholder="Research a city"
        onChangeText={props.setsearchText}
        value={props.searchText}
      />
      <Button
        title="Search"
        onPress={() => {
          props.setisLoading(true);
          GetTide.getTide(props.searchText)
            .then((data) => {
              props.setsearchError("");
              props.navigation.navigate('Result', data);
              props.setisLoading(false);
            })
            .catch((error) => {
              if (error.message == "CITY_ERROR") {
                props.setsearchError("City not found");
              } else if (error.message == "TIDE_ERROR") {
                props.setsearchError("Tide not found for this city");
              } else {
                props.setsearchError("Unhandled error");
              }
              props.setisLoading(false);
            });
        }}
      />
      {errorComponent}
    </View>
  );
}
