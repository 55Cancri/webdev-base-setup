window.addEventListener('load', () => {

  console.log(`
  1. BrowserSync is activate.

  2. Your pug files have been converted into html and your sass files have been converted into css and both were added to the dist folder.

  3. Your javascript file has been converted to es2015, minified, and sourcemaps have been built.

  4. The generated css and js files in the dist folder have been properly linked to the primary html file.
  `)

  alert(`
  1. BrowserSync is active.

  2. Your pug files have been converted into html and your sass files have been converted into css and added to the dist folder.

  3. Your javascript file has been converted to es2015, minified, and sourcemaps have been built.

  4. The generated css and js files in the dist folder have been properly linked to the primary html file so that updates occur in real-time.
  `)
})