import esbuild from 'esbuild';
esbuild.build({
    entryPoints: ['./src/index.js'],
    outfile: './dist/index.js',
    allowOverwrite: true,
    minify: false,
    bundle: true,
    watch: true,

}).then((response) => console.log(JSON.stringify(response)))
.catch((err) => console.log(err));