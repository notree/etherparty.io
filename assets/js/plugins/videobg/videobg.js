$(document).ready(function() {
    
    "use strict";
    
    //Custom Background Video
    var videobackground = new $.backgroundVideo($('#top'), {
    "align": "centerXY",
    "width": 1280,
    "height": 720,
    "path": "assets/images/video/",
    "filename": "Floating Blue Plexus Background",
    "types": ["webm, mp4"],
	"loop": true,
	});


    //Youtube Background Video
    $(function(){
      $(".player").mb_YTPlayer();
    });


});
