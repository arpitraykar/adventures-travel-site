var gulp = require("gulp"),
 gulpWatch = require("gulp-watch"),
 browserSync = require("browser-sync").create();

gulp.task('gulpWatch', function(){

  browserSync.init({
    notify : false,
    server :{
      baseDir :"./app"
    }
  })
    Watch('./app/index.html',function(){
      browserSync.reload();
    }),

    gulpWatch('./app/assets/styles/**/*.css',function(){
      gulp.start('cssInject');
    })
});

gulp.task ('cssInject',['styles'], function(){
  gulp.src('app/assets/styles/styles.css')
  .pipe(browserSync.stream());
});
