import axios from 'axios';

const axiosInstance = axios.create({
    headers: {
      'Cache-Control': 'no-cache',
    },
  });
const GAME_API_BASE_URL = 'http://localhost:8081/api/games/';

class GameService {
    
    async getAllGames() {
        return await axiosInstance.get(GAME_API_BASE_URL);
    }

    async deleteGame(id) {
        const url = `${GAME_API_BASE_URL}delete/${id}`;
        return await axiosInstance.delete(url);
    }

 
    async addNewGame(file, nameGame) {
        const formData = new FormData();
        formData.append('imageName', file);
        formData.append('nameGame', nameGame);
        return await axiosInstance.post(GAME_API_BASE_URL + 'add', formData);
    }
   
    async editGame(id, file, nameGame) {
        const formData = new FormData();
        formData.append('imageName', file);
        formData.append('nameGame', nameGame);
        
        const url = `${GAME_API_BASE_URL}edit/${id}`;
        
        return await axiosInstance.put(url, formData);
    }
    
   


}

export default new GameService();
