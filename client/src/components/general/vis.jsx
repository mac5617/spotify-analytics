import PostNav from "./post_nav.jsx";
import "../../style/vis.css";
export default function Root() {
  return (
    <div className="vis_root">
      <PostNav />
      <div className="inner_vis">
        <a href="/vis/playlistCount">
          <span>Playlist Visualizer</span>
          <p>
            See all the albums by a specific artist and graph them by the number
            of tracks
          </p>
        </a>
      </div>
      <div className="inner_vis">
        <a href="/vis/genreCount">
          <span>Top Tracks Visualizer</span>
          <p>
            Learn what your top tracks are and graph them by the number of
            genres in common
          </p>
        </a>
      </div>
    </div>
  );
}
