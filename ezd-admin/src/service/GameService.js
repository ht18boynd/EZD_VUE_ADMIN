import axios from 'axios';

const GAME_API_BASE_URL = 'http://localhost:8081/api/games/';

class GameService {
    async getAllGames() {
        return await axios.get(GAME_API_BASE_URL);
    }

    async deleteGame(id) {
        const url = `${GAME_API_BASE_URL}delete/${id}`;
        return await axios.delete(url);
    }

    async deleteMultipleGames(gameIds) {
        const url = `${GAME_API_BASE_URL}delete-multiple`;
        return await axios.delete(url, { data: gameIds });
    }
    async addNewGame(file, nameGame) {
        const formData = new FormData();
        formData.append('file', file);
        formData.append('nameGame', nameGame);
        return await axios.post(GAME_API_BASE_URL + 'uploadFile', formData);
    }

    async editGame(id, file, nameGame) {
        const formData = new FormData();
        formData.append('file', file);
        formData.append('nameGame', nameGame);
        
        
          const response = await axios.post(`${GAME_API_BASE_URL}edit/${id}`, formData);
          return response.data;

      }
      


}

export default new GameService();
