const browserSync = require('browser-sync');

browserSync.init({
    server: './',
    file: ['*.html']
});