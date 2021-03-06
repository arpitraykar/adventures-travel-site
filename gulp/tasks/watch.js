var gulp = require("gulp"),
 Watch = require("gulp-watch"),
 browserSync = require("browser-sync").create();

gulp.task('Watch', function(){

  browserSync.init({
    notify : false,
    server :{
      baseDir :"./app"
    }
  });
    Watch('./app/index.html',function(){
      browserSync.reload();
    });

    Watch('./app/assets/styles/**/*.css',function(){
      gulp.start('cssInject');
    });

    Watch('./app/assets/scripts/**/*.js', function(){
      gulp.start('scriptsRefresh');
    })
});

gulp.task ('cssInject',['styles'], function(){
  gulp.src('app/assets/styles/styles.css')
  .pipe(browserSync.stream());
});

gulp.task('scriptsRefresh',['scripts'], function(){
    browserSync.reload();
});
