import axios from "axios";

// The getRecipes method retrieves recipes from the server
// It accepts a "query" or term to search the recipe api for
export default {
  getRecipes: function(query) {
    return axios.get("/api/google", { params: { q: "title:" + query} });
  },
  saveBook: function(bookData) {
   
    return axios.post("/api/books", bookData);
  },
  getBooks: function() {
    return axios.get("/api/books");
  }
};
