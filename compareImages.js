
    /*
var diff = resemble("images/Image-1.png").compareTo("images/Image-2.png").onComplete(function(data){
    console.log(data);

    {
      misMatchPercentage : 100, // %
      isSameDimensions: true, // or false
      dimensionDifference: { width: 0, height: -1 }, // defined if dimensions are not the same
      getImageDataUrl: function(){}
    }
    
});
*/


resemble.outputSettings({
  errorColor: {
    red: 255,
    green: 0,
    blue: 255
  },
  errorType: 'movement',
  transparency: 0.3,
  largeImageThreshold: 1200
});




	function onComplete(data){
		
		var time = Date.now();
		var diffImage = new Image();
		diffImage.src = data.getImageDataUrl();

		$('#image-diff').html(diffImage);

		$(diffImage).click(function(){
			window.open(diffImage.src, '_blank');
		});

			$('#diff-results').show();

		
		}
	


var resembleControl = resemble("images/Image-1.png").compareTo("images/Image-2.png").onComplete(onComplete);
//resembleControl.repaint();
