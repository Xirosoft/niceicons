module.exports = function(grunt) {
  grunt.initConfig({

    webfont: {
      icons: {
        src: 'icons/src/**/*.svg',
        dest: 'public/icon/fonts',
        destCss: 'src/styles/',
        version: '0.001',
        options: {
          font: 'xiroicon',
          fontName: 'xiroicon',
          fontFilename: 'xiroicon',
          fontFamilyName: 'xiroicon',
          types: 'svg, ttf, woff, woff2',
          ligatures: true,
          stylesheet: 'scss',
          syntex: 'bootstrap',
          htmlDemo: true,
          normalize: true,
          hashes: false,
          optimize: false,
          codepointsFile: 'src/data/codepoints.json',
          templateOptions: {
            baseClass: 'xiroicon',
            classPrefix: 'xi-',
          }
        }
      }
    }

  });

  grunt.loadNpmTasks('grunt-webfont');

  grunt.registerTask('default', ['webfont']);

};
