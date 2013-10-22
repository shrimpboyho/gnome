$('#postEditor').summernote({
  height: 290,   //set editable area's height
  focus: true    //set focus editable area after Initialize summernote
});

$('#postButton').click(function(){
  var title = $('#titleEditor').val();
  var body = $('#postEditor').code();
  var pass = $('#password').val();
  $.getJSON("/api/newblogpost",{'title':title,'body':body,'password':pass}, function(response) {
  	if(response.status === 'success')
  	  document.location.href="/blogfeed.html";
  	if(response.status === 'fail')
  	  $('#errorModal').modal('show');
  });
});