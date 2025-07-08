import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  Image,
  SafeAreaView,
  ScrollView,
  TouchableOpacity,
} from 'react-native';

const ChiTiet = ({ navigation, route }) => {
  const { flower } = route.params;

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

  const getLoaiHoaName = (maloai) => {
    const loaiHoaMap = {
      'Hoa-Cuc': 'Hoa Cúc',
      'Hoa-Cuoi': 'Hoa Cưới', 
      'Hoa-Hong': 'Hoa Hồng',
      'Hoa-Xuan': 'Hoa Xuân'
    };
    return loaiHoaMap[maloai] || 'Hoa Quà tặng';
  };

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView contentContainerStyle={styles.scrollContainer}>
        <View style={styles.detailContainer}>
          <Image 
            source={getImageSource(flower.hinh)} 
            style={styles.flowerImage}
            resizeMode="cover"
          />
          
          <View style={styles.infoContainer}>
            <Text style={styles.infoText}>
              Tên loại hoa: "{getLoaiHoaName(flower.maloai)}"
            </Text>
            <Text style={styles.infoText}>
              Mã hoa: {flower.mahoa}
            </Text>
            <Text style={styles.infoText}>
              Tên hoa: "{flower.tenhoa}"
            </Text>
            <Text style={styles.infoText}>
              Đơn giá: {formatPrice(flower.giaban)}
            </Text>
            <Text style={styles.infoText}>
              Mô tả: "{flower.mota.trim()}"
            </Text>
          </View>

          <View style={styles.buttonContainer}>
            <TouchableOpacity 
              style={styles.button}
              onPress={() => navigation.navigate('LoaiHoa')}
            >
              <Text style={styles.buttonText}>Về trang các loại hoa</Text>
            </TouchableOpacity>
            
            <TouchableOpacity 
              style={styles.button}
              onPress={() => navigation.goBack()}
            >
              <Text style={styles.buttonText}>Trở lại</Text>
            </TouchableOpacity>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#DCC5B2',
  },
  scrollContainer: {
    flexGrow: 1,
    padding: 20,
  },
  detailContainer: {
    backgroundColor: 'cyan',
    borderRadius: 10,
    padding: 20,
    elevation: 5,
  },
  flowerImage: {
    width: '100%',
    height: 250,
    borderRadius: 8,
    marginBottom: 20,
  },
  infoContainer: {
    marginBottom: 20,
  },
  infoText: {
    fontSize: 14,
    color: '#333',
    marginBottom: 8,
    lineHeight: 20,
  },
  buttonContainer: {
    alignItems: 'center',
  },
  button: {
    backgroundColor: 'pink',
    paddingVertical: 12,
    paddingHorizontal: 30,
    borderRadius: 20,
    marginBottom: 10,
    minWidth: 200,
  },
  buttonText: {
    color: 'white',
    fontSize: 16,
    textAlign: 'center',
    fontWeight: '500',
  },
});

export default ChiTiet;