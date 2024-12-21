import {create} from 'zustand';
import axios from 'axios';

const useMusicStore = create((set) => ({
  musicData: [], 
  loading: false, 
  error: null, 
 

  fetchMusicData: async () => {
    set({ loading: true, error: null }); 
    const options = {
      method: 'GET',
      url: 'https://scraptik.p.rapidapi.com/discover-music',
      params: { count: '48', cursor: '0' },
      headers: {
        'x-rapidapi-key': '69d035c47amsh2b47ea7353df944p1c7857jsn27b1dfb7a123',
        'x-rapidapi-host': 'scraptik.p.rapidapi.com'
      }
    };

    try {
      const response = await axios.request(options);
      set({ musicData: response.data, loading: false }); 
      console.log(response)
    } catch (error) {
      set({ error: error.message, loading: false }); 
      console.log(error)
    }
  },
}));

export default useMusicStore;