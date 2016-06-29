module.exports = function(grunt) {

  // Project configuration.
  grunt.initConfig({
    
	pkg: grunt.file.readJSON('package.json'),
	
	responsive_images: {
     dev: {
        options: {
            sizes: [{
            name: "small",
            width: 100,
            quality: 100
          },{
            name: "medium",
            width: 320,
            quality: 100
          },{
            name: "large",
            width: 720,
            quality: 100
          }]
        },

     files: [{
          expand: true,
          src: ['*.{gif,jpg,png}'],
          cwd: 'views/images',
          dest: 'views/images'
        }]
      }
    },


    uglify: {
      
      my_target: {
		  files:  {
       				'js/perfmatters.min.js':  'js/perfmatters.js', 
					
		  }
      },
	    my_target: {
		  files:  {
       				'views/js/main.min.js':  'views/js/main.js', 
					
		  }
      }
    }
  });

  // Load the plugin that provides the "uglify" task.
  	grunt.loadNpmTasks('grunt-contrib-uglify');
	grunt.loadNpmTasks('grunt-responsive-images');
 	grunt.registerTask('default', ['responsive_images', 'uglify']);

};