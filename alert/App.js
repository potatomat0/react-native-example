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

import ProductCard from './components/ProductCard';
import { products } from './components/products';

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

const App = () => {
  const [listItems, setListItems] = useState(products);
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

export default App;


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
