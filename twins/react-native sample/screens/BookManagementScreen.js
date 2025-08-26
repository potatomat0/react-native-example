import React, { useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  StatusBar,
  SafeAreaView,
} from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native'; // Import useNavigation
// ...
import { useSelector } from 'react-redux';
//...
// Import components và hooks
import BookList from '../components/book_list';
import BookModal from '../components/book_modal';
import { useBookManager } from '../components/book_manage';

import axios from 'axios';
// import { get } from 'react-native/Libraries/TurboModule/TurboModuleRegistry';

const API_URL = 'https://6874f531dd06792b9c960afa.mockapi.io/books';


export default function BookManagementScreen() {
  const navigation = useNavigation(); 
  const user = useSelector((state) => state.user);

  const [modalVisible, setModalVisible] = useState(false);
  const [editingBook, setEditingBook] = useState(null);

  const { books, loading, deleteBook, saveBook } = useBookManager();

  // Mở modal để thêm sách mới
  const openAddModal = () => {
    setEditingBook(null);
    setModalVisible(true);
  };

  // Mở modal để chỉnh sửa sách
  const openEditModal = (book) => {
    setEditingBook(book);
    setModalVisible(true);
  };

  // Đóng modal
  const closeModal = () => {
    setModalVisible(false);
    setEditingBook(null);
  };

  // Lưu sách (thêm hoặc cập nhật)
  const handleSaveBook = async (bookData) => {
    const success = await saveBook(bookData, editingBook);
    if (success) {
      closeModal();
    }
  };

  // Xử lý đăng xuất
  const handleLogout = () => {
    console.log('User logged out');
    navigation.replace('Login'); 
  };

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar barStyle="dark-content" backgroundColor="#f5f5f5" />
      
      <View style={styles.header}>
        <Text style={styles.headerTitle}>Sách</Text>
        {user && <Text style={styles.loggedUser}>Bạn đã đăng nhập bằng tài khoản{user.email}</Text>}
      </View>
    
      <BookList
        books={books}
        loading={loading}
        onDelete={deleteBook}
        onEdit={openEditModal}
      />
      {/* Nút thêm sách và đăng xuất */}
      <View style={styles.bottomContainer}>
        <TouchableOpacity 
          style={styles.addButton}
          onPress={openAddModal}
        >
          <Ionicons name="add" size={24} color="dark" />
        </TouchableOpacity>
        <TouchableOpacity 
          style={styles.logoutButton} // New style for logout button
          onPress={handleLogout}
        >
          <Text style={styles.logoutButtonText}>Đăng xuất</Text>
        </TouchableOpacity>
      </View>

      {/* Modal thêm/sửa sách */}
      <BookModal
        visible={modalVisible}
        onClose={closeModal}
        onSave={handleSaveBook}
        editingBook={editingBook}
      />
    </SafeAreaView>
  );
}




const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff', 
  },
  header: {
    paddingVertical: 12,
    backgroundColor: '#fff',
    borderBottomWidth: 2,
    borderColor: '#000',
    alignItems: 'center',
  },
  headerTitle: {
    fontSize: 22,
    fontWeight: 'bold',
    color: '#000',
  },
  bottomContainer: {
    flexDirection: 'row', 
    justifyContent: 'space-around', 
    alignItems: 'center',
    paddingVertical: 20,
    backgroundColor: '#fff',
    borderTopWidth: 2,
    borderColor: '#000',
    color:'#000'
  },
  addButton: {
    width: 60,
    height: 60,
    backgroundColor: '#FFFF00', 
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 2,
    color: '#000',
    borderColor: '#000',
    shadowColor: '#000',
    shadowOffset: { width: 4, height: 4 },
    shadowOpacity: 1,
    shadowRadius: 0,
  },
  logoutButton: { // New style for logout button
    width: 80,
    height: 60,
    backgroundColor: '#FF6347', // A shade of red for logout
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 2,
    borderColor: '#000',
    shadowColor: '#000',
    shadowOffset: { width: 4, height: 4 },
    shadowOpacity: 1,
    shadowRadius: 0,
  },
  logoutButtonText: { // Style for logout button text
    color: '#000',
    fontWeight: 'bold',
    fontSize: 16,
    textAlign: 'center'
  },
	loggedUser: {
		fontSize: 11,
		color: 'grey'
	}
});
