import axios from "axios";

// Пряме включення ключа доступу
const ACCESS_KEY = "uBHHAHEPAGwf4fc5A3IjyZygHsbZ6wg2KAF9Ns3bOMs";
const API_URL = "https://api.unsplash.com/search/photos";

const unsplashService = {
  fetchImages: async (query, page = 1) => {
    try {
      const response = await axios.get(API_URL, {
        params: {
          query,
          page,
          per_page: 12, // Кількість зображень на сторінку
          client_id: ACCESS_KEY,
        },
      });
      return response.data;
    } catch (error) {
      throw new Error("Error fetching images: " + error.message);
    }
  },
};

export default unsplashService;
