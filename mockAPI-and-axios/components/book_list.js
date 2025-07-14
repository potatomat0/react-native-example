import React from 'react';
import {
  View,
  Text,
  FlatList,
  StyleSheet,
  TouchableOpacity,
  Image,
  SafeAreaView,
  ActivityIndicator
} from 'react-native';
import { Ionicons } from '@expo/vector-icons';

const BookList = ({ books, loading, onDelete, onEdit }) => {
  const renderBookItem = ({ item }) => (
    <View style={styles.bookItem}>
      <Image 
        source={{ uri: item.image || 'https://via.placeholder.com/60x80' }}
        style={styles.bookImage}
        resizeMode="cover"
      />

      {/* book info  */}
      <View style={styles.bookInfo}>
        <Text style={styles.bookTitle}>{item.name}</Text>
        <Text style={styles.bookAuthor}>{item.author}</Text>
        <Text style={styles.bookPrice}>${item.price}</Text>
        <Text style={styles.bookDescription} numberOfLines={3}>
          {item.description}
        </Text>
      </View>

      {/* action buttons */}
      <View style={styles.bookActions}>
        <TouchableOpacity 
          style={styles.deleteButton}
          onPress={() => onDelete(item.id)}
          activeOpacity={0.7}
        >
          <Ionicons name="trash-outline" size={20} color="#000" />
        </TouchableOpacity>
        <TouchableOpacity 
          style={styles.editButton}
          onPress={() => onEdit(item)}
          activeOpacity={0.7}
        >
          <Ionicons name="create-outline" size={20} color="black" />
        </TouchableOpacity>
      </View>
    </View>
  );

  if (loading) {
    return (
      <SafeAreaView style={styles.container}>
        <View style={styles.loadingContainer}>
          <ActivityIndicator size="large" color="#2196F3" />
          <Text style={styles.loadingText}>Đang tải sách...</Text>
        </View>
      </SafeAreaView>
    );
  }

  return (
    <FlatList
      data={books}
      renderItem={renderBookItem}
      keyExtractor={(item) => item.id.toString()}
      contentContainerStyle={styles.listContainer}
      showsVerticalScrollIndicator={false}
    />
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  listContainer: {
    padding: 16,
  },
  bookItem: {
    flexDirection: 'row',
    backgroundColor: '#fff',
    borderWidth: 2,
    borderColor: '#000',
    padding: 16,
    marginBottom: 16,
    shadowColor: '#000',
    shadowOffset: { width: 4, height: 4 },
    shadowOpacity: 1,
    shadowRadius: 0,
  },
  bookImage: {
    width: 60,
    height: 80,
    borderWidth: 2,
    borderColor: '#000',
    marginRight: 16,
  },
  bookInfo: {
    flex: 1,
  },
  bookTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#000',
    marginBottom: 4,
  },
  bookAuthor: {
    fontSize: 16,
    color: '#000',
    marginBottom: 4,
  },
  bookPrice: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#000',
    marginBottom: 8,
  },
  bookDescription: {
    fontSize: 14,
    color: '#000',
    lineHeight: 20,
  },
  bookActions: {
    flexDirection: 'column',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginLeft: 8,
  },
  deleteButton: {
    padding: 8,
    borderWidth: 2,
    borderColor: '#000',
    backgroundColor: '#FF6B6B', 
    minWidth: 40,
    minHeight: 40,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 8,
  },
  editButton: {
    padding: 8,
    borderWidth: 2,
    borderColor: '#000',
    backgroundColor: '#4D96FF', 
    minWidth: 40,
    minHeight: 40,
    justifyContent: 'center',
    alignItems: 'center',
  },
  loadingContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
  },
  loadingText: {
    marginTop: 10,
    fontSize: 18,
    fontWeight: 'bold',
    color: '#000',
  },
});

export default BookList;