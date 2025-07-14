import { useState, useEffect } from 'react';
import { Alert } from 'react-native';
import { getBook } from '../api';

export const useBookManager = () => {
  const [books, setBooks] = useState([]);
  const [loading, setLoading] = useState(true);

  const fetchBooks = async () => {
    try {
      setLoading(true);
        const booksData = await getBook.getAllBooks();
      setBooks(booksData);
    } catch (error) {
      Alert.alert('Lỗi', error.message);
    } finally {
      setLoading(false);
    }
  };

  const addBook = async (bookData) => {
    try {
      const newBook = await getBook.addBook(bookData);
      setBooks(prevBooks => [...prevBooks, newBook]);
      Alert.alert('Thành công', 'Thêm sách thành công');
      return true;
    } catch (error) {
      Alert.alert('Lỗi', error.message);
      return false;
    }
  };

  // Cập nhật sách
  const updateBook = async (id, bookData) => {
    try {
      const updatedBook = await getBook.updateBook(id, bookData);
      setBooks(prevBooks => 
        prevBooks.map(book => 
          book.id === id ? updatedBook : book
        )
      );
      Alert.alert('Thành công', 'Cập nhật sách thành công');
      return true;
    } catch (error) {
      Alert.alert('Lỗi', error.message);
      return false;
    }
  };

  // Xóa sách
    const deleteBook = (id) => {
    Alert.alert(
      'Xác nhận xóa', // Title
      'Bạn có muốn xóa sách không?', // Message
      [
        {
          text: 'Hủy',
          style: 'cancel',
        },
        {
          text: 'Xóa',
          onPress: async () => {
            try {
              await getBook.deleteBook(id);
              setBooks(prevBooks => prevBooks.filter(book => book.id !== id));
              Alert.alert('Thành công', 'Đã xóa sách thành công');
            } catch (error) {
              const errorMessage = `Đã xảy ra lỗi khi xóa sách: ${error.message}`;
              Alert.alert('Lỗi', errorMessage);
            }
          },
          style: 'destructive',
        },
      ],
      { cancelable: false }
    );
  };

  

  const saveBook = async (bookData, editingBook = null) => {
    if (editingBook) {
      return await updateBook(editingBook.id, bookData);
    } else {
      return await addBook(bookData);
    }
  };

  useEffect(() => {
    fetchBooks();
  }, []);

  return {
    books,
    loading,
    fetchBooks,
    addBook,
    updateBook,
    deleteBook,
    saveBook
  };
};