const gulp = require('gulp')
const concat = require('gulp-concat')
const uglify = require('gulp-uglify')
const babel = require('gulp-babel') //transpila o codigo para todos os browsers mais antigos

gulp.task('default', () => {
    return gulp.src('src/**/*.js')
        .pipe(babel({
            //minified: true, //ja minifica pelo própio babel
            comments: false,
            presets: ["env"] //pega o ultimo presset e define quais a gente precisa
        }))
        .pipe(uglify())//retira os espaços(minifica o codigo)
        .on('error', function (err) { console.log(err)}) //printa o erro no console
        .pipe(concat('codigo.min.js'))
        .pipe(gulp.dest('build'))
})