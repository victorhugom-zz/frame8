module.exports = function(grunt) {

    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),
        apidoc: {
            myapp: {
                src: "lib/models/",
                dest: "tests/apidocs",
                options: {
                    //debug: true,
                    marked: {
                        gfm: true
                    }
                }
            }
        }
    });

    grunt.loadNpmTasks('grunt-apidoc');
    grunt.registerTask('default', ['apidoc']);
};
