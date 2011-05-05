M = window.M || {};
M.MarioCanvas = function(bgWidth, bgHeight, fgWidth, fgHeight)
{
	var appDiv = new Element('div');
	var background= new Element('canvas', {
		width: bgWidth,
		height: bgHeight
	});
	var foreground= new Element('canvas', {
		width: fgWidth,
		height: fgHeight
	});
	var x = 0;
	var y = 0;

	var init = function()
	{
		appDiv.inject(document.body);
		appDiv.setStyle('position', 'relative');
		appDiv.setStyle('width', fgWidth);
		appDiv.setStyle('height', fgHeight);
		appDiv.setStyle('overflow', 'hidden');

		background.inject(appDiv);
		background.setStyle('position', 'absolute');

		foreground.inject(appDiv);
		foreground.setStyle('position', 'absolute');
		foreground.setStyle('top', 0);
		foreground.setStyle('left', 0);

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
		background.setStyle('left', -x);
	}

	var redrawBackground = function()
	{
		var bgContext = background.getContext('2d');

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
		var fgContext = foreground.getContext('2d');
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
