// Post template generator

function generatePost(title,body,id){
		
	return "\x3Cdiv class=\'post\'\x3E\x3Ch1 id=\'postTitle\'\x3E\x3Ca\x3E" + title + "\x3C\x2Fa\x3E\x3C\x2Fh1\x3E\x3Cp class=\'lead\'\x3Eby \x3Ca href=\'#\'\x3EDev\x3C\x2Fa\x3E\x3C\x2Fp\x3E\x3Chr\x3E\x3Cp\x3E\x3Ci class=\'icon-time\'\x3E\x3C\x2Fi\x3E Posted recently\x3C\x2Fp\x3E\x3Chr\x3E\x3Cp id=\'postBody\'\x3E" + body + "\x3C\x2Fp\x3E\x3Ca id=\'" + id + "\'class=\'read-more btn btn-primary\'\x3ERead More \x3Ci class=\'icon-angle-right\'\x3E\x3C\x2Fi\x3E\x3C\x2Fa\x3E\x3Chr\x3E\x3C\x2Fdiv\x3E";

}

// Load up all posts

$.getJSON("/api/fetchposts", function(response) {
  	console.log(response);
  	var i;
  	for(i = 0; i < response.length; i++){
  		var thing = generatePost(response[i].title.toString(), 
  			                     response[i].body.toString(), 
  			                     response[i]._id.toString());
  		$('#postSpace').prepend(thing);
  	}

  	// Handle redirect when user clicks the "readmore" button
  	$('.read-more').click(function(){
  		document.location.href="/api/fetchposts?id=" + $(this).attr('id');
  	});
});