import React, { useMemo } from 'react';
import {
  View,
  Text,
  FlatList,
  TouchableOpacity,
  StyleSheet,
  Image,
  SafeAreaView,
} from 'react-native';

import { productList } from '../components/hoa';

const HoaPage = ({ navigation, route }) => {
  const { maloai } = route.params;
  
  const filteredFlowers = useMemo(() => {
    return productList.filter(flower => flower.maloai === maloai);
  }, [maloai]);

  const getImageSource = (hinh) => {
    const imageMap = {
      'cuc_9.jpg': require('../assets/cuc_9.jpg'),
      'cuc_2.jpg': require('../assets/cuc_2.jpg'),
      'cuc_3.jpg': require('../assets/cuc_3.jpg'),
      'cuc_4.jpg': require('../assets/cuc_4.jpg'),
      'cuc_5.jpg': require('../assets/cuc_5.jpg'),
      'cuc_6.jpg': require('../assets/cuc_6.jpg'),
      'cuc_15.jpg': require('../assets/cuc_15.jpg'),
      'cuoi_1.jpg': require('../assets/cuoi_1.jpg'),
      'cuoi_2.jpg': require('../assets/cuoi_2.jpg'),
      'cuoi_3.jpg': require('../assets/cuoi_3.jpg'),
      'cuoi_4.jpg': require('../assets/cuoi_4.jpg'),
      'cuoi_5.jpg': require('../assets/cuoi_5.jpg'),
      'cuoi_6.jpg': require('../assets/cuoi_6.jpg'),
      'cuoi_9.jpg': require('../assets/cuoi_9.jpg'),
      'hong_1.jpg': require('../assets/hong_1.jpg'),
      'hong_2.jpg': require('../assets/hong_2.jpg'),
      'hong_3.jpg': require('../assets/hong_3.jpg'),
      'hong_4.jpg': require('../assets/hong_4.jpg'),
      'hong_5.jpg': require('../assets/hong_5.jpg'),
      'hong_7.jpg': require('../assets/hong_7.jpg'),
      'hong_13.jpg': require('../assets/hong_13.jpg'),
      'xuan_1.jpg': require('../assets/xuan_1.jpg'),
      'xuan_2.jpg': require('../assets/xuan_2.jpg'),
      'xuan_3.jpg': require('../assets/xuan_3.jpg'),
      'xuan_4.jpg': require('../assets/xuan_4.jpg'),
      'xuan_5.jpg': require('../assets/xuan_5.jpg'),
      'xuan_6.jpg': require('../assets/xuan_6.jpg'),
    };
    
    return imageMap[hinh] || require('../assets/default.jpg');
  };

  const formatPrice = (price) => {
    return parseInt(price).toLocaleString('vi-VN');
  };

  const renderFlower = ({ item }) => (
    <TouchableOpacity
      style={styles.flowerItem}
      onPress={() => navigation.navigate('CTHoa', { flower: item })}
    >
      <Text style={styles.flowerCode}>Mã hoa: {item.mahoa}</Text>
      <Text style={styles.flowerCategory}>Loại hoa: {getLoaiHoaName(item.maloai)}</Text>
      <Text style={styles.flowerName}>{item.tenhoa}</Text>
      <Image 
        source={getImageSource(item.hinh)} 
        style={styles.flowerImage}
        resizeMode="cover"
      />
      <Text style={styles.flowerPrice}>Giá bán: {formatPrice(item.giaban)}</Text>
    </TouchableOpacity>
  );

  const getLoaiHoaName = (maloai) => {
    const loaiHoaMap = {
      'Hoa-Cuc': 'Hoa Cúc',
      'Hoa-Cuoi': 'Hoa Cưới',
      'Hoa-Hong': 'Hoa Hồng',
      'Hoa-Xuan': 'Hoa Xuân'
    };
    return loaiHoaMap[maloai] || 'Hoa Tình Yêu';
  };

  return (
    <SafeAreaView style={styles.container}>
      <FlatList
        data={filteredFlowers}
        renderItem={renderFlower}
        keyExtractor={(item) => item.mahoa}
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
  flatList: {
    flex: 1,
  },
  listContainer: {
    paddingHorizontal: 20,
    paddingTop: 10,
    paddingBottom: 20,
    flexGrow: 1,
  },
  flowerItem: {
    backgroundColor: 'cyan',
    marginBottom: 20,
    borderRadius: 10,
    padding: 15,
    elevation: 5,
  },
  flowerCode: {
    fontSize: 14,
    color: '#e74c3c',
    fontWeight: 'bold',
    marginBottom: 5,
  },
  flowerCategory: {
    fontSize: 14,
    color: '#e74c3c',
    marginBottom: 10,
  },
  flowerName: {
    fontSize: 16,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 10,
    color: '#333',
  },
  flowerImage: {
    width: '100%',
    height: 200,
    borderRadius: 8,
    marginBottom: 10,
  },
  flowerPrice: {
    fontSize: 16,
    fontWeight: 'bold',
    textAlign: 'center',
    color: '#333',
  },
});
    
export default HoaPage;
