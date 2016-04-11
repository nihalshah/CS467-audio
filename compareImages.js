
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
  transparency: 1.0,
  largeImageThreshold: 1200
});


	var diffImage =  new Image();
	var diffImage2 = new Image();
	var diffImage3 = new Image();

		function onComplete3(){
		var resembleControl = resemble(diffImage.src).compareTo(diffImage2.src).ignoreAntialiasing().onComplete(onComplete4);
		}

	    var onComplete = function(data){
		diffImage.src = data.getImageDataUrl();
		$('#image-diff').html(diffImage);			
		}

	    var onComplete2 = function(data){
		diffImage2.src = data.getImageDataUrl();
		$('#image-diff2').html(diffImage2);
		onComplete3()
		}

		var onComplete4 = function(data){
		diffImage3.src = data.getImageDataUrl();
		$('#image-diff3').html(diffImage3);
					
		}


		/*
		var time = Date.now();

		diffImage3.src = data.getImageDataUrl();

		$('#image-diff3').html(diffImage3);
*/
				
		
	


var resembleControl = resemble("images/Image-1.png").compareTo("images/Image-2.png").ignoreAntialiasing().onComplete(onComplete);
var resembleControl2 = resemble("images/Image-3.png").compareTo("images/Image-4.png").ignoreAntialiasing().onComplete(onComplete2);

//resembleControl.repaint();
