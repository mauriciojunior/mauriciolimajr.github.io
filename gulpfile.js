var gulp = require('gulp'),
    jeet = require('jeet'),
    browserSync = require('browser-sync'),
    stylus = require('gulp-stylus'),
    koutoSwiss = require('kouto-swiss'),
    concat = require('gulp-concat'),
    uglify = require('gulp-uglify'),
    cp = require('child_process'),
    prefixer = require('autoprefixer-stylus'),
    rupture = require('rupture');


gulp.task('jekyll-build', function( done ) {
  return cp.spawn('jekyll', ['build'], {stdio: 'inherit'}).on('close', done);
});

gulp.task('browser-sync', ['jekyll-build'], function() {
  browserSync({
    server: {
      baseDir: '_site'
    }
  });
});

gulp.task( 'stylus', function(){
  gulp.src( 'files/styl/main.styl' )
  .pipe( stylus({
    use: [ koutoSwiss(), jeet(), prefixer(), rupture() ],
      compress: true
  }))
  .pipe( gulp.dest( '_site/assets/css' ) )
  .pipe( browserSync.reload( { stream: true } ) )
  .pipe( gulp.dest( 'assets/css' ) );
});

gulp.task( 'jekyll-rebuild', [ 'jekyll-build' ], function () {
  browserSync.reload();
});

gulp.task( 'watch', function() {
  gulp.watch( 'files/styl/**/*.styl', [ 'stylus' ] );
  gulp.watch( [ './**/*.html', './**/*.md' ],   [ 'jekyll-rebuild' ] );
});
gulp.task( 'default', [ 'browser-sync', 'stylus', 'watch' ] );