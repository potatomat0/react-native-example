
import axios from 'axios';

const API_URL = 'https://6874f531dd06792b9c960afa.mockapi.io/books';

export const getBook = {
  getAllBooks: async () => {
    try {
      const response = await axios.get(API_URL);
      return response.data;
    } catch (error) {
      console.error('Error fetching books:', error);
      throw new Error('Lấy danh sách sách thất bại');
    }
  },

  addBook: async (bookData) => {
    try {
      const response = await axios.post(API_URL, bookData);
      return response.data;
    } catch (error) {
      console.error('Error adding book:', error);
      throw new Error('Thêm sách thất bại');
    }
  },

  updateBook: async (id, bookData) => {
    try {
      const response = await axios.put(`${API_URL}/${id}`, bookData);
      return response.data;
    } catch (error) {
      console.error('Error updating book:', error);
      throw new Error('Cập nhật sách thất bại');
    }
  },

  deleteBook: async (id) => {
    try {
      const response = await axios.delete(`${API_URL}/${id}`);
      return response.data;
    } catch (error) {
      console.error('Error deleting book:', error);
      throw new Error('Xóa sách thất bại');
    }
  }
};
