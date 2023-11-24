import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import AppNavigator from './AppNavigator'
import Authstack from './Navigation/Authstack'
import { NavigationContainer } from '@react-navigation/native'
import Appstack from './Navigation/Appstack'



const App = () => {
  return (
  <NavigationContainer>
    <Appstack />
  
    </NavigationContainer>
  )
}

export default App

const styles = StyleSheet.create({})


//----------------------swipe button code------------------------
// import { StyleSheet, Text, View } from 'react-native';
// import React, { useState } from 'react';
// import Swipebutton from './Swipebutton';
// import { GestureHandlerRootView } from 'react-native-gesture-handler';

// const App = () => {
//   const [toggleState, setToggleState] = useState(false);

//   const handleToggle = (value) => setToggleState(value);

//   return (
//     <GestureHandlerRootView style={{ flex: 1 }}>
//       <Swipebutton onToggle={handleToggle} />
   
//     </GestureHandlerRootView>
 
 
//  );
// }

// export default App;

// const styles = StyleSheet.create({});
