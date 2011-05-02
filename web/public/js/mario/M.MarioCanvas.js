M = window.M || {};
M.MarioCanvas = function(bgWidth, bgHeight, fgWidth, fgHeight)
{
	var appDiv = $('<div/>');
	var background= $('<canvas width="' + bgWidth + '" height="' + bgHeight + '"/>');
	var foreground= $('<canvas width="' + fgWidth + '" height="' + fgHeight + '"/>');
	var x = 0;
	var y = 0;

	var init = function()
	{
		appDiv.appendTo('body');
		appDiv.css('position', 'relative');
		appDiv.css('width', fgWidth);
		appDiv.css('height', fgHeight);
		appDiv.css('overflow', 'hidden');

		background.appendTo(appDiv);
		background.css('position', 'absolute');

		foreground.appendTo(appDiv);
		foreground.css('position', 'absolute');
		foreground.css('top', 0);
		foreground.css('left', 0);

		redrawBackground();
		setBgPosition();
		redrawForeground();
	}

	this.move = function(deltaX, deltaY)
	{
		x += deltaX;
		y += deltaY;
		setBgPosition();
		redrawForeground();
	}

	var setBgPosition = function()
	{
		background.css('left', -x);
	}

	var redrawBackground = function()
	{
		var bgContext = background[0].getContext('2d');

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
	}

	var redrawForeground = function()
	{
		var fgContext = foreground[0].getContext('2d');
		var rectWidth = 20;
		var rectHeight = 20;

		fgContext.clearRect(0, 0, fgWidth, fgHeight);
		fgContext.beginPath();
		var x1 = (fgWidth - rectWidth)/2;
		var y1 = fgHeight - y - rectHeight/2;
		fgContext.strokeRect(x1, y1, rectWidth, rectHeight);
		fgContext.closePath();
	}

	init();
}