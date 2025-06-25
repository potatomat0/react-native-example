import { StyleSheet, Text, View, Image } from "react-native";
import React from "react";

const ProductCard = ({ item }) => {
  if (!item) {
    return (
      <View style={styles.container}>
        <Text>No product selected</Text>
      </View>
    );
  }

  return (
    <View style={styles.container}>
      <Image 
        source={{ uri: item.imageURL }}
        style={styles.image}
      />
      <Text style={styles.title}>{item.title}</Text>
      <Text style={styles.price}>${item.price}</Text>
    </View>
  );
};

export default ProductCard;

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    padding: 20,
  },
  image: {
    width: 300,
    height: 300,
    borderRadius: 10,
    marginBottom: 15,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 10,
    color: '#333',
  },
  price: {
    fontSize: 20,
    color: '#007AFF',
    fontWeight: '600',
  },
});

// simple product without reading product.js and FlatList, 

// import { StyleSheet, Text, View, Image } from "react-native";
// import React from "react";

// const ProductCard = () => {
//     return (
//     <View> 
//         <Image 
//             source={{uri:"https://pixnio.com/free-images/2017/09/26/2017-09-26-07-22-55-960x638.jpg" }}
//             style={{width: 200, height:200}}
//         />
//     <Text> Cat </Text>
//     <Text> 900$ </Text>
//     </View>    
//     )
// }

// export default ProductCard;

// const style = StyleSheet.create({});