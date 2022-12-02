
/*
  Receives up to 50 artists objects and returns an object with genres and the number of times they appeared.
*/
const count_genres = (response_data) => {
    const genres_count = {};
    const { artists } = response_data; // Array of artists
    artists.forEach((cur_artist) => {
      const { genres } = cur_artist; // Array of genres
      genres.forEach((cur_genre) => {
        if (cur_genre in genres_count) {
          genres_count[cur_genre] += 1;
        }else{
          genres_count[cur_genre] = 1;
        }
      });
    });
    return genres_count;
  };

  module.exports = {count_genres}