var gulp = require('gulp');
var handlebars = require('gulp-compile-handlebars');
var ext_replace = require('gulp-ext-replace');

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
    },
    {
      name: 'nz',
      val: 'new lang'
    }
  ];
  gulp.src('src/wiki/templates/*.hbs')
    .pipe(handlebars(data, {}))
    .pipe(ext_replace('.md'))
    .pipe(gulp.dest('YT.wiki'));
});
