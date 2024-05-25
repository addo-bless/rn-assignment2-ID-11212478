import React  from "react";
import { Text, View , StyleSheet } from "react-native";

export default function Index() {
  return (
    <View style={styles.container}> 
      <Text style={styles.normalText}numberOfLines={1}>My name is 
<Text style={styles.boldText}numberOfLines={1}> 'Bless'</Text>
      </Text>
      </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignContent: 'center', 
    backgroundColor: 'purple',
    
  },
  normalText: {
    fontSize: 18,
  },
  boldText: {
    fontWeight: 'bold',
    fontSize: 24,
  },
}); 

