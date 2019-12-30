import axios from "axios";

export default axios.create({
  baseURL: "https://api.unsplash.com",
  headers: {
    Authorization:
      "Client-ID 2141ae89b6e45ac6439145bb52734443b051a4af322965c788ed5492553fa05e"
  }
});