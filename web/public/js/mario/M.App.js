M = window.M || {};
M.App = function()
{
	canvas = new M.LayeredCanvas({height:400, width : 400, parent : $(document.body)});

        bgWidth = 400;
        bgHeight = 400;
        background = canvas.addLayer("background", bgWidth, bgHeight);

        bgContext = background.getContext('2d');
        bgContext.clearRect(0, 0, bgWidth, bgHeight);
        bgContext.beginPath();
        bgContext.moveTo(0,0);
        bgContext.lineTo(bgWidth, bgHeight);
        bgContext.moveTo(0, bgHeight / 2);
        bgContext.lineTo(bgWidth, bgHeight * 3/2);
        bgContext.moveTo(bgWidth/2, 0);
        bgContext.lineTo(bgWidth * 3 /2, bgHeight);
        bgContext.moveTo(bgWidth, 0);
        bgContext.lineTo(0, bgHeight);
        bgContext.stroke();
        bgContext.closePath();

        fgWidth = 400;
        fgHeight = 400;
        foreground = canvas.addLayer("frground", fgWidth, fgHeight);
        
        var fgContext = foreground.getContext('2d');
        var rectWidth = 20;
        var rectHeight = 20;

        fgContext.clearRect(0, 0, fgWidth, fgHeight);
        fgContext.beginPath();
        var x1 = (fgWidth - rectWidth)/2;
        var y1 = (fgHeight - rectHeight)/2;
        fgContext.strokeRect(x1, y1, rectWidth, rectHeight);
        fgContext.closePath();


	$(document).addEvent('keydown', function(e)
	{
		switch(e.code)
		{
			case M.KeyCodes.UP:
				canvas.move("background", 0, 5);
				break;
			case M.KeyCodes.DOWN:
				canvas.move("background", 0, -5);
				break;
			case M.KeyCodes.LEFT:
				canvas.move("background", -5, 0);
				break;
			case M.KeyCodes.RIGHT:
				canvas.move("background", 5, 0);
				break;
		}

	});
}
