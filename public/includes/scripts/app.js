// connect to the socket server
var socket = io.connect(); 

// initialise angular application
var application = angular.module('application', ['ngRoute']);

application.config(function($routeProvider) {
	$routeProvider
		// home page
		.when('/', {
			templateUrl: 'includes/pages/home.html',
			controller: 'homeController'
		})
		// about page
		.when('/about', {
			templateUrl: 'includes/pages/about.html',
			controller: 'aboutController'
		})
		// contact page
		.when('/comment', {
			templateUrl: 'includes/pages/comment.html',
			controller: 'commentController'
		})
		// admin page
		.when('/admin', {
			templateUrl: 'includes/pages/admin.html',
			controller: 'adminController'
		});
});