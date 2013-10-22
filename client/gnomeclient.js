$.fn.newPost = function(post) {
	$.getJSON('/gnome/newblogpost', post, function(data) {
		return data;
	});
};
$.fn.getPostById = function(id) {
	$.getJSON('/gnome/fetchposts', {
		'id': id
	}, function(data) {
		return data;
	});
};
$.fn.getAllPosts = function() {
	$.getJSON('/gnome/fetchposts', function(data) {
		return data;
	});
};