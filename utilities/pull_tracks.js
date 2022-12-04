/*
  Receives an array of artists objects and returns the artist names in an array
*/
const pull_artist = (response_data) => {
  const artist_list = [];
  response_data.forEach((cur_artist) => {
    const { name } = cur_artist;
    artist_list.push(name);
  });
  return artist_list;
};
/*
  Receives full top 50 tracks object and returns TOP 50: Song_Name, Artist, Popularity 
*/
const create_tracklist = (response_data) => {
  const track_list = [];
  response_data["items"].forEach((cur_track) => {
    let { name, popularity, artists } = cur_track;
    track_list.push({
      song_name: name,
      popularity: popularity,
      artists: pull_artist(artists),
    });
  });
  return track_list;
};

module.exports = { create_tracklist };