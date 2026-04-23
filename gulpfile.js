const { src, dest, watch, series } = require('gulp');

const css = () => {
    return src('styles/main.css')
        .pipe(dest('prod/styles'));
}

const js = () => {
    return src('scripts/main.js')
        .pipe(dest('prod/scripts'));
};

const html = () => {
    return src('index.html')
        .pipe(dest('prod'));
};

const watchFiles = () => {
    watch('styles/main.css', css);
    watch('scripts/main.js', js);
    watch('index.html', html);
};

exports.default = series(css, js, html, watchFiles);

exports.build = series(css, js, html);
