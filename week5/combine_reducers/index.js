const store = require("./state/store")
const {addMovie, removeMovie, getMovie} = require("./state/movie")
const {addTvShow, removeTvShow, getTvShow} = require("./state/tvShows")

store.dispatch(getMovie())