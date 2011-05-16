M = window.M || {};

M.Loader = new Class({
	LoadMap : function(layered_canvas, file_name) {
		background = layered_canvas.getLayer("background");
		var bgWidth = background.getWidth();
		var bgHeight = background.getHeight();

		background.clear();
		var brick1 = new M.Display.Brick();
		brick1.x = 10;
		brick1.y = 100;
		var brick2 = new M.Display.Brick();
		brick2.x = 50;
		brick2.y = 100;
		var brick3 = new M.Display.Brick();
		brick3.x = 90;
		brick3.y = 100;
		var brick4 = new M.Display.Brick();
		brick4.x = 130;
		brick4.y = 100;

		background.addChild(brick1);
		background.addChild(brick2);
		background.addChild(brick3);
		background.addChild(brick4);

		background.draw();

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