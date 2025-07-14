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

// Import components và hooks
import BookList from './components/book_list';
import BookModal from './components/book_modal';
import { useBookManager } from './components/book_manage';

import axios from 'axios';
// import { get } from 'react-native/Libraries/TurboModule/TurboModuleRegistry';

const API_URL = 'https://6874f531dd06792b9c960afa.mockapi.io/books';


export default function App() {

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

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar barStyle="dark-content" backgroundColor="#f5f5f5" />
      
      <View style={styles.header}>
        <Text style={styles.headerTitle}>Sách</Text>
      </View>
    
      <BookList
        books={books}
        loading={loading}
        onDelete={deleteBook}
        onEdit={openEditModal}
      />
      {/* Nút thêm sách */}
      <View style={styles.bottomContainer}>
        <TouchableOpacity 
          style={styles.addButton}
          onPress={openAddModal}
        >
          <Ionicons name="add" size={24} color="dark" />
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

export const getBook = {
    
  // ---
  // fetch  
  // ---
  getAllBooks: async () => {
    try {
      const response = await axios.get(API_URL);
      return response.data;
    } catch (error) {
      console.error('Error fetching books:', error);
      throw new Error('Lấy danh sách sách thất bại');
    }
  },

  
  // ---
  // create 
  // ---
  addBook: async (bookData) => {
    try {
      const response = await axios.post(API_URL, bookData);
      return response.data;
    } catch (error) {
      console.error('Error adding book:', error);
      throw new Error('Thêm sách thất bại');
    }
  },

  // --- 
  // update
  // ---
  updateBook: async (id, bookData) => {
    try {
      const response = await axios.put(`${API_URL}/${id}`, bookData);
      return response.data;
    } catch (error) {
      console.error('Error updating book:', error);
      throw new Error('Cập nhật sách thất bại');
    }
  },

  // ---
  // delete 
  // ---
  deleteBook: async (id) => {
    try {
      const response = await axios.delete(`${API_URL}/${id}`);
      return response.data;
    } catch (error) {
      console.error('Error deleting book:', error);
      throw new Error('Xóa sách thất bại');
    }
  }
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff', 
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 16,
    paddingVertical: 12,
    backgroundColor: '#fff',
    borderBottomWidth: 2,
    borderColor: '#000', 
  },
  headerTitle: {
    fontSize: 22,
    fontWeight: 'bold',
    color: '#000',
    flex: 1,
    textAlign: 'center',
  },
  headerTime: {
    fontSize: 16,
    color: '#000',
  },
  bottomContainer: {
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
});