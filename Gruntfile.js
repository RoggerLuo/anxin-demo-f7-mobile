module.exports = function(grunt) {
    grunt.initConfig({
        criticalcss: {
            custom: {
                options: {
                    url: "http://localhost:8080",
                    width: 500,
                    height: 900,
                    outputfile: "staging_file/critical.css",
                    filename: "./dist/style.css", // Using path.resolve( path.join( ... ) ) is a good idea here
                    buffer: 800 * 1024,
                    ignoreConsole: false
                }
            }
        },


        cssmin: {
            target: {
                files: [{
                    expand: true,
                    cwd: './staging_file/',
                    src: ['*.css', '!*.min.css'],
                    dest: './staging_file/',
                    ext: '.min.css'
                    }

                ]
            }
        }

    });
    grunt.loadNpmTasks('grunt-criticalcss');
    // grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.loadNpmTasks('grunt-contrib-cssmin');

    grunt.registerTask('default', ['criticalcss']);

    grunt.registerTask('mincss', ['cssmin']);

};
