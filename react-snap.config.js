module.exports = {
  // Specify the directory where the build artifacts are located
  dist: "./build",

  // Add any additional configuration options here
  staticFileGlobs: [
    "build/**/*.html", // Include HTML files
    "build/**/*.js", // Include JS files
    "build/**/*.css", // Include CSS files (if applicable)
    "build/**/*.map", // Include CSS files (if applicable)
    // Add other file types if needed
  ],
};
