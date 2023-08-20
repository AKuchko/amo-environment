import path from 'path'

export default {
    build: {
        minify: true,
        manifest: true,
        reportCompressedSize: true,
        lib: {
            entry: path.resolve(__dirname, 'main.js'),
            name: 'main',
            formats: ['cjs', 'es'],
            fileName: 'main'
        }
    }
}