import * as React from 'react';
import { Button, View, Text } from 'react-native';

import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

// import các page từ /pages/ 
import FirstPage from './pages/FirstPage';
import SecondPage from './pages/SecondPage';
import ThirdPage from './pages/ThirdPage';
// khởi tạo stack navigator
const Stack = createNativeStackNavigator();

function App() {
	return (
		// navigation được chứa trong navigation container
		// mỗi screen nằm trong một Stack.Screen
		<NavigationContainer>
		// trang đầu tiên khi mở app 
		<Stack.Navigator initialRouteName="FirstPage">
		<Stack.Screen
		name="FirstPage"
		component={FirstPage}
		options={{
			title: 'First Page', //Set Header Title
			headerStyle: {
				backgroundColor: '#0800FF', //Set Header color
			},
				headerTintColor: '#fff', //Set Header text color
			headerTitleStyle: {
				fontWeight: 'bold', //Set Header text style
			},
		}}
		/>
		<Stack.Screen
		name="SecondPage"
		component={SecondPage}
		options={{
			title: 'Second Page', //Set Header Title
			headerStyle: {
				backgroundColor: '#FF0D00', //Set Header color
			},
				headerTintColor: '#fff', //Set Header text color
			headerTitleStyle: {
				fontWeight: 'bold', //Set Header text style
			},
		}}
		/>
		<Stack.Screen
		name="ThirdPage"
		component={ThirdPage}
		options={{
			title: 'Third Page', //Set Header Title
			headerStyle: {
				backgroundColor: '#FF00C3', //Set Header color
			},
				headerTintColor: '#fff', //Set Header text color
			headerTitleStyle: {
				fontWeight: 'bold', //Set Header text style
			},
		}}
		/>
		</Stack.Navigator>
		</NavigationContainer>
	);
}

export default App;
