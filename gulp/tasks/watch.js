var gulp = require("gulp"),
 gulpWatch = require("gulp-watch"),
 browserSync = require("browser-sync").create();

gulp.task('Watch', function(){

  browserSync.init({
    notify : false,
    server :{
      baseDir :"./app"
    }
  })
    Watch('./app/index.html',function(){
      browserSync.reload();
    }),

    Watch('./app/assets/styles/**/*.css',function(){
      gulp.start('cssInject');
    })
});

gulp.task ('cssInject',['styles'], function(){
  gulp.src('app/assets/styles/styles.css')
  .pipe(browserSync.stream());
});
