import axios from 'axios';

export default axios.create({
  baseURL: 'https://api.unsplash.com',
  headers: {
    Authorization:
      'Client-ID 4d4e32e76235fd42f5854c349dc65fcd94fb308d6272802e3198757ab41acbe4'
  }
});
