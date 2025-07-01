import React, { useState } from 'react';
import {
  FlatList,
  Modal,
  Button,
  View,
  Text,
  SafeAreaView,
  StyleSheet,
  TouchableOpacity,
  Image,
} from 'react-native';

// import components 
import ProductCard from '../components/ProductCard';
import { productList } from '../components/products';


const ItemSeparatorView = () => {
  return (
    <View 
      style={{
        height: 0.5,
        width: '100%',
        backgroundColor: '#C8C8C8'
      }} 
    />
  );
};

const Products = () => {
  const [listItems, setListItems] = useState(productList);
  const [showModal, setShowModal] = useState(false);
  const [product, setProduct] = useState(null);

  const getItem = (item) => {
    setProduct(item);
    setShowModal(!showModal);
  };

  const ItemView = ({ item }) => {
    return (
      <TouchableOpacity onPress={() => getItem(item)} style={styles.productCard}>
        <View style={styles.cardContent}>
          {/* Shopping Cart Icon */}
          <View style={styles.cartIcon}>
            <Text style={styles.cartIconText}>🛒</Text>
          </View>
          
          {/* Product Image */}
          <Image 
            source={{ uri: item.imageURL }}
            style={styles.productImage}
            resizeMode="contain"
          />
          
          {/* Product Info */}
          <View style={styles.productInfo}>
            <Text style={styles.productTitle} numberOfLines={2}>
              {item.title}
            </Text>
            <Text style={styles.productPrice}>
              {item.price}
            </Text>
          </View>
        </View>
      </TouchableOpacity>
    );
  };

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <Modal 
        animationType={'slide'}
        transparent={false}
        visible={showModal}
      >
        <View style={styles.modal}>
          <ProductCard item={product} />
          <Button 
            title="Close"
            onPress={() => { setShowModal(!showModal) }}
          />
        </View>
      </Modal>

      <View style={styles.container}>
        <FlatList
          data={listItems}
          renderItem={ItemView}
          keyExtractor={(item, index) => index.toString()}
          numColumns={2}
          columnWrapperStyle={styles.row}
        />
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5f5f5',
    paddingHorizontal: 10,
    paddingTop: 10,
  },
  row: {
    justifyContent: 'space-between',
    marginBottom: 15,
  },
  productCard: {
    width: '48%',
    backgroundColor: '#fff',
    borderRadius: 12,
    padding: 15,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.1,
    shadowRadius: 3.84,
    elevation: 5,
  },
  cardContent: {
    alignItems: 'center',
    position: 'relative',
  },
  cartIcon: {
    position: 'absolute',
    top: -5,
    right: -5,
    backgroundColor: '#000',
    width: 30,
    height: 30,
    borderRadius: 15,
    justifyContent: 'center',
    alignItems: 'center',
    zIndex: 1,
  },
  cartIconText: {
    color: '#fff',
    fontSize: 16,
  },
  productImage: {
    width: 120,
    height: 120,
    marginBottom: 10,
  },
  productInfo: {
    width: '100%',
    alignItems: 'center',
  },
  productTitle: {
    fontSize: 14,
    fontWeight: '500',
    textAlign: 'center',
    marginBottom: 5,
    color: '#333',
    lineHeight: 18,
  },
  productPrice: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#333',
  },
  modal: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
    padding: 20,
  },
});

export default Products;


// simple modal without reading product.js

// import React, {useState} from 'react';

// import {
// 	Modal,
// 	Button,
// 	View,
// 	Text,
// 	SafeAreaView,
// 	StyleSheet,
// } from 'react-native';

// import ProductCard from './components/ProductCard';

// const App = () => {

// 	const [showModal, setShowModal] = useState(false); 
// 	return (
// 		<SafeAreaView style={{flex:1}}> 
// 		<View style={styles.container}> 
// 		<Modal
// 		animationType={'slide'}
// 		transparent={false}
// 		visible={showModal}>
// 		<View style={styles.modal}>
// 			<View style={styles.contentWrapper}> <ProductCard/> </View>
// 			<Button title="Close" onPress={() => {setShowModal(!showModal)}}/>
// 		</View>
// 		</Modal>
// 		<Button title="Iphone 16 Promax" onPress={() => {setShowModal(!showModal)}}/>
// 		</View>
// 		</SafeAreaView>
// 		)
// 		}
		
// const styles =StyleSheet.create({
// 			container: {
// 				flex:1, 
// 				alignItems: 'center',
// 				justifyContent: 'center',
// 				backgroundColor: '#fff',
// 				marginTop: 30, 
// 			},
// 			contentWrapper: {
// 				width: '85%',
// 				alignSelf: 'center',
// 			},
// 			modal: {
// 				flex: 1,
// 				alignItems: 'center',
// 				backgroudnColor: '#00ff00',
// 				padding: 100,
// 			},
// 			text: {
// 				color: '#3f2949',
// 				marginTop:10,
// 			},
// 		})

// 		export default App;


// alert example 


// import React, { useState } from 'react';
// import {
//   Alert,
//   Modal,
//   Button,
//   View,
//   Text,
//   SafeAreaView,
//   StyleSheet,
// } from 'react-native';

// import ProductCard from './components/ProductCard';

// const App = () => {
//   const [showModal, setShowModal] = useState(false);

//   // Simple Alert
//   const showSimpleAlert = () => {
//     Alert.alert("Simple Alert", "This is a basic alert message!");
//   };

//   // Alert with OK button
//   const showAlertWithOK = () => {
//     Alert.alert(
//       "Alert Title",
//       "This alert has an OK button",
//       [
//         { text: "OK", onPress: () => console.log("OK Pressed") }
//       ]
//     );
//   };

//   // Alert with Cancel and OK buttons
//   const showConfirmAlert = () => {
//     Alert.alert(
//       "Confirm Purchase",
//       "Are you sure you want to buy iPhone 16 Pro Max for $1199?",
//       [
//         {
//           text: "Cancel",
//           onPress: () => console.log("Cancel Pressed"),
//           style: "cancel"
//         },
//         {
//           text: "OK",
//           onPress: () => console.log("Purchase Confirmed!")
//         }
//       ]
//     );
//   };

//   // Alert with 3 buttons
//   const showThreeButtonAlert = () => {
//     Alert.alert(
//       "Choose Action",
//       "What would you like to do?",
//       [
//         {
//           text: "Cancel",
//           onPress: () => console.log("Cancel Pressed"),
//           style: "cancel"
//         },
//         {
//           text: "View Details",
//           onPress: () => setShowModal(true)
//         },
//         {
//           text: "Buy Now",
//           onPress: () => console.log("Buy Now Pressed!")
//         }
//       ]
//     );
//   };

//   return (
//     <SafeAreaView style={{ flex: 1 }}>
//       <View style={styles.container}>
//         <Modal
//           animationType={'slide'}
//           transparent={false}
//           visible={showModal}
//         >
//           <View style={styles.modal}>
//             <View style={styles.contentWrapper}>
//               <ProductCard />
//             </View>
//             <Button 
//               title="Close" 
//               onPress={() => { setShowModal(!showModal) }}
//             />
//           </View>
//         </Modal>

//         <Text style={styles.title}>Alert API Examples</Text>

//         <Button 
//           title="Simple Alert" 
//           onPress={showSimpleAlert}
//           color="#007AFF"
//         />

//         <View style={styles.buttonSpacing} />

//         <Button 
//           title="Alert with OK Button" 
//           onPress={showAlertWithOK}
//           color="#34C759"
//         />

//         <View style={styles.buttonSpacing} />

//         <Button 
//           title="Confirm Alert (Cancel/OK)" 
//           onPress={showConfirmAlert}
//           color="#FF9500"
//         />

//         <View style={styles.buttonSpacing} />

//         <Button 
//           title="Three Button Alert" 
//           onPress={showThreeButtonAlert}
//           color="#FF3B30"
//         />

//         <View style={styles.buttonSpacing} />

//         <Button 
//           title="Show Product Modal" 
//           onPress={() => { setShowModal(!showModal) }}
//           color="#5856D6"
//         />
//       </View>
//     </SafeAreaView>
//   );
// };

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     alignItems: 'center',
//     justifyContent: 'center',
//     backgroundColor: '#fff',
//     padding: 20,
//   },
//   title: {
//     fontSize: 24,
//     fontWeight: 'bold',
//     marginBottom: 30,
//     color: '#333',
//   },
//   contentWrapper: {
//     width: '85%',
//     alignSelf: 'center',
//   },
//   modal: {
//     flex: 1,
//     alignItems: 'center',
//     justifyContent: 'center',
//     backgroundColor: '#f0f0f0',
//     padding: 20,
//   },
//   buttonSpacing: {
//     height: 15,
//   },
// });

// export default App;