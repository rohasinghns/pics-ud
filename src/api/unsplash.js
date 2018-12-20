import axios from "axios";

export default axios.create({
  baseURL: "https://api.unsplash.com",
  headers: {
    Authorization:
      "Client-ID 811859b67ea17b1fb4b6aa50600c867005b1aa6340cf27adc124cecf6c711b95"
  }
});
