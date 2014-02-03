module.exports = function(grunt) {
	require('load-grunt-tasks')(grunt);

	grunt.initConfig({
		pkg: grunt.file.readJSON('package.json'),
		autoprefixer: {
			build: {
				expand: true,
				cwd: 'demo',
				src: ['**/*.css'],
				dest: 'demo'
			}
		},
		clean: {
			all: {
				src: ['build']
			}
		},
		connect: {
			server: {
				options: {
					port: 4000,
					base: 'demo',
					hostname: '*',
					livereload: 4001
				}
			}
		},
		copy: {
			build: {
				expand: true,
				cwd: 'build',
				src: '**/*.js',
				dest: 'demo'
			},
			demo: {
				expand: true,
				cwd: 'src/demo',
				src: ['**/*.js'],
				dest: 'demo'
			},
			vendor: {
				expand: true,
				cwd: 'vendor',
				src: ['**/*.js'],
				dest: 'demo'
			}
		},
		stylus: {
			compile: {
				files: [{
					expand: true,
					compress: false,
					cwd: 'src',
					src: '**/*.styl',
					dest: './demo',
					ext: '.css'
				}]
			}
		},
		uglify: {
			options: {
				banner: '/*! <%= pkg.name %> <%= pkg.version %> <%= grunt.template.today("yyyy-mm-dd") %> */\n'
			},
			build: {
				expand: true,
				cwd: 'src/js',
				src: '**/*.js',
				dest: 'build/js',
				ext: '.min.js'
			}
		},
		watch: {
			build: {
				files: 'src/js/**/*.js',
				tasks: ['uglify', 'copy']
			},
			jade: {
				files: 'src/demo/**/*.jade',
				tasks: ['jade']
			},
			js: {
				files: 'src/demo/**/*.js',
				tasks: 'copy'
			},
			styl: {
				files: 'src/css/**/*.styl',
				tasks: ['stylus', 'autoprefixer']
			},
			livereload: {
				options: {
					livereload: 4001
				},
				files: ['demo/**/*']
			}
		}
	});



	/*grunt.loadNpmTasks('grunt-autoprefixer');
	grunt.loadNpmTasks('grunt-contrib-clean');
	grunt.loadNpmTasks('grunt-contrib-connect');
	grunt.loadNpmTasks('grunt-contrib-copy');
	grunt.loadNpmTasks('grunt-contrib-jade');
	grunt.loadNpmTasks('grunt-contrib-stylus');
	grunt.loadNpmTasks('grunt-contrib-uglify');
	grunt.loadNpmTasks('grunt-contrib-watch');*/

	//grunt.registerTask('default', ['clean', 'uglify', 'copy', 'jade', 'stylus']);
	grunt.registerTask('default', ['clean', 'copy', 'connect', 'watch']);
};