const gulp = require('gulp')
const sass = require('gulp-sass')
const uglifycss  = require('gulp-uglifycss')
const concat = require('gulp-concat')

gulp.task('default', ['copiarHtml'], () => {
    gulp.src('src/sass/index.scss') //coloca só o arquivo principal o restante esta importado no codigo do arquivo
        .pipe(sass().on('error', sass.logError))//printa o erro no console
        .pipe(uglifycss({"uglyComments": true}))//comprimir o css o maximo possivel
        .pipe(concat('estilo.min.css'))//concatena os arquivos
        .pipe(gulp.dest('build/css'))//joga o resultado nesse destiono
})

gulp.task('copiarHtml', () => {
    gulp.src('src/index.html')
        .pipe(gulp.dest('build'))
})