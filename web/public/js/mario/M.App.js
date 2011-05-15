M = window.M || {};
M.App = function()
{
	var canvas = new M.LayeredCanvas({height:400, width : 400, parent : $(document.body)});

	var bgWidth = 400;
	var bgHeight = 400;
	var background = canvas.addLayer("background", bgWidth, bgHeight);

	var bgContext = background.getContext();
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

	var fgWidth = 400;
	var fgHeight = 400;
	var foreground = canvas.addLayer("foreground", fgWidth, fgHeight, 70);

	var mario = new M.Display.Object();
	mario.x = fgWidth/2;
	mario.y = fgHeight/2;

	foreground.addChild(mario);

	$(document).addEvent('keydown', function(e)
	{
		switch(e.code)
		{
			case M.KeyCodes.UP:
				mario.y -= 5;
				break;
			case M.KeyCodes.DOWN:
				mario.y += 5;
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
