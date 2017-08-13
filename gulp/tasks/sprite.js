var gulp = require('gulp'),
 svgSprite = require('gulp-svg-sprite'),
 rename =  require('gulp-rename'),
 dele = require('del');

var config ={
  mode : {
    css: {
      sprite: 'sprite.svg',
      render:{
        css:{
          template :'./gulp/templates/sprite.css'
        }
      }
    }
  }
}
gulp.task('beginClean', function(){
  return dele(['./app/temp/sprite', './app/assets/images/sprites']);
});

 gulp.task('createSprite' , ['beginClean'], function(){
   return gulp.src('./app/assets/images/icons/**/*.svg') //** will look for any sub-folders in the folder.
   .pipe(svgSprite(config))
   .pipe(gulp.dest('./app/temp/sprite/'));
  });

  gulp.task('copySpriteGraphic' , ['createSprite'],  function(){
    return gulp.src('./app/temp/sprite/css/**/*.svg')
      .pipe(gulp.dest('./app/assets/images/sprites'));
  });

  gulp.task('copySpriteCSS', ['createSprite'] , function(){
    return gulp.src('./app/temp/sprite/css/*.css')
    .pipe(rename('_sprite.css'))
      .pipe(gulp.dest('./app/assets/styles/modules'));
  });

  gulp.task('endClean', ['copySpriteGraphic','copySpriteCSS'] , function(){
    return dele('./app/temp/sprite');
  });

  gulp.task('icons', ['beginClean', 'createSprite', 'copySpriteGraphic', 'copySpriteCSS', 'endClean']);
