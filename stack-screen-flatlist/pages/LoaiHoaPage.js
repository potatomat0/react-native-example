import React from 'react';
import {
  View,
  Text,
  FlatList,
  TouchableOpacity,
  StyleSheet,
  Image,
  SafeAreaView,
} from 'react-native';

import { productList } from '../components/loaihoa';

const LoaiHoaPage = ({ navigation }) => {
  const renderLoaiHoa = ({ item }) => {
    const getImageSource = (maloai) => {
      switch (maloai) {
        case 'Hoa-Cuoi':
          return require('../assets/cuoi_sample.jpg');
        case 'Hoa-Hong':
          return require('../assets/hong_sample.jpg');
        case 'Hoa-Xuan':
          return require('../assets/xuan_sample.jpg');
        case 'Hoa-Cuc':
        default:
          return require('../assets/cuc_sample.jpg');
      }
    };

    return (
      <TouchableOpacity
        style={styles.categoryItem}
        onPress={() => navigation.navigate('Hoa', { maloai: item.maloai })}
      >
        <Text style={styles.categoryTitle}>{item.tenloai}</Text>
        <Image 
          source={getImageSource(item.maloai)} 
          style={styles.categoryImage}
          resizeMode="cover"
        />
      </TouchableOpacity>
    );
  };

  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.header}>loại hoa</Text>
      <FlatList
        data={productList}
        renderItem={renderLoaiHoa}
        keyExtractor={(item) => item.maloai}
        contentContainerStyle={styles.listContainer}
        showsVerticalScrollIndicator={true}
        nestedScrollEnabled={true}
        scrollEnabled={true}
        style={styles.flatList}
      />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#DCC5B2',
  },
  header: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#e74c3c',
    textAlign: 'center',
    marginVertical: 20,
  },
  flatList: {
    flex: 1,
  },
  listContainer: {
    paddingHorizontal: 20,
    paddingBottom: 20,
    flexGrow: 1,
  },
  categoryItem: {
    backgroundColor: 'cyan',
    marginBottom: 15,
    borderRadius: 10,
    padding: 15,
    elevation: 5,
  },
  categoryTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 10,
    color: '#333',
  },
  categoryImage: {
    width: '100%',
    height: 200,
    borderRadius: 8,
  },
});
export default LoaiHoaPage;
