import axios from 'axios';

const axiosInstance = axios.create({
    headers: {
        'Cache-Control': 'no-cache',
    },
});
const GAME_API_BASE_URL = 'http://localhost:8081/api/games/';



class GameService {

   
  // For Games
    async getAllGames() {
        return await axiosInstance.get(GAME_API_BASE_URL);
    }


    async deleteGame(id) {
        const url = `${GAME_API_BASE_URL}delete/${id}`;
        return await axiosInstance.delete(url);
    }
    async createNewGame(nameGame, imageName, levelIds, roleIds, genderIds) {
        if (!nameGame) {
            throw new Error('Name of the game is required.');
        }
    
        if (!imageName) {
            throw new Error('Image is required.');
        }
    
        if (!levelIds.length || !roleIds.length || !genderIds.length) {
            throw new Error('At least one level, role, and gender is required.');
        }
    
        const formData = new FormData();
        formData.append('nameGame', nameGame);
        formData.append('imageName', imageName);
    
        for (const levelId of levelIds) {
          formData.append('levelIds', levelId);
        }
    
        for (const roleId of roleIds) {
          formData.append('roleIds', roleId);
        }
    
        for (const genderId of genderIds) {
          formData.append('genderIds', genderId);
        }
    
        try {
          const response = await axiosInstance.post(`${GAME_API_BASE_URL}add`, formData);
          return response.data;
        } catch (error) {
          console.error('Error creating a new game:', error);
          throw error;
        }
    }
    
      

    async editGame(id, nameGame, imageName, levelIds, roleIds, genderIds) {
        const formData = new FormData();
        formData.append('nameGame', nameGame);
        formData.append('imageName', imageName);
        formData.append('levelIds', levelIds);
        formData.append('roleIds', roleIds);
        formData.append('genderIds', genderIds);

        try {
            const response = await axiosInstance.put(`${GAME_API_BASE_URL}edit/${id}`, formData);
            return response.data;
        } catch (error) {
            console.error('Error editing game:', error);
            throw error;
        }
    }







}

export default new GameService();
