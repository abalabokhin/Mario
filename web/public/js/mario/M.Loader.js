M = window.M || {};

M.Loader = new Class({
    LoadMap : function(layered_canvas, file_name)
    {
        background = layered_canvas.getLayer("background");
        var bgWidth = background.getWidth();
	var bgHeight = background.getHeight();
        
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

        foreground = layered_canvas.getLayer("foreground");
        var fgWidth = foreground.getWidth();
	var fgHeight = foreground.getHeight();

        var mario = new M.Display.Mario();
	mario.x = fgWidth/2;
	mario.y = fgHeight/2;
	foreground.addChild(mario);

        return mario;
    }
});