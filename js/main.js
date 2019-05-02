var arr = ['show-face','show-left','show-right','show-bottom'];
var oldclass;

$('.ball__glass').click(() => {
	
	var index = Math.round(Math.random()*3);
	
	if($('.positionZ').hasClass('show')){

		$('.positionZ').removeClass('show').delay(1000).queue(() =>{

			$('.positionZ').addClass('show').dequeue();			
			console.log("addClass " + arr[index] +","+"remoeClss "+ oldclass);
			$('.triangle').addClass(arr[index]).removeClass(oldclass).dequeue();
			oldclass = arr[index];
		});

	}
	else {

		$('.positionZ').addClass('show');
		$('.triangle').addClass(arr[index]);
		oldclass = arr[index];
		
	}
	

});