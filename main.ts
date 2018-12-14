/**
 * Browserify configuration
 */

let browserify = require('browserify');

browserify()
    .add('components/Main.tsx')
    .plugin('tsify', { noImplicitAny: true })
    .bundle()
    .on('error', function(error) { console.error(error.toString()); })
    .pipe(process.stdout);
