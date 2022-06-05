import React from "react";
import { StyleSheet, View, Text, Button } from "react-native";

const url = "192.168.84.210"
function test (props: any) {
    async function getQuestions () {
        const response = fetch('http://' + url + ':3000/', {
        method: 'GET',
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json',
        }
      });
      const json = await (await response).json();
      console.log(json)
      settext (json['Hello World!'])
      };
    const [text, settext ] = React.useState("1")
  return (
    <View style={{justifyContent:"center", alignContent:"center", height:"100%", width:"100%"}}>
      <Text>
        {text}
      </Text>
      <Button title="2" onPress={() => getQuestions()}/>
    </View>
  );
}

const styles = StyleSheet.create({
  
})

export default test;