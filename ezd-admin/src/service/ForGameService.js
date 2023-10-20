import axios from 'axios';

const axiosInstance = axios.create({
    headers: {
        'Cache-Control': 'no-cache',
    },
});
const LEVEL_GAME_API_BASE_URL = 'http://localhost:8081/api/levels/';

const GENDER_GAME_API_BASE_URL = 'http://localhost:8081/api/genders/';

const ROLE_GAME_API_BASE_URL = 'http://localhost:8081/api/gameroles/';

class ForGameService {
     // for Level of Game
     async getAllLevelGames() {
        return await axiosInstance.get(LEVEL_GAME_API_BASE_URL);
    }

   
    async getAllGenderGames() {
        return await axiosInstance.get(GENDER_GAME_API_BASE_URL);
    }

    async getAllRoleGames() {
        return await axiosInstance.get(ROLE_GAME_API_BASE_URL);
    }
}

export default new ForGameService();