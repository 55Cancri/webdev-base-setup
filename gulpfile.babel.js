// 1. npm i to install depen..
// 2. navigate to folder
// 3. npm > gulp watch to start application

import gulp from 'gulp'
import sass from 'gulp-sass'
import pug from 'gulp-pug'
import useref from 'gulp-useref'
import uncss from 'gulp-uncss'
import babel from 'gulp-babel'
import uglify from 'gulp-uglify'
import imagemin from 'gulp-imagemin'
import sourcemaps from 'gulp-sourcemaps'
import autoprefixer from 'gulp-autoprefixer'
import sync from 'browser-sync'
const browserSync = sync.create()


function swallowError (e) {
  console.log(e.toString())
  this.emit('end')
}

gulp.task('css', function() {
  gulp.task('html', () => {
    return gulp.src('src/pug/*.pug')
        .pipe(pug())
        // .pipe(useref())
        .on('error', swallowError)
        .pipe(gulp.dest('dist/html'))
        .pipe(browserSync.stream())
  })

  return gulp.src('src/sass/*.sass')
          .pipe(sourcemaps.init())
          .pipe(sass({outputStyle: 'compressed'}).on('error', sass.logError))
          .pipe(autoprefixer({
            browsers: ['last 2 versions']
          }))
          .pipe(sourcemaps.write('./maps'))
          // .pipe(useref())
          .on('error', swallowError)
          .pipe(gulp.dest('dist/css'))
          .pipe(browserSync.stream())
})

gulp.task('js', function() {
  return gulp.src('src/js/*.js')
      .pipe(sourcemaps.init())
      .pipe(babel({presets: ["env"]}))
      .pipe(uglify())
      .pipe(sourcemaps.write('.'))
      .on('error', swallowError)
      .pipe(gulp.dest('dist/js'))
      .pipe(browserSync.stream())
})

gulp.task('images', function() {
  return gulp.src('src/images/*')
      .pipe(imagemin())
      .on('error', swallowError)
      .pipe(gulp.dest('dist/images'))
})

gulp.task('browserSync', function() {
  browserSync.init({
    server: {
      baseDir: ['dist/html', 'dist']
    }
  })
})

gulp.task('watch', ['browserSync', 'css'], function() {
  gulp.watch('src/pug/*.pug', ['html'])
  gulp.watch('src/sass/**/*.sass', ['css'])
  gulp.watch('src/js/*.js', ['js'])
})

