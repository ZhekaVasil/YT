var gulp = require('gulp');
var handlebars = require('gulp-compile-handlebars');

gulp.task('wiki', function(){
  var data = [
    {
      name: 'ru',
      val: 'Russian'
    },
    {
      name: 'en',
      val: 'english'
    },
    {
      name: 'fr',
      val: 'franch'
    }
  ];
  gulp.src('YT.wiki/*.md')
    .pipe(handlebars(data, {}))
    .pipe(gulp.dest('dist/YT.wiki'));
});
