import React from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';
import Login from '../Login';
import ProfileScreen from '../ProfileScreen';
import Messagescreen from '../Messagescreen';
import { NavigationContainer } from '@react-navigation/native';
import { Image, ImageBackground,Text,View } from 'react-native';
import CustomDrawer from '../CustomDrawer';
import Help from '../Help';
import Policy from '../Policy';
import Setting from '../Setting';
import Terms from '../Terms';
import Icon from 'react-native-vector-icons/dist/AntDesign'
import Icon2 from 'react-native-vector-icons/dist/Ionicons'
import Icon3 from 'react-native-vector-icons/dist/Entypo'
import Icon4 from 'react-native-vector-icons/dist/Feather'
import Icon5 from 'react-native-vector-icons/dist/AntDesign'
import Icon6 from 'react-native-vector-icons/dist/MaterialCommunityIcons'
import Icon7 from 'react-native-vector-icons/dist/AntDesign'
const Drawer = createDrawerNavigator();

const AuthStack = () => {
  return (
  
   
      <Drawer.Navigator
    
     drawerContent={props => <CustomDrawer {...props} />}
        screenOptions={{
         drawerActiveBackgroundColor:'#ffb4bc',
         drawerActiveTintColor:'#ffffff',
         drawerInactiveTintColor:"#d6708b",
         
   
           headerShown: false,


          drawerStyle: {
            height: 700,
            width:280,
            borderTopRightRadius:120,
            borderBottomRightRadius:120,
            marginTop:'10%',
            
            
             
          },
          
        }}
      >
        <Drawer.Screen name="Login" component={Login} 
        options={{
          drawerIcon: ({ color, size }) => (
              <Icon name="user" size={size} color={color} />
            ),
            drawerActiveTintColor:"#ffffff",
            drawerInactiveTintColor:"#d6708b",
            gestureEnabled: false, 
            drawerLabel: ({ focused, color, size }) => (
              <Text style={{ fontSize: 16}}>Full Name</Text>
            ),
          }}

        />
        <Drawer.Screen name="ProfileScreen" component={ProfileScreen} 
         options={{
          drawerIcon: ({ color, size }) => (
              <Icon2 name="notifications-outline" size={size} color={color} />
            ),
            gestureEnabled: true,
            drawerLabel: ({ focused, color, size }) => (
              <Text style={{ fontSize: 16,fontWeight:'700'}}>Notification</Text>
              
            ),
                                                                                                                                                                                                                                                                                                                                                                                                                                                    
          }}
          
        />
        <Drawer.Screen name="Messagescreen" component={Messagescreen} 
           options={{
            drawerIcon: ({ color, size }) => (
              <Icon3 name="email" size={size} color={color} />
            ),
            gestureEnabled: false, 
            drawerLabel: ({ focused, color, size }) => (
              <Text style={{ fontSize: 16, color:'#d6708b',fontWeight:'700'}}>Email Address</Text>
            ),
          }}
        />

         <Drawer.Screen name="Help" component={Help} 

           options={{
            drawerIcon: ({ color, size }) => (
              <Icon4 name="help-circle" size={size} color={color} />
            ),
            gestureEnabled: false, 
            drawerLabel: ({ focused, color, size }) => (
              <Text style={{ fontSize: 16, color:'#d6708b',fontWeight:'700'}}>Help & support</Text>
            ),
          }}
         />

         <Drawer.Screen name="policy" component={Policy} 
           options={{
            
            drawerIcon: ({ color, size }) => (
              <Icon6 name="shield-lock-outline" size={size} color={color} />
            ),
            
            gestureEnabled: false, 
          
            drawerLabel: ({ focused, color, size }) => (
              <Text style={{ fontSize: 16, color:'#d6708b',fontWeight:'700'}}>Privacy & policy</Text>
            ),
          }}
        />
       
       <Drawer.Screen name="Setting" component={Setting} 
           options={{
            drawerIcon: ({ color, size }) => (
              <Icon5 name="setting" size={size} color={color} />
            ),
            
            gestureEnabled: false, 
            drawerLabel: ({ focused, color, size }) => (
              <Text style={{ fontSize: 16, color:'#d6708b',fontWeight:'700'}}>Settings</Text>
            ),
          }}
        />
       
       <Drawer.Screen name="Terms" component={Terms} 
           options={{
            drawerIcon: ({ color, size }) => (
              <Icon7 name="solution1" size={size} color={color} />
            ),
            
            gestureEnabled: false, 
            drawerLabel: ({ focused, color, size }) => (
              <Text style={{ fontSize: 16, color:'#d6708b',fontWeight:'700'}}>Terms and condition</Text>
            ),
          }}
        />
       
      </Drawer.Navigator>
   
  );
};

export default AuthStack;
