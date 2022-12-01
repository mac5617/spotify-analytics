const createError = require("http-errors");
const express = require("express");
const path = require("path");
const cookieParser = require("cookie-parser");
const session = require("express-session");
const bodyParser = require("body-parser");
const logger = require("morgan");
const axios = require("axios");
const cors = require("cors");
const util_request = require("./utilities/requests/refresh_auth.js");
// mod
const mod_authorlistRouter = require("./routes/mod/artistList");
const mod_genreslistRouter = require("./routes/mod/c_genreslist");
const mod_tracklistRouter = require("./routes/mod/c_tracklist");
// Auth Routes
const loginRouter = require("./routes/auth/login");
const callbackRouter = require("./routes/auth/callback");
const refreshRouter = require("./routes/auth/refresh");
//const refreshFunction = require("./routes/auth/refresh");
// HomePage
const indexRouter = require("./routes/auxil/index");
const testRouter = require("./routes/test");
// Albums
//const album_removeRouter = require("./routes/base/albums/del_removeAlbums");
const album_tracksRouter = require("./routes/base/albums/get_albumTracks");
const album_checkRouter = require("./routes/base/albums/get_checkSavedAlbums");
const album_multiRouter = require("./routes/base/albums/get_multiAlbum");
const album_newRouter = require("./routes/base/albums/get_newReleases");
const album_meRouter = require("./routes/base/albums/get_savedAlbums");
const album_singleRouter = require("./routes/base/albums/get_singleAlbum");
const album_addRouter = require("./routes/base/albums/put_saveAlbums");
// Artists
const artists_singleRouter = require("./routes/base/artists/get_singleArtist");
const artists_multiRouter = require("./routes/base/artists/get_multiArtist");
const artists_albumsRouter = require("./routes/base/artists/get_artistAlbums");
const artists_tracksRouter = require("./routes/base/artists/get_artistTracks");
const artists_relatedRouter = require("./routes/base/artists/get_artistRelated");

//
const tracklistRouter = require("./routes/c_tracklist");
const genreslistRouter = require("./routes/c_genreslist");
const single_artistRouter = require("./routes/single_artist");
const multi_artistRouter = require("./routes/multi_artist");
const authoridlistRouter = require("./routes/get_authorlist");
const episodelistRouter = require("./routes/base_getEpisode");
const artist_albumlistRouters = require("./routes/base_albums");
const get_albumSingle = require("./routes/base/albums/get_singleAlbum");
// app
const app = express();
const session_store = new session.MemoryStore();
// view engine setup
app.set("views", path.join(__dirname, "views"));
app.set("view engine", "hbs");
app.use(
  cors({
    origin: "*",
  })
);
app.use(logger("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(express.static(path.join(__dirname, "public")));

// After a state is present

app.use(
  session({
    secret: "56fb9950bce34545805979545f31b76d",
    saveUninitialized: false,
    resave: false,
    store: session_store,
    cookie: {
      httpOnly: false,
      secure: false,
    },
  })
);
// Login Stuff
app.use("/api/login", loginRouter);
app.use("/api/callback", callbackRouter);
app.use(refreshRouter);


// Homepage
app.use("/api", indexRouter);
console.log('Reaching test')
app.use("/api/test", testRouter);





//mod
app.use("/api/mod/authorlist", mod_authorlistRouter);
app.use("/api/mod/genreslist", mod_genreslistRouter);
app.use("/api/mod/tracklist", mod_tracklistRouter);



// Albums
app.use("/api/album/single", album_singleRouter);
app.use("/api/album/multi", album_multiRouter);
//app.use("/album/remove", album_removeRouter); Not finished Yet
app.use("/api/album/add", album_addRouter);
app.use("/api/album/check", album_checkRouter);
app.use("/api/album/tracks", album_tracksRouter);
app.use("/api/album/new", album_newRouter);
app.use("/api/album/me", album_meRouter);
// Artists
app.use("/api/artists/single", artists_singleRouter);
app.use("/api/artists/multi", artists_multiRouter);
app.use("/api/artists/albums", artists_albumsRouter);
app.use("/api/artists/tracks", artists_tracksRouter);
app.use("/api/artists/related", artists_relatedRouter);

// Track list returns TOP 50: Song_Name, Artist, Popularity
app.use("/tracklist", tracklistRouter);
//
app.use("/genreslist", genreslistRouter);
app.use("/get_authorlist", authoridlistRouter);
app.use("/single_author", single_artistRouter);
app.use("/multi_author", multi_artistRouter);
app.use("/episode", episodelistRouter);
app.use("/artist_albums", artist_albumlistRouters);
app.use("/album/single", get_albumSingle);

// catch 404 and forward to error handler
app.use(function (req, res, next) {
  next(createError(404));
});
// error handler
app.use(function (err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get("env") === "development" ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render("error");
});

module.exports = app;
