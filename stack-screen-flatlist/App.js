import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import LoaiHoaPage from './pages/LoaiHoaPage';
import HoaPage from './pages/HoaPage';
import ChiTiet from './pages/ChiTiet';

// sử dụng stack 
const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="LoaiHoa"
        screenOptions={{
          headerStyle: {
            backgroundColor: '#D9A299',
          },
          headerTintColor: 'black',
          headerTitleStyle: {
            fontWeight: 'bold',
          },
        }}
      >
        <Stack.Screen 
          name="LoaiHoa" 
          component={LoaiHoaPage}
          options={{ title: "Flower's Garden" }}
        />
        <Stack.Screen 
          name="Hoa" 
          component={HoaPage}
          options={{ title: 'Hoa' }}
        />
        <Stack.Screen 
          name="CTHoa" 
          component={ChiTiet}
          options={{ title: 'CTHoa' }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
