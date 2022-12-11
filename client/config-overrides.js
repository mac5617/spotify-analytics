module.exports = function override (config, env) {
  console.log('override')
  let loaders = config.resolve
  loaders.fallback = {
      "fs": false,
      "util": false,
      "assert": false ,
      
      buffer: require.resolve("buffer/"),
      path: require.resolve("path-browserify"),
      zlib: require.resolve("browserify-zlib"),
      stream: require.resolve("stream-browserify"),
      querystring: require.resolve("querystring-es3"),
  }
  
  return config
}