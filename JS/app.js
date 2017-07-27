 $(document).ready(function()
{
	$('#slider').cycle({
		fx:'scrollLeft',
		speed: 1500
	});

	scrolling();
}
);	
// function(){
//   $('a[href*=#]').click(function() {
//     if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'')
//     && location.hostname == this.hostname) {
//       var $target = $(this.hash);
//       $target = $target.length && $target
//       || $('[name=' + this.hash.slice(1) +']');
//       if ($target.length) {
//         var targetOffset = $target.offset().top;
//         $('html,body')
//         .animate({scrollTop: targetOffset}, 1000);
//        return false;
//       }
//     }
//   });
// });
	
function scrolling()
{
	$("#navbar1 li a").click(function(e)
	{
		e.preventDefault();
		var sectionID = e.currentTarget.id + "1";
		$('html body').animate({
			scrollTop: $("#"+sectionID).offset().top
		},1000)
	})
}