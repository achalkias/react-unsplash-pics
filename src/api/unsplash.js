import axios from 'axios';

export default axios.create({
    baseURL: 'https://api.unsplash.com',
    headers: {
      Authorization:
      'Client-ID 963f42265d48da54460677edb0fde8f20469e087c914d1bb521d0c566ad8cb2e'
    }
});
