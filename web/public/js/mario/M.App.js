M = window.M || {};
M.App = function()
{
	var canvas = new M.LayeredCanvas({height:400, width : 400, parent : $(document.body)});
	var background = canvas.addLayer("background", 400, 400);
	var foreground = canvas.addLayer("foreground", 400, 400, 70);
        loader = new M.Loader();
        mario = loader.LoadMap(canvas, "test.mm");

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
