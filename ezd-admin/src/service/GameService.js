import axios from 'axios';

const axiosInstance = axios.create({
    headers: {
        'Cache-Control': 'no-cache',
    },
});
const GAME_API_BASE_URL = 'http://localhost:8082/api/games/';



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
      // Thực hiện kiểm tra cơ bản cho các thông tin cần thiết (tùy theo logic của ứng dụng)
      if (!nameGame) {
        throw new Error('Name of the game is required.');
      }
    
      if (levelIds.length === 0 || roleIds.length === 0 || genderIds.length === 0) {
        throw new Error('At least one level, role, and gender is required.');
      }
    
      // Tạo một đối tượng FormData
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
        // Sử dụng axios để gửi yêu cầu PUT
        const response = await axios.put(`${GAME_API_BASE_URL}edit/${id}`, formData, {
          headers: {
            'Content-Type': 'multipart/form-data',
          },
        });
    
        return response.data;
      } catch (error) {
        console.error('Error editing the game:', error);
        throw error;
      }
    }

    async getGameById(id) {
      try {
        const response = await axiosInstance.get(`${GAME_API_BASE_URL}${id}`);
        return response.data;
      } catch (error) {
        console.error('Error getting game by ID:', error);
        throw error;
      }
    }
    
    







}

export default new GameService();
