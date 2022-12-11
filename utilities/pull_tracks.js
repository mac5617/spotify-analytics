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
const pull_artist_id = (response_data) => {
  const artist_list = [];
  response_data.forEach((cur_artist) => {
    const { id } = cur_artist;
    artist_list.push(id);
  });
  return artist_list;
};
/*
  Receives full top 50 tracks object and returns TOP 50: Song_Name, Artist, Popularity 
*/
const create_tracklist = (response_data, authorInfo) => {
  authorLookup = {};
  authorInfo.forEach((element) => {
    authorLookup[element.name] = element.genres;
  });
  const track_list = response_data["items"].map((cur_track) => {
    let { name, popularity, artists, album, external_urls } = cur_track;
    let tempTrack = [];
    pull_artist(artists).forEach((element) => {
      if(authorLookup[element]){
        authorLookup[element].forEach((cGen) => {
          if (!tempTrack.includes(cGen)) {
            tempTrack.push(cGen);
          }
        });
      }
    });
    return {
      song_name: name,
      popularity: popularity,
      artists: pull_artist(artists),
      artist_id: pull_artist_id(artists),
      image: album.images[0].url,
      link: external_urls.spotify,
      genre: tempTrack,
    };
  });
  return track_list;
};
module.exports = { create_tracklist };
