// CustomDrawer.js

import { DrawerContentScrollView, DrawerItemList } from '@react-navigation/drawer';
import React from 'react';
import { View, Text, Button, ImageBackground,Image } from 'react-native';



const CustomDrawer = (props) => {
  return (
  <View style={{flex: 1, backgroundColor: '#ffffff', borderTopRightRadius: 100, borderBottomRightRadius:120, marginTop: 20}}>
   <DrawerContentScrollView {...props} contentContainerStyle={{ flex: 1 }}>
 
   <View style={{ alignItems: 'center', padding: 10 ,gap:10}}>
          <Image source={require('../src/Assets/Image/vital.png')} style={{ width: 100, height: 100, borderRadius: 50 }} />
       <Text style={{fontSize:20,color:'black'}}>Emanuel</Text>
        </View>

        <View style={{width:86,height:37,top:450,right:12,alignSelf:'center',borderRadius:9,backgroundColor:'#d6708b',padding:5}}>
      <Text style={{color:'black',top:2,textAlign:'center',color:'white'}}>Logout</Text>
        </View>
   
   <DrawerItemList {...props } />


  </DrawerContentScrollView>
  </View>
 
  );
};

export default CustomDrawer;
