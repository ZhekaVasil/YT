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
  gulp.src('src/wiki/templates/*.md')
    .pipe(handlebars(data, {}))
    .pipe(gulp.dest('YT.wiki'));
});
