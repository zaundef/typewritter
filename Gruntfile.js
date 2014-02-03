module.exports = function(grunt) {
	require('load-grunt-tasks')(grunt);

	var gruntTasksPath = '../grunt_tasks';

	grunt.initConfig({
		pkg: grunt.file.readJSON('package.json'),
		autoprefixer: require(gruntTasksPath+'/autoprefixer'),
		clean: require(gruntTasksPath+'/clean'),
		cssmin: require(gruntTasksPath+'/cssmin'),
		connect: require(gruntTasksPath+'/connect'),
		copy: require(gruntTasksPath+'/copy'),
		jade: require(gruntTasksPath+'/jade'),
		stylus: require(gruntTasksPath+'/stylus'),
		uglify: require(gruntTasksPath+'/uglify'),
		watch: require(gruntTasksPath+'/watch')
	});

	grunt.registerTask('default', ['clean', 'copy:vendor', 'uglify', 'jade', 'stylus', 'autoprefixer', 'cssmin', 'connect', 'watch']);
};