import React, { useState, useEffect } from 'react';
import {
  View,
  Text,
  Modal,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  SafeAreaView,
  StatusBar,
  Alert
} from 'react-native';
import { Ionicons } from '@expo/vector-icons';

const BookModal = ({ visible, onClose, onSave, editingBook }) => {
  const [formData, setFormData] = useState({
    name: '',
    author: '',
    price: '',
    image: '',
    description: ''
  });

  useEffect(() => {
    if (editingBook) {
      setFormData({
        name: editingBook.name || '',
        author: editingBook.author || '',
        price: editingBook.price?.toString() || '',
        image: editingBook.image || '',
        description: editingBook.description || ''
      });
    } else {
      setFormData({
        name: '',
        author: '',
        price: '',
        image: '',
        description: ''
      });
    }
  }, [editingBook, visible]);

  const handleSave = () => {
    if (!formData.name || !formData.author || !formData.price) {
      Alert.alert('Lỗi', 'Vui lòng điền đầy đủ các trường bắt buộc');
      return;
    }

    const bookData = {
      name: formData.name,
      author: formData.author,
      price: parseFloat(formData.price),
      image: formData.image,
      description: formData.description
    };

    onSave(bookData);
  };

  const handleClose = () => {
    setFormData({
      name: '',
      author: '',
      price: '',
      image: '',
      description: ''
    });
    onClose();
  };

  return (
    <Modal
      animationType="slide"
      transparent={false}
      visible={visible}
      onRequestClose={handleClose}
    >
      <SafeAreaView style={styles.modalContainer}>
        <StatusBar barStyle="dark-content" backgroundColor="#fff" />
        
        <View style={styles.modalHeader}>
          <TouchableOpacity 
            style={styles.closeButton}
            onPress={handleClose}
          >
            <Ionicons name="close" size={24} color='#000' />
          </TouchableOpacity>
          <Text style={styles.modalTitle}>
            {editingBook ? 'Sửa sách' : 'Thêm sách mới'}
          </Text>
          <View style={styles.headerSpacer} />
        </View>

        <View style={styles.modalContent}>
          <View style={styles.inputContainer}>
            <TextInput
              style={styles.input}
              placeholder="Tên sách *"
              value={formData.name}
              onChangeText={(text) => setFormData({...formData, name: text})}
            />
          </View>

          <View style={styles.inputContainer}>
            <TextInput
              style={styles.input}
              placeholder="Tác giả *"
              value={formData.author}
              onChangeText={(text) => setFormData({...formData, author: text})}
            />
          </View>

          <View style={styles.inputContainer}>
            <TextInput
              style={styles.input}
              placeholder="Giá *"
              value={formData.price}
              onChangeText={(text) => setFormData({...formData, price: text})}
              keyboardType="numeric"
            />
          </View>

          <View style={styles.inputContainer}>
            <TextInput
              style={styles.input}
              placeholder="URL hình ảnh"
              value={formData.image}
              onChangeText={(text) => setFormData({...formData, image: text})}
            />
          </View>

          <View style={styles.inputContainer}>
            <TextInput
              style={[styles.input, styles.textArea]}
              placeholder="Mô tả"
              value={formData.description}
              onChangeText={(text) => setFormData({...formData, description: text})}
              multiline
              numberOfLines={4}
            />
          </View>

          <TouchableOpacity 
            style={styles.saveButton}
            onPress={handleSave}
          >
            <Text style={styles.saveButtonText}>
              {editingBook ? 'Cập nhật sách' : 'Thêm sách'}
            </Text>
          </TouchableOpacity>
        </View>
      </SafeAreaView>
    </Modal>
  );
};

const styles = StyleSheet.create({
  modalContainer: {
    flex: 1,
    backgroundColor: '#fff',
  },
  modalHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 16,
    paddingVertical: 12,
    borderBottomWidth: 2,
    borderColor: '#000',
  },
  closeButton: {
    padding: 8,
    borderWidth: 2,
    borderColor: '#000',
    backgroundColor: '#FF6B6B', 
  },
  modalTitle: {
    flex: 1,
    fontSize: 20,
    fontWeight: 'bold',
    textAlign: 'center',
    color: '#000',
  },
  headerSpacer: {
    width: 40,
  },
  modalContent: {
    flex: 1,
    padding: 20,
    backgroundColor: '#fff',
  },
  inputContainer: {
    marginBottom: 16,
  },
  input: {
    backgroundColor: '#fff',
    borderWidth: 2,
    borderColor: '#000',
    padding: 16,
    fontSize: 16,
    color: '#000',
    fontWeight: 'bold',
  },
  textArea: {
    height: 100,
    textAlignVertical: 'top',
  },
  saveButton: {
    backgroundColor: '#FFFF00', 
    borderWidth: 2,
    borderColor: '#000',
    paddingVertical: 16,
    marginTop: 20,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: { width: 4, height: 4 },
    shadowOpacity: 1,
    shadowRadius: 0,
  },
  saveButtonText: {
    color: '#000',
    fontSize: 18,
    fontWeight: 'bold',
  },
});

export default BookModal;