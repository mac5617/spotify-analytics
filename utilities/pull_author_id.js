const pull_artist = (response_data) => {
  /*
      Receives an array of artists objects and returns id's for each artist in on array
    */
  const artist_list = [];
  response_data.forEach((cur_artist) => {
    const { id } = cur_artist;
    artist_list.push(id);
  });
  return artist_list; // returns an array
};
const pull_artistIDArray = (response_data) => {
  /*
      Receives full top 50 tracks object and returns a nested array of artist id strings
      Max string array is 50s
    */
  output_array = [];
  temp_array = [];
  let count = 0;
  response_data["items"].forEach((cur_track) => {
    let { artists } = cur_track; // array of artist objects
    count += artists.length; // get full count of artist currently in temp array
    if (count >= 50) {
      count = 0;
      output_array.push(temp_array);
      temp_array = [];
      temp_array = temp_array.concat(pull_artist(artists));
    } else {
      temp_array = temp_array.concat(pull_artist(artists));
    }
  });
  if (temp_array.length > 0) {
    output_array.push(temp_array);
  }
  return output_array;
};

module.exports = { pull_artistIDArray };
